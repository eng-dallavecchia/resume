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
  const [height, setHeight] = useState<number>(1900);
  const ref = useRef<HTMLDivElement>(null);

  const openModal = (): void => {
    setOpen(true);
  };

  const closeModal = (): void => {
    setOpen(false);
  };

  const getWindowHeight = (): void => {
    setHeight(document.documentElement.offsetHeight - window.innerHeight);
  };

  const onWindowScroll = (e: Event): void => {
    if (
      document.documentElement.offsetHeight -
        window.innerHeight -
        window.scrollY <
      2
    )
      openModal();
  };

  useEffect(() => {
    getWindowHeight();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", debounce(onWindowScroll, 200));
    return () =>
      window.removeEventListener("scroll", debounce(onWindowScroll, 200));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getWindowHeight);
    return () => window.removeEventListener("resize", getWindowHeight);
  }, []);

  return (
    <div className="bg-coffee bg-small bg-repeat bg-opacity-10">
      <Controller>
        <Scene duration={height} triggerHook={0} indicators={false}>
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
