import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="relative w-full flex item-centre justify centre">
        <Navbar/>
        </div>
        {children}
        </body>
    </html>
  );
}
