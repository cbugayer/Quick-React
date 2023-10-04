import overlaps from "./overlaps";

const checkOverlaps = (course, courses) => {
    return courses.filter((c) => overlaps({
        term1: course.term,
        days1: course.days,
        hours1: course.hours,
        term2: c.term,
        days2: c.days,
        hours2: c.hours,
    }));
};

export default checkOverlaps;