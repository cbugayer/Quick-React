const courseDetails = (courseKey, courses) => {
    return courses.find(([key, value]) => key === courseKey)[1];
}

export default courseDetails;