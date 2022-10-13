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
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </div>
  );
};

export default IntroContainer;
