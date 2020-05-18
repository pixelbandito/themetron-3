import React from 'react'
import { ThemeProvider } from 'styled-components';

import { Accordion, Card } from 'themed-ui-2';
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
      </ThemeProvider>
    </div>
  );
}

export default App
