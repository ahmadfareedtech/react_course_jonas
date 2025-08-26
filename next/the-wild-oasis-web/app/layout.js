import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import {Josefin_Sans, josefin_Sans} from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    default: "The Wild Oasis",
    template: "%s - The Wild Oasis",
  },
  description: "Explore the wild oasis and find your perfect getaway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The Wild Oasis</title>
      </head>
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
