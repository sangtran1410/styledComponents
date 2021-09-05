import styled, { css, keyframes } from 'styled-components'

// 1. Hello world
// export const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   text-align: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
//   background-color: #282c34;
// `;

/**
 * ================
 *  BASIC
 * ================
 */

// 1. Adapting Base on props
// export const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   text-align: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
//   background: ${props => props.primary ? props.primary: "#00b8e6"};
// `;

// 2. Extending styles
// export const Button = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: all 0.3s;
// `;

// export const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// 3. Styling any component
// This could be react-router-dom's Link for example
// export const Link = ({ className, children }) => (
//   <a className={className}>
//     {children}
//   </a>
// );

// export const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
// `;

// 4. Passed props
// export const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.inputColor || "black"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// 5. Attaching additional props
// export const Input = styled.input.attrs(props => ({
//   // we can define static props
//   type: "text",

//   // or we can define dynamic ones
//   size: props.size || "1em",
// }))`
//   color: palevioletred;
//   font-size: 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;

//   /* here we use the dynamically computed prop */
//   padding: ${props => props.size};
// `;

// 5.1 Overriding .attrs
// export const Input = styled.input.attrs(props => ({
//   type: "text",
//   size: props.size || "1em",
// }))`
//   border: 2px solid palevioletred;
//   margin: ${props => props.size};
//   padding: ${props => props.size};
// `;

// export const PasswordInput = styled(Input).attrs({
//   type: "password",
// })`
//   border: 2px solid aqua;
// `;

/**
 * ================
 *  ADVANCE
 * ================
 */

// 6. Theming
// export const Button = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: all 0.3s;

//   color: ${props => props.theme.main};
//   border: 2px solid ${props => props.theme.main};
// `;

// 6.1 Function themes
// export const Button = styled.button`
//   color: ${props => props.theme.fg};
//   border: 2px solid ${props => props.theme.fg};
//   background: ${props => props.theme.bg};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
// `;

// 7. Refs 
// export const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: palevioletred;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// 9. Referring to other components 
// export const Label = styled.span`
//   display: flex;
//   align-items: center;
//   line-height: 1.2;
//   transition: all .5s;

//   &::before {
//     content: '◀';
//     margin: 0 10px;
//   }
// `;

// export const RefOther = styled.span`
//   display: flex;
//   align-items: center;
//   padding: 5px 10px;
//   background: papayawhip;
//   color: palevioletred;

//   &:hover ${Label}::before {
//     color: red;
//   }
// `;

// export const Icon = styled.svg`
//   flex: none;
//   transition: fill 0.25s;
//   width: 48px;
//   height: 48px;
// `;

// 10. Style object
// export const Button = styled.button(props => ({
//   background: props.theme.main,
//   padding: '0.25em 1em',
//   'font-size': '1em',
//   'border-radius': '3px',
// }));

/**
 * ================
 *  API REFERENCE
 * ================
 */

// 2. css
// const complexMixin = css`
//   font-weight: bold;
//   color: ${props => (props.greenColor ? 'green' : 'black')};
// `

// export const StyledComp = styled.div`
//   ${props => (props.complex ? complexMixin : 'color: blue;')};
// `

// export const complexMixin = css`
//   font-weight: bold;
// `
// 3. keyframes
// const pulse = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `

// const animation = props =>
//   css`
//     ${pulse} ${props.animationLength} infinite alternate;
//   `

// export const PulseButton = styled.button`
//   animation: ${animation};
// `

// 4. isStyledComponent
import { isStyledComponent } from 'styled-components'

const Button = null;

// const Button = styled.button`
//   color: black;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #ccc;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: all 0.3s;
// `;

// const GreenButton = styled.button`
//   color: green;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid green;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: all 0.3s;
// `;

// export const TargetedButton = isStyledComponent(Button)
//   ? Button
//   : GreenButton;


/**
 * ================
 *  CUSTOM ANTD COMPONENTS
 * ================
 */

export const FormWrapper = styled.div`
  display: grid;
  margin: 200px auto;
  width: 500px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
