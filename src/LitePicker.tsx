import React, {
  memo,
  useRef,
  forwardRef,
  useLayoutEffect,
  useImperativeHandle,
  InputHTMLAttributes,
} from "react";
import Litepicker from "litepicker";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  options: any;
};

const LitePicker = forwardRef(function LitePicker(props: Props, ref) {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current);
  const { options, ...rest } = props;

  useLayoutEffect(() => {
    const element: any = inputRef.current;
    if (element) {
      if (element.litePickerInstance) {
        element.litePickerInstance.destroy();
      }
      element.value = "";
      element.litePickerInstance = new Litepicker({
        ...props.options,
        element,
      });
    }
  }, [options]);

  return <input ref={inputRef} type="text" {...rest} />;
});

export default memo(LitePicker);
