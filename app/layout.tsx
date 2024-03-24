import type { Metadata } from "next";
import "./globals.css";
import Header from "./_views/layouts/header";
import Footer from "./_views/layouts/footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Bitcoin ✓ Ethereum ✓ Dogecoin gibi 1700'den fazla kripto para birimi ve sabit coin ile lider kripto para borsası ✓ Gate.io ile şimdi kripto alım satımına başlayın!",
  description: "Bitcoin ✓ Ethereum ✓ Dogecoin gibi 1700'den fazla kripto para birimi ve sabit coin ile lider kripto para borsası ✓ Gate.io ile şimdi kripto alım satımına başlayın!",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Toaster />

        {children}
        <Footer />
      </body>
    </html>
  );
}
