import { useContext } from "react"
import { PostContext } from "../../context/PostContext"
import { PostItComponent } from "../03-components/PostItComponent"

const PostSection = () => {
	const { posts } = useContext(PostContext)
	
	return(
		<section className="posts">
			{
				posts.length > 0 ? 
				posts.map( p => <PostItComponent 
					key={ p.id } 
					id={ p.id } 
					name={ p.name } 
					urgent={ p.urgent } 
					heightArea = {p.heightArea}
				/>) 
				:
				<span className="posts__empty">Nothing to see here...</span>
			}
		</section>
	)
}

export { PostSection }