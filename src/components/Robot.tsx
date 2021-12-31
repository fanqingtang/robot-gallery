/*
 * @Description: 
 * @Autor: fqt
 * @Date: 2021-12-31 15:32:29
 * @LastEditors: fqt
 * @LastEditTime: 2021-12-31 16:19:30
 */

import React from 'react';
import styles from './Robot.module.css';
interface RobotProps {
  id: string;
  name: string;
  email: string;
}
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robot;