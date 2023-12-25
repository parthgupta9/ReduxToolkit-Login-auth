import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Products from './Products'
import Search from './Search'

const Home = () => {
    const usenavigate =useNavigate()
    useEffect(()=>{
    let username = sessionStorage.getItem('username');
    if(username===''|| username===null){
        usenavigate('/login');
    }
    },[])

  return (
    <div className="p-3 mb-2" style={{backgroundColor: '	#F5F5F5'}}>
      <h2 className="heading">Welcome to Products Page</h2>
      <section>
        <Products/>
      </section>
      </div>
  )
}

export default Home;
