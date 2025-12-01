import { useState, useEffect } from 'react';
import "./default.css";
import "./Introductions.css";

function Introductions() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch(
          "https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1"
        );
        if (res.ok) {
          const data = await res.json();
          setStudents(data);
        } else {
          setError("Failed to fetch student data");
        }
      } catch (err) {
        setError("Error loading students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Student Introductions</h2>
      <br />
      <div id="content-container">
        {students.map((student, index) => (
          <div key={index} className="student-container">
            <h3 className="student-name">
              {student.name.first} {student.name.last}
            </h3>
            <p className="student-mascot">{student.mascot}</p>
            <p className="student-statement">{student.personalStatement}</p>
            <div className="class-container">
              {student.courses.map((course, idx) => (
                <div key={idx} className="student-class">
                  {course.dept}-{course.num} {course.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Introductions;