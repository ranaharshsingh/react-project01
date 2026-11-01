import {useEffect,useState} from 'react'
import Axios from 'axios'

const UseEffect4 = () => {
    const [posts,setposts]=useState([])
    useEffect(()=>{
        async function getposts(){
            const response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data=await response.json();
            setposts(data);
        }
        getposts();
    },[])
  return (

    <div>
      {posts.map((post)=>{
        <div key={post.id}>{post.title}
        </div> 
      })}
    </div>
  )
}

export default UseEffect4
