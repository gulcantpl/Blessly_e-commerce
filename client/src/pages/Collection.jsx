import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Item from '../components/Item';
import { useAppContext } from '../context/AppContext';
import { dummyProducts } from '../assets/data.js';


const getProductPrice = (product) => {
    if (product.price && product.price.unit !== undefined) return product.price.unit;
    if (product.prices) return Math.min(...Object.values(product.prices));
    return 0;
};


const SearchInput = ({ className = "" }) => {
    const { searchQuery, setSearchQuery } = useAppContext();

    return (
        <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`border px-4 py-2 rounded-full text-sm w-full ${className}`}
        />
    );
};

const Collection = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { products: contextProducts, searchQuery: contextSearchQuery, setSearchQuery } = useAppContext();

    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const products = contextProducts?.length > 0 ? contextProducts : dummyProducts;
    const itemsPerPage = 12;


    const getInitialState = useCallback(
        (key, defaultValue) => {
            const urlValue = searchParams.get(key);
            if (key === "category" && urlValue) return urlValue.split(",").filter(Boolean);
            if (key === "page" && urlValue) return parseInt(urlValue) || defaultValue;
            return urlValue || defaultValue;
        },
        [searchParams]
    );

    const [category, setCategory] = useState(() => getInitialState("category", []));
    const [selectedSort, setSelectedSort] = useState(() => getInitialState("sort", "relevant"));
    const [currentPage, setCurrentPage] = useState(() => getInitialState("page", 1));
    const [filteredProducts, setFilteredProducts] = useState(products);


    const allCategories = useMemo(() => {
        const categories = new Set();
        products.forEach((p) => p.category && categories.add(p.category));
        return Array.from(categories);
    }, [products]);


    const updateURL = useCallback(
        (newCategory, newSort, newPage) => {
            const newParams = new URLSearchParams();
            if (newCategory.length > 0) newParams.set("category", newCategory.join(","));
            if (newSort !== "relevant") newParams.set("sort", newSort);
            if (newPage > 1) newParams.set("page", newPage.toString());
            if (contextSearchQuery) newParams.set("search", contextSearchQuery);
            setSearchParams(newParams, { replace: true });
        },
        [contextSearchQuery, setSearchParams]
    );


    useEffect(() => {
        let current = [...products];

        if (category.length > 0) current = current.filter((p) => category.includes(p.category));

        if (contextSearchQuery) {
            const q = contextSearchQuery.toLowerCase();
            current = current.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.category?.toLowerCase().includes(q) ||
                    p.description?.toLowerCase().includes(q)
            );
        }

        if (selectedSort === "low") current.sort((a, b) => getProductPrice(a) - getProductPrice(b));
        else if (selectedSort === "high") current.sort((a, b) => getProductPrice(b) - getProductPrice(a));

        setFilteredProducts(current);

        const totalPages = Math.ceil(current.length / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) setCurrentPage(1);

        updateURL(category, selectedSort, currentPage);
    }, [products, category, contextSearchQuery, selectedSort, currentPage, updateURL]);


    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    const handleSortChange = (e) => {
        setSelectedSort(e.target.value);
        setCurrentPage(1);
    };

    const toggleCategoryFilter = (cat) => {
        const updated = category.includes(cat)
            ? category.filter((c) => c !== cat)
            : [...category, cat];
        setCategory(updated);
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        setCategory([]);
        setSelectedSort("relevant");
        setCurrentPage(1);
        setSearchQuery("");
    };


    return (
        <div className="min-h-screen mt-15 bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Mobile Search + Filter Button */}
                <div className="lg:hidden flex items-center mt-7 gap-3 mb-4">
                    <SearchInput className="flex-1 rounded-full border-purple-300 shadow-sm" />
                    <button
                        onClick={() => setIsMobileFilterOpen(true)}
                        className="px-4 py-2 rounded-full border border-purple-400 text-purple-600 font-medium shadow-sm"
                    >
                        Filters
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">

                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block lg:w-1/4 p-4 sticky top-20 h-fit bg-white">
                        <SearchInput className="mb-4 border-purple-300" />

                        <div className="mb-4">
                            <h5 className="mb-2 font-semibold">Sort By</h5>
                            <select
                                value={selectedSort}
                                onChange={handleSortChange}
                                className="w-full border border-gray-300 rounded-full p-2 text-sm"
                            >
                                <option value="relevant">Relevant</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>

                        <div>
                            <h5 className="mb-2 font-semibold">Categories</h5>
                            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                                {allCategories.map((cat) => (
                                    <label key={cat} className="flex items-center text-sm cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={category.includes(cat)}
                                            onChange={() => toggleCategoryFilter(cat)}
                                            className="h-4 w-4 text-purple-500"
                                        />
                                        <span className="ml-2 capitalize">
                                            {cat} ({products.filter((p) => p.category === cat).length})
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="lg:w-3/4">
                        {currentItems.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                                {currentItems.map((product) => (
                                    <Link
                                        key={product._id}
                                        to={`/products/${product._id}`}
                                        className="cursor-pointer hover:scale-105 transition-all shadow rounded-xl block"
                                    >
                                        <Item product={product} />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center p-6 bg-white rounded-xl shadow-md">
                                <p className="text-gray-700 font-medium">No products match your criteria 😔</p>
                                <button
                                    onClick={handleClearFilters}
                                    className="mt-3 text-purple-600 font-semibold border rounded-full px-4 py-2"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center space-x-2 mt-6">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-1 text-sm rounded-full ${currentPage === page
                                            ? "bg-purple-600 text-white"
                                            : "bg-white text-gray-700 border"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Product Count at Bottom */}
                        <p className="text-sm text-gray-500 mt-6 text-center">
                            Showing <b>{currentItems.length}</b> of <b>{filteredProducts.length}</b> products
                        </p>
                    </div>
                </div>
            </div>

            {/*  MOBILE FILTER PANEL */}
            {isMobileFilterOpen && (
                <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
                    <div className="w-72 bg-white h-full p-5 overflow-y-auto shadow-xl animate-slideLeft">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsMobileFilterOpen(false)}
                            className="mb-4 px-4 py-2 rounded-full border text-purple-600"
                        >
                            Close
                        </button>

                        {/* Sort */}
                        <div className="mb-6">
                            <h5 className="mb-2 font-semibold text-gray-800">Sort By</h5>
                            <select
                                value={selectedSort}
                                onChange={handleSortChange}
                                className="w-full border rounded-full p-2"
                            >
                                <option value="relevant">Relevant</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Categories */}
                        <div>
                            <h5 className="mb-2 font-semibold text-gray-800">Categories</h5>
                            <div className="space-y-2">
                                {allCategories.map((cat) => (
                                    <label key={cat} className="flex items-center text-sm">
                                        <input
                                            type="checkbox"
                                            checked={category.includes(cat)}
                                            onChange={() => toggleCategoryFilter(cat)}
                                            className="h-4 w-4 text-purple-600"
                                        />
                                        <span className="ml-2 capitalize">
                                            {cat} ({products.filter((p) => p.category === cat).length})
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleClearFilters}
                            className="mt-6 w-full border rounded-full py-2 text-purple-600 font-semibold"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Collection;
