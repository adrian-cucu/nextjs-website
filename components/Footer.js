import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

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
  ]

  return (
    <div className="footer">
      <div className="footer-container">
        <section className="social-media">
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
        </section>
        <small className="website-rights">Copyright &copy; 2021</small>
      </div>
    </div>
  )
}
