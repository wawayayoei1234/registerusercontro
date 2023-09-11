// index.js
import Image from 'next/image';
import React from 'react';
import styles from '../../../../../welcome/css/welcome.module.css';
import Lg from '@/assets/img/logowelcome.png';

function index() {
  return (
    <div className={styles.container}>
      <Image className={styles.logo} alt="logo" src={Lg} />
    </div>
  );
}

export default index;
