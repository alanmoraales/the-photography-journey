import { FC } from 'react'
import Flex from 'components/atoms/Flex'

const ArticleCardRow: FC = ({ children }) => (
  <Flex justifyContent="space-between" gap="24px" alignItems="center">
    {children}
  </Flex>
)

export { ArticleCardRow }
