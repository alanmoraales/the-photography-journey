import { Button, Grid, Tooltip } from '@chakra-ui/react'
import useClipboard from 'react-use-clipboard'
import Flex from '@atoms/Flex'
import ShareButton from '@atoms/buttons/ShareButton'
import Heading from '@atoms/typography/Heading'
import Body from '@atoms/typography/Body'
import WhatsappIcon from '@atoms/icons/WhatsappIcon'
import mixpanelService from 'mixpanel'

interface IPrintHeader {
  title: string
  size: string
  url: string
  price: string
}

const PrintHeader = ({ title, size, url, price }: IPrintHeader) => {
  const [isCopied, setCopied] = useClipboard(url, {
    successDuration: 3000,
  })

  const onClickShare = () => {
    mixpanelService.trackUserClickedSharePrint({ printTitle: title })
    setCopied()
  }

  const onTrackClickOrder = () => {
    mixpanelService.trackUserClickedOrderPrint({ printTitle: title })
  }

  return (
    <Grid bg="glass" height="fit-content">
      <Grid maxWidth="70ch" gap={8} width="100%">
        <Grid gap={2} pt={8}>
          <Flex gap={4} alignItems="center" justifyContent="space-between">
            <Heading>{title}</Heading>
            <Tooltip label="Link copied!" isOpen={isCopied}>
              <span>
                <ShareButton onClick={onClickShare} />
              </span>
            </Tooltip>
          </Flex>
          <Flex gap={2}>
            <Body color="primary">Foto Impresa</Body>
            <Body color="opaque" weight="light">
              &bull;
            </Body>
            <Body color="opaque" weight="light">
              {size}
            </Body>
          </Flex>
        </Grid>
        <Button
          variant="solid"
          colorScheme="whatsapp"
          leftIcon={<WhatsappIcon />}
          as="a"
          href={`https://wa.me/9995627586?text=Hola%20me%20gustaría%20ordenar%20la%20foto%20${title}`}
          target="_blank"
          size="lg"
          onClick={onTrackClickOrder}
        >
          Ordenar por {price}
        </Button>
      </Grid>
    </Grid>
  )
}

export { PrintHeader }
