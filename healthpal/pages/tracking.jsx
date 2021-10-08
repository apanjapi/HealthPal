import styles from "../styles/Home.module.css";
import Label from "../comp/Label/label";
import TopBar from "../comp/Topbar/topbar";
import Navbar from "../comp/Navbar/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBar />
      <h3 className={styles.heading}>Weight History</h3>
      <div>add graph api here</div>
      <Label value="Today +" placeholder="Weight(KG)" />

      <Navbar />
    </div>
  );
}