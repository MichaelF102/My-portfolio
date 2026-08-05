import type { Metadata } from "next";
import "./globals.css";
import CustomCursorWrapper from '@/components/CustomCursorWrapper';

export const metadata: Metadata = {
  title: "Michael Fernandes ",
  description: "Data Analyst & Quantitative Developer pursuing M.Sc. in Big Data Analytics at St. Xavier's College, Mumbai. Expertise in Data Engineering, Financial Analytics, and Machine Learning.",
  keywords: ["portfolio", "Michael Fernandes", "Data Analyst", "Quantitative Developer", "Big Data Analytics", "Data Engineering", "Machine Learning", "St Xavier's College Mumbai"],
  openGraph: {
    title: "Michael Fernandes",
    description: "Quantitative Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise-overlay">
        <CustomCursorWrapper />
        {children}
      </body>
    </html>
  );
}
