import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { Cup } from "../Cup/Cup";
import React, { useEffect, useRef, useState } from "react";
import { Modal } from "../Modal/Modal";
import debounce from "lodash.debounce";

interface Props {
  Children: React.FC;
}

export const Content: React.FC<Props> = ({ Children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(474);
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (): void => {
    setOpen(true);
  };

  const closeModal = (): void => {
    setOpen(false);
  };

  const getWindowHeight = (): void => {
    const num = document.documentElement.offsetHeight - window.innerHeight;
    setHeight(num);
  };

  const onWindowScroll = (e: Event): void => {
    console.log(height, "h");
    if (height - window.scrollY < 0.1) openModal();
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(onWindowScroll, 200));
    return () => {
      window.removeEventListener("scroll", debounce(onWindowScroll, 200));
    };
  }, []);

  useEffect(() => {
    const num = document.documentElement.offsetHeight - window.innerHeight;
    console.log(num, "oi");
    setHeight(num);
  }, []);

  return (
    <div className="bg-blue-200">
      <Controller>
        <Scene duration={1800} triggerHook={0} indicators={false}>
          <Timeline target={<Cup ref={ref} />}>
            <Tween
              from={{ backgroundPosition: "-150px 50px" }}
              to={{ backgroundPosition: "10px -7px" }}
              duration={3}
            ></Tween>
          </Timeline>
        </Scene>
      </Controller>
      <div className="pt-24 pb-64 px-4">
        <Children />
      </div>
      <Modal open={open} close={closeModal} />
    </div>
  );
};
