import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SKILLSPIRE",
  description: "هو فريق شبابي تطوعي يهدف إلى تمكين الشباب من خلال التعليم، التوعية، وتنمية المهارات عبر مبادرات مبتكرة وبرامج متخصصة SKILSPIRE",
  creator: "Mohamed Fathy Makhlouf",
  publisher: "SHWACODE",
  authors: [
    {
    name: "SHWACODE",
    url: "https://www.linkedin.com/in/mohamed-makhlouf-52391b28b?utm_source=share&utm_campaign=share_via&utm_content=profile",
    },
    {
      name: "SKILSPIRE TEAMWORK",
      url: "https://chat.whatsapp.com/Ej0wOoxaths2jP2QPYAUzk",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
