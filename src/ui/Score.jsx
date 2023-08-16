import styled from "styled-components"
import { sizes, padding, H4 } from "../styles/globalTheme"

const StyledScore = styled.div`
	/* min-height: 100%; */
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 1;
	padding: ${padding.small} 0;
	border-radius: 40px;

	background-image: linear-gradient(
		to bottom,
		var(--color-state-blue),
		var(--color-royal-blue)
	);

	@media only screen and (max-width: ${sizes.mobile}) {
		flex-direction: column;
		min-height: 20rem;
		padding-top: 0;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}

	@media only screen and (max-width: ${sizes.tablet}) {
		border-radius: 0;
	}
`

const StyledFeedback = styled.div`
	text-align: center;

	padding: 0 3.5rem;

	& p {
		opacity: 0.7;
	}

	@media screen and (max-width: ${sizes.mobile}) {
		margin-top: 1.3rem;
	}
`

const StyledPontuation = styled.div`
	padding: 3.5rem 4.5rem;
	border-radius: 50%;
	text-align: center;

	background-image: linear-gradient(
		to bottom,
		var(--color-violet-blue),
		var(--color-persian-blue)
	);
`

const PontuationNumber = styled.p`
	font-weight: bold;
	font-size: 3.7rem;
`

const H3 = styled.h3`
	font-size: 1.5rem;
	padding-bottom: 0.8rem;
`

export default function Score() {
	return (
		<StyledScore>
			<H4 opacity="0.7">Your Result</H4>

			<StyledPontuation>
				<PontuationNumber>76</PontuationNumber>
				<p>of 100</p>
			</StyledPontuation>

			<StyledFeedback>
				<H3>Great</H3>
				<p>
					You scored higher than 65% of the people who have taken these
					tests
				</p>
			</StyledFeedback>
		</StyledScore>
	)
}
