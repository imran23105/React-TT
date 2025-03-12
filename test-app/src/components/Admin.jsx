import React from 'react'
import Card from './Card'
import data from '../data'
const Admin = () => {
  return (
    <div className=' grid grid-cols-3 max-h-screen '>
    {data.map((user, index) => (
      <Card 
        key={index}
        Name={user.name} 
        Profile={user.job} 
        Description={user.description} 
        url={user.image} 
      />
    ))}
    </div>
  )
}

export default Admin