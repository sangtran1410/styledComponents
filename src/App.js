import React, { useEffect } from 'react';
// import {
//   ContentWrapper,
//   TomatoButton,
//   Button,
//   Link,
//   StyledLink,
//   Input,
//   ExtendButton,
//   PasswordInput,
//   themeButton,
//   RefOther,
//   Icon,
//   Label,
// } from './styled.js';


// 1. Hello world
// const App = () => (
//   <div className="App">
//     <ContentWrapper>
//       <div>Hello Style-components !</div>
//     </ContentWrapper>
//   </div>
// );

/**
 * ================
 *  BASIC
 * ================
 */

// 1. Adapting Base on props
// const App = () => (
//   <div className="App">
//     <ContentWrapper primary='#00ccff'>
//       <div>Hello World !</div>
//     </ContentWrapper>
//   </div>
// );

// 2. Extending styles
// const App = () => (
//   <div className="App">
//     <TomatoButton>Tomato button</TomatoButton>
//     <Button>Button</Button>
//   </div>
// );

// 3. Styling any component
// const App = () => (
//   <div>
//     <Link>Unstyled, boring Link</Link>
//     <br />
//     <StyledLink>Styled, exciting Link</StyledLink>
//   </div>
// );

// 4. Passed props
// const App = () => (
//   <div>
//     <Input defaultValue="Ronaldo" type="text" />
//     <Input defaultValue="Messi" type="text" inputColor="red" />
//   </div>
// );

// 5. Attaching additional props
// const App = () => (
//   <div>
//     <Input placeholder="A small text input" />
//     <br />
//     <Input placeholder="A bigger text input" size="2em" />
//   </div>
// );

// 5.1 Overriding .attrs
// const App = () => (
//   <div className="App">
//     <Input placeholder="A bigger text input" size="2em" />
//     <br />
//     <PasswordInput placeholder="A bigger password input" size="2em" />
//   </div>
// );

/**
 * ================
 *  ADVANCE
 * ================
 */

// 6. Theming
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


// 6.1 Function themes
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
//       <Button className="abc">Default Theme</Button>
//       <ThemeProvider theme={invertTheme}>
//         <Button>Inverted Theme</Button>
//       </ThemeProvider>
//     </div>
//   </ThemeProvider>
// );

// 7. Refs
// const App = () => {
//   const inputRef = React.useRef(null);

//   return (
//     <Input
//       ref={inputRef}
//       placeholder="Hover to focus!"
//       onMouseEnter={() => {
//         inputRef.current.focus()
//       }}
//     />
//   )
// };

// 8. Security
// // Oh no! The user has given us a bad URL!
// const userInput = '/api/withdraw-funds'

// const ArbitraryComponent = styled.div`
//   background: url(${userInput});
//   /* More styles here... */
// `

// 9. Referring to other components 
// const App = () => (
//   <RefOther>
//     <Label>Hovering my parent changes my style!</Label>
//   </RefOther>
// );

// 10. Style Objects
// import { ThemeProvider } from 'styled-components';
// const theme = {
//   main: "green"
// };

// const App = () => (
//   <div>
//     <Button theme={{ main: "blue" }}>Ad hoc theme</Button>
//     <ThemeProvider theme={theme}>
//       <div>
//         <Button>Themed</Button>
//         <Button theme={{ main: "orange" }}>Overridden</Button>
//       </div>
//     </ThemeProvider>
//   </div>
// );

/**
 * ================
 *  API REFERENCE
 * ================
 */

// 1. createGlobalStyle
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

// 2. css
// import { StyledComp } from './styled.js';
// const App = () => (
//   <div>
//     <StyledComp complex greenColor>StyledComp</StyledComp>
//   </div>
// );

// 3. keyframes
// import { PulseButton } from './styled.js';
// const App = () => (
//   <div>
//     <PulseButton animationLength='1s'>PulseButton</PulseButton>
//   </div>
// );

// 4. isStyledComponent
// import { TargetedButton } from './styled.js';
// const App = () => (
//   <div>
//     <TargetedButton >TargetedButton</TargetedButton>
//   </div>
// );


// 5. ThemeConsumer
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
import Lazyload from 'react-lazyload'
import Input from '@/BasicComponents/Input';
import TextArea from '@/BasicComponents/TextArea';
import Select, { Option } from '@/BasicComponents/Select';
import Checkbox from '@/BasicComponents/Checkbox';
import Number from '@/BasicComponents/Number';
import Button from '@/BasicComponents/Button';
import DatePicker from '@/BasicComponents/DatePicker';
import DateRangePicker from '@/BasicComponents/DateRangePicker';
import RadioGroup, { Radio } from '@/BasicComponents/RadioGroup';
import BarChart from '@/BasicComponents/BarChart';
import { defaultTheme } from './styles/defaultTheme';
import { GlobalStyle } from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { FormWrapper, } from './styled';
// export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

// console.log('BASE_API_URL', BASE_API_URL)
const App = () => {
  useEffect(() => {
    const workBtn = document.querySelector("#work-btn");
    workBtn.addEventListener('click', () => {
      const worker = new Worker('worker.js')
      worker.postMessage('ahihi');
      worker.onmessage((e) => {
        document.querySelector('#output').innerHTML = e.data
      })
      // let final = 0;
      // for (let i = 0; i < 1e9 ; i++) {
      //   final += i;
      // } 
      // document.querySelector('#output').innerHTML = final;
    });
    let count = 0; 
    const btn = document.querySelector("#btn");
    btn.addEventListener('click', () => {
      document.querySelector('#random').innerHTML = `random${count}`;
      count ++;
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FormWrapper>
        <span>Input:</span><Input />
        <span>TextArea: </span><TextArea rows='5' />
        <span>Select: </span>
        <Select defaultValue="Jack" >
          {['Jack', 'Lucy', 'John'].map((item, indx) => <Option value={item} key={indx}>{item}</Option>)}
        </Select>
        <span>Checkbox:</span><Checkbox/>
        <span>RadioGroup:</span>
        <RadioGroup>
          <Radio value={1}>aaa</Radio>
          <Radio value={2}>bbb</Radio>
        </RadioGroup>
        <span>Number:</span><Number min={0} max={99} />
        <span>Button:</span>
        <Button
          size="medium"
          type="primary"
        >
          Button
        </Button>
        <span>Button:</span>
        <Button.Search
          size="medium"
          type="primary"
        >
          Search
        </Button.Search>
        <span>DatePicker:</span><DatePicker />
        <span>DateRangePicker:</span><DateRangePicker/>
      </FormWrapper>
      <BarChart />
      <button id="work-btn">Work btn</button>
      <button id="btn">Btn</button>
      <span id="random"></span>
      <span id="output"></span>
      <Lazyload throttle={1000} height={300}>
        <img loading="lazy" src="http://placekitten.com/400/200" />
      </Lazyload>
      <Lazyload throttle={1000} height={300}>
        <img loading="lazy" src="http://placekitten.com/400/201" />
      </Lazyload>
      <Lazyload throttle={1000} height={300}>
        <img loading="lazy" src="http://placekitten.com/400/202" />
      </Lazyload>
      <Lazyload throttle={1000} height={300}>
        <img loading="lazy" src="http://placekitten.com/400/203" />
      </Lazyload>
      <Lazyload throttle={1000} height={300}>
        <img loading="lazy" src="http://placekitten.com/400/204" />
      </Lazyload>
    </ThemeProvider>
  )
}

export default App;
