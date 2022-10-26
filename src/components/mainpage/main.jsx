import React from 'react'
import s from './main.module.scss'
import Section1 from './section1/section1'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section7 from './section7/section7'
import Section8 from './section8/section8'
import Section9 from './section9/section9'


function Main() {
	return (
		<div className={s.mainpage}>
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Section9 />
		</div>
	)
}

export default Main