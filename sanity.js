import SanityClient  from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

const client = SanityClient({
    projectId: "b7pjd2xv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client