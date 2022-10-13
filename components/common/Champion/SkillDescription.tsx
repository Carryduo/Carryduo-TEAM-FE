interface Props {
  name: string;
  desc: string;
  toolTip?: string;
}

const SkillDescription = ({ name, desc, toolTip }: Props) => {
  return (
    <div className="flex flex-col space-y-4 text-xs">
      <span className=" text-yellow-300">{name}</span>
      <span className=" font-light">{toolTip}</span>
      <span className=" text-yellow-300">{`{{ ? }}로 표시된 값은 Riot API 에서 제공하지 않는 데이터입니다. 정확한 값은 LoL 클라이언트에서 확인 하실 수 있습니다.`}</span>
      <span className="font-light">{desc}</span>
    </div>
  );
};

export default SkillDescription;
