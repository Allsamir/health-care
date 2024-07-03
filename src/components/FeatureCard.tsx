const FeatureCard = ({
  title,
  des,
  imageURL,
}: {
  title: string;
  des: string;
  imageURL: string;
}) => {
  return (
    <div className="bg-[#FBFBFB] rounded-3xl border border-solid border-[rgba(2, 0, 67, 0.20)] lg:h-[19.5rem] lg:max-w-[13.5rem] p-5 space-y-4">
      <h2 className="lg:text-4xl text-2xl font-bold">{title}</h2>
      <p className="text-[0.875rem] font-normal">{des}</p>
      <img src={imageURL} alt="" />
    </div>
  );
};

export default FeatureCard;
