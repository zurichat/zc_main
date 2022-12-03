import { useState } from "react";

function useForm({ form, options, endpointUrl }) {
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    if (form) {
      e.preventDefault();

      const data = Array.from(form.elements)
        .filter(input => input.name)
        .reduce(
          (obj, input) => Object.assign(obj, { [input.name]: input.value }),
          {}
        );

      fetch(endpointUrl, {
        ...options,
        body: JSON.stringify(data)
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          return res.json();
        })
        .then(data => {
          setMessage(data.message);
        })
        .catch(err => {
          setMessage(err.toString());
        });
    }
  };

  return {
    message,
    handleSubmit
  };
}

export default useForm;
