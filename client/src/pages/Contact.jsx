import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError('');

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    formRef.current.reset();
                },
                (err) => {
                    setLoading(false);
                    setError('Something went wrong. Please try again later.');
                    console.error(err);
                }
            );
    };

    return (
        <div className="min-h-screen flex flex-col items-center mt-16 py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col items-center max-w-lg w-full text-gray-800"
            >
                {/* Sabit alıcı */}
                <input type="hidden" name="to_email" value="testmailll.testmailll@gmail.com" />

                <p className="text-xs bg-purple-200 text-purple-600 font-medium px-3 py-1 rounded-full">
                    Contact Us
                </p>
                <h1 className="text-4xl font-bold py-4 text-center text-gray-900">
                    Let’s Get In Touch.
                </h1>
                <p className="text-gray-500 pb-10 text-center text-sm max-md:text-xs">
                    Or reach out manually at{' '}
                    <a href="mailto:testmailll.testmailll@gmail.com" className="text-purple-600 hover:underline">
                        testmailll.testmailll@gmail.com
                    </a>
                </p>

                {/* Name */}
                <label htmlFor="name" className="font-medium w-full">
                    Full Name
                </label>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your full name"
                    className="h-10 px-3 w-full outline-none bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 transition mb-4"
                    required
                />

                {/* Email */}
                <label htmlFor="email" className="font-medium w-full mt-2">
                    Email Address
                </label>
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email address"
                    className="h-10 px-3 w-full outline-none bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 transition mb-4"
                    required
                />

                {/* Message */}
                <label htmlFor="message" className="font-medium w-full mt-2">
                    Message
                </label>
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter your message"
                    className="w-full mt-2 p-3 bg-white border border-gray-200 rounded-lg resize-none outline-none shadow-sm focus:ring-2 focus:ring-purple-400 transition"
                    required
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 mt-5 bg-purple-600 hover:bg-purple-700 text-white py-2.5 w-full rounded-full transition text-sm"
                >
                    {loading ? 'Sending...' : 'Submit'}
                </button>

                {/* Success & Error Messages */}
                {success && <p className="text-green-600 mt-3 text-sm">Message sent successfully!</p>}
                {error && <p className="text-red-600 mt-3 text-sm">{error}</p>}
            </form>

            <div className="mt-16 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
