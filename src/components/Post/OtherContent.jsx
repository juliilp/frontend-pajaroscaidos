"use client";

import { useState, useEffect } from "react";
import NuestraComunidad from "../NuestraComunidadDesktop/NuestraComunidadDesktop";

export default function OtherContent({ mobile, desktop }) {
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    let controlate = responsive;

    const responsiveControl = () => {
      if (window.innerWidth < 768 && !controlate) {
        setResponsive(true);
      } else if (window.innerWidth > 769 && controlate) {
        setResponsive(false);
      }
    };
    window.addEventListener("resize", responsiveControl);

    return () => {
      window.removeEventListener("resize", responsiveControl);
    };
  }, [responsive]);
  return (
    <>
      {!responsive && desktop && (
        <section
          className=" md:w-8/12 lg:w-4/12 flex justify-center  bg-lightgray h-auto min-h-[30rem]  overflow-y-scroll "
          id="Uscomunitysection"
        >
          <NuestraComunidad />
        </section>
      )}

      {responsive && mobile && (
        <section className=" w-full flex justify-center  bg-lightgray h-auto min-h-[30rem] ">
          <NuestraComunidad />
        </section>
      )}
    </>
  );
}
