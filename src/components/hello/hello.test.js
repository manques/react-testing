import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './hello';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    conatiner = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on existing
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('render with or without a name', () => {
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe("Hello, world");

    act(() => {
        render(<Hello name="anup" />, container);
    });
    expect(container.textContent).toBe("Hello, anup");

    act(() => {
        render(<Hello name="ajeet" />, container);
    });
    expect(container.textContent).toBe("Hello, ajeet");
});