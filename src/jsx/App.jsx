import { PostsPage } from "./01-pages/PostsPage"
import { PostProvider } from "../context/PostContext"

const App = () => {
	return (
		<PostProvider>
			<PostsPage />
		</PostProvider>
	)
}

export { App }
