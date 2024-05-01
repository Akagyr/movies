import Link from "next/link";
import HeaderSearchForm from "./HeaderSearchForm";
import HeaderAccount from "./HeaderAccount";

export default function Header() {
    return (
        <header className="h-[9vh] px-5 lg:px-0 sticky top-0 z-10 bg-[#141313] grid grid-cols-2 lg:grid-cols-6 items-center">
            <Link className="lg:text-center" href="/">
                <p className="font-bold text-2xl">Movie.<span className="text-red-600">Trailers</span></p>
            </Link>
            <HeaderSearchForm />
            <HeaderAccount />
        </header>
    );
}
