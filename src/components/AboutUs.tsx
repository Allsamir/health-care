import TextContainer from "./TextContainer";

const AboutUs = () => {
  return (
    <div className="flex gap-4 my-40" id="about-us">
      <TextContainer
        title="We Help To Get Soultions"
        des="We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve."
        buttonText="Learn more"
        intro="Who we are"
      />
      <div className="relative flex-1">
        <img src="assets/Rectangle 24.png" alt="" className="ml-auto" />
        <div className="max-w-[24.6875rem] py-11 px-7 bg-[#343268] rounded-[2rem] absolute -left-24 bottom-0">
          <h3 className="text-[1.625rem] font-medium leading-6 text-white">
            Our mission is simple
          </h3>
          <p
            className="leading-6 mt-5"
            style={{ color: "rgba(255, 255, 255, 0.80)" }}
          >
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
