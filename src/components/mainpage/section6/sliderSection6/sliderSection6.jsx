import React from 'react'
import s from './sliderSection6.module.scss'
import { sliderData } from '../../../data'
import { useState } from 'react'

function SliderSection6() {
	const [currentItem, setCurrentItem] = useState(0);

	// const btnLeft = () => {
	// 	setCurrentItem(currentItem === sliderData.length ? 0 : currentItem - 1)
	// };
	// const btnRight = () => {
	// 	setCurrentItem(currentItem === sliderData.length ? 0 : currentItem + 1)
	// };

	return (
		<div className={s.container}>
			{sliderData.map((item) => {
				<div className={item.id === currentItem ? s.sliderItemActive : s.sliderItemDisable}>
					<div className={s.imgContainer}>
						<img src={item.imgPath} alt="" height={300} width={400} />
					</div>
					<div className={s.descItem}>
						<div className={s.titleItem}>
							{item.titleImg}
						</div>
						<div className={s.descItem}>
							{item.descImg}
						</div>
					</div>
				</div>
			})}
		</div>
	)
}

export default SliderSection6