import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaUpwork, FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

export const NAVITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/skills",
    label: "Skills",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/contact",
    label: "Contact Me",
  },
];

export const SKILLS = [
  "HTML5",
  "CSS3",
  "TAILWIND CSS",
  "DAISY UI",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT JS",
  "NEXT JS",
  "REDUX TOOLKIT",
  "GIT & GITHUB",
];

export const CONTACTS = [
  {
    title: "WhatsApp number",
    item: "+8801749181410",
    logo: <BsWhatsapp size={20} />,
  },
  {
    title: "Email address",
    item: "theshamimahsan@gmail.com",
    logo: <CgMail size={24} />,
  },
];

export const SOCIAL_LINKS = [
  {
    title: "twitter",
    url: "https://twitter.com/theshamimahsan",
    logo: <FaSquareXTwitter size={24} />,
  },
  {
    title: "linkedIn",
    url: "https://www.linkedin.com/in/saswe/",
    logo: <BsLinkedin size={22} />,
  },
  {
    title: "upword",
    url: "https://www.upwork.com/freelancers/~015d5e403962261c4b",
    logo: <FaUpwork size={24} />,
  },
  {
    title: "github",
    url: "https://github.com/shamim-001",
    logo: <FaSquareGithub size={24} />,
  },
];

export const PROJECTS = [
  {
    img: "/multi-step-form-desktop.png",
    alt: "multi step form",
    title: "Multi Step Form",
    description:
      "A production-ready multi-step form that initiates the validation process at each step.",
    href: "https://github.com/shamim-001/frontendmentor-multi-step-form",
  },
  {
    img: "/task-manager.png",
    alt: "task manager",
    title: "Task Manager App",
    description:
      "A MERN stack task manager app with a focus on seamless collaboration between the frontend and backend for a dynamic and user-friendly experience.",
    href: "https://github.com/shamim-001/task-manager-frontend",
  },
];
