import Hyphenated from 'react-hyphen'
import Image from 'next/image'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../data/portfolio'

const About = () => {
  const { name, role, company, description, resume, social, greetingEmoji, profilePic } =
    about
  const firstName = name ? name.split(' ')[0] : null
  const fadeInAnimationClassName =
    'animate__animated animate__fadeIn animate__delay-1s'

  return (
    <div className='about'>
      <div className='about__pseudo-padding about__pseudo-padding-top' />

      <div className='about__content'>
        {profilePic && (
          <div className={`about__image-wrapper ${fadeInAnimationClassName}`}>
            <Image
              src={profilePic}
              alt={name || 'Profile'}
              width={200}
              height={200}
              className='about__image'
            />
          </div>
        )}

        <div className='about__text'>
          {(firstName || role) && (
            <div>
              {firstName && (
                <h1 className='about__greeting animate__animated animate__fadeInUp'>
                  Hey, I&apos;m <span className='text--strong'>{firstName}</span>.
                  {greetingEmoji && <span> {greetingEmoji}</span>}
                </h1>
              )}

              {role && (
                <h1 className='about__role animate__animated animate__fadeInUp animate__delay-1s'>
                  I&apos;m a {role}
                  {company && (
                    <span>
                      {' '}
                      at <span className='text--strong'>{company}</span>
                    </span>
                  )}
                  .
                </h1>
              )}
            </div>
          )}

          {description && (
            <div className={fadeInAnimationClassName}>
              <div className='about__desc paragraph__list'>
                <Hyphenated>
                  {description.map((item, index) => (
                    <p key={`about-desc-${index}`}>{item}</p>
                  ))}
                  {/* fragments added to prevent react-hyphen error when description length < 2 */}
                  <></>
                  <></>
                </Hyphenated>
              </div>
            </div>
          )}

          {(resume || social) && (
            <div className={`about__contact center ${fadeInAnimationClassName}`}>
              {resume && (
                <a href={resume} target='_blank' rel='noreferrer'>
                  <span type='button' className='btn btn--outline'>
                    Resume
                  </span>
                </a>
              )}

              {social && (
                <>
                  {social.github && (
                    <a
                      href={social.github}
                      target='_blank'
                      rel='noreferrer'
                      aria-label='github'
                      className='link link--icon'
                    >
                      <GitHubIcon />
                    </a>
                  )}

                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target='_blank'
                      rel='noreferrer'
                      aria-label='linkedin'
                      className='link link--icon'
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='about__pseudo-padding' />
    </div>
  )
}

export default About
