import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import SessionWrapper from "../app/utils/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const metadata = {
  title: "The Student Welfare Club, NFSU",
  description: "Of Students, by Students, for Students. Always.",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9662225887810159"
            crossorigin="anonymous"
          ></script>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
            integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Kristi&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="icon"
            href="https://upload.wikimedia.org/wikipedia/en/9/96/National_Forensic_Sciences_University_Logo.png"
            sizes="any"
          ></link>
        </head>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    </SessionWrapper>
  );
}
