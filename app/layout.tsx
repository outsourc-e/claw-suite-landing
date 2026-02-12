import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClawSuite — Open Source AI Workspace",
  description:
    "Free, open-source AI workspace built on OpenClaw. Chat with any model, orchestrate agents, run terminal commands — all from one self-hosted interface.",
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
