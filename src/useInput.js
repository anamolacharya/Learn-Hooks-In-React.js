import { useState } from "react";

import React from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
}
