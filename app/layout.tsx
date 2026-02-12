import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClawSuite — The All-in-One Command Center for OpenClaw Agents",
  description:
    "Free, open-source AI workspace. Chat with any model, orchestrate agents, run terminal commands, and manage your gateway — all from one self-hosted interface.",
  alternates: {
    canonical: "https://clawsuite.io",
  },
  openGraph: {
    title: "ClawSuite — Open Source AI Workspace",
    description:
      "Free, self-hosted AI workspace. Multi-model chat, agent orchestration, terminal integration. Built on OpenClaw.",
    url: "https://clawsuite.io",
    siteName: "ClawSuite",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@clawsuite",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
