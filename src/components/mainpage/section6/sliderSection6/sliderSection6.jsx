import React from 'react'
import s from './sliderSection6.module.scss'
import { sliderData } from '../../../data'
import { useState } from 'react'

function SliderSection6() {
	const [currentItem, setCurrentItem] = useState(2);

	return (
		<div className={s.slider}>
			<button className={s.btnLeft}>Left</button>
			<div className={s.containerItems}>
				{sliderData.map((item) => {
					return (
						<div
							className={item.id === currentItem ? s.sliderItemActive : s.sliderItemDisable}
							style={{ transform: item.styleItem }}
							key={item.id}
						>
							<div className={s.imgContainer}>
								<img src={item.imgPath} alt="" height={150} width={150} />
							</div>
							<div className={s.descItem}>
								<div className={s.titleItem}>
									{item.titleImg}
								</div>
								<div className={s.desItem}>
									{item.descImg}
								</div>
							</div>
						</div>
					)
				})}
			</div>
			<button 
			className={s.btnRight}
			>
			Right
			</button>
		</div>
	)
}

export default SliderSection6