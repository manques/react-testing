import React from 'react';
import { render, ummountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Toggle from './toggle';

const container = null;
beforeEach(() => {
    // setup a DOM Element as a render target.
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleaup on existing
    ummountComponentAtNode(container);
    container.remove();
    container = null;
});

it("changed value when clicked", () => {
    const onChange = jest.fn();
    act(() => {
        render(<Toggle onChange={onChange} />, container);
    });

    // get a hold of button element, and trigger some clicks on it.
    const button = document.querySelector("[data-testid]=toggle");
    expect(button.innerHTML).toBe("Turn on");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn off");

    act(() => {
        for(let i = 0; i < 5; i ++) {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
    expect(button.innerHTML).toBe("Turn on");
});