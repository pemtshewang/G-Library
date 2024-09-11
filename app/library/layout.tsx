import BrandLogo from "../(components)/brandheader";
import { Metadata } from "next";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Library",
    description: "G-Library - collections of books",
}

export default function LibraryPageLayout({ children }: {
    children: React.ReactNode
}) {
    return <>
        <nav className="flex justify-between px-5">
            <BrandLogo />
            <div className="lg:block hidden">
                <div className="mt-7 mr-7 space-x-1 flex bg-[#FC6D7C] p-3 border-2 border-black rounded-full">
                    <Link
                        className="font-semibold"
                        href="library/favorites" >
                        Favorites
                    </Link>
                    <HeartIcon className="fill-white"/>
                </div>
            </div>
        </nav>
        <div>
            {children}
        </div>
    </>
}