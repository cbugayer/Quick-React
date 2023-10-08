import CourseEditor from '../CourseEditor';
import { BrowserRouter } from "react-router-dom";

import './Edit.css';


const Edit = ({id, course}) => (
    // console.log("course:", course),
    // console.log("id:", id),
    <BrowserRouter>
        <div className="edit">
            {CourseEditor(id, course)}
        </div>
    </BrowserRouter>
);

export default Edit;