import React from 'react'
import s from './section5.module.scss'
import { Section5Items } from '../../data'

function Section5() {
	return (
		<div className={s.section5Container}>
			<div className={s.titleContainer}>
				<div className={s.title}>Our Success</div>
				<div className={s.desc}>View our portfolio in catagoris</div>
			</div>
			<div className={s.itemsContainer}>
				{Section5Items.map((param) => {
					return (
						<div className={s.squareItem} key={param.id} style={{ boxShadow: param.styleSquare }}>
							<div className={s.numContainer} style={{ background: param.styleBoxNum, boxShadow:param.styleTitle }}>
								<div className={s.numItem}>{param.num}</div>
							</div>
							<div className={s.titleItem}>{param.descNum}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Section5