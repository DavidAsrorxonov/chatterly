import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <h1>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-red-500">
            <span>Sign In</span>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </h1>
  );
}
