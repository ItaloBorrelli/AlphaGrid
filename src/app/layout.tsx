import '~/styles/globals.css';

import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { TRPCReactProvider } from '~/trpc/react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create T3 App',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
