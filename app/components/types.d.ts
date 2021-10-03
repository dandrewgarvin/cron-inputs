export interface Unit {
  id: string;
  name: string;
  type?: string;
  maxValue?: number;
  interval?: number;
}

// type Clock = {
//   Times:
//     | '01:00'
//     | '01:15'
//     | '01:30'
//     | '01:45'
//     | '02:00'
//     | '02:15'
//     | '02:30'
//     | '02:45'
//     | '03:00'
//     | '03:15'
//     | '03:30'
//     | '03:45'
//     | '04:00'
//     | '04:15'
//     | '04:30'
//     | '04:45'
//     | '05:00'
//     | '05:15'
//     | '05:30'
//     | '05:45'
//     | '06:00'
//     | '06:15'
//     | '06:30'
//     | '06:45'
//     | '07:00'
//     | '07:15'
//     | '07:30'
//     | '07:45'
//     | '08:00'
//     | '08:15'
//     | '08:30'
//     | '08:45'
//     | '09:00'
//     | '09:15'
//     | '09:30'
//     | '09:45'
//     | '10:00'
//     | '10:15'
//     | '10:30'
//     | '10:45'
//     | '11:00'
//     | '11:15'
//     | '11:30'
//     | '11:45'
//     | '12:00'
//     | '12:15'
//     | '12:30'
//     | '12:45';
//   Periods: 'AM' | 'PM';
// };

// export interface TimeUnit {
//   id: string;
//   name: string;
//   maxValue?:
// }

export interface InputOption {
  id: string;
  name: string;
  selectedName?: string;
  noValue?: boolean;
  units?: Array<Unit>;
}
