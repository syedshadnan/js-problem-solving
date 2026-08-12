// 🔴 Problem 5 ⭐ Daily Challenge — Course Analyzer

const analyzeCourses = courses => {

    // validation starts
    if (!Array.isArray(courses)){
        return 'Invalid'
    }
    if (courses.some(course => Array.isArray(course) || typeof course !== 'object' || course === null || !Number.isFinite(course.id) || typeof course.title !== 'string' || course.title.trim().length === 0 || !Number.isFinite(course.enrolled) || typeof course.active !== 'boolean')){
        return 'Invalid'
    }
    // validation ends

    const activeCourses = courses.filter(course => course.active).map(course => course.title);
    const totalEnrollment = courses.reduce((accumulator,currentValue)=> accumulator + currentValue.enrolled, 0);
    const hasInactiveCourse = courses.some(course => !course.active);
    const allCoursesHaveStudents = courses.every(course => course.enrolled > 0);

    let mostPopularCourse;
    let mostEnrolled = 0
    courses.forEach(course => {
        if (course.enrolled > mostEnrolled){
            mostEnrolled = course.enrolled
            mostPopularCourse = course.title
        }
    })
   
    return {
        activeCourses,
        totalEnrollment,
        hasInactiveCourse,
        allCoursesHaveStudents,
        mostPopularCourse
    }
}


console.log(analyzeCourses(
    [
  {
    id: 1,
    title: "JavaScript",
    enrolled: 500,
    active: true
  },
  {
    id: 2,
    title: "React",
    enrolled: 80,
    active: false
  },
  {
    id: 3,
    title: "Node.js",
    enrolled: 150,
    active: true
  }
]
))

