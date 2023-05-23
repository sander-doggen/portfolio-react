import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Loader } from 'react-loaders'
import {
  faHtml5,
  faJsSquare,
  faLinux,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faCamera, faVideoCamera } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>about me</h1>
          <p>
            Ever since I was a child, I had a passion for creating visually
            appealing things.
          </p>
          <p>
            {' '}
            One day, I challenged myself and thought, "Why not try my hand at
            photography and coding?"
          </p>
          <p>
            As I pursued my education in computer science, I began experimenting
            with the combination of web design, photography, and videography,
            and discovered a newfound creativity within myself.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faLinux} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCamera} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faVideoCamera} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default About
