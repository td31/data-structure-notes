import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: "Leetcode Easy",
    img_src: "../../static/img/500287ld.jpg",
  },
  {
    title: "Leetcode Medium",
    img_src: "../../static/img/510803ld.jpg",
  },
  {
    title: "Leetcode Hard",
    img_src: "../../static/img/515500ld.jpg",
  },
];

function Feature({ img_src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.img_homepage} src={img_src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
