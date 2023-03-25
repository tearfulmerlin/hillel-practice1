import { useState } from 'react'

export default function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue ?? 0); 

  const onChange = (event) => {
    setValue(+event.target.value);
  }

  return { value, onChange };
}
