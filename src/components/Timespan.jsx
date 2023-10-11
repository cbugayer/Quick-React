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
    // console.log("days:", days);
    // console.log("times:", times);
    // console.log("checkDays:", checkDays(days));
    // console.log("checkTimes:", checkTimes(times));
    return checkDays(days) && checkTimes(times);
}

export default Timespan;