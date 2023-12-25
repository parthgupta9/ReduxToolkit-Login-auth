// Search.js
import React from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  // Use correct selector to get the cart items
  const items = useSelector((state) => state.cart.items);
  // Assuming you have a searchQuery in your state
  const searchQuery = useSelector((state) => state.cart.SearchText) || '';
  console.log('Search Query:', searchQuery);
  // Filter items based on the searchQuery
  const filteredItems = items.filter(
    (item) =>
    item &&
      item.title &&
      typeof searchQuery === 'string' && // Ensure searchQuery is a string
      item.title.includes(searchQuery)
  );
    
  return (
    <div>
      {/* {filteredItems.map((item) => (
        <div className="col p-3 mb-2 bg-white text-dark" key={item.id}>
          <div className="container">
            <h3>{item.title}</h3>
            <h5>{item.description}</h5>
            <div className="flex">
              <h4>Pricing-{item.price}</h4>
              <h4>Ratings-{item.rating}</h4>
            </div>
          </div> */}
        {/* </div>
      ))} */}
    </div>
  );
};

export default Search;
