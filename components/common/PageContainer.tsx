interface ContainerSizeProp {
  children: React.ReactNode;
}

const PageContainer = ({ children }: ContainerSizeProp) => {
  return (
    <div className={`relative flex h-[665px] w-full space-x-4 rounded-xl`}>
      {children}
    </div>
  );
};

export default PageContainer;
