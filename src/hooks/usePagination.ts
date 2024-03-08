import { useMemo } from "react";

export const usePagination = (totalPage: number) => {
  const pages = useMemo(() => {
    const arr = [];

    for (let i = 1; i <= totalPage; i++) {
      arr.push(i)
    }

    return arr;
  }, [totalPage]);

  return pages;
};
