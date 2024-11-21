interface ButtonProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  text: string;
}
 
const Button = ({
  onMouseEnter: mouseEnterResume,
  onMouseLeave: mouseLeave,
  text,
}: ButtonProps) => {
  return (
    <button
      onMouseEnter={mouseEnterResume}
      onMouseLeave={mouseLeave}
      className="bg-transparent p-4 my-4 border-2 border-[#ccd6f6] rounded text-base text-[#ccd6f6] cursor-pointer hover:bg-[#8892b0] hover:text-white font-semibold hover:border-white transition-all ease-in-out duration-300"
    >
      <span>{ text }</span>
    </button>
  );
}
 
export default Button;