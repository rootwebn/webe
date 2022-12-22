import React, { useState } from 'react'
import s from './section4.module.scss'
import SliderSection4 from './sliderSection4/sliderSection4'

function Section4() {
	const [indexDataNum, setIndexDataNum] = useState(0);

	const MenuIndex = (props) => {
		return (
			<a onClick={() => { setIndexDataNum(props.num) }}>{props.text}</a>
		)
	}

	return (
		<div className={s.section4Container}>
			<div className={s.containerSlider}>
				<div className={s.menuSlider}>
					<div className={s.titleMenu}>
						<div className={s.title}>
							Our Portfolio
						</div>
						<div className={s.desc}>
							View Our Portfolio in catagoryes
						</div>
					</div>
					<div className={s.menu}>
						<ul>
							<MenuIndex num={0} text={'Minimalistic Designs'} />
							<MenuIndex num={1} text={'Colorful Designs'} />
							<MenuIndex num={2} text={'Landing Page Designs'} />
							<MenuIndex num={3} text={'Mobile App Designs'} />
						</ul>
					</div>
				</div>
				<div className={s.slider}>
					<SliderSection4 index={indexDataNum} />
				</div>
			</div>
		</div>
	)
}

export default Section4