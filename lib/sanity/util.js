import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity'
import { sanityConfig } from './config'
// import { parseISO, format } from 'date-fns'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max')

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig
)

export const parseDate = (dateString) => {
  return new Date(dateString).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

// export const parseDate = (dateString) => {
//   const date = parseISO(dateString)
//   return format(date, 'LLLL	d, yyyy')
// }
