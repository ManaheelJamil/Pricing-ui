"use client"
import { Flex, Spacer, Box, Heading, Text } from '@chakra-ui/react'
import { Grid, GridItem, SimpleGrid, Button } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Icon, createIcon } from '@chakra-ui/react'
// import { Icon } from '@chakra-ui/react'
import { CheckCircleIcon } from 'react-icons/md'
const Home = () => {
  return (<>
    <SimpleGrid columns={2} spacing={0} >
      <Box bg='teal' height='15vh' w="150vh" p="10" textAlign="center" fontSize="50px" fontFamily="sans-serif" color="white">
        Simple pricing For Your Business
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
  <UnorderedList  left="10px"spacing={2} fontSize="18px" listStyleType="none" >
  <ListItem><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d1='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>    International calling and messaging API</ListItem>
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
    <SimpleGrid bg="RGBA(0, 0, 0, 0.09)" height='40vh' w="150vh"></SimpleGrid>
    {/* <Grid> 
  <GridItem 
position="absolute"
width= "1440px"
height=" 397px"
left= "0px"
top="0px"
background= "#6B46C1">
  <Heading 
  position= "absolute"
width= "751px"
height="62.31px"
left="344px"
top= "88.45px"
fontFamily= 'Initial'
fontStyle="normal"
fontWeigh="800"
fontSize= "50px"
lineHeight= "130%"
textAlign="center"
letterSpacing="-0.01em"
color="#F7FAFC">
    Simple pricing for your business
  </Heading>
  <Heading as='h5' 
  position="absolute"
width="604px"
height=" 32.16px"
left= "418px"
top="166.84px"
fontFamily='Initial'
fontStyle="normal"
fontWeight="500"
fontSize="24px"
lineHeight="32px"
textAlign="center"
color ="#F7FAFC"
opacity= "0.84">
 Plans that are carefully crafted to suit your business
  </Heading>
  </GridItem >
 <Grid
color="pink"
  // gap={1}
 top="220px"
  left="90px"
   z-index="-1"
    position="absolute" >
  <GridItem 
  position= "absolute"
width= "994px"
height= "336px"
left= "220px"
// top= "256px"
background=" #FFFFFF"
shadow= "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
border-radius= "12px" > 
  <Box position=" absolute"
  z-index="-1"
width= "378px"
height= "336px"
left= "220px"
top="257px"

background="#652CD3"
>Premium Pro
          <Heading 
          position= "absolute"
width= "157px"
height= "60px"
left="329px"
top="362px"
fontFamily='Inter'
fontStyle=" normal"
fontWeight="800"
fontSize="60px"
lineHeight="100%"
letter-spacing= "-0.01em"
color= "#171923">$329</Heading>
          <Heading position= "absolute"
width= "282px"
height= "28px"
left= "266px"
top= "430px"
fontFamily= 'Inter'
fontStyle="normal"
font-weight="500"
fontSize= "18px"
lineHeight= "28px"
text-align="center"
color="#171923">Billed just Once</Heading> <br />
          <Button 
position="absolute"
width="282px"
height= "51px"
left= "268px"
top=" 482px"
background="#805AD5"
borderRadius= "8px">Get Started</Button>
        </Box> </GridItem>
  <GridItem colSpan={0} bg='white' w="75vh" h="40vh">
    <Box position=" absolute"
width= "520px"
height= "56px"
left= "646px"
top="304px"
fontFamily='Inter'
fontStyle="normal"
fontWeight=" 400"
fontSize="18px"
lineHeight=" 28px"
color= "#2D3748"
 >Access this feature when you get this pricing packages for your business</Box>
  <UnorderedList  left="10px"spacing={2} fontSize="18px" listStyleType="none" >
  <ListItem
   position="absolute"
width="490px"
height= "28px"
left="688px"
top="384px"
fontFamily='Inter'
fontStyle= "normal"
fontWeight= "400"
fontSize="18px"
lineHeight=" 28px"
color=" #2D3748"
><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d1='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    position="absolute"
left="45.21%"
right= "53.96%"
top=" 47.36%"
bottom="51.56%"
background=" #FFFFFF"
  />
</Icon>    International calling and messaging API</ListItem>
  <ListItem  position="absolute"
width="490px"
height= "28px"
left="688px"
top="428px"
fontFamily='Inter'
fontStyle= "normal"
fontWeight= "400"
fontSize="18px"
lineHeight=" 28px"
color=" #2D3748"><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    position="absolute"
    left="45.21%"
    right= "53.96%"
    top=" 52.64%"
    bottom="46.27%"
    background=" #FFFFFF"
  />
</Icon>   Additional  Phone numbers</ListItem>
  <ListItem  position="absolute"
width="490px"
height= "28px"
left="688px"
top="472px"
fontFamily='Inter'
fontStyle= "normal"
fontWeight= "400"
fontSize="18px"
lineHeight=" 28px"
color=" #2D3748"><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    position="absolute"
    left="45.21%"
    right= "53.96%"
    top=" 57.93%"
    bottom="40.99%"
    background=" #FFFFFF"
  />
</Icon>   Automatic messages via zaiper</ListItem>
  <ListItem  position="absolute"
width="490px"
height= "28px"
left="688px"
top="516px"
fontFamily='Inter'
fontStyle= "normal"
fontWeight= "400"
fontSize="18px"
lineHeight=" 28px"
color=" #2D3748"><Icon viewBox='0 0 200 200' color='teal'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    position="absolute"
    left="45.21%"
    right= "53.96%"
    top=" 63.22%"
    bottom="35.7%"
    background=" #FFFFFF"
  />
</Icon>   24/7 support and consulting</ListItem>
</UnorderedList>
  </GridItem>
</Grid>
  <GridItem colSpan={5} bg='RGBA(0, 0, 0, 0.09)' h="140vh" ></GridItem>
</Grid> */}
  </>
  )
}
export default Home