const termsOverlap = ({term1, term2}) => (term1 === term2);

const daysOverlap = ({days1, days2}) => {
    const getDays = (days) => {
        const allDays = ['M', 'Tu', 'W', 'Th', 'F'];
        return allDays.filter((day) => days.includes(day));
    }
    const daysArray1 = getDays(days1);
    const daysArray2 = getDays(days2);
    return daysArray1.some((day1) => daysArray2.includes(day1));
}


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

const overlaps = ({term1, days1, hours1, term2, days2, hours2}) => {
    return termsOverlap({term1, term2}) && 
            daysOverlap({days1, days2}) && 
            hoursOverlap({hours1, hours2});
}

export default overlaps;