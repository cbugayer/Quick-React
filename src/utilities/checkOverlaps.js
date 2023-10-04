import overlaps from "./overlaps";

const checkOverlaps = (course, courses) => {
    return courses.filter((c) => overlaps({
        term1: course.term,
        days1: course.meets.split(' ')[0],
        hours1: course.meets.split(' ')[1],
        term2: c[1].term,
        days2: c[1].meets.split(' ')[0],
        hours2: c[1].meets.split(' ')[1],
    }));
};

export default checkOverlaps;