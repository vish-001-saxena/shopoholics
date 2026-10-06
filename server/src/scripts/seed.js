import 'dotenv/config'; import {connectDB} from '../config/db.js'; import mongoose from 'mongoose'; import Product from '../models/Product.js';
const products=[
['Aurora Lounge Chair','Minimal upholstered lounge chair with a soft silhouette for modern living rooms.',12999,'furniture','https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80',4.8,true],
['Nordic Coffee Table','Clean oak coffee table with rounded edges and a warm natural finish.',7499,'furniture','https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=80',4.7,true],
['Everyday Backpack','Water-resistant everyday backpack with padded laptop compartment.',2499,'accessories','https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',4.6,false],
['Cloud Running Shoes','Lightweight running shoes designed for daily training and city walks.',3999,'footwear','https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',4.9,true],
['Ceramic Pour-Over Set','Elegant ceramic coffee set for a slow and simple morning ritual.',1899,'home','https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',4.5,false],
['Daily Care Kit','A simple self-care collection for an easy everyday routine.',1599,'beauty','https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',4.6,true],
['Wireless Headphones','Comfortable over-ear headphones with immersive sound and long battery life.',6999,'electronics','https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',4.8,true],
['Essential Hoodie','Heavyweight cotton-blend hoodie with a relaxed unisex fit.',2799,'fashion','https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80',4.7,false],
['Glass Storage Set','Reusable glass containers for organized kitchens and meal prep.',2199,'home','https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80',4.5,false],
['Smart Desk Lamp','Adjustable LED desk lamp with a clean profile for focused work.',3299,'electronics','https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',4.7,true],
['Canvas Sneakers','Everyday canvas sneakers with a classic low-top profile.',2299,'footwear','https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',4.4,false],
['Minimal Watch','A timeless everyday watch with a clean dial and leather strap.',4599,'accessories','https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',4.8,false]
].map(([title,description,price,category,image,rating,featured])=>({title,description,price,category,image,rating,featured,stock:30}));
await connectDB(); await Product.deleteMany({}); await Product.insertMany(products); console.log(`✓ Seeded ${products.length} products`); await mongoose.disconnect();
