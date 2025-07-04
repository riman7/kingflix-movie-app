const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`cursor-pointer rounded-sm
                  bg-[#ffcc00] hover:bg-[#a9a686] text-[#28273d] 
                  font-bold text-[18px] p-1
                  ease-in-out duration-500 ${className}`}
    >
      {children}
    </button>
  );
};
export default Button
