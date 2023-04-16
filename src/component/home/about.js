import React from "react";
import styled from "styled-components";
import { PrimaryBtn } from "../globals/button";
import { Section } from "../globals/section";
import Title from "../globals/title";
import { setBorder, setColor } from "../styles";

export default function About() {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img
            src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.webp?s=612x612&w=is&k=20&c=BmDGWYV_uaYxEk6SWui3A7_MW2kJvxe9qDAcRMTHMJk="
            alt="about us"
          />
        </div>
        <div className="about-info">
          <Title title="About us" />
          <p>
            Lorem ipsum dollar Velite aut quos ea optiop ipsa molestaie offcis
            voluptatos itaque blandites nostrum est fugiat, architecto dit at
            atique obcaceitie nihil cupidates error
          </p>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
}

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: 30px;
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: "6px", color: setColor.primaryColor })}
    }
  }

  .about-info {
    p {
      letter-spacing: 3px;
    }
  }
  width: 90vw;
  margin: 0 auto;
  @media (min-width: ${(props) => props.theme.tablet}) {
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    .about-img {
      align-self: center;
    }
    .about-info {
      width: 80%;
    }
  } ;
`;
