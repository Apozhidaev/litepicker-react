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
import type { ILPConfiguration } from "litepicker/dist/types/interfaces";

export type LitePickerInputElement = HTMLInputElement & {
  litePickerInstance?: Litepicker;
};

export type LitePickerOptions = Omit<ILPConfiguration, "element">;

type Props = InputHTMLAttributes<HTMLInputElement> & {
  options: LitePickerOptions;
};

const LitePickerWrapper = forwardRef(function LitePicker(
  props: Props,
  ref: React.ForwardedRef<LitePickerInputElement>
) {
  const inputRef = useRef<LitePickerInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!);
  const { options, ...inputProps } = props;

  useLayoutEffect(() => {
    const element = inputRef.current;
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
