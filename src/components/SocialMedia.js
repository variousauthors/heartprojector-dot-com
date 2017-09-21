import React from 'react'
import { FaTwitter, FaEnvelope } from 'react-icons/lib/fa'

export class SocialMedia extends React.Component {
  render() {
    const style = {
      color: '#FFC1FE', 
      fontSize: '25px',
      padding: '5px'
    }

    return (
      <div id="externalicons">
        <a className="no-box-shadow" href="https://twitter.com/heart_projector" target="_blank">
          <FaTwitter color='#FFC1FE' size='25' />
        </a>
        &nbsp;
        <a href="mailto:info@heartprojector.com" target="_blank">
          <FaEnvelope color='#FFC1FE' size='25' />
        </a>
      </div>
    )
  }
}