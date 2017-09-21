import React from 'react'

export class MailChimp extends React.Component {
  render() {
    return (
      <div id="mailchimp">
        <div id="mc_embed_signup">
          <form 
            action="//heartprojector.us13.list-manage.com/subscribe/post?u=8c7fe2733aad6eb2fde4f37a4&amp;id=7e8259f5d2" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className="validate no-margin no-box-shadow" 
            target="_blank" 
            noValidate="" >

            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL"></label>
              <input value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required="" type="email" />
              &nbsp;

                { /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input name="b_8c7fe2733aad6eb2fde4f37a4_7e8259f5d2" tabIndex="-1" value="" type="text" />
              </div>

              <div className="clear">
                <input value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}