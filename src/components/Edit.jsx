import CourseEditor from '../CourseEditor';
import { BrowserRouter } from "react-router-dom";

import './Edit.css';


const Edit = ({id, course}) => (
    // console.log("course:", course),
    // console.log("id:", id),
    <BrowserRouter>
        < CourseEditor id={id} course={course} />
    </BrowserRouter>
);

export default Edit;