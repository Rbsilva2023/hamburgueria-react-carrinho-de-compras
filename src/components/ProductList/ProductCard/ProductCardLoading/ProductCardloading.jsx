import styles from './ProductCardLoading.module.scss';
import { dataFakeLoading } from './dataFake';

export const ProductCardLoading = () => {
  return (
    <>
      {dataFakeLoading.map((product) => {
        return (
          <div className={`${styles.li} ${styles.animation}`} key={product.id}>
            <li className={styles.li}>
              <div className={styles.containerIMG}>
                <div className={styles.imgProduct}></div>
              </div>
              <div className={styles.infoProduct}>
                <h3></h3>
                <span className={styles.category}> </span>
                <span className={styles.price}></span>
                <button className={styles.btn}> </button>
              </div>
            </li>
          </div>
        );
      })}
    </>
  );
};
