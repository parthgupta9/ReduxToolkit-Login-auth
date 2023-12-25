import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setSearchText } from '../store/SearchSlice';
import { setSortOption } from '../store/SortSlice';
import './nav.css'


const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
      const searchText = useSelector((state) => state.search.searchText);
      const dispatch = useDispatch();

      const handleSearch = (newSearchText) => {
        dispatch(setSearchText(newSearchText));
      };

      const sortOptions = [
        { label: 'Low to High', value: 'asc' },
        { label: 'High to Low', value: 'desc' },
      ];

      const handleSortChange = (newSortOption) => {
        dispatch(setSortOption(newSortOption));
      };
    

  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: '#000000', color:'#FFFFFF'}}>
    <div className="container-fluid">
    <Link className="nav-link" id="home" to="/">Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
          <li className="nav-item" style={{color:'#FFFFFF'}}>
            <Link className="nav-link" to="/Login" style={{color:'#FFFFFF'}}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart" style={{color:'#FFFFFF'}}>Cart</Link>
          </li>
          <li className="nav-item"> <span className="nav-link"  style={{color:'#FFFFFF'}}>
          Cart Items:{items.length}
          </span>
          </li>
          <label className="nav-item"><span className="nav-link" id='label' style={{color:'#FFFFFF'}}>Sort by Pricing:</span></label>
      <select className="option" onChange={(e) => handleSortChange(e.target.value)}>
        <option value="" className="option">No Sorting</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
           ))}
            </select>

        </ul>
        <form className="d-flex" id="forms" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={searchText}
                onChange={(e) => handleSearch(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onChange={handleSearch}>Search</button>
      </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

