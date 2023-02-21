import React, { useState } from 'react'
import Link from 'next/link';

const index = ({dataRekomendasi}) => {
  return (
    <div className='container px-20 '>
        <h1 className='text-slate-800 text-2xl font-bold text-center my-10'>Kategori Produk</h1>

        <div className='grid grid-cols-3 p-100 pt-0 gap-5 py-10 px-64 shadow-xl '>

            
                {dataRekomendasi.map((x)=>(
                <div className='group relative h-52 w-34 rounded-3xl overflow-hidden shadow-xl'>
                  <Link href={"https://api-smnmart.biznizo.my.id/android/rekomendasi/"+x.KodeProduk}>
                  <div className='flex bg-sapi_ico bg-[length:100px_100px] bg-center bg-no-repeat bg-yellow-100 w-full h-full group-hover:scale-105 transition-all cursor-pointer'>

                    <div className='p-5 mt-auto w-full bg-black/75 h-14'>
                      <span className='block text-xl font-semibold' key={x.kategori_id}> {x.kategori_nama}</span>
                    </div>

                  </div>
                  </Link>
                </div>
                ))}

        </div>
        
    </div>
  )
}

export default index;

export const getServerSideProps = async()=>{
    const res = await fetch("https://api-smnmart.biznizo.my.id/android/kategori");
    const data = await res.json();

    return {
        props:{
            dataRekomendasi:data,
        }
    }
}