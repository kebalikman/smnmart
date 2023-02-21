import React from 'react'
import Link from 'next/link';

const index = ({dataRekomendasi}) => {
  return (
    <div className='container px-20 '>
        <h1 className='text-slate-800 text-2xl font-bold text-center my-10'>List rekomendasi</h1>

        <div className='grid grid-cols-6 p-100 pt-0 gap-5 p-10 shadow-xl '>

            
                {dataRekomendasi.map((x)=>(
                <div className='group relative h-80 w-54 rounded-3xl overflow-hidden shadow-xl'>
                <Link href={"/rekomendasi/"+x.id}>
           
                  <div className='flex bg-rekomendasi bg-contain bg-center bg-no-repeat bg-yellow-100 w-full h-full group-hover:scale-105 transition-all cursor-pointer'>

                    <div className='p-5 mt-auto w-full bg-black/75'>
                      <span className='block text-xl font-semibold' key={x.id}> {x.Nama}</span>
                      <span className='block text-lg' key={x.id}> Rp {x.Harga}</span>
                      <span className='block text-lg line-through text-red-500' key={x.id}> Rp {x.HargaUp}</span>
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
    const res = await fetch("http://localhost:1010/rekomendasi");
    const data = await res.json();

    return {
        props:{
            dataRekomendasi:data,
        }
    }
}