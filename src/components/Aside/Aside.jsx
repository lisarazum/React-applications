import './Aside.scss'

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const Aside = ({isMenuOpen, handleMenuClick}) => {
	return (
		<aside className={`aside ${isMenuOpen ? 'active' : ''}`}>
			<button className='aside__button' onClick={handleMenuClick}>
				<FontAwesomeIcon icon={faXmark} className='close' />
				<FontAwesomeIcon icon={faChevronRight} className='open' />
			</button>
			<h2 className='aside__title'>Applications</h2>
			<nav className='aside__navigation'>
				<ul className='list-reset aside__list'>
					<li className='aside__item'>
						<NavLink
							to="/"
							className={({ isActive }) =>
								`${isActive ? 'active' : ''} aside__link`
							}
						>
							<FontAwesomeIcon icon={faHouse} />
							<span>Main page</span>
						</NavLink>
					</li>
					<li className='aside__item'>
						<NavLink
							to="/quiz"
							className={({ isActive }) =>
								`${isActive ? 'active' : ''} aside__link`
							}
						>
							<FontAwesomeIcon icon={faPencil} />
							<span>Quiz</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
