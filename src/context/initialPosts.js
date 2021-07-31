import { v4 as uuidv4 } from 'uuid';

const initialPosts = [
	{
		id: uuidv4(),
		name: 'Fix something that\'s broken in your house',
		urgent: false,
		heightArea: 'auto'
	},
	{
		id: uuidv4(),
		name: 'Meditate for five minutes',
		urgent: true,
		heightArea: 'auto'
	},
	{
		id: uuidv4(),
		name: 'Create or update your resume',
		urgent: true,
		heightArea: 'auto'
	},
	{
		id: uuidv4(),
		name: 'Listen to music you haven\'t heard in a while',
		urgent: false,
		heightArea: 'auto'
	}
]

export { initialPosts }