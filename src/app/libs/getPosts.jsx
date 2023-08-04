import {notFound} from 'next/navigation'
export default async function getPosts(id){
    const response= await fetch(`https://pajaros-caidos-backend.onrender.com/publication/${id}`)
     if(! response.ok){
        notFound()
     }
     const data=await response.json()
    return data
}