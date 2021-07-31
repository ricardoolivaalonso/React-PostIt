import { FormSection } from "../02-sections/FormSection"
import { HeaderSection } from "../02-sections/HeaderSection"
import { PostSection } from "../02-sections/PostSection"

const PostsPage = () => {
	return(
		<div className="main">
			<div className="top">
				<HeaderSection/>
				<FormSection/>
			</div>
			<PostSection/>
		</div>
	)
}

export { PostsPage }