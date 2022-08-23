import React from 'react';
import Image from 'next/image';

import logo from '../images/logo.svg';
import styles from './header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
          <div className={styles.header_left}>
            <span className={styles.logo}><i>Connect</i></span><Image src={logo} alt="logo" width={50} height={50} />
          </div>
        </div>
    );
};

export default Header;