import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section className="container w-full py-12">
      <h1 className=" text-3xl font-extrabold">What I have been working on</h1>
      <p className="py-12 text-muted-foreground">
        I like to learn through building projects. Take a look at some of the
        projects I have dedicated my time to.
      </p>
      {/* Projects section */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <div className="w-full rounded-sm bg-cyan-300/40 p-8  ">
            <Image
              src="/multi-step-form-desktop.png"
              alt="multi step form"
              height={600}
              width={600}
              className="size-full rounded-sm shadow-md"
            />
          </div>

          <h1 className=" py-5 text-xl font-extrabold">Multi Step Form</h1>
          <p className="text-muted-foreground">
            A production-ready multi-step form that initiates the validation
            process at each step.
          </p>
          <Link
            className="my-3 flex gap-0 font-extrabold underline"
            target="_blank"
            href="https://github.com/shamim-001/frontendmentor-multi-step-form"
          >
            View Project
            <ChevronsRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
