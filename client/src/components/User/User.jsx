import React from 'react'
import { useParams } from 'react-router-dom'   /// => this is how we take dynamic data on any website

function User() {
    const {userId} = useParams();
  return (
    <div>User : {userId}</div>
  )
}

export default User