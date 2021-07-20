import React from 'react'
import LogoTime from './images/logo_time.svg'

//This component is unfortunately repeated in index.html, where we can't yet use a component :-(

export default () => (
	<span css="margin-top: .6rem;font-weight: 400;color: black; position: relative; ">
		<span css="position: absolute; top: -.95rem; left: 0rem; font-size: 60%;">
			nos
		</span>
		<span css="color: var(--color); font-weight: bold; text-transform: uppercase; font-size: 75%">
			ges
		</span>
		tes
		<span css="position: absolute; top: 1.2rem; left: 2.3rem; font-size: 60%; ">
			climat
		</span>
	</span>
)

export const InlineLogo = () => (
	<div
		css={`
			display: flex;
			align-items: center;

			@media (max-width: 800px) {
				flex-direction: column;
			}
		`}
	>
		<span
			css={`
				display: flex;
				align-items: center;
				font-weight: 400;
				color: black;
				position: relative;
				width: 200px;
			`}
		>
			<img
				src={LogoTime}
				style={{ maxWidth: '30px' }}
				alt="Logo de Time for the Planet"
			/>
			<span
				css={`
					font-size: 70%;
					font-family: 'Gilroy', 'Helvetica', 'sans-serif';
					color: black;
					white-space: nowrap;
				`}
			>
				Time for the Planet
			</span>
		</span>
		<span
			css={`
				margin: 0 1.5rem;
				font-size: 50%;
				color: black;
			`}
		>
			x
		</span>
		<span
			css={`
				display: flex;
				align-items: center;
				font-weight: 400;
				color: black;
				position: relative;
			`}
		>
			<span css=" font-size: 70%; align-self: center">nos</span>
			<span css="margin: 0 .25rem">
				<span css="color: var(--color); font-weight: bold; text-transform: uppercase; font-size: 75%">
					ges
				</span>
				tes
			</span>
			<span css="font-size: 70%; align-self: center">climat</span>
		</span>
	</div>
)
