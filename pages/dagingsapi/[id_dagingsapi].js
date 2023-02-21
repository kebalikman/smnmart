import React from 'react'
import { useRouter } from 'next/router'

const Detaildagingsapi = ({dataDagingsapi}) => {
    const router = useRouter();
    const {id_dagingsapi} = router.query;
  return (
    <div>
      <div>Id : {id_dagingsapi}</div>
      <div>Nama : {dataDagingsapi.nama}</div>
      <div>Harga : {dataDagingsapi.harga}</div>
      <div>Hargax : {dataDagingsapi.hargax}</div>
    </div>
    
  )
}

export default Detaildagingsapi;

export const getServerSideProps = async({params})=>{
  const res = await fetch("http://localhost:1010/dagingsapi/"+params.id_dagingsapi);
  const data = await res.json();

  return {
      props:{
          dataDagingsapi:data,
      }
  }
}