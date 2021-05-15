import React from 'react';
import {
  ContentWrapper,
  TomatoButton,
  Button,
  Input,
  ExtendButton,
  PasswordInput,
  themeButton,
} from './styled.js';
// 1. Hello world
const App = () => (
  <div className="App">
    <ContentWrapper>
      <div>Hello World !</div>
    </ContentWrapper>
  </div>
);

// 2. Base on props
// const App = () => (
//   <div className="App">
//     <ContentWrapper primary='#00ccff'>
//       <div>Hello World !</div>
//     </ContentWrapper>
//   </div>
// );

// 3. Extending styles
// const App = () => (
//   <div className="App">
//     <TomatoButton>Tomato button</TomatoButton>
//     <Button>Button</Button>
//   </div>
// );

// 4. Pseudo
// const App = () => (
//   <div className="App">
//     <ExtendButton>Extend Button</ExtendButton>
//     <ExtendButton className="something">Something</ExtendButton>
//     <span className="something-else">
//       <ExtendButton>Something else</ExtendButton>
//     </span>
//   </div>
// );

// 5. Attaching additional props
// const App = () => (
//   <div className="App">
//     <Input placeholder="A small text input" />
//     <Input placeholder="A bigger text input" size="2em" />
//   </div>
// );

// 6. Overriding .attrs
// const App = () => (
//   <div className="App">
//     <Input placeholder="A bigger text input" size="2em" />
//     <br />
//     <PasswordInput placeholder="A bigger password input" size="2em" />
//   </div>
// );

// 7. Theming
// import { ThemeProvider } from 'styled-components';

// const theme = {
//   main: "blue",
// };

// const App = () => (
//   <div className="App">
//     <Button>Normal</Button>
//     <ThemeProvider theme={theme}>
//       <Button>Themed</Button>
//     </ThemeProvider>
//   </div>
// );

// 8. Function themes
// import { ThemeProvider } from 'styled-components';

// const theme = {
//   fg: "palevioletred",
//   bg: "white"
// };

// const invertTheme = ({ fg, bg }) => ({
//   fg: bg,
//   bg: fg
// });

// const App = () => (
//   <ThemeProvider theme={theme}>
//     <div>
//       <Button>Default Theme</Button>
//       <ThemeProvider theme={invertTheme}>
//         <Button>Inverted Theme</Button>
//       </ThemeProvider>
//     </div>
//   </ThemeProvider>
// );

// 9. theme props
// import { ThemeProvider } from 'styled-components';
// const theme = {
//   main: "mediumseagreen"
// };

// const App = () => (
//   <div>
//     <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
//     <ThemeProvider theme={theme}>
//       <div>
//         <Button>Themed</Button>
//         <Button theme={{ main: "darkorange" }}>Overridden</Button>
//       </div>
//     </ThemeProvider>
//   </div>
// );

// 10. Style Objects
// import { ThemeProvider } from 'styled-components';
// const theme = {
//   main: "mediumseagreen"
// };

// const App = () => (
//   <div>
//     <Button theme={{ main: "royalblue" }}>Ad hoc theme</Button>
//     <ThemeProvider theme={theme}>
      // <div>
      //   <Button>Themed</Button>
      //   <Button theme={{ main: "darkorange" }}>Overridden</Button>
      // </div>
//     </ThemeProvider>
//   </div>
// );

/**
 * ================
 *  API REFERENCE
 * ================
 */

// createGlobalStyle
// import { createGlobalStyle, ThemeProvider } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => (props.orangeColor ? 'orange' : 'black')};
//     font-family: ${props => props.theme.fontFamily};
//   }
// `

// const App = () => (
//   <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
//     <React.Fragment>
//       <GlobalStyle orangeColor />
//       <div>App</div> {/* example of other top-level stuff */}
//     </React.Fragment>
//   </ThemeProvider>
// );

// css
// import { StyledComp } from './styled.js';
// const App = () => (
//   <div>
//     <StyledComp complex greenColor>StyledComp</StyledComp>
//   </div>
// );

// keyframes
// import { PulseButton } from './styled.js';
// const App = () => (
//   <div>
//     <PulseButton animationLength='1s'>PulseButton</PulseButton>
//   </div>
// );

// isStyledComponent
// import { TargetedButton } from './styled.js';
// const App = () => (
//   <div>
//     <TargetedButton >TargetedButton</TargetedButton>
//   </div>
// );


// ThemeConsumer
// import { ThemeProvider, ThemeConsumer } from 'styled-components'

// const App = () => (
//   <ThemeProvider theme={{ color: 'red', background: 'blue' }}>
//     <ThemeConsumer>
//       {theme => <div>The theme color is {theme.color}.</div>}
//     </ThemeConsumer>
//     <ThemeConsumer>
//       {theme => <div>The theme background is {theme.background}.</div>}
//     </ThemeConsumer>
//   </ThemeProvider>
// )

/**
 * ================
 *  CUSTOM ANTD COMPONENTS
 * ================
 */
// import Input from './BasicComponents/Input';
// import TextArea from './BasicComponents/TextArea';
// import Select, { Option } from './BasicComponents/Select';
// import Checkbox from './BasicComponents/Checkbox';
// import Number from './BasicComponents/Number';
// import Button from './BasicComponents/Button';
// import DatePicker from './BasicComponents/DatePicker';
// import DateRangePicker from './BasicComponents/DateRangePicker';
// import RadioGroup, { Radio } from './BasicComponents/RadioGroup';
// import { defaultTheme } from './styles/defaultTheme';
// import { GlobalStyle } from './styles/globalStyle';
// import { ThemeProvider } from 'styled-components';
// import { FormWrapper, } from './styled';

// const App = () => (
//   <ThemeProvider theme={defaultTheme}>
//     <GlobalStyle />
//     <FormWrapper>
//       <span>Input:</span><Input />
//       <span>TextArea: </span><TextArea rows='5' />
//       <span>Select: </span>
//       <Select defaultValue="Jack" >
//         {['Jack', 'Lucy', 'John'].map((item, indx) => <Option value={item} key={indx}>{item}</Option>)}
//       </Select>
//       <span>Checkbox:</span><Checkbox/>
//       <span>RadioGroup:</span>
//       <RadioGroup>
//         <Radio value={1}>aaa</Radio>
//         <Radio value={2}>bbb</Radio>
//       </RadioGroup>
//       <span>Number:</span><Number min={0} max={99} />
//       <span>Button:</span>
//       <Button
//         size="medium"
//         type="primary"
//       >
//         Button
//       </Button>
//       <span>Button:</span>
//       <Button.Search
//         size="medium"
//         type="primary"
//       >
//         Search
//       </Button.Search>
//       <span>DatePicker:</span><DatePicker />
//       <span>DateRangePicker:</span><DateRangePicker/>
//     </FormWrapper>
//   </ThemeProvider>
// )

export default App;
