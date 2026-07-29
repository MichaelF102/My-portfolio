// Content Sanitization & Profanity Filter for Guestbook

// Common bad words, slurs, crude terms, fake impersonations, and troll patterns
const BAD_WORDS_PATTERNS: RegExp[] = [
  // Profanity & Slurs
  /\bf[*@!u]c?k\b/i,
  /\bf[*@!u]c?k(?:ing|er|ed|s)?\b/i,
  /\bsh[!*i]t\b/i,
  /\bb[!*i]tch\b/i,
  /\ba[*@s]shole\b/i,
  /\bc[*u]nt\b/i,
  /\bd[!*i]ck\b/i,
  /\bp[*e]n[!*i]s\b/i,
  /\bp[*u]ssy\b/i,
  /\bb[*a]st[*a]rd\b/i,
  /\bn[!*i]gg?er\b/i,
  /\bn[!*i]gg?a\b/i,
  /\bf[*a]gg?ot\b/i,
  /\bf[*a]g\b/i,
  /\bret[*a]rd\b/i,
  /\bwh[*o]re\b/i,
  /\bsl[*u]t\b/i,
  /\bd[!*i]l d[*o]\b/i,
  /\bm[*o]th[*e]rf[*u]ck\b/i,

  // Crude humor & troll phrases
  /\bfart(?:ing|ed|s)?\b/i,
  /\bpoop(?:ing|ed|s)?\b/i,
  /\bcrap\b/i,
  /\bjobless\b/i,
  /\b(sneeze|fart).*screenshot\b/i,
  /\byou\s+are\s+hired\b/i,

  // Impersonation attempts
  /\belon\s*musk\b/i,
  /\bsam\s*altman\b/i,
  /\bmark\s*zuckerberg\b/i,
];

// Exact word list for word-boundary matching
const BAD_WORDS_LIST = new Set([
  'fuck', 'fucking', 'fucker', 'fucked', 'fucks',
  'shit', 'shitting', 'shitty',
  'bitch', 'bitches', 'bitching',
  'asshole', 'assholes', 'ass',
  'cunt', 'cunts',
  'dick', 'dicks',
  'penis', 'pussy',
  'bastard',
  'nigger', 'nigga', 'niggers', 'niggas',
  'faggot', 'fag', 'fags',
  'retard', 'retarded',
  'whore', 'slut', 'sluts',
  'motherfucker', 'motherfucking',
  'cock', 'cocksucker',
  'jerkoff', 'jackoff',
  'nazi', 'hitler',
  'fart', 'farts', 'farting',
  'poop', 'crap',
  'jobless',
]);

/**
 * Replace leetspeak substitutions to prevent filter bypasses.
 */
function normalizeLeetspeak(str: string): string {
  return str
    .toLowerCase()
    .replace(/@/g, 'a')
    .replace(/\$/g, 's')
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/!/g, 'i')
    .replace(/5/g, 's')
    .replace(/7/g, 't')
    .replace(/\(\)/g, 'o')
    .replace(/\[\]/g, 'o');
}

/**
 * Remove special characters and spaces between individual letters to catch spaced-out words (e.g., "n i g g a").
 */
function collapseSpacedLetters(str: string): string {
  return str.replace(/(?<=\b\w)\s+(?=\w\b)/g, '');
}

/**
 * Escapes HTML characters to prevent XSS payloads.
 */
export function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Detects whether the given input contains HTML tags, script payloads, profanity, or inappropriate content.
 */
export function validateCommentInput(name: string, message: string): { isValid: boolean; error?: string } {
  const trimmedName = name.trim();
  const trimmedMessage = message.trim();

  // 1. Length checks
  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long.' };
  }
  if (trimmedName.length > 40) {
    return { isValid: false, error: 'Name must be 40 characters or fewer.' };
  }
  if (trimmedMessage.length < 2) {
    return { isValid: false, error: 'Note must be at least 2 characters long.' };
  }
  if (trimmedMessage.length > 300) {
    return { isValid: false, error: 'Note must be 300 characters or fewer.' };
  }

  // 2. Reject HTML / Script injection attempts explicitly
  const htmlScriptRegex = /<[^>]*>|javascript:|onerror\s*=|onload\s*=/i;
  if (htmlScriptRegex.test(trimmedName) || htmlScriptRegex.test(trimmedMessage)) {
    return { isValid: false, error: 'HTML tags and script payloads are not allowed.' };
  }

  // 3. Reject repetitive meaningless punctuation (e.g. "......", "!!!!!!")
  if (/^[\s.!?_\-+=]{4,}$/.test(trimmedMessage)) {
    return { isValid: false, error: 'Please enter a meaningful message.' };
  }

  // 4. Profanity, crude humor & troll check
  const combinedText = `${trimmedName} ${trimmedMessage}`;
  const normalizedText = normalizeLeetspeak(combinedText);
  const collapsedText = collapseSpacedLetters(normalizedText);

  // Check regex patterns
  for (const pattern of BAD_WORDS_PATTERNS) {
    if (pattern.test(combinedText) || pattern.test(normalizedText) || pattern.test(collapsedText)) {
      return { isValid: false, error: 'Please keep your note respectful and friendly! Inappropriate content is not allowed.' };
    }
  }

  // Check individual words against dictionary
  const words = normalizedText.split(/[\s,._\-!?]+/);
  for (const word of words) {
    const cleanWord = word.replace(/[^a-z0-9]/g, '');
    if (BAD_WORDS_LIST.has(cleanWord)) {
      return { isValid: false, error: 'Please keep your note respectful and friendly! Inappropriate content is not allowed.' };
    }
  }

  return { isValid: true };
}
