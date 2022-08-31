interface ContainerSizeProp {
  children: React.ReactNode;
}

const PageContainer = ({ children }: ContainerSizeProp) => {
  return (
    <div className={`relative h-full w-[1220px] flex-col bg-sky-400`}>{children}</div>
  );
};

export default PageContainer;
