import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import {ThemeProvider} from "@/components/theme-provider";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucasleao.tech/"),
  title: { default: "Lucas Leão", template: "" },
  description: "desenvolvedor de software",
  openGraph: {
    title: "Lucas Leão",
    description: "desenvolvedor de software",
    url: "https://www.lucasleao.tech/",
    siteName: "Lucas Leão",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Lucas Leão",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
