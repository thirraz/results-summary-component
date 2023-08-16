import styled, { createGlobalStyle } from "styled-components"

export const sizes = {
	mobile: "600px",
	tablet: "800px"
}

export const padding = {
	small: "2rem"
}

// REUSABLE COMPONENTS
export const H4 = styled.h4`
	align-self: ${(props) => props.alignSelf};
	padding: ${(props) => props.paddingY} ${(props) => props.paddingX};
	color: ${(props) => props.color};
	opacity: ${(props) => props.opacity};
	font-size: 1.5rem;

	@media screen and (max-width: ${sizes.mobile}) {
		font-size: 1.4rem;
		margin: 1.5rem 0;
	}
`

export const GlobalStyles = createGlobalStyle`
  :root{
    // COLORS
    --color-state-blue: hsl(252, 100%, 67%);
    --color-royal-blue: hsl(241, 81%, 54%);
    --color-violet-blue: hsla(256, 72%, 46%, 1);
    --color-persian-blue: hsla(241, 72%, 46%, 0);
    --color-grey-dark-blue: hsl(224, 30%, 27%);

    // FONT
    --font-primary:'Hanken Grotesk', sans-serif;


    // SHADOW
    --light-shadow:  0 20px 25px -5px rgb(0 0 0 / 0.1), 25px 50px 40px 1px rgb(0 0 0 / 0.1);
  }

  

  *,*::before,*:after{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    max-width:100vw;
    min-height:100vh;
    display:flex;
    justify-content: center;
    align-items:center;
    /* background:#333; */

    font-family: var(--font-primary);

  }
`
