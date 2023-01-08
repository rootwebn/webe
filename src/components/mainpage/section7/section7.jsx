import React from 'react'
import { section7Items } from '../../data'
import s from './section7.module.scss'


function Section7() {
	return (
		<div className={s.section7Container}>
			<div className={s.wrapper}>
				{section7Items.map((item) => {
					return (
						<div
							key={item.id}
							style={{ background: item.backgroundImg }}
							className={s.wrapperItem}
						>
							<div 
							className={s.item}
							style={{background: item.styleItem}}
							>
								<div className={s.textWrapper}>
									<img src={item.imgPath} alt="" height={70} width={70} />
									<div className={s.title}>
										{item.title}
									</div>
									<div className={s.desc}>
										{item.desc}
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Section7