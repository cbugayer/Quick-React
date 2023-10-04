import { useState } from 'react';
import checkOverlaps from '../utilities/checkOverlaps';
import courseDetails from '../utilities/courseDetails';
import checkOverlap from '../utilities/checkOverlap';
import CourseCards from './CourseCards';

const Unselectables = ({courses, selected, toggleSelected}) => {
    const [unselectables, setUnselectables] = useState([]);
    const toggleUnselectables = (item) => setUnselectables(
        // console.log(selected, item, selected.includes(item)),
        selected.includes(item)
        //unselecting 
        //want to remove all courses that overlap with the course being unselected
        ? unselectables.filter((x, i) =>
        !checkOverlap(courseDetails(x, courses), courseDetails(item, courses))
        || ((unselectables.indexOf(x) !== unselectables.lastIndexOf(x)) && (i !== unselectables.indexOf(x))))
        //selecting
        //want to add all courses that overlap with the course being selected
        : [...unselectables, ...(checkOverlaps(courseDetails(item, courses), courses)
            .map(([key, value]) => key))].filter(x => x !== item)
    );
    return (
        <CourseCards 
            courses={courses} 
            selected={selected} 
            unselectables={unselectables}
            toggleSelected={toggleSelected} 
            toggleUnselectables={toggleUnselectables}
        />
    );
}

export default Unselectables;