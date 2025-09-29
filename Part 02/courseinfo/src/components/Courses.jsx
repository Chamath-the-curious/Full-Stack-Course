import Course from "./Course"

const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map(course =>
                <Course course={course} key={course.id}/>
            )}
        </div>
    )
}

export default Courses
