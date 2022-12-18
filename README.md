# litepicker-react

This component is react wrapper for [litepicker](https://litepicker.com/).



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
import LitePicker, { LitePickerOptions } from "litepicker-react";

function App() {
  const options: LitePickerOptions = useMemo(
    () => ({
      singleMode: false,
      startDate: new Date(),
      endDate: new Date()
    }),
    []
  );

  return <LitePicker options={options} />;
}

export default App;

```