import Slider from "react-slick"
import ButtonArrow from "./ButtonArrow"
import CardSlider from "./CardSlider"

export default function Carousel({ Services }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <ButtonArrow />,
    nextArrow: <ButtonArrow />,
  }
  return (
    <div>
      <Slider {...settings}>
        <CardSlider
          srcImg="/images/icons/services/kitchen.png"
          title="Kitchen"
          content={Services.Kitchen[0]}
        />
        <CardSlider
          srcImg="/images/icons/services/bathroom.png"
          title="Bathroom"
          content={Services.Bathrooms[0]}
        />
        <CardSlider
          srcImg="/images/icons/services/bedroom.png"
          title="Bedroom"
          content={Services.LivingSpaces[0]}
        />
        <CardSlider
          srcImg="/images/icons/services/office-desk.png"
          title="Office"
          content={Services.LivingSpaces[0]}
        />
        <CardSlider
          srcImg="/images/icons/services/room.png"
          title="Room"
          content={Services.LivingSpaces[0]}
        />
      </Slider>
    </div>
  )
}
