import React from 'react';
import styles from '../assets/statsCard.module.scss';
import employee from '../assets/img/image-header-desktop.jpg';
import employeeMob from '../assets/img/image-header-mobile.jpg';

function StatsCard() {
  return (
    <main>
      <article>
        <div className={styles.left}>
          <div className={styles.info}>
            <h1>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions regarding revenue,
              customer experience, and overall efficiency.
            </p>

            <ul>
              <li>
                10k+ <span>Companies</span>
              </li>
              <li>
                314 <span>Templates</span>
              </li>
              <li>
                12M+ <span>Queries</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.image}>
          <picture>
            <source media="(min-width: 901px)" srcSet={employee} />
            <img src={employeeMob} alt="employee" />
          </picture>
          <div></div>
        </div>
      </article>
    </main>
  );
}

export default StatsCard;
