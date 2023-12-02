import { useEffect, useState } from "react";

const ProductList = ({category} : {category: string}) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log('Fetching products in ' + category);
    setProducts(['Clothing', 'Household']);
  }, [category] ); //react re-renders dependent on whatever is in this array 

  return <div>{products}</div>;
};

export default ProductList;
