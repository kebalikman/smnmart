import React, {useState , useEffect} from "react";
import data from "./TemplateData.json";
import Link from "next/link";
import { useRouter } from 'next/router'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const {keyword} = router.query;
    
  return (
    <>
      <div className="container px-2 mx-auto p-2 mt-2 2xl:px-40 xl:mt-2  md:mt-5 lg:px-10 min-w-[375px]">
        <h1 className="text-black"></h1>
        <div className="my-2 bg-white w-full rounded-md flex  mx-0 md:mx-0 relative overflow-hidden shadow-md border border-slate-400 p-1 mt-0 z-[6]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" className="w-6 h-6 stroke-slate-500 mx-2 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>

          <input defaultValue={keyword} id="searchInput" type="text" placeholder="Search here..." 
          onChange={(event) => {setSearchTerm(event.target.value);}}
          className="bg-transparent outline-none border-collapse font-thin w-full text-slate-600 focus:bg-white"/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-6 mb-20 '>
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.Nama.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                    
                    <Link href={"http://localhost:3000/detailproduk/"+val.KodeProduk }>
                    <div className='overflow-hidden bg-white hover:scale-105 transition-all cursor-pointer shadow-md relative'>
                      <img key={val.id}  src={"https://api-smnmart.biznizo.my.id/olshop-panel/upload-images/kecil/"+val.KodeProduk+".jpg"} alt="Gambar" className='object-cover w-full aspect-square'></img>

                      <div className='text-center w-full'>
                        <span className='block font-light text-slate-800' key={val.id}> {val.Nama}</span>
                        <span className='block font-regular text-slate-800' key={val.id}> Rp {val.Harga}</span>
                        <span className='block font-light line-through decoration-1 text-red-500' key={val.id}> Rp {val.HargaUp}</span>
                      </div>
                    </div>
                    </Link>
                )
              })
          }
        </div>
      </div>
    </>
  )
  
}

export default App;

