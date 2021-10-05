import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import CaloriesInput from '../comp/CaloriesInput'

export default function Home() {
  return (
    <div className={styles.container}>
        <h3 className={styles.LeftText}>Summary</h3>
        <h2 className={styles.LeftText}>Breakfast</h2>
        <div className={styles.container2}>
            <CaloriesInput></CaloriesInput>
            <CaloriesInput title="Liquid +"></CaloriesInput>
        </div>
        <h2 className={styles.LeftText}>Lunch</h2>
        <div className={styles.container2}>
            <CaloriesInput></CaloriesInput>
            <CaloriesInput title="Liquid +"></CaloriesInput>
        </div>
        <h2 className={styles.LeftText}>Dinner</h2>
        <div className={styles.container2}>
            <CaloriesInput></CaloriesInput>
            <CaloriesInput title="Liquid +"></CaloriesInput>
        </div>
    </div>
  
  )
}