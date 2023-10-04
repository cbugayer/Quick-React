import overlaps from "./overlaps";

const checkOverlap = (course1, course2) => {
    return overlaps({
                term1: course1.term,
                days1: course1.days,
                hours1: course1.hours,
                term2: course2.term,
                days2: course2.days,
                hours2: course2.hours,
    });
};

export default checkOverlap;