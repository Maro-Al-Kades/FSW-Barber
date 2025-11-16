"use client";

import { toast } from "sonner";
import { authClient } from "../lib/auth-client";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

type PendingProviderType = "github" | "google";

type AuthDialogPropsType = {
  children: React.ReactNode;
};

export default function AuthDialog({ children }: AuthDialogPropsType) {
  const [isPending, setIsPending] = useState<PendingProviderType | null>(null);

  async function githubConnection() {
    await authClient.signIn.social(
      {
        provider: "github",
        callbackURL: window.location.href,
      },
      {
        onRequest: () => {
          setIsPending("github");
        },
        onSuccess: () => {
          setIsPending(null);
        },
        onError: ({ error }) => {
          setIsPending(null);
          toast.error(error.message);
        },
      },
    );
  }

  async function googleConnection() {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: window.location.href,
      },
      {
        onRequest: () => {
          setIsPending("google");
        },
        onSuccess: () => {
          setIsPending(null);
        },
        onError: ({ error }) => {
          setIsPending(null);
          toast.error(error.message);
        },
      },
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[80vw] max-w-[400px] rounded p-5">
        <DialogHeader className="space-y-3 sm:text-center">
          <DialogTitle>Faça login na plataforma</DialogTitle>
          <DialogDescription>
            Conecte-se usando sua conta do Google or Github
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 flex flex-col gap-4">
          <Button
            variant="outline"
            onClick={googleConnection}
            disabled={!!isPending}
            className="w-full"
          >
            {isPending === "google" && <Loader2Icon className="animate-spin" />}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 533.5 544.3"
  className="mr-2 h-5 w-5"
>
  <path
    fill="#4285F4"
    d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.3H272v95.1h146.9c-6.4 34.8-25.8 64.3-54.9 84l88.9 69c51.8-47.7 81.6-118 81.6-197.8z"
  />
  <path
    fill="#34A853"
    d="M272 544.3c73.7 0 135.7-24.4 180.9-66.3l-88.9-69c-24.7 16.5-56.6 26.2-92 26.2-70.8 0-130.8-47.7-152.2-111.6l-91.2 70.5c43.7 86.4 133.3 150 243.4 150z"
  />
  <path
    fill="#FBBC05"
    d="M119.8 314.6c-10.4-31.2-10.4-64.7 0-95.9l-91.2-70.5c-39.5 78.8-39.5 171.3 0 250.1l91.2-70.5z"
  />
  <path
    fill="#EA4335"
    d="M272 107.7c39.7-.6 77.9 14.2 106.8 40.9l80.3-78.3C400.9 24.3 338.9 0 272 0 162 0 72.4 63.6 28.7 150l91.2 70.5C141.2 155.4 201.2 107.7 272 107.7z"
  />
</svg>

            Google
          </Button>
          <Button
            variant="outline"
            onClick={githubConnection}
            disabled={!!isPending}
            className="w-full"
          >
            {isPending === "github" && <Loader2Icon className="animate-spin" />}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-5 w-5"
            >
              <path d="M12 .297a12 12 0 00-3.797 23.399c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.204.086 1.838 1.234 1.838 1.234 1.07 1.834 2.807 1.304 3.492.996.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.932 0-1.311.467-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.513 11.513 0 016 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.222 0 4.61-2.807 5.628-5.48 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576A12 12 0 0012 .297z" />
            </svg>
            GitHub
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
