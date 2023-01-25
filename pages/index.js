"use client"
import { Flex, Spacer, Box, Heading, Text } from '@chakra-ui/react'
import { Grid, GridItem, SimpleGrid, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const Home = () => {
  return (<>
    {/* <SimpleGrid columns={2} spacing={1} >
      <Box bg='teal' height='20vh' w="150vh" p="10" textAlign="center" fontSize="50px" fontFamily="sans-serif" color="white">
        Simple pricing For Your business
      </Box>
    </SimpleGrid>
    <SimpleGrid >
      <Box bg='teal' height='25vh' w="150vh" color="white" fontSize="20px" textAlign="center" > Plans that are carefully created to suit your Business</Box>
    </SimpleGrid>
    <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  // gap={1}
 top="190px"
  left="90px"
   z-index="-1"
    position="absolute" >
  <GridItem colSpan={0}   bg="gray" w="45vh" h="40vh" > 
  <Box textAlign="center"  color="black" fontSize="20px" m="5"  fontFamily="sans-serif">Premium Pro
          <Heading fontSize="70px" fontFamily="initial">$329</Heading>
          <Heading fontSize="18px">Billed just Once</Heading> <br />
          <Button colorScheme='teal' variant='solid' w="30vh" h="7vh">Get Started</Button>
        </Box> </GridItem>
  <GridItem colSpan={0} bg='white' w="75vh" h="40vh">
    <Box m="8" fontSize="20px" >Access this feature when you get this pricing packages for your business</Box>
  <UnorderedList  left="10px"spacing={2} fontSize="16px" listStyleType="none" >
  <ListItem><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   International calling and messaging API</ListItem>
  <ListItem><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   Additional  Phone numbers</ListItem>
  <ListItem><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   Automatic messages via zaiper</ListItem>
  <ListItem><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   24/7 support and consulting</ListItem>
</UnorderedList>
  </GridItem>
</Grid>
    <SimpleGrid bg="teal" height='40vh' w="150vh"></SimpleGrid> */}
    <Grid m="5"bg="blackAlpha.100" w="80vh" shadow="5px 10px 10px" 
    borderRadius="20px" h="60vh"><Text
      bg="blackAlpha.600"
      bgClip='text'
      fontSize='8xl'
      fontWeight='extrabold'
      fontFamily="Serif"  m="3">
      Simple pricing for your business
    </Text>
      <Text
        bg="blackAlpha.600"
        bgClip='text'
        fontSize='50px'
        fontWeight='extrabold'
        fontFamily="Serif"
        left="10px"
       >
        Plans that are carefully created<br/> to suit your Business
      </Text></Grid>
      <SimpleGrid columns="3"m="5" row="3" bg="teal.600" w="80vh"shadow="5px 10px 10px" h="100vh" top="100vh" borderRadius="10px">
        <Flex bg="white" w="10vh" m="2" h="10vh" borderRadius={"50px"}  shadow="5px 10px 10px"></Flex>
        <Tabs variant='enclosed'>
  <TabList outline="black">
    <Tab  fontWeight="bold" shadow="5px 10px 10px"fontSize="40px"color="black"top="10px">Premium </Tab>
    <Tab  fontWeight="bold" shadow="5px 10px 10px"fontSize="40px"color="black">Points</Tab>
  </TabList>
  <TabPanels>
    <TabPanel >
    <Box z-index="1"
      top="80vh"
      left="30px"
      // border="2px solid black"
      shadow="5px 5px 10px"
      w="70vh"
      h="55vh"
    position="absolute" textAlign="center" color="black" fontSize="60px" m="5"  fontFamily="sans-serif">Premium Pro
          <Heading fontSize="150px" fontFamily="initial">$329</Heading>
          <Heading fontSize="38px">Billed just Once</Heading> <br />
          <Button colorScheme='teal' color="black"fontSize="30px" variant='solid' w="40vh" h="9vh" shadow="5px 5px 5px ">Get Started</Button>
        </Box>
    </TabPanel>
    <TabPanel>
    
    <Box m="8" fontSize="45px" z-index="1" position="absolute" fontWeight="bold"top="80vh"
      left="60px" >Access this feature when you get this pricing packages for your business</Box><br/>
        <UnorderedList  spacing={4} fontSize="40px" listStyleType="none" fontFamily="sans-serif" z-index="1" position="absolute" top="110vh" left="30px">
  <ListItem><Icon viewBox='0 0 200 200' color='gray'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   International calling and messaging API</ListItem>
  <ListItem><Icon viewBox='0 0 200 200' color='gray'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   Additional  Phone numbers</ListItem>
  <ListItem><Icon viewBox='0 0 200 200' color='gray'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   Automatic messages via zaiper</ListItem>
  <ListItem><Icon viewBox='0 0 200 200' color='gray'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>   24/7 support and consulting</ListItem>
</UnorderedList>
    </TabPanel>
  </TabPanels>
</Tabs>
      </SimpleGrid>
    
    
  </>
  )
}
export default Home