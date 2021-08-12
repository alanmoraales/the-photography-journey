import { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import Flex from '@atoms/Flex'
import Heading from '@atoms/typography/Heading'
import GoToButton from '@atoms/buttons/GoToButton'

interface ISection {
  title: string
  seeAllUrl?: string
  seeAllLabel?: string
}

const Section: FC<ISection> = ({
  title,
  seeAllUrl,
  seeAllLabel = 'See all',
  children,
}) => (
  <Grid as="section" gap={8} width="100%">
    <Heading variant="h6">{title}</Heading>
    {children}
    <Flex direction="row-reverse">
      <GoToButton href={seeAllUrl} label={seeAllLabel} />
    </Flex>
  </Grid>
)

export default Section
