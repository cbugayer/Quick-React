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

// console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '10:00-11:00' })); // False
// console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '9:30-10:30' })); // True
// console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '9:00-10:00' })); // True
// console.log(hoursOverlap({ hours1: '9:00-10:00', hours2: '9:00-9:30' })); // True

const termsOverlap = ({term1, term2}) => (term1 === term2);

// console.log(termsOverlap({ term1: 'Fall', term2: 'Spring' })); // False
// console.log(termsOverlap({ term1: 'Fall', term2: 'Fall' })); // True
// console.log(termsOverlap({ term1: 'Spring', term2: 'Spring' })); // True
const checkDays = (days) => {
    const regex = /^[MTuWThF]+$/; // specify the allowed characters in the days string
    return days.includes('M') 
           || days.includes('Tu') 
           || days.includes('W') 
           || days.includes('Th') 
           || days.includes('F') 
           && regex.test(days);
}

const checkTimes = (times) => {
    const regex = /^[0-9:-]+$/; // specify the allowed characters in the times string
    const [start, end] = times.split('-');
    const [startHour, startMinute] = start.split(':');
    const [endHour, endMinute] = end.split(':');
    const startHourInt = parseInt(startHour);
    const startMinuteInt = parseInt(startMinute);
    const endHourInt = parseInt(endHour);
    const endMinuteInt = parseInt(endMinute);
    // console.log(startHourInt);
    // console.log(startMinuteInt);
    // console.log(endHourInt);
    // console.log(endMinuteInt);
    // console.log(regex.test(times));
    return regex.test(times) 
            && startHourInt >= 0 
            && startHourInt <= 23
            && startMinuteInt >= 0
            && startMinuteInt <= 59
            && endHourInt >= 0 
            && endHourInt <= 23
            && endMinuteInt >= 0
            && endMinuteInt <= 59
            && startHourInt <= endHourInt
            && startMinute.length === 2
            && endMinute.length === 2;
}

const Timespan = (meets) => {
    const [days, times] = meets.split(' ');
    // console.log("Days: ", checkDays(days));
    // console.log(checkTimes(times));
    return checkDays(days) && checkTimes(times);
}
 

console.log(Timespan('MWF 9:00-10:00')); // True
console.log(Timespan('TuTh 15:30-16:50')); // True