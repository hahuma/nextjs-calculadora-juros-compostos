import { NextPage } from "next";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface ContentWrapperProps {
    children?: React.ReactNode
}

export const ContentWrapper: NextPage<ContentWrapperProps> =  ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="w-full flex-grow flex-shrink-0 basis-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}