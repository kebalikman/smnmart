import React, { useState } from 'react'
import Link from 'next/link';

const index = ({dataRekomendasi}) => {
  return (
    <div className='container px-2 mx-auto p-2 mt-2 2xl:px-40 xl:mt-10 md:mt-5 lg:px-10 min-w-[375px]'>
        <h1 className='text-slate-800 text-2xl font-bold text-center my-10'>Promo</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-6 mb-20 '>

            
                {dataRekomendasi.map((x)=>(
            
                  <Link href={"http://localhost:3000/detailproduk/"+x.KodeProduk }>
                    <div className='overflow-hidden bg-white hover:scale-105 transition-all cursor-pointer shadow-md relative'>
                      <img key={x.id}  src={"https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/"+x.KodeProduk+".jpg"} alt="Gambar" className='object-cover w-full aspect-square'></img>

                      <div className='text-center w-full'>
                        <span className='block font-light text-slate-800' key={x.id}> {x.Nama}</span>
                        <span className='block font-regular text-slate-800' key={x.id}> Rp {x.Harga}</span>
                        <span className='block font-light line-through decoration-1 text-red-500' key={x.id}> Rp {x.HargaUp}</span>
                      </div>
                    </div>
                    </Link>
               
                ))}

        </div>
        
    </div>
  )
}

export default index;

export const getServerSideProps = async()=>{
    const res = await fetch("https://api-smnmart.biznizo.my.id/android/promo");
    const data = await res.json();

    return {
        props:{
            dataRekomendasi:data,
        }
    }
}