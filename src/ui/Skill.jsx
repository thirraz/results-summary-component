/* eslint-disable react/prop-types */
import styled from "styled-components"
import { sizes } from "../styles/globalTheme"

const StyledSkill = styled.div`
	background-color: ${(props) => props.$bgColor ?? 0};
	min-width: 100%;
	width: 100%;
	padding: 0.8rem;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;

	& img {
		width: 1.5rem;
		height: 1.5rem;
	}

	@media screen and (max-width: ${sizes.mobile}) {
		margin-bottom: 0.8rem;
	}
`

const CategoryName = styled.p`
	color: ${(props) => props.categoryFontColor};
	padding-left: 1rem;
`

const IconAndSkillName = styled.div`
	display: flex;
	align-items: center;
`
const ScoreResult = styled.span`
	font-weight: bold;
	padding-right: 0.6rem;
`
const TotalScore = styled.p`
	color: var(--color-grey-dark-blue);
	font-weight: 800;
`

const MaxPontuation = styled.span`
	opacity: 0.6;
`
export default function Skill({ category, icon, score, fontColor, bgColor }) {
	return (
		<>
			<StyledSkill $bgColor={bgColor}>
				<IconAndSkillName>
					<img src={icon} alt="skill icon" />
					<CategoryName categoryFontColor={fontColor}>
						{category}{" "}
					</CategoryName>{" "}
				</IconAndSkillName>
				<TotalScore>
					<ScoreResult>{score}</ScoreResult>
					<MaxPontuation>/ 100</MaxPontuation>
				</TotalScore>
			</StyledSkill>
		</>
	)
}
