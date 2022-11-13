import { useState } from "react";

const useInput = initialState => {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const bind = {
    value,
    onchange: e => {
      setValue(e.target.value);
    }
  };

  return [value, bind, reset];
};

export default useInput;
