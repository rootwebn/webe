import React, { forwardRef, useState } from 'react'
import s from './sliderSection4.module.scss'

const SliderSection4 = forwardRef(({ data }, ref) => {
	const [current, currentSet] = useState(0);
	const slideLeft = () => {
		currentSet(current === 3 - 1 ? 0 : current + 1)
	};

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
						<ul>All designs</ul>
						<ul>Minimalistic designs</ul>
						<ul>Colorful designs</ul>
						<ul>Landing Page designs</ul>
						<ul>Mobile App Designs</ul>
					</li>
				</div>
			</div>
			<div className={s.sliderWrapper}>
				{data.map((item) => {
					return (
						<div
							key={item.id}
							className={item.sliderId === current ? s.sliderImgsActive : s.sliderImgs}
						>
							<img src={item.imgPath} alt="" height={400} width={330} />
						</div>
					)
				})}
				<div className={s.sliderDots}>
					{data.map((item) => {
						return (
							<div
								key={item.idd}
								className={item.idd === current ? s.sliderDotActive : s.sliderDot}
								onClick={slideLeft}>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
})

export default SliderSection4