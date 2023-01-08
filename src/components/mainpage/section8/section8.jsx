import React from 'react'
import { section8Items } from '../../data'
import s from './section8.module.scss'

function Section8() {
	return (
		<div className={s.section8Container}>
			<div className={s.wrapperContent}>
				<div className={s.img}>
					<img src="img/svg/img14.svg" alt="" />
				</div>
				<div className={s.wrapperItems}>
					<div className={s.titleItems}>
						<div className={s.title}>
							Our Workflow:
						</div>
						<div className={s.desc}>
							I always follow professional Workflow and provide you best service with resealable costs.
						</div>
					</div>
					<div className={s.items}>
						{section8Items.map((item) => {
							return (
								<div
									key={item.id}
									className={s.item}
								>
									<div
										style={{ background: item.styleCircle }}
										className={s.circle}
									>
										{item.num}
									</div>
									<div className={s.wrapperDescItem}>
										<div className={s.titleItem}>
											{item.title}
										</div>
										<div className={s.descItem}>
											{item.desc}
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section8