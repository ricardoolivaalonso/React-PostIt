import { useContext } from "react"
import { PostContext } from "../../context/PostContext"
import { v4 as uuidv4 } from 'uuid';

const FormSection = () => {
	const { posts, setPosts } = useContext(PostContext)

	const createTask = (e) => {
		e.preventDefault()

		setPosts([
			...posts , 
			{
				id: uuidv4(),
				name: 'Awesome things',
				urgent: false,
				heightArea: 'auto'
			}
		])
		
	}

	return(
		<form className="form" onSubmit={ createTask }>
			<button className="form__input" type="submit">+</button>
		</form>
	)
}

export { FormSection }