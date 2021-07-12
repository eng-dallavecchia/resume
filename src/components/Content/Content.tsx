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
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (): void => {
    setOpen(true);
  };

  const closeModal = (): void => {
    setOpen(false);
  };

  const onWindowScroll = (e: Event): void => {
    const totalHeight = document.documentElement.scrollHeight;
    const innerHeight = window.innerHeight;
    if (totalHeight - innerHeight - window.scrollY < 0.1) openModal();
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(onWindowScroll, 200));

    return () =>
      window.removeEventListener("scroll", debounce(onWindowScroll, 200));
  }, []);

  return (
    <div className="bg-blue-200">
      <Controller>
        <Scene duration={1900} triggerHook={0.1} indicators={false}>
          <Timeline target={<Cup ref={ref} />}>
            <Tween
              from={{ backgroundPosition: "-150px 50px" }}
              to={{ backgroundPosition: "10px -7px" }}
              duration={3}
            ></Tween>
          </Timeline>
        </Scene>
      </Controller>
      <div className="pt-24 pb-64">
        <Children />
      </div>
      <Modal open={open} close={closeModal} />
    </div>
  );
};
