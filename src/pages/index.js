import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Resume from '../assets/Resume_John_Senar_Public.pdf'

const HomeIndex = () => {
  const siteTitle = 'John Senar'
  const siteDescription = 'Portfolio Website'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Hi, I'm John Senar. I'm a software engineer passionate about solving challenging problems.
            </h2>
          </header>
          <p>
            I have been over 2 years of experience in full stack web development with tools such React, Ruby on Rails, and Python, to name a few. 
            I currently work as a software engineer at HP, working on the front-end for 
            HP Instant Ink, a quickly growing subscription service.
          </p>
        </section>

        <section id="two">
          <h2>Work Experience</h2>

          <article className="experience">
            <header>
              <h3>HP&nbsp;Inc</h3>
              <p>Software Engineer (2018 - Present)</p>
            </header>
            <ul>
              <li>Full Stack Web Developer for HP Instant Ink subscription service</li>
              <li>Develops with React and Ruby on Rails to create front-end and back-end components</li>
              <li>Implements for subscription pre-enrollment (landing pages and signup flows)</li>
            </ul>
          </article>

          <article className="experience">
            <header>
              <h3>WRKSHP</h3>
              <p>Server Engineer Intern (Summer 2017)</p>
            </header>
            <ul>
              <li>Fixed critical server bugs leading up to launch of Beat Fever in July 2017</li>
              <li>Back-end Ruby on Rails development for mobile massively multiplayer (MMO) games</li>
              <li>Built new features into Ruby on Rails customer support dashboard</li>
            </ul>
          </article>

          <a href={Resume} className="button small">
            View Full Resume
          </a>
        </section>

        <section id="two">
          <h2>Projects</h2>

          <Gallery />
        </section>

        <section id="three">
          <h2>Contact Info</h2>
          <div className="row">
            {/* <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div> */}
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  California
                  <br />
                  United States
                </li>
              </ul>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:JLSenar@gmail.com">JLSenar@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
