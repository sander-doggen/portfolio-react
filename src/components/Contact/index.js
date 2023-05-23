import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './index.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_11gcway',
        'template_pa6cplh',
        form.current,
        'asLN3C28nwZKb3uue'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
            I am currently available for freelance opportunities in web
            development, photography/videography, digital marketing, and social
            media marketing. If you have any IT/Marketing needs or require
            assistance in any of these areas, please don't hesitate to contact
            me. I would be more than happy to discuss how I can help you achieve
            your goals.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="map-wrap">
          <MapContainer
            center={[50.890103289504026, 4.7836809301601795]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[50.890103289504026, 4.7836809301601795]}>
              <Popup>Gelieve eerst te mailen alvorens langs te komen :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Contact
