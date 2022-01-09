import React from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FcNext, FcPrevious } from 'react-icons/all';
import { H6 } from '../i18n';

export const HomeCarousel: React.FC = () => (
  <div>
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={200}
      totalSlides={3}
    >
      <Slider className="w-full">
        <Slide index={0} className="w-full">
          <div className="flex w-full w-96" style={{ width: 400, height: 400 }}>
            <H6 className="text-primary">
              1 TESTE TESTE TSTE
            </H6>
          </div>
        </Slide>
        <Slide index={1}>
          <H6 className="text-primary">
            2
          </H6>
        </Slide>
        <Slide index={2}>
          <H6 className="text-primary">
            3
          </H6>
        </Slide>
      </Slider>
      <ButtonBack><FcPrevious /></ButtonBack>
      <ButtonNext><FcNext /></ButtonNext>
    </CarouselProvider>
  </div>
);
