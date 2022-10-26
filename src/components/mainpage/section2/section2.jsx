import React from 'react'
import s from './section2.module.scss'
import Collection from './collectionItems/collection'

function Section2() {
	return (
		<div className={s.section2Container}>
			<div className={s.titleDescContainer}>
				<div className={s.titleDescContent}>
					<div className={s.titleContainer}>
						Our Services
					</div>
					<div className={s.title2Container}>
						We Provide Best Quality Service
					</div>
					<div className={s.descriptionContainer}>
						Our commitment to quality ensures that your applications get the best UI design
						possible. UI/UX design is more than just pixels and animations, but the entire application
						experience.
					</div>
				</div>
			</div>
			<div className={s.collectionContainer}>
				<Collection />
			</div>
		</div>
	)
}

export default Section2