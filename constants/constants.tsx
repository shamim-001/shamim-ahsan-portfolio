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
    item: "+8801628486673",
    logo: <BsWhatsapp />,
  },
  {
    title: "Email address",
    item: "theshamimahsan@gmail.com",
    logo: <CgMail />,
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
