import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body data-gr-c-s-loaded className="mx-auto">
        {children}
      </body>
    </html>
  );
}
