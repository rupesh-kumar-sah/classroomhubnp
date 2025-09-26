import { PlaceHolderImages } from "./placeholder-images";

export type Subject = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    hint: string;
  };
  path: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    hint: string;
  };
  path: string;
  price?: string;
};

export type DashboardProgress = {
  subject: string;
  progress: number;
};

export type BookmarkedNote = {
  id: string;
  title: string;
  subject: string;
};

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    console.warn(`Image with id "${id}" not found. Using placeholder.`);
    return {
      url: "https://picsum.photos/seed/placeholder/400/300",
      hint: "placeholder",
    };
  }
  return {
    url: image.imageUrl,
    hint: image.imageHint,
  };
};

export const subjects: Subject[] = [
  {
    id: "physics",
    title: "Physics",
    description: "Unravel the laws of the universe, from mechanics to quantum physics.",
    image: getImage("physics-1"),
    path: "/notes/physics",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description: "Explore the world of atoms, molecules, and chemical reactions.",
    image: getImage("chemistry-1"),
    path: "/notes/chemistry",
  },
  {
    id: "math",
    title: "Mathematics",
    description: "Master calculus, algebra, and more with our detailed guides.",
    image: getImage("math-1"),
    path: "/notes/math",
  },
  {
    id: "biology",
    title: "Biology",
    description: "Discover the secrets of life, from DNA to ecosystems.",
    image: getImage("biology-1"),
    path: "/notes/biology",
  },
  {
    id: "english",
    title: "English",
    description: "Enhance your language and literature interpretation skills.",
    image: getImage("english-1"),
    path: "/notes/english",
  },
];

export const codingCourses: Course[] = [
  {
    id: "python",
    title: "Python Fundamentals",
    description: "A beginner's guide to Python for problem-solving and web development.",
    image: getImage("python-1"),
    path: "/coding/python",
  },
  {
    id: "cpp",
    title: "C++ for Beginners",
    description: "Learn the basics of C++, a powerful language for competitive programming.",
    image: getImage("cpp-1"),
    path: "/coding/cpp",
  },
  {
    id: "webdev",
    title: "Web Development Basics",
    description: "Master HTML, CSS, and JavaScript to build your first websites.",
    image: getImage("webdev-1"),
    path: "/coding/webdev",
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Build a strong foundation in core computer science concepts.',
    image: getImage('dsa-1'),
    path: '/coding/dsa',
  },
];

export const premiumCourses: Course[] = [
  {
    id: "jee",
    title: "JEE Advanced Prep",
    description: "Exclusive study guides and mock tests to crack the JEE.",
    image: getImage("jee-1"),
    path: "/premium/jee",
    price: "$49.99",
  },
  {
    id: "neet",
    title: "NEET Ultimate Course",
    description: "A complete course with video lectures for aspiring medical students.",
    image: getImage("neet-1"),
    path: "/premium/neet",
    price: "$49.99",
  },
  {
    id: "sat",
    title: "SAT Masterclass",
    description: "Strategies, practice tests, and guides for achieving a top SAT score.",
    image: getImage("sat-1"),
    path: "/premium/sat",
    price: "$39.99",
  },
];

export const dashboardData: {
  progress: DashboardProgress[];
  bookmarks: BookmarkedNote[];
} = {
  progress: [
    { subject: "Physics", progress: 75 },
    { subject: "Python Fundamentals", progress: 45 },
    { subject: "Web Development Basics", progress: 90 },
    { subject: "Chemistry", progress: 60 },
  ],
  bookmarks: [
    { id: "note-1", title: "Chapter 3: Laws of Motion", subject: "Physics" },
    { id: "note-2", title: "Introduction to Functions", subject: "Python" },
    { id: "note-3", title: "The Solid State", subject: "Chemistry" },
  ],
};

    