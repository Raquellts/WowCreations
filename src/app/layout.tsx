import "../styles/globals.css";
import type { Metadata } from "next";
import "../../public/fonts/fonts.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      {/* themes: dark, winter */}
      <body>{children}</body>
    </html>
  );
}
