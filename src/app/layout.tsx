import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadataBase = new URL("https://salunkeom.netlify.app");

export const metadata: Metadata = {
  title: {
    default: "Om Salunke — Fullstack Developer",
    template: "%s | Om Salunke",
  },
  description:
    "Om Salunke — Fullstack developer, blockchain enthusiast, and UI/UX designer. View projects, skills, and contact information.",
  keywords: [
    "Om Salunke",
    "Fullstack Developer",
    "Blockchain",
    "UI/UX",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Om Salunke" }],
  alternates: {
    canonical: "https://salunkeom.netlify.app",
  },
  openGraph: {
    title: "Om Salunke — Fullstack Developer",
    description:
      "Portfolio of Om Salunke — projects, skills, and contact info.",
    url: "https://salunkeom.netlify.app",
    siteName: "Om Salunke",
    images: ["/images/omsalunke.jpeg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Salunke — Fullstack Developer",
    description:
      "Portfolio of Om Salunke — projects, skills, and contact info.",
    images: ["/images/omsalunke.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Om Salunke",
  url: "https://example.com",
  sameAs: [
    "https://github.com/om0852",
    "https://www.linkedin.com/in/om-salunke-81bb63292/",
  ],
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack developer, blockchain enthusiast, and UI/UX designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
