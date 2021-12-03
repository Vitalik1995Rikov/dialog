import React from "react";

const data = {name: 'Ivan', age: 42};
const REACT_VERSION = React.version;

const User = () => {
    return (
        <>
            <div>
                {REACT_VERSION}
            </div>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </>
        
    )
}

export default User;