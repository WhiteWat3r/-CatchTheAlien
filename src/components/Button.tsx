interface IButtonProps {
  children: string;
  onClick?: () => void;
}
export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button
      className='text-white-default pb-2 w-[208px] h-[66px] text-[34px] bg-red-default font-sans uppercase mt-auto cursor-pointer relative box-border rounded-br-[4px] rounded-bl-[4px] p-0 whitespace-nowrap
            before:content-"" before:absolute before:w-full before:box-border before:top-[-12%] before:border-[4px] before:border-red-default before:border-transparent before:border-b-red-default before:left-0'
      onClick={onClick}>
      {children}
    </button>
  );
};
