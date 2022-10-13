interface GridProps {
  children: React.ReactNode;
  width: string;
  height: string;
  scroll?: string;
}

const Grid = ({ children, width, height, scroll }: GridProps) => {
  return (
    <div className={`${width} ${height} ${scroll} rounded-lg bg-box p-4`}>
      {children}
    </div>
  );
};

export default Grid;
