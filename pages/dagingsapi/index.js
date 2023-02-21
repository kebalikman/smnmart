import React from 'react'
import Link from 'next/link';

const index = ({datadagingsapi}) => {
  return (
    <div>
        <div>List dagingsapi</div>
        {datadagingsapi.map((x)=>(

            <Link href={"/dagingsapi/"+x.id}>
            <div  class="bg-yellow-500 hover:bg-yellow-blue-700 text-white font-bold py-2 px-4 rounded" key={x.id}>{x.id} -{x.nama} - {x.harga} - {x.hargax}</div>
            </Link>
        ))}
    </div>
  )
}

export default index;

export const getServerSideProps = async()=>{
    const res = await fetch("http://localhost:1010/dagingsapi");
    const data = await res.json();

    return {
        props:{
            datadagingsapi:data,
        }
    }
}