import { useEffect, useRef, useState } from 'react';

import { InputOption } from './types';

import DropdownList from './DropdownList';

interface Props {
  label: string;
  disabled?: boolean;
  noValue?: boolean;
  onChange(option: InputOption | null): void;
  options: Array<InputOption>;
}

const CronInput = ({ label, disabled, noValue, onChange, options }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [id] = useState((Math.random() + 1).toString(36).substring(4));
  const [value, setValue] = useState<InputOption | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onChange(value);
  }, [value]);

  useEffect(() => {
    if (!options || disabled) {
      setValue(null);
      setOpen(false);
    }
  }, [options, disabled]);

  return (
    <div className='CronInput' ref={inputRef}>
      <label htmlFor={id}>{label}</label>
      {noValue ? (
        <p id={id}>at</p>
      ) : (
        <input
          id={id}
          disabled={disabled}
          defaultValue={value?.selectedName || value?.name}
          onFocus={() => setOpen(true)}
          onBlur={evnt => {
            if (!inputRef?.current?.contains(evnt.relatedTarget)) {
              setOpen(false);
            }
          }}
        />
      )}

      {open && (
        <DropdownList
          options={options}
          onSelect={option => {
            setValue(option);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default CronInput;
