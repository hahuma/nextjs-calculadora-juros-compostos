import { NextPage } from "next";
import { Logo } from "../../Logo";

export const Header: NextPage =  () => {
    return (
        <header className="border border-b py-2 pl-4">
            <Logo />
        </header>
    )
}