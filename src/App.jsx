import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Card from './components/Cards';
import Innovision from './components/Content';
import Footer from './components/Footer';
import { BsRocket } from 'react-icons/bs';


function App() {
	return (
			
			<div id='kuchh'>
				<Header />
				<Innovision />
				<div className="cards-div">
					<Card
						stage="Stage 1"
						title="Coming Soon!!"
						description="This is the description for Stage 1."
					/> 
					<Card
						stage="Stage 2"
						title="Coming Soon!!"
						description="This is the description for Stage 1."
					/> 
					<Card
						stage="Stage 3"
						title="Coming Soon!!"
						description="This is the description for Stage 1."
					/> 
					<Card
						stage="Stage 4"
						title="Coming Soon!!"
						description="This is the description for Stage 1."
					/> 
				</div>
				<Form />
				<Footer />
			</div>
    )
}

export default App;