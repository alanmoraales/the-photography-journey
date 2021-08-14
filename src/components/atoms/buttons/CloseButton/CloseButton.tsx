import IconButton from '@atoms/buttons/IconButton'
import CloseIcon from '@atoms/icons/CloseIcon'

interface ICloseButton {
  onClick?: () => void
  ariaLabel?: string
}

const CloseButton = ({
  onClick,
  ariaLabel = 'Close navigation',
}: ICloseButton) => (
  <IconButton
    ariaLabel={ariaLabel}
    icon={CloseIcon}
    onClick={onClick}
    boxSize="15px"
  />
)

export default CloseButton
