import styles from '../styles/Home.module.css'
import CaloriesInput from '../comp/CaloriesInput'
import TopBar from "../comp/Topbar";
import Navbar from "../comp/Navbar";
//import Label from "../comp/Label";

export default function Home() {
  return (
    <div className={styles.container2}>
      <TopBar />
        <h3 className={styles.heading}>Summary</h3>
        <div>add component here</div>
        <h3 className={styles.heading}>Breakfast</h3>
        <div className={styles.container3}>
            <CaloriesInput></CaloriesInput>
            <CaloriesInput title="Liquid +"></CaloriesInput>
        </div>
        <h3 className={styles.heading}>Lunch</h3>
        <div className={styles.container3}>
            <CaloriesInput></CaloriesInput>
            <CaloriesInput title="Liquid +"></CaloriesInput>
        </div>
        <h3 className={styles.heading}>Dinner</h3>
        <div className={styles.container3}>
            <CaloriesInput></CaloriesInput>
            <CaloriesInput title="Liquid +"></CaloriesInput>
        </div>
        <Navbar />
    </div>
  
  )
}