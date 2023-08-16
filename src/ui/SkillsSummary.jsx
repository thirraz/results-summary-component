import styled from "styled-components"
import { H4, padding, sizes } from "../styles/globalTheme"
import { projectInfos } from "../data"
import Skill from "./Skill"

const StyledSkillsSummary = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	padding: ${padding.small} 3rem;

	@media screen and (max-width: ${sizes.mobile}) {
		padding-top: 0;
	}
`

const Button = styled.button`
	display: block;
	width: 100%;
	padding: 1.2rem 0;
	border-radius: 30px;
	font-size: 0.9rem;
	border: none;
	outline: none;
	color: #fff;
	background: var(--color-grey-dark-blue);
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-image: linear-gradient(
			to bottom,
			var(--color-state-blue),
			var(--color-royal-blue)
		);
	}

	@media screen and (max-width: ${sizes.mobile}) {
		margin-top: 1.3rem;
	}
`

export default function SkillsSummary() {
	return (
		<StyledSkillsSummary>
			<H4
				// paddingY="1rem"
				paddingX="0"
				alignSelf="flex-start"
				color="var(--color-grey-dark-blue)"
			>
				Summary
			</H4>
			{projectInfos.map((skill) => (
				<Skill
					key={skill.category}
					category={skill.category}
					score={skill.score}
					icon={skill.icon}
					fontColor={skill.fontColor}
					bgColor={skill.bgColor}
				/>
			))}

			<Button>Continue</Button>
		</StyledSkillsSummary>
	)
}
