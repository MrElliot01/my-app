/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';

// The layout page will be used across all pages in the app so it is a good idea to use Nav bars, header, footers stuff like
// that you want on all of the pages
export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/notes">
              Notes
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}