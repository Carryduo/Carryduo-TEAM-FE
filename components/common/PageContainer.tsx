interface ContainerSizeProp {
  children: React.ReactNode;
  space?: string;
}

const PageContainer = ({ children, space }: ContainerSizeProp) => {
  return (
    <div className={`relative flex h-[83%] w-full ${space} rounded-xl`}>
      {children}
    </div>
  );
};

export default PageContainer;
