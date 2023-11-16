"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff3131",
      },
    },
  });

  return (
    <html lang="pt-br" className={inter.className}>
      <body>
        <main>
          <SessionProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
