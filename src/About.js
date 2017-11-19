import React from 'react'

class About extends React.Component {

  render() {
    return (
      <div style={{paddingTop:"20px", textAlign:"justify"}}>
        <p className="profile-description-text">
          Hi! I'm Yamini, an NYC based web developer and software engineer. I am a graduate of Flatiron School's Web Development Immersive Program and hold a B.A. in International Relations from Emory University.
          <br/><br/>
          Prior to starting my career in web development, I would endlessly have fantastic ideas for small apps. None of which would come into fruition ... My ideas would stop at the wireframe stage.
          Learning Ruby on Rails, JavaScript, React, and Redux has empowered me to ideate and create fully. On my technical projects page, you find some of the projects that I created in my time at Flatiron.
          <br/><br/>
          I am presently working on the website and search engine for AccessUN. AccessUN aims to be a single source solution and access point for individuals and organizations interested in, well, accessing, the UN.
          You can find more information about us <a href="https://www.linkedin.com/company/18252337/">here</a>.
          AccessUN is on track to be launched by February 2018!
          <br/><br/>
          Please feel free to contact me, connect with me on LinkedIn, and check out my blog!
          <br/><br/>
          This website was built using JavaScript, React, and Bootstrap. You can find the code for it <a href="https://github.com/ykumawat/personal-website">here</a>.
        </p>
      </div>
    )
  }
}

export default About
