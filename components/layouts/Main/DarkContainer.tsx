interface DarkContainerProps {
  children: React.ReactNode;
}

const DarkContainer = ({ children }: DarkContainerProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center dark:bg-gray-700">
      <div className="h-[800px] w-[1350px] overflow-hidden rounded-xl bg-black">
        {children}
      </div>
    </div>
  );
};

export default DarkContainer;
