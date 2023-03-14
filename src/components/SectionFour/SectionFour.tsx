import React from 'react';
import Container from '../Container/Container';

import Classes from './styles.module.scss';
import { services } from '../../data/services';
import ServiceCard from '../ServiceCard/ServiceCard';

function SectionFour() {
  return (
    <section>
      <Container>
        <div className={Classes.content_container}>
          {/* LEFT */}
          <div className={Classes.left_content_container}>
            <div className={Classes.decoration}>
              <hr />
              <span>Our services</span>
            </div>
            <h2>
              How we help <span>your company</span>
            </h2>
            <p>
              we are a company that prioritizes customer satisfaction so that we
              can become a favorite company for all companies that use our
              services
            </p>
            <hr />
            <div className={Classes.stats}>
              <span className={Classes.stat_item}>
                <strong>65</strong>
                <p>projects completed</p>
              </span>
              <span className={Classes.stat_item}>
                <strong>976</strong>
                <p>cups of coffe</p>
              </span>
              <span className={Classes.stat_item}>
                <strong>14</strong>
                <p>clients</p>
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <ul className={Classes.services}>
            {services.map((service) => {
              return (
                <li className={Classes.service}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    text={service.text}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionFour;
