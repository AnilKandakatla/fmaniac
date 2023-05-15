import {React } from 'react'
import { cartImg, logoDark } from '../assets/index'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const userInfo = useSelector((state)=> state.fashion.userInfo)
   const productData = useSelector((state) => state.fashion.productData);
  return (
    <div className="w-full h-20 bg-gray-300 border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <Link to="/">
            <div>
                <img className="w-28" src={logoDark} alt="logoDark" />
            </div>
            </Link>

        <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
                <Link to="/"> <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 
                decoration-[1px] cursor-pointer duration-300">Home</li>
                </Link>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2
                 decoration-[1px] cursor-pointer duration-300">Best sellers</li>
                {/*<li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>*/}
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 
                decoration-[1px] cursor-pointer duration-300">Contact us</li>
            </ul>
            <Link to="/cart">
            <div className="relative">
                <img className="w-10" src={cartImg} alt="cartImg"/>
                <span className="absolute w-6 top-1.5 left-2.5 text-sm flex items-center justify-center font-semibold">
                    {productData.length}
                </span>
            </div>
            </Link>
            <Link to="/login">
            <img className="w-8 h-8 rounded-full" src={"https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"}
            alt="userLogo"/>
            </Link>
            {
                userInfo && 
                <p className="text-base font-titleFont font-semibold ">{userInfo.name}</p>
            }
            </div>
        </div>
    </div>
  );
};

export default Header