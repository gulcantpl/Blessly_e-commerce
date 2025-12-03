import { Link } from "react-router-dom";
import { assets } from "../assets/data.js";

const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/collection', title: 'Collection' },
    { path: '/blog', title: 'Blog' },
    { path: '/contact', title: 'Mail / Keep in Touch' },
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

                    <p className="text-sm leading-relaxed text-gray-600 mb-6">
                        Blessly is a modern cosmetic brand offering premium beauty essentials
                        that highlight your natural glow. Elegance made simple.
                    </p>

                    {/* Newsletter */}
                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Subscribe to our newsletter</h3>
                        <p className="text-sm text-gray-600 mb-3">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form className="relative w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 pr-14 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                type="submit"
                                className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-700 transition"
                            >
                                ➤
                            </button>
                        </form>
                    </div>

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

                    {/* Mail / Keep in Touch */}
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Keep in Touch</h2>
                        <div className="text-sm space-y-2">
                            <p className="flex items-center gap-2">
                                <img src={assets.mail} alt="Mail Icon" className="w-4" />
                                hello{Math.floor(Math.random() * 99)}@blessly-demo.com
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
