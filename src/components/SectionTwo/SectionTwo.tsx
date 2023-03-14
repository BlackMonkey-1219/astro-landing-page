import React from 'react';
import Container from '../Container/Container';
import Classes from './styles.module.scss';

import partner_logo_1 from '../../assets/client_logo_1.png';
import partner_logo_2 from '../../assets/client_logo_2.png';
import partner_logo_3 from '../../assets/client_logo_3.png';
import partner_logo_4 from '../../assets/client_logo_4.png';
import partner_logo_5 from '../../assets/client_logo_5.png';
import partner_logo_6 from '../../assets/client_logo_6.png';

function SectionTwo() {
  return (
    <section className={''}>
      <Container>
        <h2 className={Classes.heading}>Our Partners</h2>
        <ul className={Classes.logo_list}>
          <li
            className={Classes.logo}
            title={'Partner #1'}>
            <img
              src={partner_logo_1}
              alt=''
            />
          </li>
          <li
            className={Classes.logo}
            title={'Partner #2'}>
            <img
              src={partner_logo_2}
              alt=''
            />
          </li>
          <li
            className={Classes.logo}
            title={'Partner #3'}>
            <img
              src={partner_logo_3}
              alt=''
            />
          </li>
          <li
            className={Classes.logo}
            title={'Partner #4'}>
            <img
              src={partner_logo_4}
              alt=''
            />
          </li>
          <li
            className={Classes.logo}
            title={'Partner #5'}>
            <img
              src={partner_logo_5}
              alt=''
            />
          </li>
          <li
            className={Classes.logo}
            title={'Partner #6'}>
            <img
              src={partner_logo_6}
              alt=''
            />
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default SectionTwo;
