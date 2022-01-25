import{Menu,MenuButton,ChevronDownIcon,MenuList,MenuItem,React,Slider,SliderMark ,SliderTrack, SliderFilledTrack,
    Tooltip,showTooltip,sliderValue,SliderThumb,setShowTooltip,Flex,Grid,Heading,Image,Text,GridItem,Wrap,WrapItem,Center,
    VStack,Container,Stack,SocialButton,Box,Button,SimpleGrid,FormControl,Input,FormLabel,Select,Avatar,AspectRatio,Spacer} from '@chakra-ui/react';
import{} from '@chakra-ui/icons';
import react from 'react'
import {useState} from 'react'
import Link from "next/Link";
function Gallery() {
const [sliderValue, setSliderValue] = useState(5)
const [showTooltip, setShowTooltip] = useState(false)
return (
    <>
    
    <Box  w='100%' p={2} color='black' mt={2} border="1px solid gray">
     <Container maxW="container.2xl">
      <Flex flexDir="row">
        <Box w="40%">
        <Image
    src='./logo.jpg'
    alt='Dan Abramov'
  />
        </Box>
        <Box w="60%" pt="2">
         <Flex flexDir="row" justifyContent="space-between" >
           <Text fontWeight="bold" color="red"> <Link href="/grid"><a>Dashboard</a></Link></Text>
        <Text fontWeight="bold"> <Link href="/roundhistory"><a>Round History</a></Link></Text>
           <Text fontWeight="bold"> <Link href="/profile"><a>Profile</a></Link></Text>
           <Text fontWeight="bold">Shaun Alexander<br color='red'/>Handicap: +8</Text>
       <Menu>
           <>
      <MenuButton as={Button} bgColor="transparent">
      <Image
    boxSize='30px'
    objectFit='cover'
    src='overflow.png'
    alt='Dan Abramov'
  />
      </MenuButton>
      <MenuList>
      <MenuItem className='sub-menu'>Account</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem>Log out</MenuItem>
      </MenuList>
    </>
</Menu>
         </Flex>
        </Box>
      </Flex>
     </Container>
</Box>
{/*--recent rounds section ---*/}
<Container maxW="container.2xl">
<Box w="100%" p={5}  bgColor="#F2F2F2">
 <Flex flexDir="row" mt={2}>
 <Box w="15%">
 <Flex flexDir="row" justifyContent="center">
 <Button colorScheme="red" size="lg" borderRadius="50px" height='40px' width="120px" mt="120px">
    View
  </Button>
 </Flex>
 </Box>
 <Box  w="55%" h="auto" mt="100px">
 <Box  w="full" h="40px" border="1px solid black">
<Flex flexDir="row" justifyContent="space-around" mt={2}>
   <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'> 80 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fonbtweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">74 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
<Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
  <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executive course balboa park</Heading>
   <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
  <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80 </Heading>
</Flex>
</Box>
<Box  w="full" h="40px" border="1px solid black" mt={2}>
<Flex flexDir="row" justifyContent="space-around" mt={2}>
   <Heading fontSize="16px" fontWeight="medium">02.04.2020 </Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>Executivr course balboa park</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">GIR: 16</Heading>
    <Heading fontSize="16px" className='recent-round-h' fontWeight="medium">Par: +8</Heading>
    <Heading fontSize="16px" fontweight="bold" className='recent-round-h'>80</Heading>
</Flex>
</Box>
<Flex flexDir="row" justifyContent="end" mt="100px">
 <Button colorScheme="red" size="lg" borderRadius="50px" width="400px">
    Log in
  </Button>
 </Flex>
</Box>
<Box  w="30%" h="380" mx={2}>
<Flex flexDir="row">
<Image
pt="65%"
 src="./mainLogo.png" alt="mainLogo" />
</Flex>
</Box>
 </Flex>
 </Box>
</Container>
</>
)
}
export default Gallery;
