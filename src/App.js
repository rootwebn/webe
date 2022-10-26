import s from './app.module.scss';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/mainpage/main';


function App() {
	return (
		<Router>
			<div className={s.App}>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
