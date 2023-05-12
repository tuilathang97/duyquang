import Image from "next/image";

const Header = () => {
    return(
        <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center justify-center p-2 gap-4">
                    <Image src='/icons/B-design.svg' width={36} height={36} alt={""} />
                    <h3 className="text-3xl font-semibold text-gray-900">Bo Design</h3>
                </a>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        {/* <a rel="noopener noreferrer" href="#" className="flex items-center text-sm px-4 -mb-1 border-transparent">Sản phẩm</a> */}
                    </li>
                    <li className="flex">
                        {/* <a rel="noopener noreferrer" href="#" className="flex items-center text-sm px-4 -mb-1 border-transparent">Giới thiệu</a> */}
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header;