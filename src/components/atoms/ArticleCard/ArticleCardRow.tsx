import { FC } from 'react'
import Flex from 'components/atoms/Flex'

const ArticleCardRow: FC = ({ children }) => (
  <Flex justifyContent="space-between" gap={6}>
    {children}
  </Flex>
)

export { ArticleCardRow }
