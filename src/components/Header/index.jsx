import { useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { MdSearch, MdShoppingCart } from 'react-icons/md';
import styles from './Header.module.scss';

export const Header = ({ cartList, handleModalToggle, setSearchTerm }) => {
  const [value, setValue] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(value);
  };
  return (
    <header className={`${styles.header} ${styles.animation}`}>
      <div className={styles.limitRange}>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <div className={styles.headerSearch}>
          <button onClick={handleModalToggle} className={styles.btn}>
            <MdShoppingCart size={21} />
            <span>{cartList.length}</span>
          </button>
          <form className={styles.form} onSubmit={handleSearch}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ position: 'relative' }}
            />
            <button type="submit">
              <MdSearch size={21} />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
