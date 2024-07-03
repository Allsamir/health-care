const ServiceCard = ({
  imgURL,
  title,
  des,
}: {
  imgURL: string;
  title: string;
  des: string;
}) => {
  return (
    <>
      <div className="flex-1 rounded-[1.875rem] relative">
        <img src={imgURL} className="w-full h-full rounded-[1.875rem]" alt="" />
        <div className="bg-[#020043] bg-opacity-60 rounded-[1.25rem] p-4 text-white absolute bottom-5 left-5 max-w-[20.0625rem]">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <div className="flex">
            <p className="text-[0.75rem] leading-[1.125rem] text-[#FFFFF5]">
              {des}
            </p>
            <img src="assets/Group 28.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
