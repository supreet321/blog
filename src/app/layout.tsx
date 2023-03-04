import "./globals.css";
import Script from "next/script";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const metadata = {
  title: "Supreet Singh ",
  description: "Software Engineer | Toronto, Canada",
  openGraph: {
    type: "website",
    url: "https://supreet-singh.com/",
    title: "Supreet Singh",
    description: "Software Engineer | Toronto, Canada",
    site_name: "Supreet Singh",
    images: [{ url: "https://avatars.githubusercontent.com/u/2194953?v=4" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen h-screen flex flex-col px-4 sm:px-6 lg:px-8">
          <Header />
          <div className="mb-auto">{children}</div>
          <Footer />
        </div>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-191519046-1" />
    </html>
  );
}
