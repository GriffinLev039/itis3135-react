import { useState, useEffect } from "react";
import "./default.css";
import "./Introductions.css";

function Introductions() {
  const [displayName, toggleName] = useState(true);
  const [displayMascot, toggleMascot] = useState(true);
  const [displayImage, toggleImage] = useState(true);
  const [displayPersonal, togglePersonal] = useState(true);
  const [displayBackground, toggleBackground] = useState(true);
  const [displayClasses, toggleClasses] = useState(true);
  const [displayExtra, toggleExtra] = useState(true);
  const [displayQuote, toggleQuote] = useState(true);
  const [displayLinks, toggleLinks] = useState(true);
  const [searchValue, setSearchValue] = useState("");
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
      <div id="settings-container">
        <p>
          <label htmlFor="searchbar">Search by prefix:</label>
          <input type="text" name="searchbar" id="searchbar" placeholder="e.g.) gleventh" onChange={e => setSearchValue(e.target.value)} />
        </p>
        <p>
          <input
            type="checkbox"
            id="name-toggle"
            onChange={() => toggleName(!displayName)}
            checked={displayName}
          />
          <label htmlFor="name-toggle">Name</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="mascot-toggle"
            onChange={() => toggleMascot(!displayMascot)}
            checked={displayMascot}
          />
          <label htmlFor="mascot-toggle">Mascot</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="image-toggle"
            onChange={() => toggleImage(!displayImage)}
            checked={displayImage}
          />
          <label htmlFor="image-toggle">Image</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="personal-toggle"
            onChange={() => togglePersonal(!displayPersonal)}
            checked={displayPersonal}
          />
          <label htmlFor="personal-toggle">Personal Statements</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="background-toggle"
            onChange={() => toggleBackground(!displayBackground)}
            checked={displayBackground}
          />
          <label htmlFor="background-toggle">Backgrounds</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="classes-toggle"
            onChange={() => toggleClasses(!displayClasses)}
            checked={displayClasses}
          />
          <label htmlFor="classes-toggle">Classes</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="extra-toggle"
            onChange={() => toggleExtra(!displayExtra)}
            checked={displayExtra}
          />
          <label htmlFor="extra-toggle">Extra Information</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="quote-toggle"
            onChange={() => toggleQuote(!displayQuote)}
            checked={displayQuote}
          />
          <label htmlFor="quote-toggle">Quote</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="links-toggle"
            onChange={() => toggleLinks(!displayLinks)}
            checked={displayLinks}
          />
          <label htmlFor="links-toggle">Links</label>
        </p>
      </div>
      <div id="content-container">
        {students
          .filter(
            (student) =>
              searchValue === "" || student?.prefix?.includes(searchValue)
          )
          .map((student, index) => (
            <div key={index} className="student-container">
              <h3 className="student-name" hidden={!displayName}>
                {student?.name?.first} {student?.name?.last}
              </h3>
              <figure hidden={!displayImage || !student?.media?.hasImage}>
                <img
                  src={`dvonb.xyz${student?.media?.src}`}
                  alt="Image Not Loading."
                  className="student-image"
                  hidden={!displayImage || !student?.media?.hasImage}
                />
                <figcaption>{student?.media?.caption}</figcaption>
              </figure>

              <p className="student-mascot" hidden={!displayMascot}>
                {student?.mascot}
              </p>
              <p className="student-statement" hidden={!displayPersonal}>
                {student?.personalStatement}
              </p>
              <p className="student-background" hidden={!displayBackground}>
                {student?.backgrounds.personal}
                <br />
                {student?.backgrounds.professional}
                <br />
                {student?.backgrounds.academic}
                <br />
                {student?.backgrounds.subject}
              </p>

              <div className="class-container" hidden={!displayClasses}>
                {student?.courses?.map((course, idx) => (
                  <div key={idx} className="student-class">
                    {course?.dept}-{course?.num} {course?.name}
                  </div>
                ))}
              </div>
              <p className="student-extra" hidden={!displayExtra}>
                Fun Fact: {student?.funFact}
                <br />{" "}
                {student?.additional != ""
                  ? `Additional Fact: ${student?.additional}`
                  : ""}{" "}
                Device: {student?.platform.device} {student?.platform.os}
              </p>
              <p className="student-quote" hidden={!displayQuote}>
                {student?.quote?.text} - {student?.quote?.author}
              </p>
              <p className="student-links" hidden={!displayLinks}>
                {student?.links.charlotte} <br />
                {student?.links.github} <br />
                {student?.links.githubio} <br />
                {student?.links.itis3135} <br />
                {student?.links.freecodecamp} <br />
                {student?.links.codecademy} <br />
                {student?.links.linkedin} <br />
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Introductions;
