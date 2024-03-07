import { Filters } from "../types/filter";
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";
import '../styles/PostFilter.scss';

type Props = {
  filter: Filters;
  setFilter: (f: Filters) => void;
}

export const PostFilter: React.FC<Props> = ({filter, setFilter}) => {
  return (
    <div className="filter">
      <div className="filter__search">
        <MyInput
          type='text' placeholder='search...'
          onChange={query => setFilter({...filter, query})}
        />
      </div>

      <div className="filter__select">
        <MySelect
          defaultValue='Sort by'
          options={[
            { name: 'id', value: 'id' },
            { name: 'title', value: 'title' },
          ]}
          value={filter.sort}
          select={value => setFilter({...filter, sort: value})}
        />
      </div>
    </div>
  )
}