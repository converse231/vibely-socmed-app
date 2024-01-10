import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Logout } from "@mui/icons-material";
import { createOrUpdateUser } from "@lib/actions/user";

async function LeftSidebar() {
  const test = await createOrUpdateUser();
  console.log(test);

  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <Link href="/">
        <Image src="/assets/logo (1).png" alt="logo" height={200} width={200} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href="/">
            <Image
              src="/assets/phucmai.png"
              width={50}
              height={50}
              alt="profile photo"
              className="rounded-full"
            />
            <p className="text-small-bold">Daniel Arvi</p>
          </Link>
        </div>
        <div className="flex text-light-1 justify-between">
          <div className="flex flex-col items-center">
            <p className="text-base-bold">1</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">5</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">12</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>

        <hr className="my-6" />

        <Menu />

        <hr className="my-6" />
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <UserButton />
            <p className="text-light-1 text-body-bold">Manage Account</p>
          </div>

          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer gap-4 items-center">
                <Logout sx={{ color: "white", fontSize: "32px" }} />
                <p className="text-body-bold text-light-1">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
