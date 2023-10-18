import CourseCard from '../course-card/CourseCard'
import './CoursesGrid.scss'
import courseData from './temp-data'

function CoursesGrid() {

    return (
        <div className='courses-grid'>
            {courseData.map((course, index:number) => 
                <CourseCard size='large' key={index} {...course}/>
            )}
        </div>
    )
}

export default CoursesGrid