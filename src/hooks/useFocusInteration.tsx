import { KeyboardEvent, useEffect, useRef } from "react";

type HtmlElementRef = HTMLInputElement | HTMLDivElement;

export function useFocusInteractionByKey() {
  const ref = useRef<HtmlElementRef>(null);

  const handleActionByKey = (e: KeyboardEvent) => {
   console.log(e.key)
    if (e.key === 'Enter') {
      ref.current?.click();
    }
  };

  const handleOnFocus = () => {
    ref.current?.addEventListener('keydown', handleActionByKey);
  };

  const handleOnBlur = () => {
    ref.current?.removeEventListener('keydown', handleActionByKey);
  };

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener('focus', handleOnFocus);
      element.addEventListener('blur', handleOnBlur);
      element.tabIndex = 0;

      return () => {
        element.removeEventListener('focus', handleOnFocus);
        element.removeEventListener('blur', handleOnBlur);
      };
    }
  }, []);

  return ref;
}
