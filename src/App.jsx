import { GlobalStyles } from "./styles/globalTheme"
import Container from "./ui/Container"
import Score from "./ui/Score"
import SkillsSummary from "./ui/SkillsSummary"

export default function App() {
	return (
		<div>
			<GlobalStyles />
			<Container>
				<Score />
				<SkillsSummary />
			</Container>
		</div>
	)
}
