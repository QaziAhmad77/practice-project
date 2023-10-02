const Button = ({ text }) => {
  return (
    <button className="rounded-[8px] h-full btnGradient px-3 py-3 text-white tracking-wider font-600 text-[16px]">
      {text}
    </button>
  );
};

export default Button;
