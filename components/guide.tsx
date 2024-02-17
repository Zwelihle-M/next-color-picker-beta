"use client";

import React from "react";
import { Heading } from "@/components/ui/heading";
import Container from "@/components/ui/container";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

const Guide = () => {
  return (
    <Container id="guide">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Heading
          font={"IFKica"}
          size="md"
          fontWeight="bold"
          tracking={"wide"}
          className="mb-10"
        >
          Guide
        </Heading>

        <Heading size={"sm"} tracking={"tight"}>
          Config
        </Heading>

        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Pixel Amount"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            Total pixel number of the resized picture for calculation. Fewer
            pixels will produce a rougher but faster result. More pixels will
            produce a more accurate but slower result. Image resolution is
            typically described in PPI, which refers to how many pixels are
            displayed per inch of an image. Higher resolutions mean that there
            more pixels per inch (PPI), resulting in more pixel information and
            creating a high-quality, crisp image.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Color Distance"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            Color distance to not have near colors (1 distance is between white
            and black). Less distance will produce a faster result with less
            colors. More distance will produce more precise colors but slower
            result. Color distance, also known as color difference, gives a
            measure of visual, perceptual color differences. Perceptually
            similar colors have smaller distance. ColorDistance computes the
            distance between two colors as the Euclidean distance between the
            two color vectors in the LABColor space.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Hue Distance"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            Minimum hue value between two colors otherwise the colors will be
            merged. Hue distance is a value used to calculate the difference
            between colors. It's often measured in degrees, ranging from 0° to
            360°.Hue is the color of a point on the color wheel or along the
            spectrum. It's also the wavelength in the visible light spectrum
            where the energy output from a source is the greatest
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Saturation Distance"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            Minimum saturation value between two colors otherwise the colors
            will be merged. Saturation describes the intensity of the colour.
            And lightness refers to how light or dark the colour is. A grayscale
            or black-and-white photo has no colour saturation, while a
            full-colour photo of a field of sunlit wildflowers might be
            extremely saturated.
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 4"
            title="Lightness Distance"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            Minimum lightness value between two colors otherwise the colors will
            be merged. This is due to the inverse-square law which states that
            the intensity of an emitted light or energy is inversely
            proportional to the square of the distance from the source. So, as
            the distance increases, the brightness of an image decreases and as
            the distance decreases, the brightness of an image increases.
          </AccordionItem>

          <AccordionItem
            key="6"
            aria-label="Accordion 5"
            title="Eye Dropper "
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            The Eyedropper tool can sample colors from anywhere in an image and
            add them to your Swatches panel
          </AccordionItem>
        </Accordion>

        <div className="mt-8 mb-8">
          <Breadcrumbs size="lg" radius="full" className="text-xl">
            <BreadcrumbItem>Upload image</BreadcrumbItem>
            <BreadcrumbItem> Setup Config</BreadcrumbItem>
            <BreadcrumbItem>Extract colors</BreadcrumbItem>
            <BreadcrumbItem>Download PDF</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>
    </Container>
  );
};

export default Guide;
