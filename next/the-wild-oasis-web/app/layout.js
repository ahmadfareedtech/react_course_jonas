import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
  description: "Your adventure starts here at The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The Wild Oasis</title>
      </head>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
