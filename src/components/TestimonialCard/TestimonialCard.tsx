import React from 'react';
import Classes from './styles.module.scss';

import starFill from '../../assets/star.svg';
import starOutline from '../../assets/star_outline.svg';

interface iTesimonialCard {
  image: string;
  name: string;
  role: string;
  rating: number;
  summary: string;
  text: string;
}

function TestimonialCard({
  image,
  name,
  role,
  rating,
  summary,
  text,
}: iTesimonialCard) {
  const ratingStars = [];

  for (let i = 0; i < rating; i++) {
    ratingStars.push(
      <img
        key={Math.random()}
        src={starFill}
        alt={''}
      />
    );
  }

  for (let i = 0; i < 5 - rating; i++) {
    ratingStars.push(
      <img
        key={Math.random()}
        src={starOutline}
        alt={''}
      />
    );
  }

  return (
    <article className={Classes.card}>
      <div className={Classes.card__header}>
        <img
          src={image}
          alt=''
          className={Classes.image}
        />
        <div className={Classes.header__text_container}>
          <b>{name}</b>
          <br />
          <div>
            <small>{role}</small>
            <span>
              {ratingStars.map((star) => {
                return star;
              })}
            </span>
          </div>
        </div>
      </div>
      <div className={Classes.testimonial__body}>
        <b>{summary}</b>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
