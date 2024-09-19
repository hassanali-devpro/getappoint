import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="py-16 bg-transparent">
            <div className="container flex justify-between items-center">
                <div className="flex justify-between items-center w-full">
                    <a href="index.html" alt="" className="text-white text-5xl font-medium">
                        Get Appoint
                    </a>
                    <button
                        type="button"
                        className="lg:hidden text-white"
                        onClick={() => setToggleMenu(true)}
                    >
                        <FaBars size={26} />
                    </button>
                </div>

                {/* Full-screen navbar (visible only on large screens) */}
                <div className="hidden lg:flex">
                    <ul className="flex items-center">
                        <li className="ml-16">
                            <a
                                href="#home"
                                className="uppercase tracking-wider font-semibold text-white hover:text-[#80CED7] transition"
                            >
                                home
                            </a>
                        </li>
                        <li className="ml-16">
                            <a
                                href="#process"
                                className="uppercase tracking-wider font-semibold text-white hover:text-[#80CED7] transition"
                            >
                                process
                            </a>
                        </li>
                        <li className="ml-16">
                            <a
                                href="#services"
                                className="uppercase tracking-wider font-semibold text-white hover:text-[#80CED7] transition"
                            >
                                services
                            </a>
                        </li>
                        <li className="ml-16">
                            <a
                                href="#about"
                                className="uppercase tracking-wider font-semibold text-white hover:text-[#80CED7] transition"
                            >
                                about
                            </a>
                        </li>
                        <li className="ml-16">
                            <a
                                href="#contact"
                                className="uppercase tracking-wider font-semibold text-white hover:text-[#80CED7] transition"
                            >
                                contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Small-screen menu (visible when toggleMenu is true) */}
                {toggleMenu && (
                    <div className="fixed inset-0 bg-[#80CED7] z-50 p-12 shadow-lg transition-all duration-300 lg:hidden">
                        <button
                            type="button"
                            className="absolute top-8 right-8 text-white"
                            onClick={() => setToggleMenu(false)}
                        >
                            <FaTimes size={32} />
                        </button>
                        <ul className="text-white">
                            <li className="my-8">
                                <a
                                    href="#home"
                                    className="uppercase tracking-wider font-semibold text-white text-xl hover:pl-4 transition"
                                    onClick={() => setToggleMenu(false)} // Closes the menu after clicking
                                >
                                    home
                                </a>
                            </li>
                            <li className="my-8">
                                <a
                                    href="#about"
                                    className="uppercase tracking-wider font-semibold text-white text-xl hover:pl-4 transition"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    about
                                </a>
                            </li>
                            <li className="my-8">
                                <a
                                    href="#process"
                                    className="uppercase tracking-wider font-semibold text-white text-xl hover:pl-4 transition"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    process
                                </a>
                            </li>
                            <li className="my-8">
                                <a
                                    href="#services"
                                    className="uppercase tracking-wider font-semibold text-white text-xl hover:pl-4 transition"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    services
                                </a>
                            </li>
                            <li className="my-8">
                                <a
                                    href="#contact"
                                    className="uppercase tracking-wider font-semibold text-white text-xl hover:pl-4 transition"
                                    onClick={() => setToggleMenu(false)}
                                >
                                    contact
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
