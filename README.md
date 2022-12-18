# litepicker-react

This component is react wrapper for litepicker.



### Attributes

* **options** - litepicker options
* **...inputProps[]** - input props


### How to Use

Step 1.
```bash
npm i litepicker
npm i litepicker-react
```

Step 2.
```jsx
import { useMemo } from "react";
import LitePicker from "litepicker-react";

function App() {
  const options = useMemo(
    () => ({
      singleMode: false,
    }),
    []
  );

  return <LitePicker options={options} />;
}

export default App;

```