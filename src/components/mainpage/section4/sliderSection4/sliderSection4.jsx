import React, { forwardRef, useState } from 'react'
import s from './sliderSection4.module.scss'
import { DesignsArray } from '../../../data';

const SliderSection4 = forwardRef(({ value }, ref) => {
	const [valueMenu, setMenuValue] = useState(0);
	const [current, setCurrent] = useState(6);
	const slideLeft = () => {
		setCurrent(current <= 5 ? 0 : 6 ) 
	};
	const slideRight = () => {
		setCurrent(current >= 5 ? 6 : 0 ) 
	};

	const UlOnClicked = ({ value, children }) => {
		return (
			<a
				onClick={() => { setMenuValue(value) }}
				className={value === valueMenu ? s.sliderImgsActive : s.sliderImgs}
			>
				{children}
			</a>
		)
	}

	return (
		<div className={s.section4Content}>
			<div className={s.titleMenuContainer}>
				<div className={s.titleContainer}>
					<div className={s.title}>
						Our Portfolio
					</div>
					<div className={s.description}>
						View Our Portfolio in catagoryes
					</div>
				</div>
				<div className={s.menuContainer}>
					<li className={s.listMenu}>
						<UlOnClicked value={0}>Minimalistic designs</UlOnClicked>
						<UlOnClicked value={1}>Colorful designs</UlOnClicked>
						<UlOnClicked value={2}>Landing Page designs</UlOnClicked>
						<UlOnClicked value={3}>Mobile App Designs</UlOnClicked>
					</li>
				</div>
			</div>
			<div className={s.sliderWrapper}>
				{
					DesignsArray[valueMenu].map((item) => {
						return (
							<img
								key={item.id}
								src={item.imgPath}
								className={item.id >= current ? s.sliderImgsActive : s.sliderImgs}
								alt=""
								height={400}
								width={350} 
							/>
						)
					})
				}
				<div className={s.sliderArrowLeft} onClick={slideLeft}>&lsaquo;</div>
				<div className={s.sliderArrowRight} onClick={slideRight}>&rsaquo;</div>
			</div>
		</div>
	)
})

export default SliderSection4