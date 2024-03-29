import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <section className="container w-full py-12">
      <h1 className=" text-3xl font-extrabold">My Skills</h1>

      <p className="py-12 leading-relaxed text-muted-foreground lg:w-4/5">
        I&apos;ve actively expanded my knowledge through online courses like
        &quot;
        <Link
          target="_blank"
          className="underline"
          href="https://www.joyofreact.com/"
        >
          The Joy of React
        </Link>
        &quot; for gaining reactjs knowledge and building practical React
        applications, &quot;
        <Link
          target="_blank"
          className="underline"
          href="https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
        >
          Chai aur Javascript
        </Link>
        &quot; for core Javascript concepts, and &quot;
        <Link
          target="_blank"
          className="underline"
          href="https://www.totaltypescript.com/tutorials/react-with-typescript"
        >
          React with TypeScript
        </Link>{" "}
        &quot; for bringing TS support to a React project.
      </p>

      <div className="grid grid-cols-1 gap-8  py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-5 text-2xl font-bold">
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            HTML5
          </li>
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            CSS3
          </li>
        </div>

        <div className="flex flex-col gap-5 text-2xl font-bold">
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            TailwindCSS
          </li>
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            TypeScript
          </li>
        </div>

        <div className="flex flex-col gap-5 text-2xl font-bold">
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            JavaScript ES6
          </li>
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            React
          </li>
        </div>

        <div className="flex flex-col gap-5 text-2xl font-bold">
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            NextJs
          </li>
          <li className=" flex list-none items-center justify-start gap-2">
            <span className="text-green-500">
              <BadgeCheck />
            </span>
            Git & Github
          </li>
        </div>
      </div>
    </section>
  );
};

export default Page;
