import "./default.css";
import griffinJpg from './assets/griffinl-img.jpg';

function Introduction() {
  return (
    <>
      <h2>Griffin Leventhal's Introduction</h2>

      <figure>
        <img
          src={griffinJpg}
          alt="A picture of me sitting down at the top of a ramp at a skatepark."
        />
        <figcaption>Me at the skatepark!</figcaption>
      </figure>

      <p>
        Hey, my name is Griffin Leventhal and I am a senior studying computer
        science with a concentration in software engineering!
      </p>
      <ul>
        <li>
          <p>
            <strong>Personal Background:</strong>I’m from Raleigh, but moved
            here for college and am enjoying it so far! My hobbies include
            playing fighting games, reading, and skateboarding as of recently.
          </p>
        </li>
        <li>
          <p>
            <strong>Professional Background:</strong>I have no industry
            experience, but have worked on quite a few personal projects
            available on my Github, as well as some time at McDonalds and Food
            Lion!
          </p>
        </li>
        <li>
          <p>
            <strong>Academic Background:</strong>I’m currently a senior majoring
            in Computer Science with a concentration in software engineering. I
            started my degree at Wake Technical Community College, and
            transferred for my junior year.
          </p>
        </li>
        <li>
          <p>
            <strong>Primary Computer:</strong> Asus Zephyrus g14 2020 laptop
            running Linux. I primarily work in the library.
          </p>
        </li>
        <li>
          <p>
            <strong>Courses I'm taking and Why:</strong>
          </p>
          <ul>
            <li>
              <p>
                <strong>ITIS-3155: Front End Web App Development - </strong>I’ve
                worked with web development a bit already and wanted to refine
                my weak spots.
              </p>
            </li>
            <li>
              <p>
                <strong>ITCS 3166: Intro to Computer Networks - </strong>I’ve
                worked a bit with networking, but it’s difficult and I wanted to
                explore it further with guidance.
              </p>
            </li>
            <li>
              <p>
                <strong>ITIS-3310: Software Architecture and Design - </strong>
                This class seemed like it’d help me improve significantly.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  ITSC-3146: Intro to Operating Systems and Networking -
                </strong>
                I’ve been wanting to explore lower-level programming, and this
                class seemed like a great way to do so.
              </p>
            </li>
            <li>
              <p>
                <strong>ITSC-3155: Software Engineering - </strong>My future
                career path is (hopefully) software engineering, so this class
                seemed necessary.
              </p>
            </li>
          </ul>
        </li>
      </ul>

      <p id="quote">
        "You can fail at doing something you don't want, so you might as well
        take a chance at what you love" - Jim Carrey
      </p>
    </>
  );
}

export default Introduction;
