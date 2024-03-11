import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList }) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   );
};
