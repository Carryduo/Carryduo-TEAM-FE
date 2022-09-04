interface GridProps {
  children: React.ReactNode;
  width: string;
  height: string;
}

const Grid = ({ children, width, height }: GridProps) => {
  console.log(width, height);
  return <div className={`${width} ${height} bg-box rounded-lg p-4`}>{children}</div>;
};

export default Grid;
