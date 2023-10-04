const courseDetails = (courseKey, courses) => {
    courses.find(([key, value]) => key === courseKey)[1]
}

export default courseDetails;