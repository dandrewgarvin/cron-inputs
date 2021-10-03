import { Unit, InputOption } from './types';

const genericUnits: Array<Unit> = [
  {
    id: '1',
    type: 'Minute',
    name: 'Minute',
    maxValue: 1440, // minutes in a day
    interval: 15,
  },
  {
    id: '2',
    name: 'Hour',
    maxValue: 24, // hours in day
  },
  {
    id: '3',
    name: 'Day',
    maxValue: 31, // days in month
  },
  {
    id: '4',
    name: 'Week',
    maxValue: 52, // weeks in year
  },
  {
    id: '5',
    name: 'Month',
    maxValue: 12, // months in year
  },
];

export const timeUnits = (() => {
  const monthDays = 31;
  let units: Array<Unit> = [];

  for (let i = 1; i <= monthDays; i++) {
    units.push({
      id: `${i}`,
      name: `${i}`,
      type: 'TimeUnit',
      maxValue: 1440,
      interval: 15,
    });
  }

  return units;
})();

export const intervals: Array<InputOption> = [
  {
    id: '1',
    name: 'Every N...',
    units: genericUnits,
  },
  {
    id: '2',
    name: 'Every day at...',
    selectedName: 'Mon-Sun...',
    noValue: true,
  },
  {
    id: '3',
    name: 'Week days at...',
    selectedName: 'Mon-Fri...',
    noValue: true,
  },
  {
    id: '4',
    name: 'Weekends at...',
    selectedName: 'Sat-Sun...',
    noValue: true,
  },
  {
    id: '5',
    name: 'On the Nth of the month...',
    units: timeUnits,
  },
  // {
  //   id: '6',
  //   name: 'Every Nth X-day...',
  // },
  // {
  //   id: '7',
  //   name: 'Last day of the month',
  // },
];
