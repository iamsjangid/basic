import styles from './about.module.css'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textcontainer}>
                <h2 className={styles.subTitle}>About Mode Link</h2>
                <h1 className={styles.Title}>We create digital ideas that are bigger, bolder, braver and better</h1>
                <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi neque possimus dolorum ut molestiae sint voluptates consectetur accusamus quia ipsum laborum amet nesciunt voluptatem, autem consequuntur porro non! Autem esse ex qui consequatur neque. Hic doloremque, atque, ad placeat dolorem eos illo temporibus corrupti ipsa ea doloribus consectetur. Quas, aliquam?</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10K +</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10K +</h1>
                        <p>People Reached</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10K +</h1>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.textcontainer}>
                <Image src='/about.png' width={500} height={500} alt='about' className={styles.img}></Image>
            </div>
        </div>
    )
}

export default AboutPage
