import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const DetailProduk = ({dataproduk}) => {
    const router = useRouter();
    const {KodeProduk} = router.query;

  let displaydataproduk


  displaydataproduk = dataproduk.map(function(dataproduk) { 
    return (
      <Link href={"/detailproduk/"+dataproduk.KodeProduk}>
      <div className='overflow-hidden bg-white hover:scale-105 transition-all cursor-pointer shadow-md '>
        <img key={dataproduk.id}  src={"https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/"+dataproduk.KodeProduk+".jpg"}  class="" alt="Gambar" className='object-cover w-full aspect-square'></img>
        <div className='text-center '>
          <span className='block font-light text-slate-800' key={dataproduk.id}> {dataproduk.Nama}</span>
          <span className='block font-regular text-slate-800' key={dataproduk.id}> Rp {dataproduk.Harga}</span>
          <span className='block font-light line-through decoration-1 text-red-500' key={dataproduk.id}> Rp {dataproduk.HargaUp}</span>
        </div>
      </div>
      </Link>
    )
   })

   function kategori(params) {

    var a = "Kosong";

    if( params == 22) {
        a = "Daging Sapi";
     }else{ 
      if ( params ==26){
        a = "Olahan Makanan";
      } else {
        a = "Daging Ayam";
      }
     }
     return a;
    }

  return (
    <div className='container px-2 mx-auto 2xl:px-40 xl:mt-0 md:mt-5 lg:px-10 min-w-[401px]'>
      <h2 className='pt-10 text-slate-800 text-2xl font-bold text-center'>Kategori : {kategori(KodeProduk)}</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-6 mb-20">
        {displaydataproduk}
      </div>
    </div>
  )
}

export default DetailProduk;

export const getServerSideProps = async({params})=>{
  const res = await fetch("https://api-smnmart.biznizo.my.id/android/produkkategori/"+params.KodeProduk+"/20");
  const data = await res.json();


  console.log(data);
  return {
      props:{
          dataproduk:data,
      }
  }
}