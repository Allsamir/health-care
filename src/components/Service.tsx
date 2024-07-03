import ServiceCard from "./ServiceCard";
import TextContainer from "./TextContainer";

const Service = () => {
  return (
    <div className="p-10 bg-[#FFFFF5] rounded-[2rem]" id="service">
      <div className="flex lg:flex-row flex-col mb-14 gap-8">
        <TextContainer
          title="Empowering Health, Enriching Lives"
          des="We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness."
          buttonText="Appointment"
          intro="Service"
        />
        <ServiceCard
          imgURL="assets/Rectangle 27-2.png"
          title="Advanced Technology"
          des="We understand that each patient is unique, so we tailor our care to their needs and preferences"
        />
      </div>
      <div className="flex lg:flex-row flex-col gap-7">
        <ServiceCard
          imgURL="assets/Rectangle 27-1.png"
          title="Online Doctor Meet"
          des="We understand that each patient is unique, so we tailor our care to their needs and preferences"
        />
        <ServiceCard
          imgURL="assets/Rectangle 27.png"
          title="Commitment to Excellence"
          des="We understand that each patient is unique, so we tailor our care to their needs and preferences"
        />
      </div>
    </div>
  );
};

export default Service;
