import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
 const [username,usernameupdate]=useState('');
 const [password,passwordupdate]=useState('');

 const usenavigate= useNavigate();


useEffect(()=>{
   sessionStorage.clear();
},[])
const ProceedLogin = (e)=>{
    e.preventDefault();
    if( validate() ) {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: 'kminchelle',
              password: '0lelplR',
              username: "dpettegre6",
              password: "YVmhktgYVS",
              username: "atuny0",
              password: "9uQFF1Lh",
              username: "hbingley1",
            password: "CQutx25i8r",
            username: "rshawe2",
            password: "OWsTbMUgFc",
            username: "yraigatt3",
            password: "sRQxjPfdS",
            username: "kmeus4",
            password: "aUTdmmmbH",
            username: "jtreleven5",
            password: "zY1nE46Zm",
            username: "dpettegre6",
            password: "YVmhktgYVS",
            username: "ggude7",
            password: "MWwlaeWcOoF6",
            username: "umcgourty9",
            password: "i0xzpX",
            username: "acharlota",
            password: "M9lbMdydMN",
            })
          })
          .then(res => res.json())
          .then((res)=>{ 
            if(Object.keys(res).length===0){
            toast.error('Please Enter valid Username');
          } else{
            if(res.password===password){
                toast.success('Success');
                  usenavigate('/')
            }else{
                sessionStorage.setItem('username',username);
                usenavigate('/')
            }
          }})
         
        // console.log('proceed');
    }
}
const validate = () => {
    let result=true;
    if(username ===''|| username ===null){
              result=false;
              toast.warning('Please Enter Username');
    }
    if(password ==='' || password ===null){
        result=false;
        toast.warning('Please Enter Password', {
            position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
        });
}  
    return result;
}
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> 
                            {/* <Link className="btn btn-success" to={'/register'}>New User</Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Login