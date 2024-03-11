import { useState } from 'react';
import { ProductCard } from './ProductCard';
import styles from './ProductList.module.scss';

export const ProductList = ({ productList, onClick }) => {
  return (
    <ul className={styles.ul}>
      {productList.map((product) => (
        <ProductCard
          onClick={() => onClick(product)}
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
};
