import "../styles/globals.css";
import type { Metadata } from "next";
import "../../public/fonts/fonts.css";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

export const metadata: Metadata = {
  title: "Wow Creations",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* themes: dark, winter */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
