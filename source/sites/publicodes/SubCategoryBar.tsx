import { motion } from 'framer-motion'
import { useState } from 'react'
import emoji from 'react-easy-emoji'
import { findContrastedTextColor } from '../../components/utils/colors'

const emojiBackground = '#ffffffa6'

export default ({ nodeValue, total, icons, color, title }) => {
	const [clicked, click] = useState(false)
	const emojiComponents = emoji(icons || '')
	const percent = (nodeValue / total) * 100
	if (percent < 10) return null // will be unreadable

	return (
		<motion.li
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, width: `calc(${percent}% - 2px)` }}
			exit={{ width: 0, opacity: 0 }}
			transition={{ duration: 0.5 }}
			key={title}
			css={`
				border-right: 2px solid var(--lighterColor);
				background: ${color};
				cursor: pointer;
			`}
			title={title}
			onClick={() => click(!clicked)}
		>
			{clicked ? (
				<span
					key={title}
					css={`
						color: ${findContrastedTextColor(color, true)};
					`}
				>
					{title}
				</span>
			) : (
				<span
					key={title}
					css={`
						position: relative;
						font-size: 110%;
						background: ${emojiBackground};
						border-radius: 2rem;
						height: 1.5rem;
						display: inline-block;
						width: 1.5rem;
						z-index: 6;
					`}
				>
					<span
						key="emoji"
						css={`
							img {
								vertical-align: -0.2em !important;
							}
						`}
					>
						{emojiComponents[0]}
					</span>
					{emojiComponents.length > 1 && (
						<>
							<span
								key="background"
								css={`
									z-index: -1;
									font-size: 70%;
									position: absolute;
									bottom: 0px;
									right: 0px;
									transform: translate(60%, 10%);
									background: ${emojiBackground};
									border-radius: 2rem;
									padding: 0.15rem;
									height: 1rem;
									width: 1rem;
								`}
							></span>
							<span
								key="emoji2"
								css={`
									z-index: 7;
									font-size: 70%;
									position: absolute;
									bottom: 0px;
									right: 0px;
									transform: translate(60%, 10%);
									border-radius: 2rem;
									height: 1rem;
									width: 1rem;
									img {
										vertical-align: 0.1rem !important;
									}
								`}
							>
								{emojiComponents[1]}
							</span>
						</>
					)}
				</span>
			)}
		</motion.li>
	)
}
