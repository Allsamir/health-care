const Feature3 = ({ extraClassName }: { extraClassName?: string }) => {
  return (
    <div
      className={`${extraClassName} bg-[#FBFBFB] rounded-3xl border border-solid border-[rgba(2, 0, 67, 0.20)] h-[10.125rem] max-w-[13.5rem] p-5 space-y-2`}
    >
      <h2 className="font-semibold text-[2.5rem] flex gap-3">
        4.8 <img src="assets/fi-sr-star.svg" alt="" />
      </h2>
      <p className="text-[0.875rem]">Over 20,000 Patient</p>
    </div>
  );
};

export default Feature3;
