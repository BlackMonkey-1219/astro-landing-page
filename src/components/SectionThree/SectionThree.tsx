import React from 'react';
import Container from '../Container/Container';
import Classes from './styles.module.scss';

import image_1 from '../../assets/section_two_image_1.jpg';
import image_2 from '../../assets/section_two_image_2.jpg';
import image_3 from '../../assets/section_two_image_3.jpg';

function SectionThree() {
  return (
    <section>
      <Container>
        <div className={Classes.decoration}>
          <hr />
          <span>About us</span>
        </div>
        <h2 className={Classes.heading}>
          We are more than <span>Digital agency</span>
        </h2>
        <div className={Classes.image_container}>
          <div className={Classes.left_container}>
            <img
              src={image_1}
              alt=''
            />
          </div>
          <div className={Classes.right_container}>
            <div>
              <img
                src={image_2}
                alt=''
              />
            </div>
            <div>
              <img
                src={image_3}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className={Classes.text_container}>
          <article className={Classes.article_left}>
            <h3>Who are we</h3>
            <p>
              Lumintu Logic is an IT company that originates from Yogyakarta,
              Indonesia. The word Lumintu itself means continuous service in
              Javanese. Founded in 2009, Lumintu Logic developed its first
              products mostly for desktop application environment.
            </p>
          </article>
          <article className={Classes.article_right}>
            <h3>What we do</h3>
            <p>
              We are bound to the principle of continuous service, we realize
              that we must follow the ongoing development in IT industry.
              Therefore, we are now providing applications for web environment
              and continuously adapting into using new frameworks. We are also
              maintaining the availability of services by investing in new
              infrastructures that we mainly use as the home for our SaaS
              (Software as a Service)
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

export default SectionThree;
