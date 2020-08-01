import React, { useContext } from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@pixelbandito/theme';
import Accordion, { AccordionContext } from './Accordion';

describe('Accordion', () => {
  let theme;

  beforeEach(() => {
    theme = defaultTheme;
  });

  it('doesn\'t error', () => {
    render(
      <ThemeProvider theme={theme}>
        <Accordion />
      </ThemeProvider>,
    );
  });

  it('toggles open and closed', async () => {
    const { queryByText } = render(
      <ThemeProvider theme={theme}>
        <Accordion>
          BAR
        </Accordion>
      </ThemeProvider>,
    );

    let showMore = queryByText('Show more');
    let showLess = queryByText('Show less');
    let contents = queryByText('BAR');
    expect(contents).toBeFalsy();
    expect(showMore).toBeTruthy();
    expect(showLess).toBeFalsy();

    userEvent.click(showMore);
    showMore = queryByText('Show more');
    showLess = queryByText('Show less');
    contents = queryByText('BAR');
    expect(contents).toBeTruthy();
    expect(showMore).toBeFalsy();
    expect(showLess).toBeTruthy();

    userEvent.click(showLess);
    showMore = queryByText('Show more');
    showLess = queryByText('Show less');
    await waitFor(() => expect(queryByText('BAR')).toBeFalsy());
    expect(showMore).toBeTruthy();
    expect(showLess).toBeFalsy();
  });

  it('props.className renders', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Accordion className="foo" data-testid="accordion" />
      </ThemeProvider>,
    );

    const contents = getByTestId('accordion');
    expect(contents.getAttribute('class')).toEqual(expect.stringContaining('foo'));
  });

  describe('props.defaultIsOpen', () => {
    it('renders props.children when true', () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <Accordion defaultIsOpen>
            FOO
          </Accordion>
        </ThemeProvider>,
      );

      const contents = getByText('FOO');
      expect(contents).toBeTruthy();
    });

    it('doesn\'t render props.children when false', () => {
      const { queryByText } = render(
        <ThemeProvider theme={theme}>
          <Accordion>
            FOO
          </Accordion>
        </ThemeProvider>,
      );

      const contents = queryByText('FOO');
      expect(contents).toBeFalsy();
    });
  });

  describe('props.head', () => {
    const CustomHead = () => {
      const isOpen = useContext(AccordionContext);

      return isOpen ? 'OPEN' : 'CLOSED';
    };

    it('renders custom accordion head with closed context', () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <Accordion
            head={<CustomHead />}
          />
        </ThemeProvider>,
      );

      const customHead = getByText('CLOSED');
      expect(customHead).toBeTruthy();
    });

    it('renders custom accordion head with open context', () => {
      const { getByText } = render(
        <ThemeProvider theme={theme}>
          <Accordion
            defaultIsOpen
            head={<CustomHead />}
          />
        </ThemeProvider>,
      );

      const customHead = getByText('OPEN');
      expect(customHead).toBeTruthy();
    });
  });
});
