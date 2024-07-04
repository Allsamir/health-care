import Button from "./Button";
import Slide from "./Slide";

const Testimonial = () => {
  return (
    <div className="my-40">
      <Button text="Testimonial" />
      <h2 className="text-[2.25rem] leading-[3.375rem] font-semibold text-[#020043] mt-4 mb-7">
        What they say about us
      </h2>
      <Slide />
    </div>
  );
};

export default Testimonial;
