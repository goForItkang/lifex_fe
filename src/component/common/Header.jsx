import React from 'react';
import {Link, useNavigate} from 'react-router-dom'; 


import {  useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const hospital_name = user?.hospital;
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const logoutHandler = () =>{
       dispatch(logout());
       navigator("/login")
    }
    return (
        <header className='flex   border-b mx-auto bg-[#f6f8f7ff] h-[100px] '>
            <div className='flex w-[80%] justify-between m-auto'>
            <div className='flex items-center' id='logo-div'>
            <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
            <Link to="/">
            <p>LifeX</p>
            </Link>
            </div>
            <nav className='md:flex hidden w-[300px] justify-evenly mx-auto md:block'>
                <Link to={`/hospital/${hospital_name}`}>
                <p>병원 현황</p>
                </Link>
                <Link to={"/medicine"}>
                <p>약 조회</p>
                </Link>
                <Link to={"/rental"}>
                <p>대여 현황</p>
                </Link>
                <Link to={"/medicine/approval"}>
                <p>약승인</p>
                </Link>
            </nav>
            
            <div id='user-icon' className='flex items-center ml-4'>
            {user ? (
                <div className='flex w-[170px] justify-around'>
                    <p>{user.name}</p> 
                    <button onClick={()=>logoutHandler()}>로그아웃</button>
                </div>
            ):(
                <Link to="/login">로그인</Link>
            )
            }
            </div>
            </div>
        </header>
    );
};

export default Header;