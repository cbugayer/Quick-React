import overlaps from "./overlaps";

const checkOverlap = (course1, course2) => {
    return overlaps({
                term1: course1.term,
                days1: course1.meets.split(' ')[0],
                hours1: course1.meets.split(' ')[1],
                term2: course2.term,
                days2: course2.meets.split(' ')[0],
                hours2: course2.meets.split(' ')[1],
    });
};

export default checkOverlap;