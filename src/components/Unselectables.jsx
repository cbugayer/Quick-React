import { useState } from 'react';
import checkOverlaps from '../utilities/checkOverlaps';
import courseDetails from '../utilities/courseDetails';
import checkOverlap from '../utilities/checkOverlap';

const Unselectables = ({courses, selected, toggleSelected}) => {
    const [unselectables, setUnselectables] = useState([]);
    const toggleUnselectables = (item) => setUnselectables(
        selected.includes(item)
        //selecting
        //want to add all courses that overlap with the course being selected
        ? unselectables.concat(checkOverlaps(courseDetails(item), courses))
        //unselecting 
        //want to remove all courses that overlap with the course being unselected
        : unselectables.filter((x, i) => 
            !checkOverlap(courseDetails(x), courseDetails(item)) &&
            i !== unselectables.indexOf(x))
    );
        unselectables = unselectables.concat(checkOverlaps(item, selected))

    );