import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Contact from './contact';
import MockedMap from './map';

jest.map('./map', () => {
    return function DummyMap(props) {
        return (
            <div data-testid="map">
                {props.center.lat}:{props.center.long}
            </div>
        );
    }
});

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on existing
    unmountComponentAtNode(container);
    conatiner.remove();
    container = null;
});

it("should render contact information", () => {
    const center = { lat: 0, long: 0 };
    act(() => {
        render(
            <Contact name="Anup Kumar"
                     email="anup@gmail.com"
                     site="http://test.com"
                     center={center} />,
            container
        );
    });

    expect(container.querySelector("[data-testid='email']").getAttribute('href'))
    .toEqual("mailto:test@gmail.com");

    expect(container.querySelector("[data-testid='site']").getAttribute('href'))
    .toEqual("http://test.com");

    expect(container.querySelector("[data-testid='map']").textContent).toEqual("0:0");
});