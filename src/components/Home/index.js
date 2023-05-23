import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './logo'
import { Loader } from 'react-loaders'
import './index.scss'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={LogoTitle} alt="developper" />
            ander
            <br />
            web developper
          </h1>
          <h2>
            Frontend Developer / Security-tester / Photography / Videography
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
