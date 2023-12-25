import React, { useEffect, useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/Cartslce';
import { useSelector } from 'react-redux';


const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const searchText = useSelector((state) => state.search.searchText);

  const sortOption = useSelector((state) => state.sort.sortOption);
 
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('API response does not contain the expected "products" key:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'asc') {
      return a.price - b.price;
    } else if (sortOption === 'desc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="row">
      {sortedProducts.map((product) => (
        <div className="col p-3 mb-2 bg-white text-dark" key={product.id}>
          <div className="container">
          <h3>{product.title}</h3>
            <img src={product.images} style={{height:'100px',width:'100px'}}></img>
            
            <h5>{product.description}</h5>
            <div className="flex">
              <h4>Pricing-{product.price}</h4>
              <h4>Ratings-{product.rating}</h4>
            </div>
            <button onClick={() => handleAdd(product)} className="btn">
              Add to the cart
            </button>
          </div>
        </div>
      ))}
      {/* <Search products={filteredProducts}/> */}
    </div>
  );
};

export default Products;
