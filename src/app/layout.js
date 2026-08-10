import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import "../app/globals.css"


const geist = localFont({
  src: "../assets/fonts/Geist/Geist-VariableFont_wght.ttf",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Business Anatomy | Digital Marketing, Branding & Web Development Agency",
    template: "%s | Business Anatomy",
  },
  description:
    "Business Anatomy builds and elevates digital brands through strategy, design, and innovation — digital marketing, web development, branding, and business growth consulting.",
  metadataBase: new URL("https://businessanatomy.co.uk"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <link rel="icon" href="/fav.png" />
      </head>
      <body className={geist.className} suppressHydrationWarning>
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
