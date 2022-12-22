import React from 'react'
import s from './sliderSection4.module.scss'
import { DesignsArray } from '../../../data';
import { SliderSection4ColorfulDesigns } from '../../../data';
import { useState } from 'react';

const SliderSection4 = ({ index }) => {
	const maxImgOnPage = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const array = [];

	for (let i = 0; array.length < maxImgOnPage; i++) {
		const num = currentPage === 1 ? i : ((currentPage - 1) * maxImgOnPage) + i
		if (num === DesignsArray[index].length) break
		array.push(DesignsArray[index][num])
	}

	console.log(index)
	console.log(Union)
	return (
		<div className={s.sliderWrapper}>
			{Union.map((item) => {
				return (
					<div className={s.imageActive} key={item.id}>
						<img src={item.imgPath} alt="" width={350} height={400} />
					</div>
				)
			})}
			<div className={s.btnMenu}>
				<button
					onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
					disabled={currentPage <= 1}
				>
				Left
				</button>
				<button
				onClick={() => currentPage < 3 && setCurrentPage(currentPage+1)}
				disabled={currentPage >= 3}
				>
				Right
				</button>
			</div>
		</div>
	)

}

export default SliderSection4