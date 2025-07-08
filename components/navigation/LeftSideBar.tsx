import React from "react";
import NavLinks from "./navbar/NavLinks";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <div className=" custom-scrollbar pt-22 lg:w-[266px] background-light900_dark200 sticky h-screen max-sm:hidden p-6 justify-between flex flex-col border-r overflow-y-auto no-scrollbar">
      <div className="flex flex-1 flex-col gap-4 ">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-2 shadow-none " asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
              className="lg:hidden invert-colors"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>
        <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-2 shadow-none" asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
              className="lg:hidden invert-colors"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LeftSideBar;
