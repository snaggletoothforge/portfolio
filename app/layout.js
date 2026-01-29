import "./globals.scss";
import Nav from "@/components/Nav/Nav";
import { Open_Sans } from 'next/font/google';
import Blobs from "@/components/Blobs/Blobs";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "Tom Mitchell | UX Designer",
  description: "That Nomad Chap's Design Portfolio",
  openGraph: {
    title: "Tom Mitchell | UX Designer",
    description: "That Nomad Chap's Design Portfolio",
    images: [
      {
        url: '/images/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Tom Mitchell - UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tom Mitchell | UX Designer",
    description: "That Nomad Chap's Design Portfolio",
    images: ['/images/ogimage.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Blobs />
        <Nav />
        {children}
      </body>
    </html>
  );
}