import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container h-screen">
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
            From classroom to code, I transitioned from teaching to development
            through
            <span> &quot;JS Mastary Pro&quot; </span> with{" "}
            <span className="underline hover:text-blue-500">
              <Link
                target="_blank"
                href="https://twitter.com/jsmasterypro?lang=en"
              >
                Adrian.
              </Link>
            </span>{" "}
          </p>

          <p className="text-muted-foreground">
            I have honed my skills, tackling challenges and raising my developer
            bar with each new endeavor through collaborative projects and
            invaluable mentor feedback.
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
