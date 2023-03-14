import React, { useEffect, useRef } from 'react';
import Classes from './styles.module.scss';

import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

import leftArrow from '../../assets/arrow_left.svg';
import rightArrow from '../../assets/arrow_right.svg';

function Carousel() {
  const carousel = useRef(null);
  const slides = useRef<NodeListOf<HTMLElement>>();
  const slideRefButtons = useRef<NodeListOf<HTMLButtonElement>>();

  useEffect(() => {
    slides.current = document.querySelectorAll('.testimonial_slide');

    slideRefButtons.current = document.querySelectorAll('.slide_ref_button');

    console.log(slideRefButtons);
  }, []);

  function shiftLeft() {
    slides.current!.forEach((slide) => {
      const currentPosition = parseInt(
        slide.getAttribute('data-position') as string
      );

      const newPosition = currentPosition == 5 ? 1 : currentPosition + 1;

      slide.setAttribute('data-position', newPosition.toString());
    });

    setActiveSlideButton();
  }

  function shiftRight() {
    slides.current!.forEach((slide) => {
      const currentPosition = parseInt(
        slide.getAttribute('data-position') as string
      );

      const newPosition = currentPosition == 1 ? 5 : currentPosition - 1;

      slide.setAttribute('data-position', newPosition.toString());
    });

    setActiveSlideButton();
  }

  function setActiveSlideButton() {
    slides.current!.forEach((slide) => {
      // GET SLIDE POSITION OF EACH SLIDE
      const slidePosition = parseInt(
        slide.getAttribute('data-position') as string
      );

      // IF SLIDE POSITION IS 1
      if (slidePosition == 1) {
        // GET ITS ID
        const slideId = parseInt(slide.id);

        // THEN GO THROUGH EVERY REF BUTTON
        slideRefButtons.current!.forEach((button, index) => {
          // IF BUTTON INDEX EQUAL TO SLIDE INDEX
          if (index == slideId) {
            // SET BUTTON FOCUSED ATTRIBUTE TO TRUE
            button.setAttribute('data-focused', 'true');
          } else {
            button.setAttribute('data-focused', 'false');
          }
        });
      }
    });
  }

  return (
    <div
      ref={carousel}
      className={Classes.carousel}>
      <ul className={Classes.slides_container}>
        {testimonials.map((testimonial, index) => {
          return (
            <li
              key={`slide_${Math.random()}`}
              data-position={index + 1}
              id={index.toString()}
              className={`${Classes.slide} testimonial_slide`}>
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                summary={testimonial.summary}
                text={testimonial.text}
              />
            </li>
          );
        })}
      </ul>
      <div className={Classes.button_container}>
        <button
          onClick={shiftRight}
          className={Classes.carousel__button}>
          <img
            src={leftArrow}
            alt=''
          />
        </button>
        <button
          className={`${Classes.slide_ref_button} slide_ref_button`}></button>
        <button
          className={`${Classes.slide_ref_button} slide_ref_button`}></button>
        <button
          className={`${Classes.slide_ref_button} slide_ref_button`}></button>
        <button
          className={`${Classes.slide_ref_button} slide_ref_button`}></button>
        <button
          className={`${Classes.slide_ref_button} slide_ref_button`}></button>
        <button
          onClick={shiftLeft}
          className={Classes.carousel__button}>
          <img
            src={rightArrow}
            alt=''
          />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
