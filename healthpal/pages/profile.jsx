import styles from "../styles/Home.module.css";
import TopBar from "../comp/Topbar";
import Response from "../comp/Text/text";
import Image from 'next/image';
import styled from "styled-components";
import Navbar from "../comp/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <TopBar />
      <div className={styles.container4}>
        <Image src="/user.png"
        alt="user icon"
        width={80}
        height={80}
        />
        <div className={styles.name}>Name</div>
        <Response placeholder="Gender" value="Male" />
      </div>
      <div>
        <Response placeholder="Goal" value="Loose weight" />
        <Response placeholder="Current weight" value="Kg" />
        <Response placeholder="Weight Goal" value="Kg" />
        <Response placeholder="Weight to lose" value="Kg" />
      </div>
      <Navbar />
      <div>Bottom nav</div>
    </div>
  );
}