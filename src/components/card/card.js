import React, { useEffect } from 'react';

const Card = props => {

    useEffect(() => {
        const timeId = setTimeout(() => {
            props.onSelect(null);
        }, 5000);
        return () => {
            clearTimeout(timeId);
        }
    }, [props.onSelect]);


    return [1, 2, 3, 4].map(choice => (
        <button key={choice}
                data-testid={choice}
                onClick={() => props.onSelect(choice)}>
            {choice}
        </button>   
    ));
}

export default Card;