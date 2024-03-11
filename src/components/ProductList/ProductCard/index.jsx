import styles from './ProductCard.module.scss';

export const ProductCard = ({ product, onClick }) => {
  return (
    <li className={`${styles.li} ${styles.animation}`}>
      <div className={styles.containerIMG}>
        <img
          className={styles.imgProduct}
          src={product.img}
          alt={product.name}
        />
      </div>
      <div className={styles.infoProduct}>
        <h3>{product.name}</h3>
        <span className={styles.category}>{product.category}</span>
        <span className={styles.price}>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
        <button onClick={onClick} className={styles.btn}>
          Adicionar
        </button>
      </div>
    </li>
  );
};
