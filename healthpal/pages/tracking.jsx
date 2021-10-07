import styles from "../styles/Home.module.css";
import Label from "../comp/Label";
import TopBar from "../comp/Topbar";
import Navbar from "../comp/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBar />
      <h3 className={styles.heading}>Weight History</h3>
      <div>add graph api here</div>
      <Label value="Today +" placeholder="Weight(KG)"/>
      
      <Navbar />
    </div>
  );
}