import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quill Audits - Case Studies",
  description: "Quill Audits - Case Studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
