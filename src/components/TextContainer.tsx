import { LuArrowUpRight } from "react-icons/lu";
import Button from "./Button";

const TextContainer = ({
  title,
  des,
  buttonText,
  intro,
}: {
  title: string;
  des: string;
  buttonText: string;
  intro: string;
}) => {
  return (
    <div className="flex-1">
      <Button text={intro} />
      <h2 className="font-semibold text-4xl my-4 leading-[3.375rem] max-w-[24.75rem]">
        {title}
      </h2>
      <p className="leading-6 font-normal text-base max-w-[29rem] mb-10">
        {des}
      </p>
      <a className="btn btn-outline bg-[#FFC637] border-none text-[#020043]">
        {buttonText} <LuArrowUpRight className="text-base" />
      </a>
    </div>
  );
};

export default TextContainer;
