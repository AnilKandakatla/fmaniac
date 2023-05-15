import React from 'react'
import {fmIcon, paymentLogo} from '../assets'
import {ImGithub} from 'react-icons/im'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsPersonFill, BsPaypal} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/*Logo Icon */}
        <div className="flex flex-col gap-3">
          <img className="w-32" src={fmIcon} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">FashionManiac.com</p>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer"/>
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer"/>
            <FaTwitter className="hover:text-white duration-300 cursor-pointer"/>
            <FaInstagram className="hover:text-white duration-300 cursor-pointer"/>
            <FaYoutube className="hover:text-white duration-300 cursor-pointer"/>
            <FaHome className="hover:text-white duration-300 cursor-pointer"/>
          </div>
        </div>

        {/*Locate us */}
        <div>
        <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
        <div className="text-base flex  flex-col gap-2">
        <p>Anil Kandakatla</p>
        <p>Mobile: +61481951677</p>
        <p>Phone: +61481951677</p>
        <p>E-mail: fashionmaniac.com.au</p>
        </div>
        </div>

        {/*Profile */}
        <div>
        <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
        <div className="flex flex-col text-base gap-2">
        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
          <span>
            <BsPersonFill />
          </span>
          my account
        </p>

        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
          <span>
            <BsPaypal />
          </span>
          checkout
        </p>

        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
          <span>
            <FaHome />
          </span>
          order tracking
        </p>

        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
          <span>
            <MdLocationOn />
          </span>
          help & support
        </p>
        </div>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col justify-center">
          <input className="bg-transparent border px-4 py-2 text-sm" placeholder="email" type="text" />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 
          active:bg-white active:text-black">Subscribe</button>
        </div>


      </div>
    </div>

  )
}

export default Footer