import styles from "../styles/Home.module.css";
import Label from "../comp/Label";

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <h3>Tell us about yourself..</h3>
=======
      <h3>Tell us about yourself</h3>
>>>>>>> origin/Amelie
      <div className={styles.inputbox}>
        <Label value="Name" placeholder="Your Name" />
        <Label value="Gender" placeholder="Your Gender" />
        <Label value="Age" placeholder="Your Age" />
        <Label value="Weight" placeholder="Weight(KG)" />
        <Label value="Hight" placeholder="Hight(CM)" />
        <h3>What is your Weight goal?</h3>
        <Label value="Weight Goal" placeholder="Weight(KG)" />
      </div>
    </div>
  );
}
