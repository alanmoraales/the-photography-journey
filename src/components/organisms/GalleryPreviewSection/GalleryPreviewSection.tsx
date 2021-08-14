import Section from '@templates/Section'
import JustifiedGallery from '@organisms/JustifiedGallery'
import { GetComponentProps } from 'utils/common'
import routes from '@constants/routes'

const { gallery } = routes
interface IGalleryPreviewSection
  extends GetComponentProps<typeof JustifiedGallery> {}

const GalleryPreviewSection = (props: IGalleryPreviewSection) => (
  <Section title="Gallery" seeAllUrl={gallery}>
    <JustifiedGallery {...props} />
  </Section>
)

export default GalleryPreviewSection
