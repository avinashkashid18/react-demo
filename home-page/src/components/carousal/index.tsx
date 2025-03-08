import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

export default function HomeCarousel() {
  const [carouselList, setCarouselList] = useState<string[]>([]);
  useEffect(() => {
    const temp: string[] = [];
    let i = 0;
    for (i = 0; i < 10; i++) {
      temp.push(
        "https://media.istockphoto.com/id/1421988189/vector/creative-instagram-social-media-carousel-post-panoramic-swipe-background-template-abstract.jpg?s=1024x1024&w=is&k=20&c=9BUDwuk5LGaQmliYoRBxRJjxEez5xeX-QkTldU5EvyY=",
      );
    }
    setCarouselList(temp);
  }, []);

  return (
    <Carousel autoPlay>
      {carouselList.map((img: string) => [
        <div>
          <img alt="" src={img} />
          <p className="legend">Legend 1</p>
        </div>,
      ])}
    </Carousel>
  );
}
