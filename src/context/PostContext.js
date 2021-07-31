import { createContext, useEffect, useState } from "react";
import { initialPosts } from "./initialPosts";

const psi = localStorage.getItem('myposts') ? JSON.parse(localStorage.getItem('myposts')) : initialPosts
const PostContext = createContext()

const PostProvider = ({children}) => {

	const [ posts, setPosts ] = useState(psi)

	useEffect(()=>{
		localStorage.setItem('myposts', JSON.stringify(posts))
	}, [posts])

	return(
		<PostContext.Provider value={ {posts, setPosts} }>
			{children}
		</PostContext.Provider>
	)
}

export { PostProvider, PostContext }