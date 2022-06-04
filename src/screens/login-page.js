import React from 'react'
import { Box, Button, Flex, Heading, Image, Input } from '@chakra-ui/react'
export default function LoginPage() {
    return (
        <Box>
            <Image src="/brand-image.png" />
            <Heading mt="-65" pl="5">Login</Heading>
            <Flex direction="column" gap="5" p="5">
                <Input outline="0" borderWidth="0" borderBottomWidth={1} placeholder='Email' />
                <Input outline="0" borderWidth="0" borderBottomWidth={1} placeholder='Password' />
                <Box textAlign="right" color="green.600" fontSize="md">
                    Forgot password?
                </Box>
                <Button colorScheme="green">Login</Button>
                <Flex alignItems="center">
                    <Box bg="grey" h="0.3px" w="45%"></Box>
                    <Box px="3">or</Box>
                    <Box bg="grey" h="0.3px" w="45%"></Box>
                </Flex>
                <Flex justifyContent="center">
                    Don't have any account? <Box ml={2} color="green.600">Create One</Box>
                </Flex>
                <Flex justifyContent="center" gap="10">
                    <Box>google</Box>
                    <Box>facebook</Box>
                </Flex>
            </Flex>
        </Box>
    )
}
