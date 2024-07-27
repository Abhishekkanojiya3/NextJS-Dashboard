import Image from 'next/image';
import styles from './rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md';

const Rightbar = () => {
  return (
    <div className={styles.container}>
     <div className={styles.item}>
      <div className={styles.bgConatainer}>
        <Image src= '/astro.png' alt = '' fill className={styles.bg}/>
      </div>
      <div className={styles.texts}>
        <span className={styles.notification}>🔥 Available now</span>
        <h3 className={styles.title}>
          How to use the new version of admin Dashboard?
        </h3>
        <span className={styles.subtitile}>
          Take 4 minutes to learn
        </span>
        <p className={styles.desc}>
          hbeffi fewiufewuifewuhf fewiufewui fe fefewuifweuhifw 
        </p>
        <button className={styles.button}>
          <MdPlayCircleFilled/>
          Watch
        </button>
      </div>
     </div>
     <div className={styles.item}>
      <div className={styles.texts}>
      <span className={styles.notification}>🚀 Coming Soon</span>
      <h3 className={styles.title}>
          How to use the new version of admin Dashboard?
        </h3>
        <span className={styles.subtitile}>
          Take 4 minutes to learn
        </span>
        <p className={styles.desc}>
          hbeffi u ifewuifewhufieufifweuf fewiufewuifewuhf fewiufewui fe fefewuifweuhifw 
        </p>
        <button className={styles.button}>
          <MdPlayCircleFilled/>
          Watch
        </button>
      </div>

     </div>
    </div>
  )
}
export default Rightbar;
