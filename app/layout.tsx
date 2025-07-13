import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clarity ",
  description:
    "Personal Finance service to help you budget, track expenses, and manage savings with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="Personal Finance service to help you budget, track expenses, and manage savings with ease."
      />
      <meta
        name="keywords"
        content="personal finance, budgeting, expense tracker, savings app, financial planning, money management, finance app,"
      />
      <meta
        name="description"
        content="All-in-one personal finance app to track expenses, set budgets, and grow savings."
      />
      <meta property="og:title" content="Personal Finance App" />
      <meta
        property="og:description"
        content="Track your spending, manage budgets, and achieve financial goals with ease."
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
