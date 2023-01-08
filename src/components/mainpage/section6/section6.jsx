import React from 'react'
import s from './section6.module.scss'
import SliderSection6 from './sliderSection6/sliderSection6';

function Section6() {
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
			<SliderSection6 />
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