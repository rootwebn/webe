import React from 'react'
import s from './section1.module.scss'

function Section1() {
	return (
		<div className={s.section1Container}>
			<div className={s.containerDescription}>
				<div className={s.containerTitle}>
					<div className={s.title}>
						We Provide You Best Ui Services
					</div>
					<div className={s.description}>
						Mobile App Design and Development Studio. You can hire us 
					</div>
				</div>
				<div className={s.containerBtn}>
					<button>
						<img src="/img/svg/img1.svg" alt="" height={40} width={40} />
						Wave Me!
					</button>
				</div>
			</div>
			<div className={s.containerImg}>
				<img src="/img/img1.png" alt="" height={700} width={900} />
			</div>
		</div>
	)
}

export default Section1