import React, { useState } from 'react';

const Toggle = props => {
    const [state, setState ] = useState(false);

    return(
        <button onClick={() => {
            setState(previousState => !previousState);
            props.onChange(!state);
        }}>
            {
                state === true ? 
                'Turn off' :
                'Turn on'
            }
        </button>
    );
}


export default Toggle;