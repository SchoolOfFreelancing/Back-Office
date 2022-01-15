import React, { useContext, useEffect, useState } from 'react';
import {
  CarouselProvider, Slider, Slide,
  ButtonBack,
  ButtonNext, DotGroup, Dot,
  CarouselContext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FcNext, FcPrevious, GoPrimitiveDot } from 'react-icons/all';
import { H4, TEXTS } from '../i18n';

const Dots = () => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);
  return (
    <DotGroup>
      <Dot slide={0}><GoPrimitiveDot className={currentSlide === 0 ? 'text-primary' : ''} /></Dot>
      <Dot slide={1}><GoPrimitiveDot className={currentSlide === 1 ? 'text-primary' : ''} /></Dot>
      <Dot slide={2}><GoPrimitiveDot className={currentSlide === 2 ? 'text-primary' : ''} /></Dot>
    </DotGroup>
  );
};
export const HomeCarousel: React.FC = () => (
  <div className="flex w-full p-6">
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={200}
      totalSlides={3}
      className="w-full"
      isPlaying
      infinite
    >
      <Slider className="h-72">
        <Slide index={0}>
          <div className="items-center flex h-72">
            <H4 className="font-bold" messageKey={TEXTS.DEVELOPING_LINUX_FREELANCING} />
          </div>
        </Slide>
        <Slide index={1}>
          <div className="items-center flex h-72">
            <H4 className="font-bold" messageKey={TEXTS.HANDS_ON_LINUX_TRAINING} />
          </div>
        </Slide>
        <Slide index={2}>
          <div className="items-center flex h-72">
            <H4 className="font-bold" messageKey={TEXTS.MADE_IN_BANGLADESH} />
          </div>
        </Slide>
      </Slider>
      <div className="w-full flex justify-between">
        <Dots />
        <div>
          <ButtonBack><FcPrevious /></ButtonBack>
          <ButtonNext><FcNext /></ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  </div>
);
