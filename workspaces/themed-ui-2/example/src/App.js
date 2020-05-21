import React from 'react'
import { ThemeProvider } from 'styled-components';

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
  Link,
  P,
  Small,
  Strong,
} from 'themed-ui-2';
import 'themed-ui-2/dist/index.css';
import defaultTheme from '@pixelbandito/theme-editor/src/theme.mjs';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Accordion m="md">Stuff</Accordion>
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
      </ThemeProvider>
    </div>
  );
}

export default App
