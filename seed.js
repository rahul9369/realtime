const mongoose = require("mongoose");
const Product = require("./model");
const Products = [
  {
    title: "Room setup",
    img: "https://images.unsplash.com/photo-1698673786592-cd5730baf7d7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Natural image",
    img: "https://images.unsplash.com/photo-1682687220866-c856f566f1bd?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Headphone",
    img: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Drone",
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Laptop",
    img: "https://images.unsplash.com/photo-1501163268664-3fdf329d019f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Iphone",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Toys",
    img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRveXN8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Cube",
    img: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ViZXxlbnwwfHwwfHx8MA%3D%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Apple",
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U0hvZXN8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Addidas shoes",
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNIb2VzfGVufDB8fDB8fHww",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Jacket",
    img: "https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFja2V0fGVufDB8fDB8fHww",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Shirt",
    img: "https://plus.unsplash.com/premium_photo-1682430259342-427ec43ebc38?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "T-shirt",
    img: "https://media.istockphoto.com/id/1324164168/photo/short-sleeve-round-neck-t-shirt.webp?b=1&s=170667a&w=0&k=20&c=oTOrrpeAdcXvkbFGHEfqrvd13W1C77at0B0jcj-BbXw=",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "samsung",
    img: "https://images.unsplash.com/photo-1688762473728-3a20023e1fe4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMGdhbGF4eSUyMHMyMyUyMHVsdHJhfGVufDB8fDB8fHww",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Dslr",
    img: "https://images.unsplash.com/photo-1625545013865-80da35181abf?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHNscnxlbnwwfHwwfHx8MA%3D%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Boat headphone",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Wire less mouse",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdpcmUlMjBsZXNzJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Key Board",
    img: "https://media.istockphoto.com/id/153065264/photo/computer-keyboard-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=JSbuABpcQGRpwwC8DTzL1ZE4WpHImPgolXVSL_w173I=",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Pencile",
    img: "https://images.unsplash.com/photo-1509191436522-d296cf87d244?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Cap",
    img: "https://images.unsplash.com/photo-1622927569053-d7896a1e9c80?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Car",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
    desc: "This is very nice img",
    price: 50000,
  },
  {
    title: "Gun",
    img: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VufGVufDB8fDB8fHww",
    desc: "This is very nice img",
    price: 50000,
  },
];

const seedDB = async () => {
  await Product.insertMany(Products);
  console.log("DB Seeded");
};

module.exports = seedDB;
