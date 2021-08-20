import IconButton from '@atoms/buttons/IconButton'
import ShareIcon from '@atoms/icons/ShareIcon'

interface IShareButton {
  onClick?: () => void
}

const ShareButton = ({ onClick }: IShareButton) => (
  <IconButton
    ariaLabel="Share in social media"
    icon={ShareIcon}
    onClick={onClick}
  />
)

export default ShareButton
