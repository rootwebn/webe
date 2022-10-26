import React from 'react'
import s from './section3.module.scss'

function Section3() {
	return (
		<div className={s.section3Container}>
			<div className={s.imgContainer}>
				<img src="/img/img3.png" alt="" height={550} width={800} />
			</div>
			<div className={s.section3Description}>
				<div className={s.containerTitle}>
					<div className={s.title}>
						Know About Ui Expert
					</div>
					<div className={s.description}>
						I always follow professional Workflow and provide you best
						service with resealable costs.
					</div>
				</div>
				<div className={s.btnTextContainer}>
					<button>
						<img src="img/svg/img7.svg" alt="" />
					</button>
					<div className={s.text}>
						See Our Video Brif
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section3