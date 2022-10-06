import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getRequest } from "../../utils/Network";

export default function Index() {
  const router = useRouter();
  const [dataUsers, setDataUsers] = useState([])
  async function getListUsers(){
    let res = await getRequest('public/v2/users')
    if(res){
      setDataUsers(res.data)
      console.log('INI DATA APII', res.data)
    }
  }
  useEffect(()=>{
    getListUsers()
  },[])
  return (
    <div className="row d-flex justify-content-center mt-5">
      <div className="col-6">
        <button
          type="button"
          onClick={() => router.push("/create")}
          className="btn btn-primary"
        >
          Tambah
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">gender</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((item,index)=>(
              <tr key={index}>
              <td>{item.name}</td>
              <td >{item.email}</td>
              <td >{item.status == 'active'? <span className="badge bg-success">Aktif</span> : <span className="badge bg-danger">Tidak aktif</span>}</td>
              <td>{item.gender}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
