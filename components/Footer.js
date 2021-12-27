import Link from 'next/link'
import { FaLinkedin, FaGithub, FaBitbucket } from 'react-icons/fa'
import { InlineIcon } from '@iconify/react/dist/icon'
import reactIcon from '@iconify/icons-logos/react'
import sanityIcon from '@iconify/icons-logos/sanity'
import nextjsIcon from '@iconify/icons-logos/nextjs-icon'
import Container from '../components/Container'

export default function Footer() {
  const SOCIAL_PAGES = [
    {
      label: 'LinkedIn',
      linkto: 'https://www.linkedin.com/in/adrian-c-987267167',
      icon: <FaLinkedin />,
    },
    {
      label: 'Github',
      linkto: 'https://www.github.com/adrian-cucu',
      icon: <FaGithub />,
    },
    {
      label: 'BitBucket',
      linkto: 'https://www.bitbucket.org/AdrianCucu',
      icon: <FaBitbucket />,
    },
  ]

  return (
    <div className="footer">
      <Container>
        <section className="tech-used flex-wrap-center jc-center">
          <InlineIcon icon={nextjsIcon} className="tech-icon" align="center" />
          <InlineIcon icon={sanityIcon} className="tech-icon" align="center" />
          <InlineIcon icon={reactIcon} className="tech-icon" align="center" />
        </section>
        <section className="social-media flex-center">
          <div className="social-media-wrap flex-wrap-center jc-center">
            {SOCIAL_PAGES &&
              SOCIAL_PAGES.map((elem, idx) => {
                return (
                  <Link passHref href={elem.linkto} key={idx}>
                    <a
                      className="social-icon-link flex-center"
                      target="_blank"
                      aria-label={elem.label}
                      rel="noopener noreferrer"
                      passhref={true}
                    >
                      {elem.icon}
                    </a>
                  </Link>
                )
              })}
          </div>
        </section>
        <section className="website-rights flex-center">
          <small>Copyright &copy; 2021</small>
        </section>
      </Container>
    </div>
  )
}
