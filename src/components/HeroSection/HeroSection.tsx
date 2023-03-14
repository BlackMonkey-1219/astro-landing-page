import React from 'react';
import Container from '../Container/Container';
import Classes from './styles.module.scss';
import Button from '../Button/Button';
import heroImage from '../../assets/hero_image.jpg';

function HeroSection() {
  return (
    <section>
      <Container>
        <div className={Classes.item_container}>
          <div className={Classes.item_container__left}>
            <div>
              <hr />
              <span>We are agency</span>
            </div>
            <h1>
              We Provide <br />
              <span>Lifetime IT Assisstance</span>
              <br />
              For Everyone
            </h1>
            <p>
              The leading SaaS platform to digitise vendor management for
              innovative procurement on yougyakarta since 2020
            </p>
            <div className={Classes.button_container}>
              <Button type={'primary'}>Get Started</Button>
              <Button type={'secondary'}>Watch Video</Button>
            </div>
          </div>
          <div className={Classes.item_container__right}>
            <img
              src={heroImage}
              alt='hero image'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
