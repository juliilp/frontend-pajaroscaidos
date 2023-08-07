import {notFound} from 'next/navigation'
export  async function getPosts(id){
    const response= await fetch(`https://pajaros-caidos-backend.onrender.com/publication/${id}`,{
        cache:'no-store'
    })
     if(! response.ok){
        notFound()
     }
     const data=await response.json()
    return data
}

export async function setReaction(PostData){
    const{idPost,reaction,idUser}=PostData
    
    const resquest= await fetch(`https://pajaros-caidos-backend.onrender.com/reaction/create/${idPost}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            reaction,
            idUser
        })
      })

      if(!resquest.ok){
        throw new Error('Algo salio mal')
      };

}