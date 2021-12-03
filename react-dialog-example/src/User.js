import React from "react";

const data = {name: 'Ivan', age: 42}

const User = () => {
    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}

export default User;