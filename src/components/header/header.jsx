import React from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'

function Header() {
	return (
		<div className={s.headerContainer}>
			<div className={s.headerContent}>
				<div className={s.headerContainerTitle}>
					<div className={s.headerTitle}>
						Web
					</div>
					<div className={s.headerTitle2}>
						UiExpert
					</div>
				</div>
				<div className={s.headerContainerMenu}>
					<div className={s.headerMenu}>
						<ul className={s.headerList}>
							<li><Link to={'/'}>Home</Link></li>
							<li><Link to={'/'}>Portfolio</Link></li>
							<li><Link to={'/'}>About</Link></li>
							<li><Link to={'/'}>Blog</Link></li>
							<li><Link to={'/'}>Contact</Link></li>
							<li><Link to={'/'}>Log In</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header