import { useEffect, useState } from "react"
import { PostCard , SkeletonCard} from "../components"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"

export const Home=()=>{
    const [blog,setBlog] = useState([false , false , false])
    const q = collection(db, "blogs");


    useEffect(()=>{
        async function getdata(){

            const querySnapshot = await getDocs(q);
            setBlog(querySnapshot.docs.map((document)=>(
                {...document.data(),id:document.id}
            )))
        }
        getdata()
        // console.log(blog)
    },[blog,q])
    return(
        <main>
            {
                blog.map((item , index)=>(
                    item ? (
                        <PostCard key={item.id} post={item} />
                    ):
                    (
                        <SkeletonCard key={index}/>
                    )
                ))
            }
        </main>
    )
}