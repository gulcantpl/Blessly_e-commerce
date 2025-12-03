import React from 'react';
import { blogs } from '../assets/data';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <div className="min-h-screen bg-white mt-15 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Blog</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={blog.image[0]}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5 flex flex-col gap-3">
                                <span className="text-xs text-purple-600 uppercase font-semibold">{blog.category}</span>
                                <h2 className="text-lg font-bold text-gray-900">{blog.title}</h2>
                                <p className="text-gray-700 text-sm line-clamp-3">{blog.description}</p>
                                <button className="mt-3 self-start px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Blog;
