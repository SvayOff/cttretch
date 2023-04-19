import React from 'react';
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart';
import styles from './Orders.module.css';
import { groupNumber, ordersData } from '../../data';

const Orders: React.FC = () => {
  return (
    <div className={`${styles.container} theme-container`}>
      <div className={styles.head}>
        <img src="./logo.svg" alt="logo" />
        <span>Orders Today</span>
      </div>
      <div className={`grey-container ${styles.stat}`}>
        <span>Amount</span>
        <span>$ {groupNumber(4560)}</span>
      </div>
      <div className={styles.orders}>
        {ordersData.map((order, index) => (
          <div key={index} className={styles.order}>
            <div>
              <span>{order.name}</span>
              <span>{order.change}</span>
            </div>
            <div>
              <span>{order.type}</span>
              <span>Items: {order.items}</span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.orderChars}>
        <span>Split by Orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
};

export default Orders;
