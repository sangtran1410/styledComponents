import styled, { css, keyframes } from 'styled-components'

// 1. Hello world
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background-color: #282c34;
`;

// 2. Base on props
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

// 3. Extending styles
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

// 4. Pseudo
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

// export const ExtendButton = styled(Button)`
//   &:hover {
//     color: #66ffcc;
//     background: #00b8e6;
//     border: 2px solid #66ffcc;
//   }

//   &.something {
//     color: white;
//     background: #282c34;
//     border: 2px solid #009999;
//   }

//   .something-else & {
//     color: black;
//     background: white;
//     border: 2px solid black;
//   }
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

// 6. Overriding .attrs
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

// 7. Theming
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

// 8. Function themes
// export const Button = styled.button`
//   color: ${props => props.theme.fg};
//   border: 2px solid ${props => props.theme.fg};
//   background: ${props => props.theme.bg};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
// `;

// 9. theme props
// export const Button = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 3px;

//   color: ${props => props.theme.main};
//   border: 2px solid ${props => props.theme.main};
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

// css
// const complexMixin = css`
//   color: ${props => (props.greenColor ? 'green' : 'black')};
// `

// export const StyledComp = styled.div`
//   ${props => (props.complex ? complexMixin : 'color: blue;')};
// `

// keyframes
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

// isStyledComponent
// import { isStyledComponent } from 'styled-components'

// const Button = null;

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

// const defaultButton = styled.button`
//   color: green;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #ccc;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: all 0.3s;
// `;

// export const TargetedButton = isStyledComponent(Button)
//   ? Button
//   : defaultButton;


/**
 * ================
 *  CUSTOM ANTD COMPONENTS
 * ================
 */

// export const FormWrapper = styled.div`
//   display: grid;
//   margin: 200px auto;
//   width: 500px;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
// `;
