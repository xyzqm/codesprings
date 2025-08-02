import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Pfp from "./pfp.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const slideLinks = [
    "https://docs.google.com/presentation/d/e/2PACX-1vRH-ghe2ICgRWS2IGo61h-owXFwAUgo_nmIC_DY0hs3mw_41RwCg_haeyLu4EFHY9Xx8PZSSICxLHTl/pubembed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vTGuUxRFARSQ_Vn74GnrVO-ze7gcRPNnfy-7sfg80qsjwCunkSnEHykf33SZtaiAwUSeop1s0XwnMiw/pubembed?start=false&loop=false&delayms=3000",
    "https://docs.google.com/presentation/d/e/2PACX-1vRP8CK0P9uc5OKJdnuEUURrSC_EE0pKV_K6i0dE2Ub7ivTUs9yfG3WiKAayPvrzQEAq4hL_Oe8D588q/pubembed?start=false&loop=false&delayms=3000",
  ];
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center text-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          CodeSprings
        </h1>
        <p className="text-lg sm:text-xl font-medium mt-6 max-w-2xl px-4">
          By providing both high-quality programming lessons and requisite
          resources for free, we empower underprivileged youth across the world
          to foster innovation and create pathways to brighter futures.
        </p>
      </div>
      <div
        className="min-h-screen outline bg-neutral-50 px-4 sm:px-8 lg:px-20 py-25"
        id="about"
      >
        <div className="prose max-w-full prose-lg lg:prose-xl">
          <h1>About</h1>
          <p>
            We are currently partnered with{" "}
            <a href="https://www.addiscoder.com/">AddisCoder</a> to provide
            their alumni with further support and mentorship.
          </p>
          <p>Here are some sample slides from previous classes:</p>
          <Carousel className="w-full max-w-4xl mx-auto mt-8">
            <CarouselContent className="max-h-48 sm:max-h-64 lg:max-h-96">
              {slideLinks.map((link, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video">
                    <iframe
                      src={link}
                      allowFullScreen
                      className="border-0 w-full h-full absolute"
                    ></iframe>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p>
            Our classes are problem-centric, and we seek provide students the
            valuable opportunity to engage with questions on their own before we
            present solutions.
          </p>
        </div>
      </div>
      <div
        id="instructors"
        className="min-h-screen py-25 px-4 sm:px-8 lg:px-20 prose prose-lg lg:prose-xl bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] max-w-full"
      >
        <h1 className="mb-8!">Instructors</h1>
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8">
          <Image
            src={Pfp}
            alt="Instructor"
            className="h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-full object-cover mt-0! mb-0!"
          />
          <p className="max-w-3xl">
            <strong>Daniel Zhu</strong> is a junior at The Harker School, as
            well as the founder of CodeSprings. He enjoys math and programming,
            but also writing, film, and music. He also hosts a{" "}
            <Link href="https://www.xyzqm.dev/">blog</Link> that explores some
            of these interests in greater detail.
          </p>
        </div>
        <p>
          Feel free contact us at{" "}
          <a href="mailto:info@codesprings.org">info@codesprings.org</a>!
        </p>
      </div>
    </div>
  );
}
