import Button from "@/components/Button";
import CustomImage from "@/components/CustomImage";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section
        id="banner"
        className="min-h-screen items-center flex flex-row flex-wrap bg-green-100 px-container gap-12 md:gap-24 lg:gap-36"
      >
        <div className="flex-1 flex-shrink-0 basis-60 flex flex-col gap-10 pt-36 md:pt-0 items-center md:items-start">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            I'm Yagnesh Modh
          </h1>
          <p>
            i am full stack developer who build web and mobile application for
            client.
          </p>
          <div className="flex gap-4">
            <Button>My Portfolio</Button>
            <Button variant="outline">Download CV</Button>
          </div>
        </div>
        <div className="flex-1 flex-shrink-0 basis-60">
          <CustomImage />
        </div>
      </section>
      <section id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-container">
          <div className="box">
            <ServiceCard />
          </div>
          <div className="box">
            <ServiceCard />
          </div>
          <div className="box self-center">
            <h2 className="text-3xl font-semibold">The Services We Privide..</h2>
          </div>
          <div className="box">
            <ServiceCard />
          </div>
          <div className="box">
            <ServiceCard />
          </div>
          <div className="box">
            <ServiceCard />
          </div>
      </section>
    </div>
  );
}
