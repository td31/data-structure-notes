import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: "Leetcode Easy",
    img_src: "https://i.imgur.com/a1RdvPV.jpg",
    anchor_tag: "/docs/Leetcode-Easy/Reverse-Linked-List"
  },
  {
    title: "Leetcode Medium",
    img_src: "https://i.imgur.com/EH0OG4f.jpg",
    anchor_tag: "/docs/Leetcode-Medium/Binary-Tree-Zigzag-Level-Order-Traversal"
  },
  {
    title: "Leetcode Hard",
    img_src: "https://i.imgur.com/t9yWOdb.jpg",
    anchor_tag: "/docs/Leetcode-Hard/Merge-k-Sorted-Lists"
  },
];

function Feature({ img_src, title, anchor_tag }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={anchor_tag}>
          <img className={styles.img_homepage} src={img_src} />
        </a>
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
