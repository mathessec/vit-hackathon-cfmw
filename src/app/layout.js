import "./globals.css";

export const metadata = {
  title: "College Festival Management app",
  description: "Designed for 12 Hour VIT Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
