import React from 'react'
import s from './section6.module.scss'
import { useState } from 'react';
import { sliderData } from '../../data'

function Section6() {
	const [currentItem, setCurrentItem] = useState(2);

	return (
		<div className={s.section6Container}>
			<div className={s.titleContainer}>
				<div className={s.title}>
					What they say about us!
				</div>
				<div className={s.subTitle}>
					Customer Review Sites For Collecting Business & Product Review
				</div>
			</div>
			<div className={s.container}>
				{sliderData.map((item) => {
					return (
						<div 
						className={item.id === currentItem ? s.sliderItemActive : s.sliderItemDisable} 
						style={{transform:item.styleItem}}
						key={item.id}
						>
							<div className={s.imgContainer}>
								<img src={item.imgPath} alt="" height={150} width={150} />
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
					)
				})}
			</div>
			<div className={s.descContainer}>
				<div className={s.blockDesc}>
					<div className={s.overDesc}>
						Learn About My Workflow:
					</div>
					<div className={s.desc}>
						I'm always hungry for creativity.
						Available for hire
					</div>
				</div>
				<div className={s.blockBtn}>
					<button>
						<img src="/img/svg/img1.svg" alt="" height={40} width={40} />
						Wave me!
					</button>
				</div>
			</div>
		</div>
	)
}

export default Section6