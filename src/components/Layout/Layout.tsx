import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import moment from 'moment';
import styles from './Layout.module.css';
import { Navigate, useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Sidebar />

      {pathname === '/' && <Navigate to={'/dashboard'} />}

      <div className={styles.dashboard}>
        <div className={styles.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={styles.header}>
          <span>{moment().format('dddd, Do MMM, YYYY')}</span>

          <div className={styles.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>

          <div className={styles.profile}>
            <img src="/photo.jpg" alt="photo" />
            <div className={styles.details}>
              <span>Vitaliy Strizhibovt</span>
              <span>vitaliystrizhibovt@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
