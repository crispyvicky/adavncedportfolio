import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../assets";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "I provide services like",
      "",
      "Full-Stack Development .",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [ "TECH I KNOW :","Frontend: React.js, Next.js, TailwindCSS",
  "Animation: GSAP, Framer Motion",
  "AI & Chat: Gemini API, LangChain",
  "3D: Three.js, Blender (GLB)",
  "Backend: FastAPI, REST APIs",
  "Dev Tools: Git, Vercel, Postman"],
    video: highlightSecondVideo,
    videoDuration: 4,
  },
  {
    id: 3,
    textLists: [
      "GSAP Animations & Motion Design",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: [
      "I build applications that feel futuristic and lightning-fast.",],
    video: highlightFourthVideo,
    videoDuration: 4,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const sourceCode = "https://github.com/sanidhyy/apple-clone";
