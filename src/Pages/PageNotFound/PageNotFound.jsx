
import imageNotFound from '../../assets/images/PageNotFound.jpg'
import styles from './PageNotFound.module.scss'; 
export default function PageNotFound() {
  return (
    <div  >
      <img src={imageNotFound} className={styles.img} alt="Page Not Found" />
    </div>
  );
}
