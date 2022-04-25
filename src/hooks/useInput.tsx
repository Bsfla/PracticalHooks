import React, { useState } from "react";

const useInput = (initialvalue: string, validator: (value: string) => boolean) => {
    const [value, setValue] = useState('');

    const onChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
        console.log(e.target.value);
       const { value } = e.target;
       let willUpdate = true;
       if (typeof validator === 'function') {
          willUpdate = validator(value);
       }
       if (willUpdate) {
           setValue(value);
       }
    }
    
    return { value, onChange }
}

export default useInput;