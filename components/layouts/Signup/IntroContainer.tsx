import Slider from "react-slick";
const IntroContainer = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="h-full w-[26rem]">
      <Slider {...settings}>
        <div className="flex h-[550px] w-full items-center justify-center">
          <span>듀오 승률을 확인해보세요</span>
        </div>
        <div className="flex h-[550px] w-full items-center justify-center">
          <span>듀오를 찾기 위해 정보를 입력해보세요</span>
        </div>
      </Slider>
    </div>
  );
};

export default IntroContainer;
