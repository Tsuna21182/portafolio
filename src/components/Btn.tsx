type BtnProps = {
  name: string;
  className?: string;
};

function Btn({ name, className }: BtnProps) {
  return (
    <button
      className={`rounded-2xl py-2 px-4 text-BackgroundBody capitalize font-semibold transition-colors duration-300 cursor-pointer ${className}`}
    >
      {name}
    </button>
  );
}

export default Btn;
