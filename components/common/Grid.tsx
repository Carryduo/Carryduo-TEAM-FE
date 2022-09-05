interface GridProps {
  children: React.ReactNode;
  width: string;
  height: string;
}

const Grid = ({ children, width, height }: GridProps) => {
  return (
    <div className={`${width} ${height} rounded-lg bg-box p-4`}>{children}</div>
  );
};

export default Grid;
