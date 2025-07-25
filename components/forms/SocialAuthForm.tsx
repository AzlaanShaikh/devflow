"use client";
import Image from "next/image";
import React from "react";
import { toast } from "sonner"
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import { signIn } from "next-auth/react";

const SocialAuthForm = () => {
  const buttonClass =
    " background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3 cursor-pointer";

    const handleSignIn = async(provider: "github" | "google") => {
      try {
        await signIn(provider, {
          callbackUrl: "/", 
        })
      } catch (error) {
        console.error("Error during sign-in:", error);
        toast.error("Sign-in failed", {description: error instanceof Error ? error.message : "An unexpected error occurred."},);
        
      }
    }
  return (
    <div className="mt-8 flex flex-wrap gap-2.5">
      
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className=" mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
