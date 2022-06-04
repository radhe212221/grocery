import React from 'react'
import {
    Box, Button, Flex, Heading, Image, Input, useDisclosure, Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'
export default function LoginPage() {
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()


    const handleForgetClick = () => {
        onOpen1()
    }

    const handleCreateOneClick = () => {
        onOpen2()
    }


    return (
        <>
            <Box>
                <Image src="/brand-image.png" />
                <Heading mt="-65" pl="5">Login</Heading>
                <Flex direction="column" gap="5" p="5">
                    <Input outline="0" borderWidth="0" borderBottomWidth={1} placeholder='Email' />
                    <Input outline="0" borderWidth="0" borderBottomWidth={1} placeholder='Password' />
                    <Box onClick={handleForgetClick} textAlign="right" color="green.600" fontSize="md">
                        Forgot password?
                    </Box>
                    <Button colorScheme="green">Login</Button>
                    <Flex alignItems="center">
                        <Box bg="grey" h="0.3px" w="45%"></Box>
                        <Box px="3">or</Box>
                        <Box bg="grey" h="0.3px" w="45%"></Box>
                    </Flex>
                    <Flex justifyContent="center" onClick={handleCreateOneClick}>
                        Don't have any account? <Box ml={2} color="green.600">Create One</Box>
                    </Flex>
                    <Flex justifyContent="center" gap="10">
                        <Box>google</Box>
                        <Box>facebook</Box>
                    </Flex>
                </Flex>
            </Box>
            <Drawer placement={"bottom"} onClose={onClose1} isOpen={isOpen1}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>Terms of Service</DrawerHeader>
                    <DrawerBody>
                        <Box>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tellus aliquam posuere malesuada placerat praesent penatibus ultricies. Sed luctus viverra tellus, nunc, ac sit nunc sociis suspendisse. Faucibus posuere gravida cursus viverra enim gravida tortor, nullam vitae. Eu laoreet posuere commodo molestie. Nulla suspendisse in purus et molestie dis. Eget ornare faucibus sed nulla faucibus arcu, tincidunt. Augue et vel cras sit ante praesent quisque tristique. Pellentesque hendrerit tortor erat nibh fermentum, non.
                            Aenean purus in diam ut diam, nam aliquet congue. In amet, rhoncus donec dictum. Pellentesque a fringilla congue nibh non at eros neque, eu. Senectus pretium sed amet nunc, id. Sed dolor velit suscipit nisl. Bibendum sodales et egestas vel. Elementum, neque tellus lorem neque orci quis sem lobortis quis. Sapien viverra posuere vehicula nisi. Dolor vitae vel ultricies tristique ac. Sed sodales mauris cras odio. Quis lectus viverra tellus in sit. Sed eget accumsan a ut arcu nisi, viverra. Ac morbi egestas enim sit accumsan. Aenean mattis sodales in sed enim. In nulla euismod maecenas egestas leo habitant egestas.
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Drawer placement={"bottom"} onClose={onClose2} isOpen={isOpen2}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>Privacy Policy</DrawerHeader>
                    <DrawerBody>
                        <Box>
                            Ac leo consectetur platea odio ultricies a nisl, in. Nunc odio arcu viverra sed. Vitae tempor pharetra turpis ullamcorper semper lectus nullam potenti. Fermentum aenean nibh vitae porta aliquam consectetur sed aliquet. Sit natoque magna tincidunt ipsum. Aliquet amet, nisi tortor aliquam id egestas tortor. Sem malesuada amet egestas dignissim. Duis aliquam dui eu vitae non sed et. Ultrices habitasse in a quisque.
                            Sit vitae aliquam iaculis fermentum, posuere nisl fames. Et viverra venenatis, non a pellentesque pretium. Vitae vulputate tortor in laoreet sed et sapien massa. Leo viverra sed ipsum elementum, lectus non. Eu commodo congue iaculis pretium. Natoque auctor ut ornare urna cum. Ipsum morbi amet sed phasellus blandit sodales arcu donec. Lacus, vestibulum diam iaculis porta fringilla.
                            Diam felis venenatis morbi sit praesent. Aliquam ut enim nibh pellentesque non. Volutpat integer cursus condimentum mauris integer ut arcu, tellus nibh. Mollis nibh commodo, tristique mi tincidunt. Vel duis nunc tincidunt magna id. Pellentesque aenean est sit enim nibh. Neque fringilla congue malesuada scelerisque cras diam. Lorem orci elit.
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
