import React from "react";
import { BannerWrapper } from "../globals/banner";
import { PrimaryBtn } from "../globals/button";
import Hero from "../globals/hero";

export default function Header() {
  return (
    <Hero>
      <BannerWrapper
        greeting="welcome to"
        title="beachwalk"
        text="Lorem, ipsum dollar sit amet consectartor adipising elite. Qoasa provident eos sapient deleniti in quiswum"
      >
        <PrimaryBtn t="1rem" as="a">
          view details
        </PrimaryBtn>
      </BannerWrapper>
    </Hero>
  );
}
