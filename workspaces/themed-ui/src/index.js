import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AccordionDefault from './Accordion';
import ButtonDefault from './Button';
import CardDefault from './Card';
import FontDefault from './Font';
import LinkDefault from './Link';

export * from './Accordion';
export const Accordion = AccordionDefault;
export * from './Button';
export const Button = ButtonDefault;
export * from './Card';
export const Card = CardDefault;
export * from './Font';
export const Font = FontDefault;
export * from './Link';
export const Link = LinkDefault;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
