import { NextPage } from "next";
import Image from "next/image";

export const Logo: NextPage =  () => {
    return (
        <Image width={100} height={70} alt="Logo" src="/logo.png" />
    )
}