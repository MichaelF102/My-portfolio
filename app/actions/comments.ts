'use server';

import { getDb } from '@/lib/db';
import { validateCommentInput, sanitizeHtml } from '@/lib/filter';

export type Comment = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export async function getComments(): Promise<Comment[]> {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT id, name, message, created_at
      FROM comments
      ORDER BY created_at ASC
    `;
    return rows as Comment[];
  } catch (error) {
    console.error('Failed to fetch comments:', error);
    return [];
  }
}

export async function addComment(
  name: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  // Validate input & check for profanity, XSS tags, length, and spam
  const validation = validateCommentInput(name, message);
  if (!validation.isValid) {
    return { success: false, error: validation.error };
  }

  const cleanName = sanitizeHtml(name.trim());
  const cleanMessage = sanitizeHtml(message.trim());

  try {
    const sql = getDb();
    await sql`
      INSERT INTO comments (name, message)
      VALUES (${cleanName}, ${cleanMessage})
    `;
    return { success: true };
  } catch (error) {
    console.error('Failed to add comment:', error);
    return { success: false, error: 'Failed to post comment. Try again!' };
  }
}
