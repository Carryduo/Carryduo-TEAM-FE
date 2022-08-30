interface DarkContainerProps {
  children: React.ReactNode;
}

const DarkContainer = ({ children }: DarkContainerProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-700">
      <div className="overflow-hidden h-[800px] w-[1350px] bg-black rounded-xl">{children}</div>
    </div>
  );
};

export default DarkContainer;
