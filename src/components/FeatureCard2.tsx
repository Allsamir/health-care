const FeatureCard2 = ({
  title,
  des,
  imageURL,
  extraClassName,
}: {
  title: string;
  des: string;
  imageURL: string;
  extraClassName?: string;
}) => {
  return (
    <div
      className={`${extraClassName} max-w-[13.5rem] h-[14.875rem] bg-[#FFFFF5] rounded-3xl border border-solid border-[rgba(2, 0, 67, 0.20)] p-5 space-y-2`}
    >
      <h2 className="font-semibold text-[2.5rem]">{title}</h2>
      <p className="text-[0.875rem]">{des}</p>
      <div className="flex justify-end mt-1">
        <img src={imageURL} alt="" />
      </div>
      <p></p>
    </div>
  );
};

export default FeatureCard2;
