import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectPropsType = {
  img: string;
  alt: string;
  title: string;
  description: string;
  href: string;
};

const Project = ({ img, alt, title, description, href }: ProjectPropsType) => {
  return (
    <div className="p-8 shadow-xl">
      <div className="w-full rounded-sm bg-cyan-300/40 p-8  ">
        <Image
          src={img}
          alt={alt}
          height={600}
          width={600}
          className="size-full rounded-sm shadow-md"
        />
      </div>

      <h1 className=" py-5 text-xl font-extrabold"> {title} </h1>
      <p className=""> {description} </p>
      <Link
        className="my-3 flex gap-0 font-extrabold underline"
        target="_blank"
        href={href}
      >
        View Project
        <ChevronsRight />
      </Link>
    </div>
  );
};

export default Project;
