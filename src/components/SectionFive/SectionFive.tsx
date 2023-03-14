import React, { useEffect, useRef } from 'react';
import Container from '../Container/Container';
import Classes from './styles.module.scss';

import Carousel from '../Carousel/Carousel';

function SectionFive() {
  return (
    <section>
      <Container>
        <div className={Classes.decoration}>
          <hr />
          <span>Our clients</span>
        </div>
        <h2 className={Classes.heading}>
          Honered to partner up with <span>there clients</span>
        </h2>

        {/* CAROUSEL */}
        <Carousel />
      </Container>
    </section>
  );
}

export default SectionFive;
