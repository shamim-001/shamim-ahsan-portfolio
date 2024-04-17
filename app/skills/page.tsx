import { BadgeCheck } from "lucide-react";
import { SKILLS } from "@/constants/constants";
const Page = () => {
  return (
    <section className="container w-full py-12">
      <h1 className=" text-3xl font-extrabold">My Skills</h1>

      <p className="py-12 leading-relaxed text-muted-foreground lg:w-4/5">
        I&apos;ve actively expanded my knowledge and it&apos;s an on going
        process. Some of my core skills are given below:
      </p>

      <div className="grid grid-cols-1 gap-8  py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((skill, index) => (
          <div key={index} className="flex flex-col gap-5 text-2xl font-bold">
            <li className=" flex list-none items-center justify-start gap-2">
              <span className="text-green-500">
                <BadgeCheck />
              </span>
              {skill}
            </li>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
