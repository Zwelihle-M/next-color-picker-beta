import React from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <Container id="home">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative bg-gradient-to-tr from-razzmatazz  to-mediumpurple left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2  sm:left-[calc(50%-30rem)]  sm:w-[36rem] rounded-full  opacity-50" />
        </div>

        <div className="mx-auto max-w-2xl py-32 ">
          <div className="text-center">
            <Heading
              font={"IFKica"}
              size="md"
              fontWeight="bold"
              tracking={"wide"}
            >
              Next artist color pencil picker
            </Heading>
            <p className="mt-8 text-2xl text-left">
              Upload your pictures and watch as we extract their colors,
              effortlessly pairing them with a selection of curated shades.
              Experience the elegance of color harmony, making every image shine
              with a touch of sophistication
            </p>{" "}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="#guide">
                <Button size="lg" radius="full" variant="bordered">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-razzmatazz to-mediumpurple  sm:left-[calc(50%+36rem)] sm:w-[36rem] rounded-full opacity-50" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
