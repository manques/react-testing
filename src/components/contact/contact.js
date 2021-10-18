import React from 'react';
import Map from './map';

const Contact = props => {
    return (
        <div>
            <address>
                Contact {props.name} via{" "}
                <a data-testid="email" herf={`mailto: ${props.email}`}>
                    email
                </a>
                or on their
                <a data-testid="site" href={props.site}>
                    site
                </a>.
            </address>
            <Map center={props.center} />
        </div>
    );
}

export default Contact;