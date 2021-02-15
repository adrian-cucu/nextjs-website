import Avatar from '../components/Avatar'
import { urlForImage, parseDate } from '../sanity/util'

export default function PostHeader({ title, coverImage, date, author, tags }) {
  return (
    <header className="main-article-header">
      <h1 className="post-title">{title}</h1>
      <div className="post-image">
        <img src={urlForImage(coverImage).url()} />
      </div>
      <div className="post-author">
        <Avatar name={author.name} picture={author.picture} />
        <div className="post-author-wrap">
          <h4>{author.name}</h4>
          <div className="post-date">
            <time dateTime={date}>{parseDate(date)}</time>
          </div>
        </div>
      </div>
      {tags && (
        <div className="post-tags">
          {tags &&
            tags.map((t, i) => {
              return <h6>{t.title}</h6>
            })}
        </div>
      )}
    </header>
  )
}
