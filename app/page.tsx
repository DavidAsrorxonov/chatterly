import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <h1>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <ModeToggle />
    </h1>
  );
}
