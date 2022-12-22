import React from 'react'
import s from './collection.module.scss'
import { CollectionItems } from '../../../data'

function Collection() {
	return (
		<div className={s.collectionContainer}>
			{CollectionItems.map((item) => {
				return (
					<div 
					className={s.collectionItem} 
					key={item.id} 
					style={{background:item.styleBtn}}
					>
						<div className={s.imgItem}>
							<img src={item.imgPath} alt="" height={128} width={128} />
						</div>
						<div className={s.titleItem}>
							{item.title}
						</div>
						<div className={s.descriptionItem}>
							{item.descript}
						</div>
						<div className={s.btnItem}>
							<button>
								{item.bntTitle}
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Collection