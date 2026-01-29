import "./globals.css"
export const metadata = { title: "Birthday Wish" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}