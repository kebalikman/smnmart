import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const DetailProduk = ({dataproduk}) => {
    const router = useRouter();
    const {KodeProduk} = router.query;
  return (
    <div className='sm:grid sm:grid-cols-2 sm:px-5 sm:mt-10 sm:text-center text-black mt-10 text-left font-thin mb-10 xl:px-80 min-w-[375px] lg:px-40'>
      <div className='mt-0 m-5 mb-0 shadow-md sm:h-fit'>
        <img src={"https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/"+KodeProduk+".jpg"} className="w-1/2 mx-auto sm:w-full aspect-square "/>
        <div className='p-5'>
          <div className='text-center'>{dataproduk[0].Nama}</div>
        </div>
        
      </div>
      <div className='sm:mt-0 p-5 m-5 mt-2 shadow-md relative sm:text-left sm:m-0 md:m-0'>
        <span className='block font-semibold text-slate-700'>Detail Produk :</span>
        {/* <div className='grid grid-cols-2'>Kategori : 
            <span className='text-lg'> {dataproduk[0].Kategori}</span>
            Kuantitas:
            <span className='sm:block text-lg'>  1 {dataproduk[0].Satuan}</span>
            Barcode:
            <span className='sm:block text-lg'> {dataproduk[0].Barcode}</span>
        </div> */}

        <p class="form_text1"><span>Kategori</span>: {dataproduk[0].Kategori}</p>
        <p class="form_text1"><span>Kuantitas:</span>: 1 {dataproduk[0].Satuan}</p>
        <p class="form_text1"><span>Barcode:</span>: {dataproduk[0].Barcode}</p>

        <span className='mt-5 block font-semibold text-slate-700'>Harga :</span>
        <span className=' text-lg'>Rp {dataproduk[0].Harga}</span>
        <span className=' line-through decoration-1 text-red-500 text-lg absolute right-0 mr-10 '>Rp {dataproduk[0].HargaUp}</span>
        <span className='mt-5 block font-semibold text-slate-700'>Deskripsi produk :</span>
        <p className=''>{dataproduk[0].Deskripsi}</p>
        <span className='mt-5 block font-semibold text-slate-700'>Keterangan tambahan :</span>
        <p>{dataproduk[0].produk_detail}</p>
        {/* <div className='bg-green-400 text-center absolute bottom-0 right-0 w-1/2 h-16 place-items-center grid font-light text-white hover:bg-green-500 cursor-pointer'>Pesan</div> */}
     
        
        
      </div>

      <Link href={"https://api.whatsapp.com/send?phone=6282339614000&text=Saya%20tertarik%20untuk%20membeli%20"+dataproduk[0].Nama+"%20segera."} className="col-start-2 z-50 w-1/2 ml-auto shadow-md mr-5 sm:mr-0" target="_blank">
        <div className='bg-green-400 text-center h-16 place-items-center grid font-light text-white hover:bg-green-500 cursor-pointer
        '>Pesan</div>
      </Link>

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