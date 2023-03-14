import React from 'react';
import Container from '../Container/Container';
import Classes from './styles.module.scss';

import iconPin from '../../assets/icon_pin.png';
import iconPhone from '../../assets/icon_phone.png';
import iconEmail from '../../assets/icon_email.png';
import iconInstagram from '../../assets/icon_instagram.png';
import iconFacebook from '../../assets/icon_facebook.png';
import iconTwitter from '../../assets/icon_twitter.png';
import map from '../../assets/map.jpg';

function SectionSix() {
  return (
    <section>
      <Container>
        <h2 className={Classes.heading}>Contact Us</h2>
        <h3>Leave us a message</h3>
        <div className={Classes.content_container}>
          <form className={Classes.form}>
            <input
              type='text'
              name='user_name'
              id='user_name_input'
              placeholder={'Your name'}
            />
            <input
              type='email'
              name='user_email'
              id='user_email'
              placeholder={'Email address'}
            />
            <textarea
              name='email_content'
              id='email_content_input'
              cols={30}
              rows={10}
              placeholder={'Your Message'}></textarea>
            <button className={Classes.submit_button}>SEND</button>
          </form>

          <div className={Classes.info_container}>
            <div>
              <span>
                <img
                  src={iconPin}
                  alt=''
                />
              </span>
              <p>
                Infomation technologies building, Yogyakarta , Jawa tengah
                Indonesian
              </p>
            </div>
            <div>
              <span>
                <img
                  src={iconPhone}
                  alt=''
                />
              </span>
              <p>+021213414115151</p>
            </div>
            <div>
              <span>
                <img
                  src={iconEmail}
                  alt=''
                />
              </span>
              <p>hello1234@info.com</p>
            </div>
            <ul className={Classes.socialmedia_links}>
              <li>
                <a href='#'>
                  <img
                    src={iconInstagram}
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img
                    src={iconTwitter}
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img
                    src={iconFacebook}
                    alt=''
                  />
                </a>
              </li>
            </ul>
            <img
              src={map}
              alt=''
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionSix;
