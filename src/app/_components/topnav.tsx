import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export function TopNav() {
  return (
    <nav className="flex w-full justify-between border-b p-4 text-xl font-semibold">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
