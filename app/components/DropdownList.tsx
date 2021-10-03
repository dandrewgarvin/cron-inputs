import { useCallback } from 'react';
import { InputOption } from './types';

interface Props {
  options: Array<InputOption>;
  onSelect(option: InputOption | null): void;
}

const DropdownList = ({ options, onSelect }: Props) => {
  const handleKeyDown = useCallback((evnt, option) => {
    if (evnt.key === 'Enter' || evnt.key === ' ') {
      onSelect(option);
    }
  }, []);

  return (
    <div className='DropdownList' tabIndex={0}>
      <ul>
        <li
          onClick={() => onSelect(null)}
          onKeyDown={evnt => handleKeyDown(evnt, null)}
          tabIndex={0}
        >
          None
        </li>
        {options.map(option => (
          <li
            key={option.id}
            onClick={() => onSelect(option)}
            onKeyDown={evnt => handleKeyDown(evnt, option)}
            tabIndex={0}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
