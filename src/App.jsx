function App() {

  const courses = [
    {name: 'Introduction to Programming', completed: true},
    {name: 'Data Structures', completed: false},
    {name: 'Algorithms', completed: true},
    {name: 'Web Development', completed: false},
    {name: 'Database Management', completed: true}
  ];
  
  return (
    <>
      <h1>Course Progress Tracker</h1>
      <ul>
        {courses.map((course, index) => 
          <li 
            key={index} 
            className={course.completed ? 'completed' : 'in-progress'}
          >
            {course.name}
          </li>
        )}
      </ul>
    </>
  )
}

export default App;
