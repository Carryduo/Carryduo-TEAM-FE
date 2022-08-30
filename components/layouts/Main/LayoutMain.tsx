interface LayoutProps {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: LayoutProps) => {
  return <div className=" flex h-[760px] w-full">{children}</div>;
};

export default LayoutMain;
