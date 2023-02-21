import React from 'react'
import { useRouter } from 'next/router'

const DetailProduk = ({dataproduk}) => {
    const router = useRouter();
    const {KodeProduk} = router.query;
  return (
    <div className='sm:grid sm:grid-cols-2 sm:px-5 sm:mt-10 sm:text-center text-black mt-10 text-left font-thin mb-10 xl:px-80 min-w-[410px] lg:px-40'>
      <div className='mt-0 m-5 mb-0 shadow-md sm:h-fit'>
        <img src={"https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/"+KodeProduk+".jpg"} className="w-1/2 mx-auto sm:w-full aspect-square "/>
        <div className='p-5'>
          <div className='text-center'>{dataproduk[0].Nama}</div>
        </div>
        
      </div>
      <div className='sm:mt-0 p-5 m-5 mt-2 shadow-md relative sm:text-left sm:m-0 md:m-0'>
        <div className='block'>Kategori : <span className='font-semibold text-slate-700'>{dataproduk[0].Kategori}</span></div>
        <span className='sm:block text-lg'>Rp {dataproduk[0].Harga}</span>
        <span className='sm:relative line-through decoration-1 text-red-500 text-lg absolute right-0 mr-10'>Rp {dataproduk[0].HargaUp}</span>
        <p className='mt-10'>{dataproduk[0].Deskripsi}</p>
        <span className='mt-10 block font-semibold text-slate-700'>Detail Produk</span>
        <p>{dataproduk[0].produk_detail}</p>
      </div>

    </div>
    
  )
}

export default DetailProduk;

export const getServerSideProps = async({params})=>{
  const res = await fetch("https://api-smnmart.biznizo.my.id/android/produk/detail/"+params.KodeProduk);
  const data = await res.json();


  console.log(data);
  return {
      props:{
          dataproduk:data,
      }
  }
}