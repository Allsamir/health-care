import { LuArrowUpRight } from "react-icons/lu";

const WeCard = () => {
  return (
    <div
      className="h-[29.8125rem] w-full md:bg-cover bg-no-repeat bg-center rounded-[3rem] my-40 flex items-center relative md:p-14 p-4"
      style={{
        background: `linear-gradient(to right, rgba(2, 0, 67, 1), rgba(2, 0, 67, 0.30)), url('/assets/Rectangle 32.png')`,
      }}
    >
      <div>
        <h2 className="lg:leading-[3.75rem] font-semibold text-2xl lg:text-4xl max-w-[20.125rem] text-[#FFFFF5]">
          Get Your First Appointment at 50% Off!
        </h2>
        <div className="flex mt-6 gap-6">
          <a className="btn btn-outline text-[#000] bg-[#FFC637]">
            Appointment <LuArrowUpRight className="text-base" />
          </a>
          <a className="btn btn-outline text-[#fffff5]">
            Learn More <LuArrowUpRight className="text-base" />
          </a>
        </div>
      </div>
      <div className="absolute top-14 right-14">
        <img src="assets/logo light.png" alt="" />
      </div>
    </div>
  );
};

export default WeCard;
