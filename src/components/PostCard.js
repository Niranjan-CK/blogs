import { db } from "../firebase/firebase"
import { deleteDoc, doc } from "firebase/firestore"

export const PostCard=({post})=>{
    const {id , title , description , author} = post
    const deleteButton  = JSON.parse(localStorage.getItem("isAuth"))||false
   
    async function handleDelete(){
        // console.log("delete")
        await deleteDoc(doc(db, "blogs", id)).then((
            alert("Deleted successfully")
        ))
    }
    
    
    return(
        <>
            
            <div className="card">
                
                    <h5 className="title">{title}</h5>
               
                <p className="description">{description}</p>
                <div className="flex">
                    <button type="button" className=" control py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        {author.username}
                    </button>
                    {
                        deleteButton &&
                        <button onClick={handleDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash " viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                            </svg>
                        </button>
                    }

                </div>

            </div>

        </>
    )
}