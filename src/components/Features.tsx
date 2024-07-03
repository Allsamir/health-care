import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";
import Feature3 from "./Feature3";

const Features: React.FC = () => {
  return (
    <>
      <div className="my-12 mx-auto relative pt-20">
        <span className="text-center lg:absolute top-2 left-1/2 transfrm -translate-x-1/2 font-semibold lg:text-5xl text-3xl text-[#020043] lg:max-w-[33.25rem] mx-auto lg:leading-[3.507rem]">
          Comprehensive Care for Every Patient
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-8 mt-8">
          <FeatureCard
            title="90%"
            des="Patient satisfaction rate, reflecting our commitment."
            imageURL="assets/Group 12.svg"
          />
          <FeatureCard2
            title="500+"
            des="Board-certified doctors"
            imageURL="assets/contract (1) 1.svg"
          />
          <Feature3 />
          <FeatureCard2
            title="$5000"
            des="Money spend for poor patient"
            imageURL="assets/Group.svg"
          />
          <FeatureCard
            title="50+"
            des="Free lession video for patient"
            imageURL="assets/Group-2.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Features;
