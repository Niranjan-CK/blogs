import { collection, addDoc } from "firebase/firestore"
import { auth, db } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"
export const CreatePost=()=>{
    const navigate = useNavigate()
    async function handleData(event){
        event.preventDefault()
        await addDoc(collection(db, "blogs"), {
            title: event.target.title.value,
            description: event.target.description.value,
            author:{
                username:auth.currentUser.displayName,
                userID : auth.currentUser.uid
            }
        }).then(
            event.target.title.value="",
            event.target.description.value="",
            navigate('/')
        )
        
        
    }

    return(
        <main>
            <form onSubmit={handleData}>


                <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog title</label>
                <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                </span>
                <input name="title" type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green"/>
                </div>


                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea name="description" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Purple to blue
                    </span>
                </button>
            </form>
        </main>
    )
}