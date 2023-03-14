import React from 'react';
import Classes from './styles.module.scss';

import logo from '../../assets/logo.png';
import iconInstagram from '../../assets/icon_instagram.png';
import iconFacebook from '../../assets/icon_facebook.png';
import iconTwitter from '../../assets/icon_twitter.png';
import Container from '../Container/Container';

function Footer() {
  return (
    <footer className={Classes.main_element}>
      <Container>
        <div className={Classes.content_container}>
          {/* TOP */}
          <div className={Classes.top_content_container}>
            <div>
              <img
                src={logo}
                alt=''
              />
              <p>
                The leading SaaS Platform to digitise Vendor Management for
                innovative Procurement on Yogyakarta since 2019
              </p>
            </div>
            <div>
              <ul className={Classes.nav_links}>
                <li>
                  <b>Services</b>
                  <ul>
                    <li>
                      <a href=''>Email Marketing</a>
                    </li>
                    <li>
                      <a href=''>Compaigns</a>
                    </li>
                    <li>
                      <a href=''>Branding</a>
                    </li>
                    <li>
                      <a href=''>Offline</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>About</b>
                  <ul>
                    <li>
                      <a href=''>Our Story</a>
                    </li>
                    <li>
                      <a href=''>Benefits</a>
                    </li>
                    <li>
                      <a href=''>Team</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Company</b>
                  <ul>
                    <li>
                      <a href=''>Featured</a>
                    </li>
                    <li>
                      <a href=''>Careers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* MIDDLE */}
          <div className={Classes.middle_content_container}>
            <form action=''>
              <div>
                <input
                  type='email'
                  name='user_email'
                  id='user_email_input'
                />
                <button>Join</button>
              </div>
            </form>
            <ul>
              <li>
                <img
                  src={iconInstagram}
                  alt=''
                />
              </li>
              <li>
                <img
                  src={iconFacebook}
                  alt=''
                />
              </li>
              <li>
                <img
                  src={iconTwitter}
                  alt=''
                />
              </li>
            </ul>
          </div>
          {/* BOTTOM */}
          <hr />
          <small>Copyright &copy; 2020. Lumintu. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
