import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Database from "../../../database.json"

const User = () => {
  const users = Database.users;
  return (
    <div className='card'>
      <div className='card-header'>
        <div className="row">
          <div className="col-md-6">
            <strong>Quan ly danh muc</strong>
          </div>
          <div className="col-md-6 text-end" >
            <Link to="/" className='btn btn-sm btn-danger'><FaTrash />thung rac</Link>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <div className="row">
        <div className="col-md-2">
          THIET KE FORM THEM
        </div>
        <div className="col-md-9">
          <table className='table table-bordered table-hoved'>
            <thead>
              <tr>
                <th>#</th>
                <th>hinh</th>
                <th>ten danh muc</th>
                <th>slug</th>
                <th className='text-center' style={{width:"150px"}}>chuc nang</th>
                <th className='text-center' style={{width:"50px"}}>id</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length>0 && users.map(user=>{
                return( 
                    <tr key={user.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td><img src={user.image} alt={user.image} /></td>
                  <td>{user.name}</td>
                  <td>{user.slug}</td>
                  <td className='text-center'>
                    <Link className='btn btn-sm btn-info me-1' to={"/admin/user/edit/"+user.id}><FaEdit /></Link>
                  <button className='btn btn-sm btn-danger me-1'><FaTrash /></button>
                  </td>
                  <td>{user.id}</td>
                </tr>

                ) 
              })}
             
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
