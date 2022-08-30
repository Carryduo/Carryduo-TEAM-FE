import Link from "next/link";

const LayoutIntro = () => {
  const onTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-[50%] right-12 h-60 w-24 bg-pink-300">
      <Link href="https://github.com/jiho3894/carryDuo-testNext" passHref>
        <a target="_blank" rel="noopener noreferrer">
          깃허브 이동
        </a>
      </Link>
      <div>KR</div>
      <div onClick={onTopScroll}>top scroll</div>
    </div>
  );
};

export default LayoutIntro;
