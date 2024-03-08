import classNames from "classnames";
import { usePagination } from "../../../hooks/usePagination";
import cl from './MyPagination.module.scss';

type Props = {
  totalPage: number;
  page: number;
  changePage: (v:number) => void;
}

export const MyPagination: React.FC<Props>= ({totalPage, page, changePage}) => {
  const pagesArray = usePagination(totalPage);

  return (
    <div className={cl.MyPagination}>
    {pagesArray.map(p => (
        <span
          key={p}
          className={classNames(cl.MyPagination__btn, {
            [cl.MyPagination__btn__current]: p === page,
          })}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
    ))}
  </div>
  );
};
