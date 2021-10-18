import React, { useState, useEffect } from 'react';

const User = props => {
    const [user, setUser ] = useState(null);

    const fetchUserData = async id => {
        const response = await fetch('/', id);
        setUser(await response.json());
    }

    useEffect(() => {
        fetchUserData(id);
    }, [props.id]);

    if(!user){
        return "loading ...";
    }

    return (
        <details>
            <summary>
                {user.name}
            </summary>
            <strong>
                {user.age}
            </strong> year old
            <br/>
            live in {user.address}
        </details>
    );
}

export default User;