import orange from "../assets/orange.png"
import bagc from "../assets/bagc.jpg"
import furc from "../assets/furc.jpg"
import cetac from "../assets/cetac.jpg"
import mixc from "../assets/mixc.jpg"
import iphone15 from "../assets/iphone15.jpg"
import pro from "../assets/pro.png"
import iphone14 from "../assets/iphone14.jpg"
import sams244 from "../assets/sams244.jpg"
import s24galaxy from "../assets/s24galaxy.jpg"
import a55 from "../assets/a55.jpg"
import plus1 from "../assets/plus1.png"
import pixel8 from "../assets/pixel8.png"
import redmi from "../assets/redmi.png"
import vivo from "../assets/vivo.png"
import nike from "../assets/nike.png"
import puma2 from "../assets/puma2.png"
import ultraboot from "../assets/ultraboot.png"
import fossilneutra from "../assets/fossilneutra.png"
import titan from "../assets/titan.png"
import wild from "../assets/wild.png"
import lave from "../assets/lave.png"
import jacket from "../assets/jacket.png"
import shirt from "../assets/shirt.png"
import glass from "../assets/glass.png"
import sofa from "../assets/sofa.png"
import greenchair from "../assets/greenchair.png"
import table from "../assets/table.png"
import bed from "../assets/bed.png"
import light from "../assets/light.png"
import shelf from "../assets/shelf.png"
import vase from "../assets/vase.png"
import ortho from "../assets/ortho.png"
import rug from "../assets/rug.png"
import mirror from "../assets/mirror.png"
import cetaphil from "../assets/cetaphil.png"
import neut from "../assets/neut.png"
import mini from "../assets/mini.png"
import loreal from "../assets/loreal.png"
import airwrap from "../assets/airwrap.png"
import calvin from "../assets/calvin.png"
import davidof from "../assets/davidof.png"
import multi from "../assets/multi.png"
import fitme from "../assets/fitme.png"
import lakme from "../assets/lakme.png"
import airfryer from "../assets/airfryer.png"
import presti from "../assets/presti.png"
import coffee from "../assets/coffee.png"
import bajaj from "../assets/bajaj.png"
import fridge from "../assets/fridge.png"
import lg from "../assets/lg.png"
import micro from "../assets/micro.png"
import slicer from "../assets/slicer.png"
import stove from "../assets/stove.png"
import kettle from "../assets/kettle.png"

































export const CATEGORIES = [
  { slug: "mobiles-electronics", name: "Mobiles & Electronics",images:orange},
  { slug: "fashion-accessories", name: "Fashion & Accessories",images:bagc },
  { slug: "home-furniture", name: "Home & Furniture",images:furc},
  { slug: "beauty-personal-care", name: "Beauty & Personal Care",images:cetac },
  { slug: "appliances-kitchen", name: "Appliances & Kitchen",images:mixc},
];

const RAW_PRODUCTS = [
  {
    id: 1,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Apple",
    name: "iPhone 15",
    price: 69900,
    mrp: 79900,
    rating: 4.6,
    reviews: 12840,
    stock: 25,
    searchKeywords: "iphone",
    images: [iphone15
     
    ],
    colors: ["Black", "Blue", "Pink"],
    optionLabel: "Storage",
    options: ["128GB", "256GB", "512GB"],
    specs: { "Display": "6.1\" Super Retina XDR", "Chip": "A16 Bionic", "Camera": "48MP + 12MP", "Battery": "All-day" },
    description: "iPhone 15 by Apple brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 2,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Apple",
    name: "iPhone 15 Pro",
    price: 119900,
    mrp: 134900,
    rating: 4.7,
    reviews: 9320,
    stock: 12,
    searchKeywords: "iphone,titanium",
    images: [pro
     
    ],
    colors: ["Natural", "Blue", "Black"],
    optionLabel: "Storage",
    options: ["256GB", "512GB", "1TB"],
    specs: { "Display": "6.1\" ProMotion", "Chip": "A17 Pro", "Camera": "48MP triple", "Body": "Titanium" },
    description: "iPhone 15 Pro by Apple brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 3,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Apple",
    name: "iPhone 14",
    price: 58900,
    mrp: 69900,
    rating: 4.5,
    reviews: 20110,
    stock: 30,
    searchKeywords: "iphone,apple",
    images: [
    iphone14
    ],
    colors: ["Midnight", "Purple", "Red"],
    optionLabel: "Storage",
    options: ["128GB", "256GB"],
    specs: { "Display": "6.1\" OLED", "Chip": "A15 Bionic", "Camera": "12MP dual", "Battery": "3279 mAh" },
    description: "iPhone 14 by Apple brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 4,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    price: 129999,
    mrp: 139999,
    rating: 4.6,
    reviews: 8450,
    stock: 15,
    searchKeywords: "samsung,smartphone",
    images: [
    sams244
    ],
    colors: ["Titanium Gray", "Black", "Violet"],
    optionLabel: "Storage",
    options: ["256GB", "512GB", "1TB"],
    specs: { "Display": "6.8\" Dynamic AMOLED", "Chip": "Snapdragon 8 Gen 3", "Camera": "200MP", "Battery": "5000 mAh" },
    description: "Galaxy S24 Ultra by Samsung brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 5,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Samsung",
    name: "Galaxy S24",
    price: 74999,
    mrp: 89999,
    rating: 4.5,
    reviews: 7210,
    stock: 20,
    searchKeywords: "samsung,phone",
    images: [
      s24galaxy
    ],
    colors: ["Onyx", "Marble Gray", "Amber"],
    optionLabel: "Storage",
    options: ["128GB", "256GB"],
    specs: { "Display": "6.2\" AMOLED 120Hz", "Chip": "Exynos 2400", "Camera": "50MP", "Battery": "4000 mAh" },
    description: "Galaxy S24 by Samsung brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 6,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Samsung",
    name: "Galaxy A55 5G",
    price: 39999,
    mrp: 44999,
    rating: 4.3,
    reviews: 15600,
    stock: 40,
    searchKeywords: "samsung,mobile",
    images: [
      a55
    ],
    colors: ["Navy", "Lilac", "Lemon"],
    optionLabel: "RAM + Storage",
    options: ["8GB+128GB", "8GB+256GB"],
    specs: { "Display": "6.6\" Super AMOLED", "Chip": "Exynos 1480", "Camera": "50MP OIS", "Battery": "5000 mAh" },
    description: "Galaxy A55 5G by Samsung brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 7,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "OnePlus",
    name: "OnePlus 12",
    price: 64999,
    mrp: 69999,
    rating: 4.5,
    reviews: 11300,
    stock: 18,
    searchKeywords: "oneplus,smartphone",
    images: [
    plus1
    ],
    colors: ["Flowy Emerald", "Silky Black"],
    optionLabel: "RAM + Storage",
    options: ["12GB+256GB", "16GB+512GB"],
    specs: { "Display": "6.82\" LTPO AMOLED", "Chip": "Snapdragon 8 Gen 3", "Charging": "100W", "Camera": "50MP Hasselblad" },
    description: "OnePlus 12 by OnePlus brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 8,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Google",
    name: "Pixel 8",
    price: 62999,
    mrp: 75999,
    rating: 4.4,
    reviews: 5400,
    stock: 10,
    searchKeywords: "pixel,smartphone",
    images: [
      pixel8
    ],
    colors: ["Obsidian", "Hazel", "Rose"],
    optionLabel: "Storage",
    options: ["128GB", "256GB"],
    specs: { "Display": "6.2\" OLED", "Chip": "Tensor G3", "Camera": "50MP", "Updates": "7 years" },
    description: "Pixel 8 by Google brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 9,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Xiaomi",
    name: "Redmi Note 13 Pro",
    price: 24999,
    mrp: 29999,
    rating: 4.3,
    reviews: 32100,
    stock: 60,
    searchKeywords: "xiaomi,mobile",
    images: [
     redmi
    ],
    colors: ["Midnight Black", "Arctic White", "Coral Purple"],
    optionLabel: "RAM + Storage",
    options: ["8GB+128GB", "12GB+256GB"],
    specs: { "Display": "6.67\" AMOLED", "Camera": "200MP", "Charging": "67W", "Battery": "5100 mAh" },
    description: "Redmi Note 13 Pro by Xiaomi brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 10,
    category: "mobiles-electronics",
    subcategory: "Smartphones",
    brand: "Vivo",
    name: "Vivo V30 5G",
    price: 33999,
    mrp: 37999,
    rating: 4.2,
    reviews: 9870,
    stock: 35,
    searchKeywords: "vivo,phone",
    images: [
      vivo
    ],
    colors: ["Andaman Blue", "Peacock Green"],
    optionLabel: "RAM + Storage",
    options: ["8GB+128GB", "12GB+512GB"],
    specs: { "Display": "6.78\" AMOLED", "Camera": "50MP Aura Light", "Charging": "80W", "Battery": "5000 mAh" },
    description: "Vivo V30 5G by Vivo brings dependable quality and everyday value to your smartphones needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 11,
    category: "fashion-accessories",
    subcategory: "Footwear",
    brand: "Nike",
    name: "Air Zoom Running Sneakers",
    price: 7495,
    mrp: 9995,
    rating: 4.5,
    reviews: 6120,
    stock: 45,
    searchKeywords: "sneakers,shoes",
    images: [
     nike
    ],
    colors: ["Black", "White", "Blue"],
    optionLabel: "Size",
    options: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    specs: { "Type": "Running", "Upper": "Breathable mesh", "Sole": "Rubber", "Fit": "Regular" },
    description: "Air Zoom Running Sneakers by Nike brings dependable quality and everyday value to your footwear needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 12,
    category: "fashion-accessories",
    subcategory: "Footwear",
    brand: "Puma",
    name: "Court Casual Shoes",
    price: 3499,
    mrp: 5999,
    rating: 4.2,
    reviews: 8210,
    stock: 50,
    searchKeywords: "casual,shoes",
    images: [
     puma2
    ],
    colors: ["White", "Navy", "Grey"],
    optionLabel: "Size",
    options: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    specs: { "Type": "Casual", "Upper": "Synthetic leather", "Sole": "EVA", "Closure": "Lace-up" },
    description: "Court Casual Shoes by Puma brings dependable quality and everyday value to your footwear needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 13,
    category: "fashion-accessories",
    subcategory: "Footwear",
    brand: "Adidas",
    name: "Ultraboost Trainers",
    price: 12999,
    mrp: 17999,
    rating: 4.6,
    reviews: 3950,
    stock: 20,
    searchKeywords: "trainers,shoes",
    images: [
     ultraboot
    ],
    colors: ["Cloud White", "Core Black"],
    optionLabel: "Size",
    options: ["UK 7", "UK 8", "UK 9", "UK 10"],
    specs: { "Type": "Training", "Midsole": "Boost", "Upper": "Primeknit", "Weight": "310g" },
    description: "Ultraboost Trainers by Adidas brings dependable quality and everyday value to your footwear needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 14,
    category: "fashion-accessories",
    subcategory: "Watches",
    brand: "Fossil",
    name: "Chronograph Steel Watch",
    price: 8995,
    mrp: 13995,
    rating: 4.4,
    reviews: 2700,
    stock: 25,
    searchKeywords: "wristwatch,watch",
    images: [
     fossilneutra
    ],
    colors: ["Silver", "Black", "Rose Gold"],
    optionLabel: "Strap",
    options: ["Steel", "Leather"],
    specs: { "Movement": "Quartz", "Case": "44mm", "Water resistance": "5 ATM", "Warranty": "2 years" },
    description: "Chronograph Steel Watch by Fossil brings dependable quality and everyday value to your watches needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 15,
    category: "fashion-accessories",
    subcategory: "Watches",
    brand: "Titan",
    name: "Slim Classic Watch",
    price: 5495,
    mrp: 6995,
    rating: 4.3,
    reviews: 5340,
    stock: 40,
    searchKeywords: "watch,analog",
    images: [
    titan
    ],
    colors: ["Brown", "Black"],
    optionLabel: "Strap",
    options: ["Leather", "Mesh"],
    specs: { "Movement": "Quartz", "Case": "38mm", "Glass": "Sapphire", "Display": "Analog" },
    description: "Slim Classic Watch by Titan brings dependable quality and everyday value to your watches needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 16,
    category: "fashion-accessories",
    subcategory: "Bags",
    brand: "Wildcraft",
    name: "Urban 30L Backpack",
    price: 1899,
    mrp: 2999,
    rating: 4.4,
    reviews: 14220,
    stock: 70,
    searchKeywords: "backpack",
    images: [
      wild
    ],
    colors: ["Black", "Navy", "Olive"],
    optionLabel: "Capacity",
    options: ["30L", "40L"],
    specs: { "Laptop": "Up to 15.6\"", "Material": "Ripstop", "Pockets": "6", "Rain cover": "Included" },
    description: "Urban 30L Backpack by Wildcraft brings dependable quality and everyday value to your bags needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 17,
    category: "fashion-accessories",
    subcategory: "Bags",
    brand: "Lavie",
    name: "Leather Tote Handbag",
    price: 3299,
    mrp: 5499,
    rating: 4.1,
    reviews: 3100,
    stock: 30,
    searchKeywords: "handbag",
    images: [
     lave
    ],
    colors: ["Tan", "Black", "Wine"],
    optionLabel: "Size",
    options: ["Medium", "Large"],
    specs: { "Material": "Faux leather", "Closure": "Zip", "Compartments": "3", "Strap": "Detachable" },
    description: "Leather Tote Handbag by Lavie brings dependable quality and everyday value to your bags needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 18,
    category: "fashion-accessories",
    subcategory: "Clothing",
    brand: "Levi's",
    name: "Trucker Denim Jacket",
    price: 3999,
    mrp: 5999,
    rating: 4.4,
    reviews: 4260,
    stock: 35,
    searchKeywords: "denim,jacket",
    images: [
      jacket
    ],
    colors: ["Indigo", "Black"],
    optionLabel: "Size",
    options: ["S", "M", "L", "XL"],
    specs: { "Fabric": "Cotton denim", "Fit": "Regular", "Sleeves": "Full", "Wash": "Machine" },
    description: "Trucker Denim Jacket by Levi's brings dependable quality and everyday value to your clothing needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 19,
    category: "fashion-accessories",
    subcategory: "Clothing",
    brand: "Arrow",
    name: "Slim Fit Formal Shirt",
    price: 1599,
    mrp: 2799,
    rating: 4.2,
    reviews: 9870,
    stock: 80,
    searchKeywords: "shirt,formal",
    images: [
    shirt
    ],
    colors: ["White", "Sky Blue", "Lavender"],
    optionLabel: "Size",
    options: ["S", "M", "L", "XL", "XXL"],
    specs: { "Fabric": "Cotton blend", "Fit": "Slim", "Collar": "Spread", "Care": "Machine wash" },
    description: "Slim Fit Formal Shirt by Arrow brings dependable quality and everyday value to your clothing needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 20,
    category: "fashion-accessories",
    subcategory: "Accessories",
    brand: "Ray-Ban",
    name: "Aviator Sunglasses",
    price: 8990,
    mrp: 10990,
    rating: 4.6,
    reviews: 2980,
    stock: 22,
    searchKeywords: "sunglasses",
    images: [
      glass
    ],
    colors: ["Gold", "Silver", "Black"],
    optionLabel: "Lens",
    options: ["Green", "Grey"],
    specs: { "Frame": "Metal", "Lens": "Polarized option", "UV": "100% protection", "Fit": "Medium" },
    description: "Aviator Sunglasses by Ray-Ban brings dependable quality and everyday value to your accessories needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 21,
    category: "home-furniture",
    subcategory: "Living Room",
    brand: "Wakefit",
    name: "3-Seater Fabric Sofa",
    price: 24999,
    mrp: 42999,
    rating: 4.3,
    reviews: 1840,
    stock: 8,
    searchKeywords: "sofa,livingroom",
    images: [
    sofa
    ],
    colors: ["Grey", "Beige", "Teal"],
    optionLabel: "Fabric",
    options: ["Linen", "Velvet"],
    specs: { "Seats": "3", "Frame": "Solid wood", "Foam": "High resilience", "Assembly": "Included" },
    description: "3-Seater Fabric Sofa by Wakefit brings dependable quality and everyday value to your living room needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 22,
    category: "home-furniture",
    subcategory: "Office",
    brand: "Green Soul",
    name: "Ergonomic Office Chair",
    price: 8999,
    mrp: 15999,
    rating: 4.4,
    reviews: 6720,
    stock: 28,
    searchKeywords: "office,chair",
    images: [
      greenchair
    ],
    colors: ["Black", "Grey"],
    optionLabel: "Back",
    options: ["Mesh", "Mesh + Headrest"],
    specs: { "Lumbar": "Adjustable", "Armrest": "3D", "Tilt": "Synchro", "Weight limit": "120kg" },
    description: "Ergonomic Office Chair by Green Soul brings dependable quality and everyday value to your office needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 23,
    category: "home-furniture",
    subcategory: "Living Room",
    brand: "Urban Ladder",
    name: "Walnut Coffee Table",
    price: 6999,
    mrp: 10999,
    rating: 4.2,
    reviews: 1430,
    stock: 15,
    searchKeywords: "coffee,table",
    images: [
      table
    ],
    colors: ["Walnut", "Oak"],
    optionLabel: "Size",
    options: ["Small", "Large"],
    specs: { "Material": "Engineered wood", "Storage": "Lower shelf", "Finish": "Matte", "Assembly": "DIY" },
    description: "Walnut Coffee Table by Urban Ladder brings dependable quality and everyday value to your living room needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 24,
    category: "home-furniture",
    subcategory: "Bedroom",
    brand: "Sleepyhead",
    name: "Upholstered Queen Bed",
    price: 27999,
    mrp: 45999,
    rating: 4.3,
    reviews: 990,
    stock: 6,
    searchKeywords: "bedroom,bed",
    images: [
    bed
    ],
    colors: ["Charcoal", "Cream"],
    optionLabel: "Storage",
    options: ["Without", "Hydraulic"],
    specs: { "Size": "Queen", "Headboard": "Cushioned", "Frame": "Solid wood", "Warranty": "3 years" },
    description: "Upholstered Queen Bed by Sleepyhead brings dependable quality and everyday value to your bedroom needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 25,
    category: "home-furniture",
    subcategory: "Lighting",
    brand: "Philips",
    name: "Smart LED Table Lamp",
    price: 1799,
    mrp: 2499,
    rating: 4.5,
    reviews: 7410,
    stock: 55,
    searchKeywords: "desk,lamp",
    images: [
    light
    ],
    colors: ["White", "Black"],
    optionLabel: "Mode",
    options: ["Warm", "Smart RGB"],
    specs: { "Power": "9W", "Control": "App + touch", "Colors": "16M", "Warranty": "2 years" },
    description: "Smart LED Table Lamp by Philips brings dependable quality and everyday value to your lighting needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 26,
    category: "home-furniture",
    subcategory: "Storage",
    brand: "Nilkamal",
    name: "5-Shelf Bookshelf",
    price: 4299,
    mrp: 6999,
    rating: 4.1,
    reviews: 3380,
    stock: 18,
    searchKeywords: "bookshelf",
    images: [
     shelf
    ],
    colors: ["Wenge", "Natural"],
    optionLabel: "Finish",
    options: ["Matte", "Gloss"],
    specs: { "Shelves": "5", "Material": "Engineered wood", "Load per shelf": "15kg", "Assembly": "DIY" },
    description: "5-Shelf Bookshelf by Nilkamal brings dependable quality and everyday value to your storage needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 27,
    category: "home-furniture",
    subcategory: "Decor",
    brand: "Home Centre",
    name: "Ceramic Vase Set of 3",
    price: 1299,
    mrp: 2199,
    rating: 4.3,
    reviews: 2110,
    stock: 60,
    searchKeywords: "vase,decor",
    images: [
      vase
    ],
    colors: ["White", "Terracotta"],
    optionLabel: "Set",
    options: ["Set of 3", "Set of 5"],
    specs: { "Material": "Ceramic", "Finish": "Glazed", "Use": "Dry flowers", "Care": "Wipe clean" },
    description: "Ceramic Vase Set of 3 by Home Centre brings dependable quality and everyday value to your decor needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 28,
    category: "home-furniture",
    subcategory: "Bedroom",
    brand: "Sleepwell",
    name: "Orthopedic Memory Foam Mattress",
    price: 12499,
    mrp: 21999,
    rating: 4.5,
    reviews: 8540,
    stock: 14,
    searchKeywords: "mattress",
    images: [
      ortho
    ],
    colors: ["White"],
    optionLabel: "Size",
    options: ["Single", "Queen", "King"],
    specs: { "Thickness": "8\"", "Foam": "Memory + HR", "Cover": "Removable", "Warranty": "10 years" },
    description: "Orthopedic Memory Foam Mattress by Sleepwell brings dependable quality and everyday value to your bedroom needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 29,
    category: "home-furniture",
    subcategory: "Living Room",
    brand: "Story@Home",
    name: "Wool Blend Area Rug",
    price: 2799,
    mrp: 4999,
    rating: 4.2,
    reviews: 1620,
    stock: 26,
    searchKeywords: "rug,carpet",
    images: [
      rug
    ],
    colors: ["Grey", "Blue", "Ivory"],
    optionLabel: "Size",
    options: ["4x6 ft", "5x8 ft"],
    specs: { "Pile": "Medium", "Material": "Wool blend", "Backing": "Anti-slip", "Care": "Vacuum" },
    description: "Wool Blend Area Rug by Story@Home brings dependable quality and everyday value to your living room needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 30,
    category: "home-furniture",
    subcategory: "Decor",
    brand: "Cello",
    name: "Wall Mirror Round 60cm",
    price: 2199,
    mrp: 3499,
    rating: 4.4,
    reviews: 2890,
    stock: 33,
    searchKeywords: "mirror",
    images: [
     mirror
    ],
    colors: ["Gold", "Black"],
    optionLabel: "Diameter",
    options: ["60cm", "80cm"],
    specs: { "Frame": "Metal", "Glass": "HD", "Mounting": "Wall", "Shape": "Round" },
    description: "Wall Mirror Round 60cm by Cello brings dependable quality and everyday value to your decor needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 31,
    category: "beauty-personal-care",
    subcategory: "Skincare",
    brand: "Cetaphil",
    name: "Gentle Skin Cleanser",
    price: 449,
    mrp: 599,
    rating: 4.6,
    reviews: 21400,
    stock: 120,
    searchKeywords: "skincare,cleanser",
    images: [
     cetaphil
    ],
    colors: [],
    optionLabel: "Size",
    options: ["125ml", "250ml"],
    specs: { "Skin type": "Sensitive", "Fragrance": "Free", "Use": "Daily", "pH": "Balanced" },
    description: "Gentle Skin Cleanser by Cetaphil brings dependable quality and everyday value to your skincare needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 32,
    category: "beauty-personal-care",
    subcategory: "Skincare",
    brand: "Neutrogena",
    name: "Hydro Boost Water Gel",
    price: 899,
    mrp: 1199,
    rating: 4.5,
    reviews: 13200,
    stock: 90,
    searchKeywords: "moisturizer",
    images: [
      neut
    ],
    colors: [],
    optionLabel: "Size",
    options: ["50g", "100g"],
    specs: { "Key": "Hyaluronic acid", "Skin type": "Dry", "Finish": "Oil-free", "Use": "AM/PM" },
    description: "Hydro Boost Water Gel by Neutrogena brings dependable quality and everyday value to your skincare needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 33,
    category: "beauty-personal-care",
    subcategory: "Skincare",
    brand: "Minimalist",
    name: "10% Vitamin C Serum",
    price: 649,
    mrp: 799,
    rating: 4.4,
    reviews: 18900,
    stock: 100,
    searchKeywords: "serum",
    images: [
     mini
    ],
    colors: [],
    optionLabel: "Size",
    options: ["30ml"],
    specs: { "Key": "Vitamin C", "Benefit": "Brightening", "Use": "Morning", "Dermatologist": "Tested" },
    description: "10% Vitamin C Serum by Minimalist brings dependable quality and everyday value to your skincare needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 34,
    category: "beauty-personal-care",
    subcategory: "Haircare",
    brand: "L'Oreal",
    name: "Total Repair Shampoo",
    price: 399,
    mrp: 520,
    rating: 4.3,
    reviews: 25100,
    stock: 140,
    searchKeywords: "shampoo",
    images: [
      loreal
    ],
    colors: [],
    optionLabel: "Size",
    options: ["340ml", "650ml"],
    specs: { "Hair type": "Damaged", "Free from": "Parabens", "Use": "Daily", "Scent": "Fresh" },
    description: "Total Repair Shampoo by L'Oreal brings dependable quality and everyday value to your haircare needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 35,
    category: "beauty-personal-care",
    subcategory: "Haircare",
    brand: "Dyson",
    name: "Airwrap-style Hair Styler",
    price: 36900,
    mrp: 44900,
    rating: 4.5,
    reviews: 2100,
    stock: 9,
    searchKeywords: "hairdryer",
    images: [
      airwrap
    ],
    colors: ["Nickel", "Fuchsia"],
    optionLabel: "Edition",
    options: ["Standard", "Complete"],
    specs: { "Attachments": "6", "Heat": "Controlled", "Motor": "Digital", "Warranty": "2 years" },
    description: "Airwrap-style Hair Styler by Dyson brings dependable quality and everyday value to your haircare needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 36,
    category: "beauty-personal-care",
    subcategory: "Fragrance",
    brand: "Calvin Klein",
    name: "CK One Eau de Toilette",
    price: 2999,
    mrp: 4600,
    rating: 4.5,
    reviews: 5220,
    stock: 40,
    searchKeywords: "perfume",
    images: [
     calvin
    ],
    colors: [],
    optionLabel: "Size",
    options: ["50ml", "100ml"],
    specs: { "Family": "Citrus aromatic", "Type": "EDT", "Longevity": "6-8h", "Gender": "Unisex" },
    description: "CK One Eau de Toilette by Calvin Klein brings dependable quality and everyday value to your fragrance needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 37,
    category: "beauty-personal-care",
    subcategory: "Fragrance",
    brand: "Davidoff",
    name: "Cool Water Men EDT",
    price: 2499,
    mrp: 3900,
    rating: 4.4,
    reviews: 4310,
    stock: 38,
    searchKeywords: "cologne,perfume",
    images: [
      davidof
    ],
    colors: [],
    optionLabel: "Size",
    options: ["75ml", "125ml"],
    specs: { "Family": "Aquatic", "Type": "EDT", "Longevity": "5-7h", "Gender": "Men" },
    description: "Cool Water Men EDT by Davidoff brings dependable quality and everyday value to your fragrance needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 38,
    category: "beauty-personal-care",
    subcategory: "Grooming",
    brand: "Philips",
    name: "Multigroom 7000 Trimmer",
    price: 2299,
    mrp: 3295,
    rating: 4.4,
    reviews: 27400,
    stock: 65,
    searchKeywords: "trimmer,grooming",
    images: [
     multi
    ],
    colors: ["Black"],
    optionLabel: "Pack",
    options: ["Trimmer", "Trimmer + Kit"],
    specs: { "Blades": "Steel", "Runtime": "120 min", "Charge": "Fast", "Waterproof": "Yes" },
    description: "Multigroom 7000 Trimmer by Philips brings dependable quality and everyday value to your grooming needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 39,
    category: "beauty-personal-care",
    subcategory: "Makeup",
    brand: "Maybelline",
    name: "Fit Me Foundation",
    price: 549,
    mrp: 699,
    rating: 4.2,
    reviews: 16800,
    stock: 110,
    searchKeywords: "foundation,makeup",
    images: [
     fitme
    ],
    colors: ["Ivory", "Natural", "Warm"],
    optionLabel: "Shade",
    options: ["110", "220", "310"],
    specs: { "Finish": "Matte", "SPF": "18", "Coverage": "Medium", "Skin type": "Normal to oily" },
    description: "Fit Me Foundation by Maybelline brings dependable quality and everyday value to your makeup needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 40,
    category: "beauty-personal-care",
    subcategory: "Skincare",
    brand: "Lakme",
    name: "Sunscreen SPF 50 Gel",
    price: 399,
    mrp: 550,
    rating: 4.3,
    reviews: 9030,
    stock: 130,
    searchKeywords: "sunscreen",
    images: [
      lakme
    ],
    colors: [],
    optionLabel: "Size",
    options: ["50ml", "100ml"],
    specs: { "SPF": "50 PA+++", "Finish": "No white cast", "Use": "Daily", "Skin type": "All" },
    description: "Sunscreen SPF 50 Gel by Lakme brings dependable quality and everyday value to your skincare needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 41,
    category: "appliances-kitchen",
    subcategory: "Kitchen",
    brand: "Philips",
    name: "Digital Air Fryer 4.1L",
    price: 7499,
    mrp: 11995,
    rating: 4.5,
    reviews: 18700,
    stock: 30,
    searchKeywords: "airfryer",
    images: [
     airfryer
    ],
    colors: ["Black", "White"],
    optionLabel: "Capacity",
    options: ["4.1L", "6.2L"],
    specs: { "Power": "1400W", "Preset": "7", "Technology": "Rapid Air", "Warranty": "2 years" },
    description: "Digital Air Fryer 4.1L by Philips brings dependable quality and everyday value to your kitchen needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 42,
    category: "appliances-kitchen",
    subcategory: "Kitchen",
    brand: "Prestige",
    name: "Mixer Grinder 750W",
    price: 3299,
    mrp: 4895,
    rating: 4.3,
    reviews: 22340,
    stock: 50,
    searchKeywords: "mixer,grinder",
    images: [
    presti
    ],
    colors: ["Black", "Red"],
    optionLabel: "Jars",
    options: ["3 Jars", "4 Jars"],
    specs: { "Power": "750W", "Speed": "3 + pulse", "Blades": "Stainless", "Warranty": "2 years" },
    description: "Mixer Grinder 750W by Prestige brings dependable quality and everyday value to your kitchen needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 43,
    category: "appliances-kitchen",
    subcategory: "Kitchen",
    brand: "Nespresso",
    name: "Vertuo Coffee Machine",
    price: 14990,
    mrp: 19990,
    rating: 4.6,
    reviews: 3650,
    stock: 16,
    searchKeywords: "coffee,machine",
    images: [
     coffee
    ],
    colors: ["Black", "Chrome"],
    optionLabel: "Pack",
    options: ["Machine", "Bundle"],
    specs: { "Pressure": "19 bar", "Tank": "1.1L", "Heat-up": "25s", "Capsules": "Vertuo" },
    description: "Vertuo Coffee Machine by Nespresso brings dependable quality and everyday value to your kitchen needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 44,
    category: "appliances-kitchen",
    subcategory: "Kitchen",
    brand: "Bajaj",
    name: "Juicer Blender 500W",
    price: 2199,
    mrp: 3190,
    rating: 4.1,
    reviews: 9810,
    stock: 60,
    searchKeywords: "blender",
    images: [
      bajaj
    ],
    colors: ["White", "Blue"],
    optionLabel: "Jar",
    options: ["1.5L", "2L"],
    specs: { "Power": "500W", "Jars": "2", "Blades": "Stainless", "Warranty": "2 years" },
    description: "Juicer Blender 500W by Bajaj brings dependable quality and everyday value to your kitchen needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 45,
    category: "appliances-kitchen",
    subcategory: "Large Appliances",
    brand: "Samsung",
    name: "Double Door Refrigerator 253L",
    price: 26990,
    mrp: 34990,
    rating: 4.4,
    reviews: 7400,
    stock: 10,
    searchKeywords: "refrigerator",
    images: [
     fridge
    ],
    colors: ["Silver", "Black"],
    optionLabel: "Capacity",
    options: ["253L", "301L"],
    specs: { "Type": "Frost free", "Rating": "3 star", "Inverter": "Digital", "Warranty": "1 + 20 yrs" },
    description: "Double Door Refrigerator 253L by Samsung brings dependable quality and everyday value to your large appliances needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 46,
    category: "appliances-kitchen",
    subcategory: "Large Appliances",
    brand: "LG",
    name: "7kg Front Load Washer",
    price: 31990,
    mrp: 42990,
    rating: 4.5,
    reviews: 5260,
    stock: 9,
    searchKeywords: "washing,machine",
    images: [
    lg
    ],
    colors: ["White", "Graphite"],
    optionLabel: "Capacity",
    options: ["7kg", "8kg"],
    specs: { "Type": "Front load", "RPM": "1200", "Steam": "Yes", "Rating": "5 star" },
    description: "7kg Front Load Washer by LG brings dependable quality and everyday value to your large appliances needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 47,
    category: "appliances-kitchen",
    subcategory: "Large Appliances",
    brand: "IFB",
    name: "25L Convection Microwave",
    price: 11990,
    mrp: 15990,
    rating: 4.3,
    reviews: 6820,
    stock: 14,
    searchKeywords: "microwave",
    images: [
      micro
    ],
    colors: ["Black", "Silver"],
    optionLabel: "Capacity",
    options: ["25L", "30L"],
    specs: { "Type": "Convection", "Presets": "71 menus", "Child lock": "Yes", "Warranty": "1 year" },
    description: "25L Convection Microwave by IFB brings dependable quality and everyday value to your large appliances needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 48,
    category: "appliances-kitchen",
    subcategory: "Kitchen",
    brand: "Morphy Richards",
    name: "2-Slice Pop-up Toaster",
    price: 1599,
    mrp: 2495,
    rating: 4.2,
    reviews: 8100,
    stock: 45,
    searchKeywords: "toaster",
    images: [
      slicer
    ],
    colors: ["Steel"],
    optionLabel: "Slices",
    options: ["2", "4"],
    specs: { "Power": "800W", "Browning": "6 levels", "Crumb tray": "Removable", "Warranty": "2 years" },
    description: "2-Slice Pop-up Toaster by Morphy Richards brings dependable quality and everyday value to your kitchen needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 49,
    category: "appliances-kitchen",
    subcategory: "Kitchen",
    brand: "Pigeon",
    name: "Induction Cooktop 1800W",
    price: 1899,
    mrp: 2995,
    rating: 4.1,
    reviews: 31200,
    stock: 75,
    searchKeywords: "induction,cooktop",
    images: [
     stove
    ],
    colors: ["Black"],
    optionLabel: "Menu",
    options: ["Basic", "Preset menus"],
    specs: { "Power": "1800W", "Control": "Push button", "Safety": "Auto cut-off", "Warranty": "1 year" },
    description: "Induction Cooktop 1800W by Pigeon brings dependable quality and everyday value to your kitchen needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
  {
    id: 50,
    category: "appliances-kitchen",
    subcategory: "Kitchen",
    brand: "Havells",
    name: "Electric Kettle 1.5L",
    price: 1099,
    mrp: 1795,
    rating: 4.4,
    reviews: 19500,
    stock: 90,
    searchKeywords: "kettle",
    images: [
     kettle
    ],
    colors: ["Steel", "Black"],
    optionLabel: "Capacity",
    options: ["1.5L", "1.8L"],
    specs: { "Power": "1500W", "Body": "Stainless", "Auto shut-off": "Yes", "Warranty": "2 years" },
    description: "Electric Kettle 1.5L by Havells brings dependable quality and everyday value to your kitchen needs. Selected for NexaMart with a 7-day return window and a demo warranty.",
  },
];

// Shown if an image link is broken
export const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><rect width='600' height='600' fill='#BDD8E9'/><text x='300' y='310' font-family='Arial' font-size='26' fill='#0A4174' text-anchor='middle'>NexaMart</text></svg>"
  );

// ---- Do not edit below: it adds discount %, category name and other helper fields ----
export const PRODUCTS = RAW_PRODUCTS.map((p) => ({
  ...p,
  categoryName: CATEGORIES.find((c) => c.slug === p.category).name,
  sub: p.subcategory,
  keyword: p.searchKeywords,
  discount: Math.round((1 - p.price / p.mrp) * 100),
  added: (p.id * 37) % 50, // simulated release order: higher = newer
  specs: Object.entries(p.specs),
}));

export const BY_ID = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
export const BRANDS = [...new Set(PRODUCTS.map((p) => p.brand))].sort();
export const money = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

// Case-insensitive partial-word search over brand, name, category, subcategory, keywords
export function searchProducts(query) {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  return PRODUCTS.filter((p) => {
    const hay = `${p.brand} ${p.name} ${p.categoryName} ${p.sub} ${p.keyword.replace(/,/g, " ")}`.toLowerCase();
    return tokens.every((t) => hay.includes(t));
  });
}
