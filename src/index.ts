import {
  memo,
  useRef,
  forwardRef,
  useLayoutEffect,
  useImperativeHandle,
  InputHTMLAttributes,
  createElement,
} from "react";
import Litepicker from "litepicker";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  options: any;
};

const LitePickerWrapper = forwardRef(function LitePicker(props: Props, ref) {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current);
  const { options, ...inputProps } = props;

  useLayoutEffect(() => {
    const element: any = inputRef.current;
    if (element) {
      if (element.litePickerInstance) {
        element.litePickerInstance.destroy();
        if (!props.value) {
          element.value = "";
        }
      }
      element.litePickerInstance = new Litepicker({
        ...props.options,
        element,
      });
    }
  }, [options]);

  return createElement("input", {
    ...inputProps,
    ref: inputRef,
    type: "text",
  });
});

export default memo(LitePickerWrapper);
