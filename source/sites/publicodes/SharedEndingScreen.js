import React from 'react'
import { useLocation } from 'react-router'

import Earth from './images/earth.png'
import Chart from './chart'

const sumFromDetails = (details) =>
	details.reduce((memo, [name, value]) => memo + value, 0)

export default ({}) => {
	const query = new URLSearchParams(useLocation().search)
	const details = query.get('details')

	// details=a2.6t2.1s1.3l1.0b0.8f0.2n0.1
	const encodedDetails = details,
		rehydratedDetails =
			encodedDetails &&
			encodedDetails
				.match(/[a-z][0-9]+\.[0-9][0-9]/g)
				.map(([category, ...rest]) => [category, 1000 * +rest.join('')])
				// Here we convert categories with an old name to the new one
				// 'biens divers' was renamed to 'divers'
				.map(([category, ...rest]) =>
					category === 'b' ? ['d', ...rest] : [category, ...rest]
				)

	const score = sumFromDetails(rehydratedDetails)

	const roundedValue = Math.round(score / 1000)

	return (
		<div css="padding: 0 4rem; max-width: 800px; margin: 0 auto; background: rgb(137,229,211);">
			<div
				id="fin"
				css={`
					display: flex;
					flex-direction: column;
					text-align: center;
				`}
			>
				<div id="shareImage" css="padding: 2rem 0">
					<h1 css="color: black; font-size: 250%">Mon empreinte climat est de</h1>
					<div css="display: flex; align-items: center; justify-content: center; flex-direction: row">
						<div css="font-weight: bold; font-size: 250%; background: rgb(65,148,160); padding: 1.5rem 1.2rem; color: white">
							<span css="text-align: center">
								{roundedValue}
							</span>{' '}
							tonnes
						</div>
						<div css="padding: 1rem; width: 55%">
							<Chart
								details={Object.fromEntries(rehydratedDetails)}
								noAnimation
								noText
								noCompletion
								showValues={true}
							/>
						</div>
					</div>
					<div css="margin: 2rem">
						<span css={`
							color: rgb(102,209,188);
							background: white;
							font-size: 220%;
							padding: 0.8rem 1.1rem;
							border-radius: 15px;
							font-weight: bold;
						`}>
							Mesure la tienne
							<img src={Earth} css="height: 2rem; position: relative; top: 6px; left: 6px;" />
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}


