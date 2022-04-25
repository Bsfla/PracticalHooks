import React from "react";
import useInput from "../hooks/useInput";

const Input = () => {
    const maxLen = (value: string): boolean => value.length <= 10;
    const name = useInput('', maxLen);
    

    return (
        <div>
           <h1>Hello:{name.value}</h1>
           <input placeholder="name" {...name} />
        </div>
    )
}

export default Input;