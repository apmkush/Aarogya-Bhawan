import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])
  return (
    <div>
      GitHub Followers : {data.followers}
    </div>
  )
}
