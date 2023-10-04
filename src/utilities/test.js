const daysOverlap = ({days1, days2}) => {
    const getDays = (days) => {
        const allDays = ['M', 'Tu', 'W', 'Th', 'F'];
        return allDays.filter((day) => days.includes(day));
    }
    const daysArray1 = getDays(days1);
    const daysArray2 = getDays(days2);
    return daysArray1.some((day1) => daysArray2.includes(day1));
}
// console.log(daysOverlap({ days1: 'MWF', days2: 'TuTh' })); // False
// console.log(daysOverlap({ days1: 'Tu', days2: 'TuTh' })); // True
// console.log(daysOverlap({ days1: 'M', days2: 'TuTh' })); // False
// console.log(daysOverlap({ days1: 'M', days2: 'M' })); // True
// console.log(daysOverlap({ days1: 'M', days2: 'MWF' })); // True
// console.log(daysOverlap({ days1: 'M', days2: 'TuTh' })); // False

const beforeTime = (time1, time2) => {
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;

    return totalMinutes1 < totalMinutes2 ? 1 : 0;
};


const hoursOverlap = ({hours1, hours2}) => {
    const [start1, end1] = hours1.split('-');
    const [start2, end2] = hours2.split('-');
    return beforeTime(start1, end2) && beforeTime(start2, end1);
}

console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '10:00-11:00' })); // False
console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '9:30-10:30' })); // True
console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '9:00-10:00' })); // True
console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '9:00-9:30' })); // True