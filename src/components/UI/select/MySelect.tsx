import { SelectOption } from "../../../types/select";

type Props = {
  options: SelectOption[];
  defaultValue: string;
  value: string;
  select: (v: any) => void;
};

export const MySelect: React.FC<Props> = (props) => {
  const { options, value, select, defaultValue } = props;

  return (
    <div className="select is-primary">
      <select
        onChange={event => select((event.target.value))}
        value={value}
      >
        <option
          disabled
          value=''
        >
          {defaultValue}
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