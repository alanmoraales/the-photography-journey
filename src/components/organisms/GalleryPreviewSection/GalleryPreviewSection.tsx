import Section from 'components/templates/Section'
import JustifiedGallery from 'components/organisms/JustifiedGallery'
import { GetComponentProps } from 'shared/types/common'

interface IGalleryPreviewSection
  extends GetComponentProps<typeof JustifiedGallery> {}

const GalleryPreviewSection = (props: IGalleryPreviewSection) => (
  <Section title="Gallery">
    <JustifiedGallery {...props} />
  </Section>
)

export default GalleryPreviewSection
