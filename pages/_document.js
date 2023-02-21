import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import Link from 'next/link'


import { useState } from "react";
var data = require("./data.json");

export default function Document() {

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch= (searchTerm) => {
    console.log('search', searchTerm);
  }

  return (
    <Html lang="en">
      <Head />
      {/* Navbar */}
      <nav className='py-8 bg-merah w-full h-10 columns-3 flex items-center justify-between fixed z-10'>

        <div className='flex items-center gap-3 pl-6 mr-2 md:mr-24 '>

          <span className='font-thin pb-[3px] text-2xl whitespace-nowrap md:ml-10'>SMN Mart</span>

          <div class="cursor-pointer visibile md:hidden group ">
            <img src='menu.png' className="w-28 min-w-[32px] max-w-[32px] cursor-pointer"></img>
            <div className='md:pr-16 md:ml-6 pr-2 scale-125 absolute bg-merah/95 p-2  shadow-md mt-6 hidden group-hover:block transition-all'>
              <Link href={"/"}>
              <span className='hover:text-slate-300 font-light mt-1 cursor-pointer block  mb-2'>Beranda</span>
              </Link>
              <Link href={"/promo/"} className=''>
              <span className='hover:text-slate-300 font-light  cursor-pointer'>Blog</span>
              </Link>
             

              <div className='flex scale-90 gap-2 mt-5'>
              

                <Link href={'https://play.google.com/store/apps/details?id=com.biznizo.smnmart&hl=id'} className='w-8' target="_blank">
                 <img src='playstore.png' className='w-8 h-8 cursor-pointer hover:scale-105 shadow-sm bg-white rounded-full p-1 transition-all'></img>
                </Link>
              
              </div>
            
            </div> 
          </div>

        


        </div>

        {/* <div className='p-1 bg-white w-full rounded-md flex  mx-10 mr-2 md:mx-0 relative overflow-hidden'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" className="w-6 h-6 stroke-slate-500 ml-2 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          <div className=" text-black ">
            <input type="text" placeholder='Cari produk...' value={value} onChange={onChange} className="bg-white outline-none border-collapse font-thin "/>
            <button onClick={() => onSearch(value)} className="absolute right-0 bg-slate-200 font-thin h-full px-2 "> Search </button>
          </div>
        </div>
        <div className="text-black bg-white p-5 absolute left-64 ml-2 top-10 ">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.Nama.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.Nama)}
                  className="dropdown-row "
                  key={item.Nama}
                >
                  {item.Nama}
                </div>
              ))}
          </div> */}

        <div className='mx-2 md:mx-5 md:flex md:visible gap-5 hidden'>

          <Link href={'/'} className="mt-1">
          <span className='hover:text-slate-300 font-light mt-1 cursor-pointer'>Beranda</span>
          </Link>
          <Link href={'/promo'} className='mt-1'>
          <span className='hover:text-slate-300 font-light  cursor-pointer'>Blog</span>
          </Link>
          
          <Link href={'https://play.google.com/store/apps/details?id=com.biznizo.smnmart&hl=id'} className='w-8' target="_blank">
          <img src='playstore.png' className='w-[105px]  min-w-full bg-white rounded-full hover:scale-105 p-1'></img>
          </Link>
          
          
          

        </div> 

        </nav>
      
      <body className=''>
        <hr className='mt-14'></hr>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export const getServerSideProps = async()=>{
  const rekomendasi_res = await fetch("https://api-smnmart.biznizo.my.id/android/rekomendasi");

  const rekomendasi = await rekomendasi_res.json();


  return { props:{rekomendasi} }
}
