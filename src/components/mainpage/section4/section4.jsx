import React from 'react'
import s from './section4.module.scss'
import SliderSection4 from './sliderSection4/sliderSection4'
import { DesignsArray} from '../../data'

function Section4() {
	return (
		<div className={s.section4Container}>
			<SliderSection4/>
		</div>
	)
}

export default Section4