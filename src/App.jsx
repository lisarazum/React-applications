import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import {Aside} from './components/Aside/Aside'
import {MainPage} from './components/MainPage/MainPage.jsx'
import {Quiz} from './components/Quiz/Quiz.jsx'
import {ServicePage} from './components/ServicePage/ServicePage.jsx'

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	const handleMenuClick = () => {
		setIsMenuOpen((prev) => !prev);
	};

  return (
	  <div className={`layout ${isMenuOpen ? "menu-active" : ""}`}>
		  <Aside isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick}/>

		  <div className="container">
			  <Routes>
				  <Route path="/" element={<MainPage />} />
				  <Route path="/quiz" element={<Quiz />} />
				  <Route path="*" element={<ServicePage />} />
			  </Routes>
		  </div>
	  </div>
  )
}

export default App
