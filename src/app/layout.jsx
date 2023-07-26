// import "./globals.css";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "NextJs - Boiler Plate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
