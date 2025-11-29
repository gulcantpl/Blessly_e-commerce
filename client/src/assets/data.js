import logoImg from "./logo_1.png";
import search from "./search.svg";
import user from "./user.svg";
import menu from "./menu.svg";
import menuClose from "./menu-close.svg";
import cartAdd from "./cart-add.svg";
import cartRemove from "./cart-remove.svg";
import cartAdded from "./cart-added.svg";
import forward from "./forward.svg";
import badge from "./badge.svg";
import heartAdd from "./heart-add.svg";
import returnRequest from "./return-request.svg";
import delivery from "./delivery.svg";
import secure from "./secure.svg";
import right from "./right.svg";
import pin from "./pin.svg";
import star from "./star.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import rocket from "./rocket.svg";
import mail from "./mail.svg";
import phone from "./phone.svg";
import house from "./house.svg";
import graph from "./graph.svg";
import dollar from "./dollar.svg";
import map from "./map.svg";
import list from "./list.svg";
import dashboard from "./dashboard.svg";
import plus from "./plus.svg";
import squarePlus from "./square-plus.svg";
import minus from "./minus.svg";
import trash from "./trash.svg";
import userImg from "./user.svg";
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";
import user4 from "./user4.png";
import hero from "./hero.png"
import uploadIcon from "../assets/upload_icon.png";
import features1 from "../assets/features1.jpg";
import features2 from "../assets/features2.jpg";
import banner from "../assets/banner.png"

export const assets = {
  logoImg,
  banner,
  search,
  user,
  menu,
  menuClose,
  cartAdd,
  cartRemove,
  cartAdded,
  forward,
  badge,
  heartAdd,
  returnRequest,
  delivery,
  secure,
  right,
  pin,
  star,
  facebook,
  instagram,
  twitter,
  linkedin,
  rocket,
  mail,
  phone,
  dollar,
  house,
  graph,
  map,
  dashboard,
  plus,
  minus,
  squarePlus,
  trash,
  list,
  userImg,
  user1,
  user2,
  user3,
  user4,
  hero,
  features1,
  features2,
  uploadIcon,
};

import product_1 from "./product_1.jpg";
import product_2 from "./product_2.jpg";
import product_3 from "./product_3.jpg";
import product_4 from "./product_4.jpg";
import product_5 from "./product_5.jpg";
import product_6 from "./product_6.jpg";
import product_7 from "./product_7.jpg";
import product_8 from "./product_8.jpg";
import product_9 from "./product_9.jpg";
import product_10 from "./product_10.jpg";
import product_11 from "./product_11.jpg";
import product_12 from "./product_12.jpg";
import product_13 from "./product_13.jpg";
import product_14 from "./product_14.jpg";
import product_15 from "./product_15.jpg";
import product_16 from "./product_16.jpg";
import product_17 from "./product_17.jpg";
import product_18 from "./product_18.jpg";
import product_19 from "./product_19.jpg";
import product_20 from "./product_20.jpg";
import product_21 from "./product_21.jpg";
import product_22 from "./product_22.jpg";
import product_23 from "./product_23.jpg";
import product_24 from "./product_24.jpg";
import product_25 from "./product_25.jpg";

import blog1 from "./blogs/blog_1.jpg";
import blog2 from "./blogs/blog_2.jpg";
import blog3 from "./blogs/blog_3.jpg";
import blog4 from "./blogs/blog_4.jpg";

export const dummyProducts = [
  // Mascara (Mascara) - products 1, 2, 6, 7, 16, 23, 24
  {
    _id: "1",
    title: "Volume Boost Mascara",
    images: [product_1],
    price: { "unit": 28 },
    description: "Adds dramatic volume and length with a clump-free, deep black formula.",
    category: "Eye Makeup",
    type: "Mascara",
    sizes: ["Standard"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "2",
    title: "Precision Eyeliner Pen",
    images: [product_2],
    price: { "unit": 25 },
    description: "Ultra-fine tip for creating sharp, defined lines; waterproof and long-lasting.",
    category: "Eye Makeup",
    type: "Eyeliner",
    sizes: ["Standard"],
    date: 1716634345448,
    popular: true,
    inStock: true,
  },
  {
    _id: "6",
    title: "Ultimate Mascara",
    images: [product_6],
    price: { "unit": 28 },
    description: "Achieve maximum impact in volume and length with this smudge-proof formula.",
    category: "Eye Makeup",
    type: "Mascara",
    sizes: ["Standard"],
    date: 1716634345450,
    popular: false,
    inStock: true,
  },
  {
    _id: "7",
    title: "Mascara Base Coat",
    images: [product_7],
    price: { "unit": 22 },
    description: "Conditions and primes lashes to maximize the effects of your favorite mascara.",
    category: "Eye Makeup",
    type: "Lash Primer",
    sizes: ["Standard"],
    date: 1716634345450,
    popular: true,
    inStock: true,
  },
  {
    _id: "16",
    title: "Fiber Extension Mascara",
    images: [product_16],
    price: { "unit": 32 },
    description: "Infused with fibers to give the appearance of false lashes without the hassle.",
    category: "Eye Makeup",
    type: "Mascara",
    sizes: ["Standard"],
    date: 1716634345455,
    popular: false,
    inStock: true,
  },
  {
    _id: "23",
    title: "Lash Growth Serum",
    images: [product_23],
    price: { "unit": 45 },
    description: "Nourishing serum applied before bed to promote longer, fuller lashes over time.",
    category: "Lash Care",
    type: "Serum",
    sizes: ["Standard"],
    date: 1716634345458,
    popular: false,
    inStock: true,
  },
  {
    _id: "24",
    title: "Waterproof Mascara",
    images: [product_24],
    price: { "unit": 30 },
    description: "A highly resilient formula that stays put through sweat, tears, and water.",
    category: "Eye Makeup",
    type: "Mascara",
    sizes: ["Standard"],
    date: 1716634345459,
    popular: true,
    inStock: true,
  },

  
  // Lipstick (Ruj) - products 4, 8, 9, 10, 13, 14, 15, 20, 22
  {
    _id: "4",
    title: "Matte Lipstick Set",
    images: [product_4],
    price: { "set": 75 },
    description: "A trio of best-selling matte shades for a bold, long-lasting lip look.",
    category: "Lip Makeup",
    type: "Lipstick Set",
    sizes: ["3-Piece"],
    date: 1716634345449,
    popular: true,
    inStock: true,
  },
  {
    _id: "8",
    title: "High-Shine Lip Gloss",
    images: [product_8],
    price: { "unit": 22 },
    description: "Non-sticky formula providing an extreme glossy finish and comfortable wear.",
    category: "Lip Makeup",
    type: "Lip Gloss",
    sizes: ["Standard"],
    date: 1716634345451,
    popular: false,
    inStock: true,
  },
  {
    _id: "9",
    title: "Intense Red Lipstick",
    images: [product_9],
    price: { "unit": 30 },
    description: "Classic, highly pigmented red shade with a satin finish.",
    category: "Lip Makeup",
    type: "Lipstick",
    sizes: ["Standard"],
    date: 1716634345451,
    popular: true,
    inStock: true,
  },
  {
    _id: "10",
    title: "Sheer Hydrating Lipstick",
    images: [product_10],
    price: { "unit": 28 },
    description: "A blend of color and balm for a hydrated, subtle shine.",
    category: "Lip Makeup",
    type: "Lipstick",
    sizes: ["Standard"],
    date: 1716634345452,
    popular: false,
    inStock: true,
  },
  {
    _id: "13",
    title: "Lip Plumper Gloss",
    images: [product_13],
    price: { "unit": 35 },
    description: "A tingling formula that visibly enhances lip volume with a high-gloss finish.",
    category: "Lip Makeup",
    type: "Lip Gloss",
    sizes: ["Standard"],
    date: 1716634345453,
    popular: true,
    inStock: true,
  },
  {
    _id: "14",
    title: "Liquid Matte Lipstick",
    images: [product_14],
    price: { "unit": 32 },
    description: "An incredibly long-wearing, fully opaque liquid lipstick that dries to a flawless matte finish.",
    category: "Lip Makeup",
    type: "Liquid Lipstick",
    sizes: ["Standard"],
    date: 1716634345454,
    popular: true,
    inStock: true,
  },
  {
    _id: "15",
    title: "Lip Care Oil",
    images: [product_15],
    price: { "unit": 25 },
    description: "A non-greasy oil that nourishes and softens the lips, leaving a subtle tint.",
    category: "Lip Care",
    type: "Lip Oil",
    sizes: ["Standard"],
    date: 1716634345454,
    popular: false,
    inStock: true,
  },
  {
    _id: "20",
    title: "Precision Lip Liner",
    images: [product_20],
    price: { "unit": 18 },
    description: "Creamy, blendable lip pencil for defining and shaping the lips before lipstick application.",
    category: "Lip Makeup",
    type: "Lip Liner",
    sizes: ["Standard"],
    date: 1716634345457,
    popular: true,
    inStock: true,
  },
  {
    _id: "22",
    title: "Tinted Lip Balm",
    images: [product_22],
    price: { "unit": 20 },
    description: "Hydrates and adds a subtle wash of color for an effortless, natural look.",
    category: "Lip Makeup",
    type: "Lip Balm",
    sizes: ["Standard"],
    date: 1716634345458,
    popular: false,
    inStock: true,
  },
  
  
  // Eyeshadow Palette (Far Paleti) - products 3, 5, 11, 12, 17, 18, 19, 21, 25
  {
    _id: "3",
    title: "Mini Single Eyeshadow",
    images: [product_3],
    price: { "unit": 15 },
    description: "A highly pigmented single pot of shimmer eyeshadow for a pop of color.",
    category: "Eye Makeup",
    type: "Eyeshadow",
    sizes: ["Mini"],
    date: 1716634345448,
    popular: false,
    inStock: true,
  },
  {
    _id: "5",
    title: "Smoky Eyeshadow Palette",
    images: [product_5],
    price: { "palette": 65 },
    description: "A collection of matte and shimmer shades for creating dramatic, smoky eyes.",
    category: "Eye Makeup",
    type: "Eyeshadow Palette",
    sizes: ["10-Pan"],
    date: 1716634345449,
    popular: true,
    inStock: true,
  },
  {
    _id: "11",
    title: "Nude Everyday Palette",
    images: [product_11],
    price: { "palette": 45 },
    description: "Essential neutral mattes and shimmers for a perfect day-to-day eye look.",
    category: "Eye Makeup",
    type: "Eyeshadow Palette",
    sizes: ["6-Pan"],
    date: 1716634345452,
    popular: true,
    inStock: true,
  },
  {
    _id: "12",
    title: "Contour & Highlight Duo",
    images: [product_12],
    price: { "duo": 48 },
    description: "A travel-friendly duo palette for sculpting and illuminating the face.",
    category: "Face Makeup",
    type: "Palette",
    sizes: ["Standard"],
    date: 1716634345453,
    popular: true,
    inStock: true,
  },
  {
    _id: "17",
    title: "Eyebrow Powder Kit",
    images: [product_17],
    price: { "kit": 40 },
    description: "Two brow powders and a wax for shaping and filling in sparse eyebrows.",
    category: "Eye Makeup",
    type: "Brow Kit",
    sizes: ["Standard"],
    date: 1716634345455,
    popular: false,
    inStock: true,
  },
  {
    _id: "18",
    title: "Single Pan Eyeshadow",
    images: [product_18],
    price: { "unit": 12 },
    description: "Highly blendable matte eyeshadow for transition or base color.",
    category: "Eye Makeup",
    type: "Eyeshadow",
    sizes: ["Single"],
    date: 1716634345456,
    popular: true,
    inStock: true,
  },
  {
    _id: "19",
    title: "Baked Highlighter Powder",
    images: [product_19],
    price: { "unit": 36 },
    description: "A finely milled, baked powder for a luminous glow on the high points of the face.",
    category: "Face Makeup",
    type: "Highlighter",
    sizes: ["Standard"],
    date: 1716634345456,
    popular: false,
    inStock: true,
  },
  {
    _id: "21",
    title: "Face & Eye Combo Palette",
    images: [product_21],
    price: { "palette": 60 },
    description: "A multi-use palette featuring eyeshadows, blush, and bronzer for a complete look.",
    category: "Multi-Use",
    type: "Palette",
    sizes: ["Standard"],
    date: 1716634345457,
    popular: false,
    inStock: true,
  },
  {
    _id: "25",
    title: "The Ultimate Makeup Palette",
    images: [product_25],
    price: { "palette": 70 },
    description: "An extensive collection of eyeshadows, blushes, and contours in one compact design.",
    category: "Multi-Use",
    type: "Palette",
    sizes: ["Large"],
    date: 1716634345459,
    popular: true,
    inStock: true,
  },
];

// Blogs Dummy Data for blog_1 to blog_4
export const blogs = [
  {
    title: "The Ultimate Guide to Eyeshadow Palettes",
    category: "Makeup Tutorial",
    image: [blog1],
    description: "Learn how to use every shade in your eyeshadow palette, from transition colors to shimmer toppers, for flawless eye looks.",
  },
  {
    title: "Mastering the Art of Contour and Highlight",
    category: "Face Sculpting",
    image: [blog2],
    description: "A step-by-step guide on where to place contour and highlighter products to naturally define and illuminate your face shape.",
  },
  {
    title: "Essential Tools: Building Your First Makeup Brush Kit",
    category: "Beauty Basics",
    image: [blog3],
    description: "Discover the must-have brushes for foundation, powder, and eyes to achieve a professional makeup finish.",
  },
  {
    title: "The Best Lipsticks for Every Occasion",
    category: "Lip Trends",
    image: [blog4],
    description: "Explore our top picks for matte, satin, and glossy lipsticks, ensuring you have the perfect shade for day and night.",
  },
];


export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "68591d36daf423db94fa8f4f",
    firstName: "Erica",
    lastName: "Dawson",
    email: "erica.dawson@mail.com",
    street: "145 Luxury Lane",
    city: "Beverly Hills",
    state: "California",
    zipcode: 90210,
    country: "US",
    phone: "+1-555-901-2345",
  },
  {
    _id: "67b5b9e54ea97fdfgdbcsd5",
    userId: "68591d36daf423db94fa8f4f",
    firstName: "Mia",
    lastName: "Chen",
    email: "mia.chen@example.com",
    street: "22 Beauty Blvd, Apt 4B",
    city: "New York",
    state: "NY",
    zipcode: "10001",
    country: "United States",
    phone: "917-555-0101",
  },
];

export const dummyOrdersData = [
  {
    _id: "685a5bbfaff57babcdfcc171",
    userId: "68591d36daf423db94fa8f4f",
    items: [
      {
        product: dummyProducts[0], // Volume Boost Mascara
        quantity: 1,
        size: "Standard",
        _id: "685a5bbfaff57babcdfcc172",
      },
      {
        product: dummyProducts[14], // Liquid Matte Lipstick
        quantity: 2,
        size: "Standard",
        _id: "685a5bbfaff57babcdfcc173",
      },
      {
        product: dummyProducts[21], // Contour & Highlight Duo
        quantity: 1,
        size: "Standard",
        _id: "685a5bbfaff57babcdfcc179",
      },
    ],
    // dummyProducts[0] price: 28 + (dummyProducts[14] price: 32 * 2) + dummyProducts[21] price: 48 = 140
    amount: 140.0, 
    address: dummyAddress[0],
    status: "Out for delivery",
    paymentMethod: "COD",
    isPaid: false,
    createdAt: "2025-09-10T08:03:11.197+00:00",
    updatedAt: "2025-09-10T11:02:04.631+00:00",
    __v: 0,
  },
  {
    _id: "685a5bbfaff57babcdfcc174",
    userId: "68591d36daf423db94fa8f4f",
    items: [
      {
        product: dummyProducts[4], // Matte Lipstick Set
        quantity: 1,
        size: "3-Piece",
        _id: "685a5bbfaff57babcdfcc175",
      },
      {
        product: dummyProducts[10], // Nude Everyday Palette
        quantity: 3,
        size: "6-Pan",
        _id: "685a5bbfaff57babcdfcc176",
      },
    ],
    // dummyProducts[4] price: 75 + (dummyProducts[10] price: 45 * 3) = 210
    amount: 210.0, 
    address: dummyAddress[1],
    status: "Delivered",
    paymentMethod: "Online",
    isPaid: true,
    createdAt: "2025-10-15T09:15:45.197+00:00",
    updatedAt: "2025-10-18T11:30:04.631+00:00",
    __v: 0,
  },
];


// Dashboard Dummy Data
export const dummyDashboardData = {
    "totalOrders": 2,
    "totalRevenue": 897,
    "orders": dummyOrdersData
}
