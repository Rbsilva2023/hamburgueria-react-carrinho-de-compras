import { useEffect, useState } from 'react';
import { CartModal } from '../../components/CartModal';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import styles from './HomePage.module.scss';
import { ProductCardLoading } from '../../components/ProductList/ProductCard/ProductCardLoading/ProductCardloading';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const url = 'https://hamburgueria-kenzie-json-serve.herokuapp.com/products';
const notifySucess = () => toast.success('Product added to cart!');
const notifyError = () => toast.error('Only one item at a time.');
const notifyErrorCartIsEmpty = () => toast.error('Empty cart.');
const notifyCleanCart = () => toast.success('Cart Cleaned!');
const notifyRemoveItemToCart = () =>
  toast.success('Product removed from cart!');

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [modal, setModal] = useState(false);
  const controller = new AbortController();

  const handleFetch = async () => {
    try {
      const response = await axios.get(url);
      const json = response.data;
      setProductList(json);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (e) => {
    if (!cartList.some((product) => product.id === e.id)) {
      const updatedCart = [...cartList, e];
      setCartList(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      notifySucess();
    } else {
      notifyError();
    }
  };

  const handleCleanToCart = () => {
    localStorage.removeItem('cart');
    setCartList([]);
    if (cartList.length > 0) {
      setModal(false);
      notifyCleanCart();
    }
  };

  const removeProductToCart = (e) => {
    const updatedCart = cartList.filter((product) => product.id !== e.id);
    setCartList(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    notifyRemoveItemToCart();
    if (cartList.length === 1) {
      setModal(false);
    }
  };

  const handleModalToggle = () => {
    if (cartList.length > 0) {
      setModal(!modal);
    } else {
      notifyErrorCartIsEmpty();
    }
  };

  const filteredProductList = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    handleFetch();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header
        handleModalToggle={handleModalToggle}
        cartList={cartList}
        setSearchTerm={setSearchTerm}
      />
      <div className={styles.containerMain}>
        <main className={styles.main}>
          {productList.length === 0 ? (
            <ul className={styles.ul}>
              <ProductCardLoading />
            </ul>
          ) : (
            <ProductList
              onClick={(e) => handleAddToCart(e)}
              productList={filteredProductList}
            />
          )}
          {modal && (
            <CartModal
              setModal={() => setModal(false)}
              handleModalToggle={handleModalToggle}
              onclick={() => handleCleanToCart()}
              cartList={cartList}
              productList={filteredProductList}
              deleteOneProduct={(e) => removeProductToCart(e)}
            />
          )}
        </main>
      </div>
    </>
  );
};
