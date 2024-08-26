 export interface ProductDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}
let product: ProductDetail[] = [
  {
    id: "1",
    title: "product-one",
    description: "This is product one details",
    image: "/id3.jpg",
    price: 10,
    category: "casual",
  },
  {
    id: "2",
    title: "product-two",
    description: "This is product two details",
    image: "/id3.jpg",
    price: 20,
    category: "Formal",
  },
  {
    id: "3",
    title: "product-three",
    description: "This is product three details",
    image: "/id3.jpg",
    price: 30,
    category: "beachy",
  },
  {
    id: "4",
    title: "product-four",
    description: "This is product four details",
    image: "/id3.jpg",
    price: 40,
    category: "Winter",
  },
];

export default product;
