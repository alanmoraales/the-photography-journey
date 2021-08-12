import NextLink from 'next/link'
import { FC } from 'react'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

const Link: FC<ChakraLinkProps> = ({ children, href, ...restOfProps }) => {
  return (
    <NextLink href={href ? href : '#'} passHref>
      <ChakraLink {...restOfProps}>{children}</ChakraLink>
    </NextLink>
  )
}

export default Link
