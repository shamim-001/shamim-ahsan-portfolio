import Project from "@/components/Project";
import { PROJECTS } from "@/constants/constants";

const Page = () => {
  return (
    <section className="container w-full py-12">
      <h1 className=" text-3xl font-extrabold">What I have been working on</h1>
      <p className="py-12 ">
        I like to learn through building projects. Take a look at some of the
        projects I have dedicated my time to.
      </p>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <Project
            key={p.title}
            img={p.img}
            alt={p.alt}
            title={p.title}
            description={p.description}
            href={p.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
