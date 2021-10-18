import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import User from './user';

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target.
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove = null;
    container = null;
});


it("render user data", async () => {
    const fakeUser = {
        name: 'Anup Kumar',
        age: 30,
        address: 'D-4, regal height, sector 73, noida'
    };

    jest.spyOn(global, "fetch")
    .mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        });
    });

    // use async version of act to apply resolved promises
    await act(async () => {
        render(<User id="123" />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(container.textContent).toBe(fakeUser.address);

    // remove the mock to ensure tests are completely isolated.
    global.fetch.mockRestore();
});
