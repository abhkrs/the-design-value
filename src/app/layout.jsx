/* eslint-disable @next/next/no-sync-scripts */
import Header from "@/components/sections/Header";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Footer from "@/components/sections/Footer";
import { RegistrationProvider } from "@/context/RegistrationContext";
import { PaymentProvider } from "@/context/PaymentContext";
import { LoginProvider } from "@/context/LoginContext";
import { CashFreeProvider } from "@/context/CashFreePaymentContext";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata = {
  title: "The Design Value",
  description: "India’s first UI/UX design school with Paid internships",
};

export default function RootLayout({ children }) {
  return (
    <PaymentProvider>
      <CashFreeProvider>
        <RegistrationProvider>
          <LoginProvider>
            <html lang="en">
              <body className={`${inter.className} ${dmsans.variable}`}>
                <Header />
                <div className="min-h-[85vh]">{children}</div>
                <Footer />
              </body>
            </html>
          </LoginProvider>
        </RegistrationProvider>
      </CashFreeProvider>
    </PaymentProvider>
  );
}
