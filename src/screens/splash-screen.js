import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export default function SpashScreen() {
  return (
    <Flex
      color="#534F70"
      bg="white" h="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Box shadow="lg" p="2" py="5" mb="10" borderRadius="20px">
          <Image ml="10" src="/logo.svg" />
        </Box>
        <Box
          fontWeight={700}
          fontSize="24px"
          lineHeight="28px"

        >Carrot</Box>
        <Box
          fontSize="14px"
          lineHeight="16px"
        >Your Grocery Market</Box>
      </Box>
    </Flex>
  )
}
