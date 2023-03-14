import React from 'react';

import Classes from './styles.module.scss';

interface iServiceCard {
  icon: string;
  title: string;
  text: string;
}

function ServiceCard({ icon, title, text }: iServiceCard) {
  return (
    <article className={Classes.card}>
      <img
        src={icon}
        alt=''
      />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default ServiceCard;
