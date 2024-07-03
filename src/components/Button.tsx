const Button = ({ text }: { text: string }) => {
  return (
    <button className="btn btn-outline rounded-3xl text-[#343268]">
      {text}
    </button>
  );
};

export default Button;
