/*
 * @Description: 
 * @Autor: fqt
 * @Date: 2021-12-31 15:12:23
 * @LastEditors: fqt
 * @LastEditTime: 2021-12-31 17:38:00
 */
import React from 'react';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import styles from './App.module.css';
import logo from './assets/images/logo.svg';
import ShoppingCart from './components/ShoppingCart';
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"></img>
        <h1>罗伯特机器人炫酷屌炸天online购物平台的名字要长</h1>
      </div>
      <ShoppingCart></ShoppingCart>
      <div className={styles.robotList}>
        {
          robots.map((r) => <Robot id={r.id} email={r.email} name={r.name}></Robot>)
        }
      </div>
    </div>
  );
}

export default App;
