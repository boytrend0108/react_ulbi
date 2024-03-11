import { useEffect, useRef } from "react";

export const useObserver = (
  ref: React.MutableRefObject<null | HTMLDivElement>,
  canLoad: boolean,
  isLoading: boolean,
  callback: Function,
) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = function (entries: { isIntersecting: any; }[]) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    };

    observer.current = new IntersectionObserver(cb);

    if (ref.current) {
      observer.current.observe(ref.current);
    }
  }, [isLoading])

}