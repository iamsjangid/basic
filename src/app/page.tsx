import Image from "next/image";
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vitae suscipit voluptas. Accusantium repellendus reiciendis repellat, sequi delectus</p>
        <div className={styles.buttons}>
          <button className={styles.button}>LEARN MORE</button>
          <button className={styles.button}>CONTACT</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt="brand" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgcontainer}>
        <Image src='/hero.gif' alt="brand" fill className={styles.heroImg} />
      </div>
    </div >
  );
}
