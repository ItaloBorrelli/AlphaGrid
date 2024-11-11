import '~/styles/globals.css';

import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { ClerkProvider } from '@clerk/nextjs';
import { TRPCReactProvider } from '~/trpc/react';
import { TopNav } from './_components/topnav';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'AlphaGrid',
  description: 'Play AlphaGrid with your friends!',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TRPCReactProvider cookies={cookies().toString()}>
        <html lang="en">
          <body className={`font-sans ${inter.className} flex flex-col gap-4`}>
            <TopNav />
            {children}
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
