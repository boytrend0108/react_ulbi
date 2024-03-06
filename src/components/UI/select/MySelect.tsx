import { Post } from "../../../types/post";
import { SelectOption } from "../../../types/select";

type Props = {
  options: SelectOption[];
  defaultValue: string;
  value: string;
  select: (v: keyof Post) => void;
};

export const MySelect: React.FC<Props> = (props) => {
  const { options, value, select } = props;

  return (
    <div className="select is-primary">
      <select
        onChange={event => select((event.target.value) as keyof Post)}
        value={value}
      >
        <option
          disabled
          value=''
        >
          Sort by
        </option>

        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}