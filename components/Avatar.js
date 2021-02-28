import { urlForImage } from '../lib/sanity/util'

export default function Avatar({ name, picture }) {
  return (
    <>

      <div className="author-avatar">
        <img
          src={urlForImage(picture).height(96).width(96).fit('crop').url()}
          alt={name}
        />
      </div>
    </>
  )
}
