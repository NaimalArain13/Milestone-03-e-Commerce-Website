export interface Books {
  id: number,
  title: string,
  description: string,
  image: string,
  price: number,
}
const techBooks:Books[] = [
  {
    id: 1,
    title: "JavaScript: The Good Parts",
    description: "A deep dive into the best features of JavaScript.",
    image: "/images/id1.jpg",
    price: 29.99,
  },
  {
    id: 2,
    title: "You Don’t Know JS Yet",
    description: "An exploration of JavaScript fundamentals and beyond.",
    image: "/images/id2.jpg",
    price: 34.99,
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    description: "A modern introduction to JavaScript programming.",
    image: "/images/id3.jpg",
    price: 39.99,
  },
  {
    id: 4,
    title: "Clean Code",
    description: "A handbook of agile software craftsmanship.",
    image: "/images/id4.jpg",
    price: 42.99,
  },
  {
    id: 5,
    title: "The Pragmatic Programmer",
    description: "Your journey to mastery in software development.",
    image: "/images/id5.jpg",
    price: 45.99,
  },
  {
    id: 6,
    title: "The Clean Coder",
    description: "A guide to professional conduct for programmers.",
    image: "/images/id6.jpg",
    price: 39.99,
  },
  {
    id: 8,
    title: "Introduction to Algorithms",
    description: "A comprehensive guide to algorithms.",
    image: "/images/id8.jpg",
    price: 55.99,
  },
  {
    id: 7,
    title: "Refactoring",
    description: "Improving the design of existing code.",
    image: "/images/id7.jpg",
    price: 49.99,
  },
  {
    id: 9,
    title: "Design Patterns",
    description: "Elements of reusable object-oriented software.",
    image: "/images/id9.jpg",
    price: 47.99,
  },
  {
    id: 10,
    title: "The Mythical Man-Month",
    description: "Essays on software engineering.",
    image: "/images/id10.jpg",
    price: 32.99,
  },
  {
    id: 11,
    title: "The Phoenix Project",
    description: "A novel about IT, DevOps, and helping your business win.",
    image: "/images/id11.jpg",
    price: 37.99,
  },
  {
    id: 12,
    title: "Deep Work",
    description: "Rules for focused success in a distracted world.",
    image: "/images/id12.jpg",
    price: 31.99,
  },
  {
    id: 13,
    title: "Cracking the Coding Interview",
    description: "189 programming questions and solutions.",
    image: "/images/id13.jpg",
    price: 39.99,
  },
  {
    id: 14,
    title: "Effective Java",
    description: "Best practices for Java platform programming.",
    image: "/images/id14.jpg",
    price: 44.99,
  },
  {
    id: 15,
    title: "Kubernetes: Up & Running",
    description: "Dive into Kubernetes and learn how to manage containers.",
    image: "/images/id15.jpg",
    price: 52.99,
  },
];

export default techBooks;
