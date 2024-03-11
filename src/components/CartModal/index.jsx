import { MdClose } from 'react-icons/md';
import { CartItemCard } from './CartItemCard';
import style from './CartMotal.module.scss';
import { useEffect, useRef } from 'react';
export const CartModal = ({
  cartList,
  onclick,
  deleteOneProduct,
  handleModalToggle,
  setModal,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const handleOutClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };
  
    window.addEventListener('mousedown', handleOutClick);
  
    return () => {
      window.removeEventListener('mousedown', handleOutClick);
    };
  }, []);
  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        buttonRef.current?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={modalRef} className={style.containerModal} role="dialog">
      <div className={style.cartBuy}>
        <h2>Carrinho de compras</h2>
        <button
          ref={buttonRef}
          onClick={handleModalToggle}
          aria-label="close"
          title="Fechar"
        >
          <MdClose size={21} />
        </button>
      </div>
      <div>
        <ul className={style.ul}>
          {cartList.map((product) => (
            <CartItemCard
              deleteOneProduct={() => deleteOneProduct(product)}
              key={product.id}
              product={product}
            />
          ))}
        </ul>
        <div className={style.hr}></div>
      </div>
      <div className={style.total}>
        <div className={style.totalFlex}>
          <span>Total</span>
          <span>
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
        <button onClick={onclick}>Remover todos</button>
      </div>
    </div>
  );
};
