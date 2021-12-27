import Avatar from '../components/Avatar'
import { urlForImage, parseDate } from '../lib/sanity/util'
import { FaTags } from 'react-icons/fa'

export default function PostHeader({ title, coverImage, date, author, tags }) {
  return (
    <header className="main-article-header">
      <h1 className="post-title">{title}</h1>
      <div className="post-meta">
        {coverImage && (
          <div className="post-image">
            <img src={urlForImage(coverImage).url()} />
          </div>
        )}
        <div className="post-author flex">
          {/* {author.picture && (
            <Avatar name={author.name} picture={author.picture} />
          )} */}
          <div className="post-author-wrap">
            <h4>{author.name}</h4>
            <div className="post-date flex jc-center">
              <time dateTime={date}>{parseDate(date)}</time>
            </div>
          </div>
        </div>
        {tags && (
          <div className="post-tags flex-wrap-center">
            <FaTags
              color="var(--font-color)"
              fontSize="1.25em"
              style={{ marginRight: '0.5rem' }}
            />
            {tags &&
              tags.map((tag, idx) => {
                return <h6 key={idx}>{tag.title}</h6>
              })}
          </div>
        )}
      </div>
    </header>
  )
}
