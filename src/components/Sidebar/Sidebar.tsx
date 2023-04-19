import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./logo.svg" alt="logo" />

      <div className={styles.menu}>
        <NavLink to="dashboard" className={styles.item} title="Dashboard">
          <MdSpaceDashboard size={30} />
        </NavLink>

        <NavLink to="celendar" className={styles.item} title="Calendar">
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink to="board" className={styles.item} title="Trello Board">
          <FaTasks size={30} />
        </NavLink>

        <NavLink to="users" className={styles.item} title="Users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
