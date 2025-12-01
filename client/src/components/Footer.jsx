import { Link } from "react-router-dom";
import { assets } from "../assets/data.js";

const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/collection', title: 'Collection' },
    { path: '/blog', title: 'Blog' },
    { path: '/contact', title: 'Contact' },
];

export default function Footer() {
    return (
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 w-full text-gray-500 bg-white">
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-300/40 pb-10">

                {/* LOGO + TEXT */}
                <div className="md:max-w-96">
                    <img
                        src={assets.logoImg}
                        alt="Blessly Logo"
                        className="h-12 w-auto mb-5"
                    />

                    <p className="text-sm leading-relaxed text-gray-600">
                        Blessly is a modern cosmetic brand offering premium beauty essentials
                        that highlight your natural glow. Elegance made simple.
                    </p>
                </div>

                {/* NAVIGATION + CONTACT */}
                <div className="flex-1 flex items-start md:justify-end gap-20">

                    {/* Navigation */}
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Navigation</h2>
                        <ul className="text-sm space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-purple-600 transition"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in Touch</h2>
                        <div className="text-sm space-y-2">
                            <p className="flex items-center gap-2">
                                <img src={assets.phone} alt="" className="w-4" />
                                +1 (310) 884-29{Math.floor(Math.random() * 90 + 10)}
                            </p>
                            <p className="flex items-center gap-2">
                                <img src={assets.mail} alt="" className="w-4" />
                                info{Math.floor(Math.random() * 99)}@blessly-demo.com
                            </p>
                            <p className="flex items-center gap-2">
                                <img src={assets.house} alt="" className="w-4" />
                                Los Angeles, CA (Demo Address)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT + NOTICE */}
            <div className="text-center pt-5 pb-6">
                <p className="text-xs md:text-sm text-gray-600">
                    © {new Date().getFullYear()} <span className="font-medium">Blessly Cosmetics</span>. All Rights Reserved.
                </p>

                <p className="text-[11px] text-gray-500 mt-1 italic">
                    This website is not real and is for demonstration purposes only.
                </p>
            </div>
        </footer>
    );
}
