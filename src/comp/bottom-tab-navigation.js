import React, { useState } from 'react'
import { Flex, Box, Text, Stack } from '@chakra-ui/react'
import HomeIcon from '../icons/home-icon'
import SearchIcon from '../icons/search-icon'
import CartIcon from '../icons/cart-icon'
import CampaignsIcon from '../icons/campaigns-icon'
import ProfileIcon from '../icons/profile-icon'
export default function BottomTabNavigation() {
    const [selected, setSelected] = useState('Home')
    const handleClick = tabName => setSelected(tabName)
    return (
        <Box boxShadow="0 0 3px silver" pt={2} bg="white" pos="fixed" bottom="0" left="0" w="100%">
            <Flex justifyContent="space-around">
                <Stack onClick={() => handleClick('Home')} color={selected === "Home" ? "green" : "grey"} alignItems="center">
                    <HomeIcon active={selected === "Home"} />
                    <Text>Home</Text>
                </Stack>

                <Stack onClick={() => handleClick('Search')} color={selected === "Search" ? "green" : "grey"} alignItems="center">
                    <SearchIcon active={selected === "Search"} />
                    <Text>Search</Text>
                </Stack>
                <Stack onClick={() => handleClick('Cart')} color={selected === "Cart" ? "green" : "grey"} alignItems="center">
                    <CartIcon active={selected === "Cart"} />
                    <Text>Cart</Text>
                </Stack>
                <Stack onClick={() => handleClick('Campaigns')} color={selected === "Campaigns" ? "green" : "grey"} alignItems="center">
                    <CampaignsIcon active={selected === "Campaigns"} />
                    <Text>Campaigns</Text>
                </Stack>
                <Stack onClick={() => handleClick('Profile')} color={selected === "Profile" ? "green" : "grey"} alignItems="center">
                    <ProfileIcon active={selected === "Profile"} />
                    <Text>Profile</Text>
                </Stack>

            </Flex>
        </Box>
    )
}
