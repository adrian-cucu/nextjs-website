import Link from 'next/link'
import { FaLinkedin, FaGithub, FaBitbucket } from 'react-icons/fa'
import { Icon, InlineIcon } from '@iconify/react/dist/icon'
import reactIcon from '@iconify/icons-logos/react'
import sanityIcon from '@iconify/icons-logos/sanity'
import nextjsIcon from '@iconify/icons-logos/nextjs-icon'
import Container from '../components/Container'

export default function Footer() {
  const SOCIAL_PAGES = [
    {
      label: 'LinkedIn',
      linkto: '//www.linkedin.com/in/adrian-c-987267167/',
      icon: <FaLinkedin />,
    },
    {
      label: 'Github',
      linkto: '//www.github.com/adrian-cucu',
      icon: <FaGithub />,
    },
    {
      label: 'BitBucket',
      linkto: '//bitbucket.org/AdrianCucu/',
      icon: <FaBitbucket />,
    },
  ]

  return (
    <div className="footer">
      <Container>
        <section className="tech-used flex justify-center">
          <Icon
            icon={nextjsIcon}
            className="tech-icon"
            width="2rem"
            height="2rem"
          />
          <Icon
            icon={sanityIcon}
            className="tech-icon"
            width="5rem"
            height="5rem"
          />
          <InlineIcon
            icon={reactIcon}
            className="tech-icon"
            width="2rem"
            height="2rem"
          />
        </section>
        <section className="social-media flex justify-center">
          <div className="social-media-wrap flex justify-center">
            {SOCIAL_PAGES &&
              SOCIAL_PAGES.map((elem, idx) => {
                return (
                  <Link passHref href={elem.linkto} key={idx}>
                    <a
                      className="social-icon-link"
                      target="_blank"
                      aria-label={elem.label}
                    >
                      {elem.icon}
                    </a>
                  </Link>
                )
              })}
          </div>
        </section>
        <section className="website-rights flex justify-center">
          <small>Copyright &copy; 2021</small>
        </section>
      </Container>
    </div>
  )
}
