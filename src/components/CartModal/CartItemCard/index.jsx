import { MdDelete } from 'react-icons/md';
import styles from './CartItemCard.module.scss';
export const CartItemCard = ({ product, deleteOneProduct }) => {
  return (
    <li className={styles.li}>
      <div>
        <div className={styles.cardImage}>
          <img src={product.img} alt={product.name} />
        </div>
        <div className={styles.infoProduct}>
          <h3>{product.name}</h3>
          <span>R$ {product.price}</span>
        </div>
      </div>
      <button
        onClick={deleteOneProduct}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
