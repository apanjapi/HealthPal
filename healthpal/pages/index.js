import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Label from '../comp/Label'
import React from 'react';


export default function Home() {

  return (
    <div className={styles.container}>
      <h3>Tell us about yourself</h3>
      <div className={styles.inputbox}>
      <Label value="Name" placeholder="Your Name"/>
      <Label value="Gender" placeholder="Your Gender"/>
      <Label value="Age" placeholder="Your Age"/>
      <Label value="Weight" placeholder="Weight(KG)"/>
      <Label value="Hight" placeholder="Hight(CM)"/>
      <h3>What's your Weight goal?</h3>
      <Label value="Weight Goal" placeholder="Weight(KG)"/>
      </div>
      </div>
  )
}
