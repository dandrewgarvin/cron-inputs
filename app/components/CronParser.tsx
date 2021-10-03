import { useEffect, useState } from 'react';
import CronInput from './CronInput';

import { Unit, InputOption } from './types';

import { intervals, timeUnits } from './data';

const CronParser = () => {
  const [interval, setInterval] = useState<InputOption | null>(null);
  const [units, setUnits] = useState<InputOption | null>(null);
  const [frequency, setFrequency] = useState<InputOption | null>(null);

  const generateUnits = (unit: Unit) => {
    const u = new Array((unit.maxValue || 1) / (unit.interval || 1));

    for (let i = 1; i <= u.length; i++) {
      let int = i * (unit.interval || 1);
      let name = int.toString();

      if (unit.type === 'Minute') {
        let hours = Math.floor(int / 60);
        let minutes = int % 60;

        if (!hours) {
          name = `${minutes} minutes`;
        } else {
          if (!minutes) {
            name = `${hours} hours`;
          } else {
            name = `${hours} hours ${minutes} minutes`;
          }
        }
      }

      if (unit.type === 'TimeUnit') {
        let hours = Math.floor(int / 60);
        let minutes = int % 60;
        let period = hours > 11 && hours < 24 ? 'PM' : 'AM';

        if (hours > 12) {
          hours = hours % 12;
        }

        if (!hours) {
          name = `12:${minutes || '00'} ${period}`;
        } else {
          if (!minutes) {
            name = `${hours}:00 ${period}`;
          } else {
            name = `${hours}:${minutes} ${period}`;
          }
        }
      }

      u[i - 1] = {
        id: i.toString(),
        name: name,
      };
    }

    return u;
  };

  return (
    <div className='CronParser'>
      <CronInput label='Interval' onChange={setInterval} options={intervals} />

      <CronInput
        label='Units'
        disabled={!interval}
        onChange={setUnits}
        options={
          interval?.noValue
            ? generateUnits({
                id: 'No Value Needed',
                type: 'TimeUnit',
                name: 'No Value Needed',
                maxValue: 1440,
                interval: 15,
              })
            : interval?.units ?? []
        }
      />

      <CronInput
        label='Frequency'
        disabled={!interval || !units || interval?.noValue}
        onChange={setFrequency}
        noValue={interval?.noValue}
        options={units ? generateUnits(units as Unit) : []}
      />
    </div>
  );
};

export default CronParser;
