import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nextjs Tutorials",
  description: "Learning nextjs...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className={"p-10 bg-blue-200"}> Header </header>
        {children}
        <footer className={"p-10 bg-blue-200"}> my footer</footer>
      </body>
    </html>
  );
}
