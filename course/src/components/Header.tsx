interface HeaderProps {
  text: string,
};

const Header = ({ text }: HeaderProps) => {
  return (
    <h1 className="text-3xl font-bold">{text}</h1>
  )
};

export default Header;
