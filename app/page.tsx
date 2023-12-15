import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <section className="  flex h-screen flex-col items-center justify-center gap-8 md:flex-row-reverse md:gap-20">
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
    </main>
  );
}
