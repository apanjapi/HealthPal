import styles from "../styles/Home.module.css";
import Label from "../comp/Label/label";
import TopBar from "../comp/Topbar/topbar";
import Navbar from "../comp/Navbar/navbar";
import CaloriesInput from "../comp/CaloriesInput/input";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div>
        <h3 className={styles.heading}>Tell us about yourself</h3>
        <div className={styles.inputbox}>
          <Label value="Name" placeholder="Your Name" />
          <Label value="Gender" placeholder="Your Gender" />
          <Label value="Age" placeholder="Your Age" />
          <Label value="Weight" placeholder="Weight(KG)" />
          <Label value="Hight" placeholder="Hight(CM)" />
          <h3 className={styles.heading}>What is your Weight goal?</h3>
          <Label value="Weight Goal" placeholder="Weight(KG)" />
        </div>
      </div>
      <CaloriesInput title="Submit"/>
      <Navbar></Navbar>
    </div>
  );
}