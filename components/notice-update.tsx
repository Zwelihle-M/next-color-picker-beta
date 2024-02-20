"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { Lightbulb } from "lucide-react";
const NoticeUpdate = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        className="fixed bottom-10 right-10 z-10 bg-gradient-to-tr from-razzmatazz to-darkviolet "
        endContent={<Lightbulb size={30} className="text-white"/>}
        radius="full"
        isIconOnly
        size="lg"
      ></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Notes
              </ModalHeader>
              <ModalBody>
                <p>
                  While our color extractor provides a close representation of
                  the extracted shades, we want to emphasize that it may not be
                  absolutely accurate. Users are encouraged to use their
                  discretion and not solely rely on the tool for critical color
                  decisions.
                </p>

                <h1>Upcoming Updates:</h1>
                <p>
                  🎨 Eye Dropper Tool Coming Soon: We're excited to announce
                  that an eye dropper tool will soon be added to enhance your
                  color exploration. This feature allows you to pick and match
                  colors directly from any part of an image, giving you even
                  more precision and control.
                </p>
                <p>
                  📏 Drawing Grids on the Horizon: Unleash your creativity with
                  the upcoming addition of drawing grids. Whether you're a
                  digital artist or just love doodling, these grids will help
                  you create precise and well-structured designs effortlessly.
                </p>
                <p>
                  🖍️ Expanded Color Palette with Famous Brands: We're dedicated
                  to bringing you an even broader spectrum of colors! In our
                  next update, we'll be introducing more well-known brands of
                  colored pencils, ensuring you have access to the widest array
                  of shades to fuel your artistic expression.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
         
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NoticeUpdate;
