import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@pixelbandito/theme';

import {
  A,
  Accordion,
  Card,
  Font,
  Em,
  H1,
  H2,
  H3,
  H4,
  Input,
  Link,
  P,
  Small,
  Strong,
} from '@pixelbandito/themed-ui';

import '@pixelbandito/themed-ui/dist/index.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  return (
    <div>
      <ThemeProvider theme={{
          ...defaultTheme,
          shared: {
            ...defaultTheme.shared,
            mode: 'light',
          }
        }}>
        <Accordion m="md" defaultIsOpen={true}>Stuff</Accordion>
        <Card m="md">
          <Card.Head variant="default">
            Card head
          </Card.Head>
          <Card.Body>
            Card body
          </Card.Body>
          <Card.Foot variant="default">
            Card foot
          </Card.Foot>
        </Card>
        <H1 m="md">
          Heading 1
        </H1>
        <H2 m="md">
          Heading 2
        </H2>
        <H3 m="md">
          Heading 3
        </H3>
        <H4 m="md">
          Heading 4
        </H4>
        <P m="md">
          <Font contrast="1" tag="span">High contrast text!</Font>{' '}
          <Font contrast="2" tag="span">Medium contrast text!</Font>{' '}
          <Font contrast="3" tag="span">Lower contrast text!</Font>{' '}
          <Em>Emphasized</Em>{' '}
          <Small>Small text</Small>{' '}
          <Strong>Strong text</Strong>{' '}
          <A href="#">Link</A>{' '}
          <Link href="#">Link</Link>
        </P>
        <Input
          m="md"
          onChange={e => {
            setInputValue(e.target.value);
          }}
          ref={inputRef}
          value={inputValue}
        />
      </ThemeProvider>
    </div>
  );
}

export default App
