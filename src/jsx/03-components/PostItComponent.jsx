import { useContext, useState } from "react"
import { PostContext } from "../../context/PostContext"

const PostItComponent = ({ id, name, urgent, heightArea }) => {
	const { posts, setPosts } = useContext(PostContext)
	const [ editable, setEditable ] = useState(false)
	const [ title, setTitle ] = useState(name)

	// ----------------------------
	const submitForm = (e) => e.preventDefault()
	// ----------------------------
	const updateNamePost = (e,id) => {
		setEditable(!editable)

		setPosts( posts.map( p => {
				if( p.id === id )
				return {
					...p, 
					name: title
				}
				return p
			})
		)
	}
	// ----------------------------
	const updateUrgentPost = (id) => {

		setPosts( posts.map( p => {
				if( p.id === id )
				return {
					...p, 
					urgent: !p.urgent
				}
				return p
			})
		)
	}
	// ----------------------------
	const updateHeightPost = (e,id) => {

		e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
		let ha = e.target.style.height 

		setPosts( posts.map( p => {
				if( p.id === id )
				return {
					...p, 
					heightArea: ha
				}
				return p
			})
		)
	}
	// ----------------------------
	const deletePost = (id) => setPosts( posts.filter( p => p.id !== id))
	// ----------------------------
	return(
		<form
			key={ id }
			className={`post__item is-item-visible ${urgent && 'post__item--priority'}`}
			spellCheck="false" 
			onSubmit={ (e)=>submitForm(e) }
		>
			{
				editable ?
					<textarea 
						style={{height: heightArea}}
						className={`post__name ${urgent && 'post__name--priority'}`}
						value={ title }
						onChange={ (e)=>setTitle(e.target.value) }
						onBlur={ (e)=>updateNamePost(e,id) }
						onKeyUp={ (e)=>updateHeightPost(e,id) }
					>
					</textarea>
					:
					<textarea 
						style={{height: heightArea}}
						className={`post__name ${urgent && 'post__name--priority'}`} 
						onFocus={ ()=>setEditable(!editable) } 
						defaultValue={ name }>
					</textarea>
			}
			<button className="post__delete" type="button" onClick={ ()=>deletePost(id)} title="Delete Item">+</button>
			<button className="post__priority" type="button" onClick={ ()=>updateUrgentPost(id) } title="High Priority">!</button>
		</form>
	)
}

export { PostItComponent }