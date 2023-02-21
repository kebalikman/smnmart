import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


import { useState, useEffect } from "react";
var data = require("./data.json");

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Home({promo, rekomendasi, kategori}) {

  let displayPromo
  let displayRekomendasi
  let displayKategori
  let displayBanner


  const slides = [
     'https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/1.jpg'
    ,
    'https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/2.jpg'
    ,
    'https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/3.jpg'
    ,
    'https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/4.jpg'
    ,
    'https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/5.jpg'
  ]

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  const onSearchDummy = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };



  displayPromo = promo.map(function(promo) {
    return (
      <Link href={"/detailproduk/"+promo.KodeProduk }>
      <div className='overflow-hidden bg-white hover:scale-105 transition-all cursor-pointer shadow-md '>
      <img key={promo.id}  src={"https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/"+promo.KodeProduk+".jpg"} alt="Gambar" className='object-cover w-full aspect-square'></img>
        <div className='text-center w-full '>
          <span className='block font-light text-slate-800' key={promo.id}> {promo.Nama}</span>
          <span className='block font-regular text-slate-800' key={promo.id}> Rp {promo.Harga}</span>
          <span className='block font-light line-through decoration-1 text-red-500' key={promo.id}> Rp {promo.HargaUp}</span>
        </div>
      </div>
      </Link>
    )
   })

  //  displayRekomendasi = rekomendasi.map(function(rekomendasi) {
  //   return (
  //     <div className='group relative h-72 w-48 rounded-3xl overflow-hidden shadow-md'>
  //       <div className='flex bg-cover h-full w-full group-hover:scale-105 transition-all cursor-pointer'>
  //           <img key={rekomendasi.id} src={rekomendasi.gambar} className="relative object-cover  bg-white"></img>
  //           <div className='p-5 bottom-0 w-full bg-black/50 absolute'>
  //             <span className='block truncate text-md font-semibold' key={rekomendasi.id} >{rekomendasi.Nama}</span>
  //             <span className='block text-md' key={rekomendasi.id} >Rp {rekomendasi.Harga}</span>
  //           </div>

  //       </div>
  //     </div>
  //   )
  //  })

  displayRekomendasi = rekomendasi.map(function(rekomendasi) {
    return (
      <Link href={"/detailproduk/"+rekomendasi.KodeProduk }>
      
      <div className='rounded-2xl overflow-hidden group shadow-md cursor-pointer'>
        <div className=' bg-black/50 group-hover:scale-105 group-hover:bg-black/60 transition-all group-hover:pb-2'>
          <img key={rekomendasi.id} src={"https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/"+rekomendasi.KodeProduk+".jpg"} className='object-cover w-full aspect-square'></img>
          <div className='text-center py-2 font-thin leading-none group-hover:py-1 transition-all'>
            <span key={rekomendasi.id} className="text-white block">{rekomendasi.Nama}</span>
            <span key={rekomendasi.id} className="text-white block">Rp {rekomendasi.Harga}</span>
          </div>
        </div>
      </div>

      </Link>
    )
   })

   displayKategori = kategori.map(function(kategori) {
    return (
      <Link href={"/kategori/"+kategori.id }>
      <div className='text-center hover:scale-110 transition-all cursor-pointer'>
        <div className='border-2 border-slate-300 shadow-md aspect-square rounded-xl overflow-hidden mb-2'>
            {/* <img key={kategori.id} src={"https://api-smnmart.biznizo.my.id/olshop-panel/banner/kategori/"+kategori.kategori_id+".png"} alt="" className='h-full scale-90 object-contain'/> */}
            <img key={kategori.id} src={kategori.url} alt="" className='h-full scale-90 object-contain'/>
        </div>
        <span className='text-slate-800 font-medium text-sm' key={kategori.id}>{kategori.nama}</span>
      </div>
      </Link>
    )
   })

   const x = [1, 2, 3, 4,];
  

   displayBanner = x.map(x => (
    <SwiperSlide >
       <img
          className="object-contain w-full h-96 backdrop backdrop-blur-md absolute "
          src={"https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/"+x+".jpg"}
          alt={"image slide"+x}
        />
      <img
          className="object-cover w-full h-96"
          src={"https://api-smnmart.biznizo.my.id/olshop-panel/banner/apk/"+x+".jpg"}
          alt={"image slide"+x}
        /> 
      </SwiperSlide>
  ))
  
  

  let displayBanner2
  
  displayBanner2 = x.map(x => {
    return ( 
    <SwiperSlide className='' >

        <img
          className="object-contain w-full h-full absolute bg-black/50 z-10"
          // style={{ backgroundImage:`url(${"/banner-"+x+".jpg"})` }}
          src={"/banner-"+x+".jpg"}
          alt={"image slide"+x}
        />

        <img
          className="object-cover w-full blur-sm "
          src={"/banner-"+x+".jpg"}
          alt={"image slide"+x}
        />

  
      </SwiperSlide>
    )
    })


  return (
    <>
      <Head>
        <title>SMN Mart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className='min-w-[375px] bg-white'>  

          {/* Isi */}
          <div className='container px-2 mx-auto p-2 mt-2 2xl:px-40 xl:mt-2 md:mt-5 lg:px-10  '>
            
          <div className=''>
              <div className='my-2 bg-white w-full rounded-md flex  mx-0 md:mx-0 relative overflow-hidden shadow-md border border-slate-400 p-1 mt-0 z-[6] h-12'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" className="my-auto w-6 h-6 stroke-slate-500 mx-2 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

                <div className="search-inner text-black w-full">
                  <input type="text" placeholder='Cari produk...' value={value} onChange={onChange} className=" bg-transparent outline-none border-collapse font-thin w-full"/>
                  <Link href={'/search/'+value}>
                  <button onClick={() => onSearch(value)} className="absolute right-0 font-thin h-full top-0 px-2 bg-slate-200 hover:bg-slate-300 "> Search </button>
                  </Link>
                </div>

                </div>
                <div className='relative'>
                  <div className="text-black p-5 z-[5] dropdown font-thin w-full absolute">
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
                          onClick={() => {onSearch(item.Nama)}}
                          className="dropdown-row "
                          key={item.Nama}
                        >
                          {item.Nama}
                        </div>
                      ))}
                </div>
                </div>
                
            </div>

            {/* Banner */}

            {/* <div className="md:h-60 bg-ybg bg-cover bg-merah rounded-3xl w-full h-40 xl:h-80 flex items-center justify-center relative bg-blend-color-burn">

                  <div className='bg-white w-full h-full bg-opacity-20 '></div>

                  <div className="items-center flex invisible md:visible">
                      <img src="meats.png" alt="" className="md:h-24 lg:h-32 xl:h-48 left-20 absolute"></img>
                  </div>

                  <div className="items-center flex invisible md:visible">
                      <img src="foods.png" alt="" className="md:h-24 lg:h-32 xl:h-48 right-20 absolute scale-90"></img>
                  </div>

                  <div className="bg-white bg-opacity-20 items-center absolute shadow-xl first-letter text-center p-5 rounded-3xl">
                      <h1 className="font-fredoka text-white text-5xl xl:text-6xl font-semibold md:mx-36">SNM MART</h1>
                      <p className="font-thin text-xl">Produk Makanan Kualitas Terbaik</p>
                  </div>

            </div>        */}
            
            
            <div className='w-full mx-auto'>
              
              <Swiper
                  spaceBetween={30}
                  autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                  }}
                  pagination={{
                      clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper bg-transparent rounded-2xl h-56 sm:h-96"

                  style={{
                    "--swiper-navigation-color": "gray",
                    "--swiper-navigation-size": "30px",
                    "--swiper-pagination-color": "gray",
                  }}
              >
                  {displayBanner2}
              </Swiper>
        
              
            </div>

           
            {/* Fitur */}
            <h2 className='pt-10 text-slate-800 text-2xl font-bold text-center'>Kategori Produk</h2>
            <div className='pt-10 xl:px-80 grid grid-cols-3 xl:gap-28 gap-2 md:gap-10'>

              {displayKategori}

            </div>

            <hr className='border border-1 border-slate-200 w-1/2 mx-auto my-16'></hr>

            {/* Rekomendasi */}

            <div className='pb-10'>
              <h2 className='text-slate-800 text-2xl font-bold text-center'>Rekomendasi Produk</h2>

              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mt-6 gap-5 mb-20 '>
                {displayRekomendasi}
              </div>

              <hr className='border border-1 border-slate-200 w-1/2 mx-auto my-16'></hr>

              <h2 className='text-slate-800 text-2xl font-bold text-center'>Promo</h2>
              
              <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-6 mb-20">
                  {displayPromo}  
              </div> 

            </div>
           
        </div>
        
        <div className='flex flex-col w-full h-auto bg-black text-left font-extralight px-0 mt-2 mx-auto sm:gap'>
          <div className='w-max mx-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  md:gap-10 md:w-full md:p-10 lg:grid-cols-4 footer gap-5 my-auto ml-10'>
            <div className=''>
                <h1>KATEGORI POPULER</h1>
                <span>Daging Sapi</span>
                <span>Daging Ayam</span>
                <span>Olahan Makanan</span>
            </div>
            <div>
                <h1>PENCARIAN POPULER</h1>
                <span>Daging</span>
                <span>Wagyu</span>
                <span>Lemak</span>  
            </div>
            <div>
              <h1>Ikuti Kami di</h1>
              <span>Facebook</span>
              <span>Instagram</span>
              
            </div>
            <div>
                <h1>DOWNLOAD SNM MART</h1>
                <span>Playstore</span>  
                <span>SMN Mart 2023</span>
            </div>
            
          </div>

        </div>
        
        
         

      </main>
    </>
  )
}

export const getServerSideProps = async()=>{
  const promo_res = await fetch("https://api-smnmart.biznizo.my.id/android/promo");
  const rekomendasi_res = await fetch("https://api-smnmart.biznizo.my.id/android/rekomendasi");
  const kategori_res = await fetch("http://localhost:1000/kategori/");

  const promo = await promo_res.json();
  const rekomendasi = await rekomendasi_res.json();
  const kategori = await kategori_res.json();

  return { props:{promo, rekomendasi, kategori, data} }
}
