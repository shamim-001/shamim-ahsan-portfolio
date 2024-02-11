import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <section className="flex  flex-col items-center gap-8 pt-12 md:flex-row-reverse md:justify-center md:gap-20">
        <div>
          <Image
            src="/Profile Picture.png"
            alt="Profile Picture"
            width={200}
            height={200}
            priority
            className=" rounded-full md:hidden"
          />
          <Image
            src="/Profile Picture.png"
            alt="Profile Picture"
            width={300}
            height={300}
            priority
            className=" hidden rounded-full md:block"
          />
        </div>

        <h1 className=" text-xl font-semibold leading-normal md:text-3xl md:font-extrabold  md:leading-relaxed">
          Hi there, I am Shamim Ahsan. <br />
          Front End <span className=" text-violet-600">
            Developer,
          </span> <br /> and Perpetual Student.
        </h1>
      </section>
      <section className="grid grid-cols-1 gap-5 py-12 md:grid-cols-2 md:gap-20">
        <div className="flex flex-col gap-5">
          <p className="text-muted-foreground">
            I made the transition from teaching to development by learning from
            amazing YouTube instructors worldwide and utilizing online education
            platforms such as{" "}
            <Link className="underline" href="https://www.w3schools.com/">
              w3schools.com
            </Link>
            .
          </p>

          <p className="text-muted-foreground">
            I&apos;ve refined my skills by tackling challenges on online
            frontend challenge sites like{" "}
            <Link
              className="underline"
              href="https://www.frontendmentor.io/profile/shamim-001"
            >
              Frontend Mentor
            </Link>{" "}
            and continually raising the bar through collaborative projects and
            invaluable feedback from mentors.
          </p>
        </div>

        <div>
          <p className="text-muted-foreground">
            My journey has been shaped by crafting memorable experiences. I
            believe in the power of code that&apos;s not just elegant, but also
            easy to maintain and understand - because great software lives on
            through its evolution.
          </p>
        </div>
      </section>
    </main>
  );
}
