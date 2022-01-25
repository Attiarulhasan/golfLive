import{Menu,MenuButton,ChevronDownIcon,MenuList,MenuItem,React,
      Slider,SliderMark ,SliderTrack, SliderFilledTrack,
       Tooltip,showTooltip,sliderValue,
       SliderThumb,setShowTooltip,Flex,Grid,
       Heading,Image,Text,GridItem,Wrap,WrapItem,Center,
       VStack,Container,Box,Button,SimpleGrid,
        FormControl,Input,FormLabel,Select,Avatar,AspectRatio,Spacer} from '@chakra-ui/react';
import{} from '@chakra-ui/icons';
import react from 'react'
import {useState} from 'react'
import {useColorModeValue} from '@chakra-ui/react';
import {useColorMode} from '@chakra-ui/react';
import {useDisclosure} from '@chakra-ui/react';
import Link from "next/Link";
 function Gallery() {
  // const { colorMode, toggleColorMode } = useColorMode();
  //  const bg = useColorModeValue("red.500", "red.200");
  // const color = useColorModeValue("white", "gray.800");

  const [sliderValue, setSliderValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)
   return (
       <>
       <Box  w='100%' p={2} color='black' mt={2} border="1px solid gray">
     <Container maxW="container.2xl">
      <Flex flexDir="row">
        <Box w="40%" pt="2">
        <Image
    src='./logo.jpg'
    alt='Dan Abramov'
  />
        </Box>
        <Box w="60%" pt="2">
         <Flex flexDir="row" justifyContent="space-between">
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
 <Container maxW="container.2xl" mt={4}>
     <Flex flexDir="row">
   <Box w="38%">
   <Heading fontSize="20px" fontweight="medium">My Rad Launch</Heading>
   </Box>
   <Box w="30%">
   <Heading fontSize="20px" fontweight="medium">Key Insights</Heading>
   </Box>
   </Flex>
</Container>
    <Container maxW="container.2xl" mt={2}>
    <Flex flexDir="row" mt={2}>
  <Box w="75%" h="auto" border="1px solid black">
  <Flex flexDir="row" p={2}>
  <Image
  ml={4}
  mt={4}
  width="160px"
  height="160px"
    src='./infodevice.png'
    alt='Dan Abramov'
  />
  <Flex flexDir="column" mt={2} ml={8} >
  <Heading fontSize="26px" fontWeight="normal" textAlign="center">RAD LAUNCH</Heading>
  <Flex flexDir="row" mt={2}>
  <Text fontSize="10px" fontWeight="medium" ml={8}>Serial Number: 00000</Text>
  <Text fontSize="10px" fontWeight="medium" ml={4} >Registration date: 02.04.2022</Text>
  </Flex>
  <Flex flexDir="column">
   <Flex align="center" p={2}>
           <Image
             borderRadius='full'
            boxSize='60px'
            src='https://bit.ly/dan-abramov'
           alt='Dan Abramov'/>
     <Flex flexDir="column" p={2}>
      <Heading fontWeight="normal" fontSize="16px" letterSpacing="tight">Shaun Alexander</Heading>
          <Text fontSize='16px' color="gray" mt={2}  className='handicape'>Handicap:</Text>
         </Flex>
     </Flex>
   </Flex>
  <Button bgColor="blackAlpha.900"
             color="white" mt={2} ml={4} borderRadius="30px" width="140px" height="35px">Device Info</Button>
  </Flex>
  </Flex>
  </Box> 
  <Box w="70%" h="100">
   <Flex flexDir="row" mx={4}>
   <Box w="50%" h="120px" border="1px solid black">
  <Flex flexDir="column" align="center" mt={4}>
      <Heading fontWeight="normal" fontSize="50px">204</Heading>
      <Text color="red" fontWeight="medium">Total Sessions</Text>
  </Flex>
  </Box>
  <Box w="50%" h="120px" border="1px solid black" ml={2}>
  <Flex flexDir="column" align="center" mt={4}>
  <Heading fontWeight="normal" fontSize="50px">5i</Heading>
      <Text color="red" fontWeight="medium" fontsize="30px">Most Accurate Club</Text>
  </Flex>
  </Box>
 
   </Flex>
   <Flex flexDir="row" mt={4} mx={4}>
   <Box w="100%" h="65px" border="1px solid black">
   <Flex flexDir="row" mt={4} ml={4}>
      <Text color="red" fontSize="16px">Average Session Length</Text>
     <Heading ml={10} fontSize="50px" fontWeight="medium" mt="-18px">2:35</Heading>
   </Flex>
  </Box>
   </Flex>
  </Box> 
  <Box padding='2' w="25%" h="200" border="1px solid black">
   <Flex flexDir="column" align="center">
      <Heading fontSize="16px" fontWeight="normal" className='best-round'>Average Drive</Heading>
      <Heading fontSize="50px" fontWeight="normal" mt={8} className='yard-after'>224</Heading>
     
   </Flex>
  </Box>
  <Box padding='2' w="25%" h="200" border="1px solid black" mx={4}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="16px" fontWeight="normal" className='best-round'>Longest Drive</Heading>
      <Heading fontSize="50px" fontWeight="normal" mt={8} className='yard-after'>288</Heading>
   </Flex>
  </Box>
    </Flex>
  </Container>
{/*--top 5 rounds container...*/}
  <Container maxW="container.2xl" mt={4}>
  <Flex>
  <Box w="75%">
    <Heading size='md'>Recent Session</Heading>
  </Box>
  <Box w="25%">
  <Heading size='md'>Profile</Heading>
  </Box>
</Flex>
    <Flex flexDir="row" mt={2}>
    <Box  w="75%" h="220px">
    <Box  w="full" h="60px" border="1px solid black">
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Image
    src='./export.png'
    alt='Dan Abramov'
    width="20px"
     height="20px"
  />
       <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>3:00 PM</Heading>
       <Heading fontSize="16px" className='top-five-r'>2:43 hours</Heading>
       <Heading fontSize="16px" className='top-five-r'>124 Shots</Heading>
       <Heading fontSize="16px" className='top-five-r'>Torrey Pines, San Diego, CA</Heading>
       <Heading fontSize="12px" className='recent-round-h' fontWeight="bold" width="4%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Heading>
   </Flex>
  </Box>
  <Box  w="full" h="60px" border="1px solid black" mt={5}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Image
    src='./export.png'
    alt='Dan Abramov'
    width="20px"
     height="20px"
  />
   <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>3:00 PM</Heading>
       <Heading fontSize="16px" className='top-five-r'>2:43 hours</Heading>
       <Heading fontSize="16px" className='top-five-r'>124 Shots</Heading>
       <Heading fontSize="16px" className='top-five-r'>Torrey Pines, San Diego, CA</Heading>
       <Heading fontSize="12px" className='recent-round-h' fontWeight="bold" width="4%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Heading>
   </Flex>
  </Box>
  <Box  w="full" h="60px" border="1px solid black" mt={4}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Image
    src='./export.png'
    alt='Dan Abramov'
    width="20px"
     height="20px"
  />
   <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>3:00 PM</Heading>
       <Heading fontSize="16px" className='top-five-r'>2:43 hours</Heading>
       <Heading fontSize="16px" className='top-five-r'>124 Shots</Heading>
       <Heading fontSize="16px" className='top-five-r'>Torrey Pines, San Diego, CA</Heading>
       <Heading fontSize="12px" className='recent-round-h' fontWeight="bold" width="4%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Heading>
   </Flex>
  </Box>
  <Box  w="full" h="60px" border="1px solid black" mt={4}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Image
    src='./export.png'
    alt='Dan Abramov'
    width="20px"
     height="20px"
  />
   <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>3:00 PM</Heading>
       <Heading fontSize="16px" className='top-five-r'>2:43 hours</Heading>
       <Heading fontSize="16px" className='top-five-r'>124 Shots</Heading>
       <Heading fontSize="16px" className='top-five-r'>Torrey Pines, San Diego, CA</Heading>
       <Heading fontSize="12px" className='recent-round-h' fontWeight="bold" width="4%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Heading>
   </Flex>
  </Box>
  
  <Box  w="full" h="60px" border="1px solid black" mt={5}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Image
    src='./export.png'
    alt='Dan Abramov'
    width="20px"
     height="20px"
  />
   <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>3:00 PM</Heading>
       <Heading fontSize="16px" className='top-five-r'>2:43 hours</Heading>
       <Heading fontSize="16px" className='top-five-r'>124 Shots</Heading>
       <Heading fontSize="16px" className='top-five-r'>Torrey Pines, San Diego, CA</Heading>
       <Heading fontSize="12px" className='recent-round-h' fontWeight="bold" width="4%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Heading>
   </Flex>
  </Box>
  </Box>
  <Box  w="25%" h="372px" border="1px solid black" mx={4}>
   <Flex flexDir="column" align="center">
   <Flex align="center" p={2}>
           <Image
             borderRadius='full'
            boxSize='60px'
            src='https://bit.ly/dan-abramov'
           alt='Dan Abramov'/>
     <Flex flexDir="column" p={4}>
      <Heading size="md" letterSpacing="tight">Shaun Alexander</Heading>
          <Text fontSize='20px' color="gray" mt={2}  className='handicape'>Handicap:</Text>
         </Flex>
     </Flex>
   </Flex>
   <Flex flexDir="row">
    <Flex>
        <Text fontSize="12px" ml={12}>Home course:</Text>
    </Flex>
    <Flex>
        <Text fontSize="12px" ml={2} fontWeight="semibold">Mountain Shadows<br/>Executive Course</Text>
    </Flex>
   </Flex>
   <Flex flexDir="row" mt={2}>
    <Flex>
        <Text fontSize="12px" ml={16}>Swing:</Text>
    </Flex>
    <Flex>
        <Text fontSize="12px" ml={4} fontWeight="semibold">Left</Text>
    </Flex>
   </Flex>
   <Flex flexDir="row" mt={4}>
    <Flex>
        <Text fontSize="12px" ml={16}>DOP:</Text>
    </Flex>
    <Flex>
        <Text fontSize="12px" ml={4} fontWeight="semibold">02/04/1981</Text>
    </Flex>
   </Flex>
   <Flex flexDir="row" mt={4}>
    <Flex>
        <Text fontSize="12px" ml={16}>Zip Code:</Text>
    </Flex>
    <Flex>
        <Text fontSize="12px" ml={4} fontWeight="semibold">85025</Text>
    </Flex>
   </Flex>
   <Flex flexDir="row" mt={4}>
    <Flex>
        <Text fontSize="12px" ml={16}>Golf Club Brand:</Text>
    </Flex>
    <Flex>
        <Text fontSize="12px" ml={4} fontWeight="semibold">Ping</Text>
    </Flex>
   </Flex>
   <Flex flexDir="row" mt={4}>
    <Flex>
        <Text fontSize="12px" ml={16}>Golf Ball Brand:</Text>
    </Flex>
    <Flex>
        <Text fontSize="12px" ml={4} fontWeight="semibold">N/A</Text>
    </Flex>
   </Flex>
   <Flex mt={4} flexDir="column" align="center">
    <Flex>
    <Button colorScheme='blue' size="sm" bgColor="blackAlpha.900"
     borderRadius="30px" width="150px" fontSize="18px">Edit your bag</Button>
    </Flex>
   </Flex>
  </Box>
    </Flex>
  </Container>
{/*--recent rounds section ---*/}
  <Container maxW="container.2xl" mt={4}>
   <Heading fontSize="20px" fontweight="medium">Bag Map</Heading>
   <Box w="100%" border="1px solid black" p={2} mt={2}>
    <Box  w="95%" h="auto">
  <Flex>
  <Box  w="99%" h="50px" border="1px solid black" mt={2} >
   <Flex flexDir="row" mt={2}>
   <Box fontSize="12px" fontWeight="bold" width="8%" align="center">Club</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="bold" width="8%">Total <br/> distance</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="bold" width="8%">Carry <br/>Distance</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="bold" width="8%">Roll<br/>Distance</Box>
   <Box fontSize="12px" fontWeight="bold" className='recent-round-h' width="8%">Ball  <br/>Speed</Box>
   <Box fontSize="12px" fontWeight="bold" className='recent-round-h' width="8%">Club <br/> Speed</Box>
   <Box fontSize="12px" fontWeight="bold" className='recent-round-h' width="8%">Smash <br/>Factor</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="bold" width="8%">Flight<br/> Time</Box>
   <Box fontSize="12px" fontWeight="bold" className='recent-round-h' width="8%">Apex<br/> Height </Box>
   <Box fontSize="12px" className='recent-round-h'  fontWeight="bold" width="8%">Spin <br/>Rate</Box>
    <Box fontSize="12px" className='recent-round-h' fontWeight="bold" width="8%">Launch<br/> Angle</Box>
    <Box fontSize="12px" className='recent-round-h' fontWeight="bold" width="8%">Video</Box>
   </Flex>
  </Box>
  <Box w="1%" mt={2}>
  <Button color="white" bgColor="black" borderRadius="none" 
  colorScheme='teal' size='sm' ml={2} width="80px" height="50px">
    Clear All
  </Button>
  </Box>
  </Flex>
  <Flex>
  <Box  w="99%" h="40px" border="1px solid black" mt={2} >
   <Flex flexDir="row" mt={2}>
   <Box fontSize="16px" fontWeight="Bold" width="8%" align="center">Dr</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
      <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Box>
   </Flex>
  </Box>
  <Box w="1%" mt={2}>
  <Button color="white" bgColor="black" borderRadius="none" 
  colorScheme='teal' size='sm' ml={2} width="80px" height="40px">
    Clear 
  </Button>
  </Box>
  </Flex>
  <Flex>
  <Box  w="99%" h="40px" border="1px solid black" mt={2} >
   <Flex flexDir="row" mt={2}>
   <Box fontSize="16px" fontWeight="Bold" width="8%" align="center">Dr</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
      <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Box>
   </Flex>
  </Box>
  <Box w="1%" mt={2}>
  <Button color="white" bgColor="black" borderRadius="none" 
  colorScheme='teal' size='sm' ml={2} width="80px" height="40px">
    Clear 
  </Button>
  </Box>
  </Flex>
  <Flex>
  <Box  w="99%" h="40px" border="1px solid black" mt={2} >
   <Flex flexDir="row" mt={2}>
   <Box fontSize="16px" fontWeight="Bold" width="8%" align="center">Dr</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
      <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Box>
   </Flex>
  </Box>
  <Box w="1%" mt={2}>
  <Button color="white" bgColor="black" borderRadius="none" 
  colorScheme='teal' size='sm' ml={2} width="80px" height="40px">
    Clear 
  </Button>
  </Box>
  </Flex>
  <Flex>
  <Box  w="99%" h="40px" border="1px solid black" mt={2} >
   <Flex flexDir="row" mt={2}>
   <Box fontSize="16px" fontWeight="Bold" width="8%" align="center">Dr</Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
   <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">Total </Box>
      <Box fontSize="12px" className='recent-round-h' fontWeight="normal" width="8%">
      <Image
    src='./video.png'
    alt='Dan Abramov'
    width="20px"
     height="15px"
  />
      </Box>
   </Flex>
  </Box>
  <Box w="1%" mt={2}>
  <Button color="white" bgColor="black" borderRadius="none" 
  colorScheme='teal' size='sm' ml={2} width="80px" height="40px">
    Clear 
  </Button>
  </Box>
  </Flex>
  </Box>
    </Box>
  </Container>
  {/*----Rad devices--*/}
  <Container maxW="container.2xl" mt={4}>
   <Heading fontSize="20px" fontweight="medium">Rad devices</Heading>
   <Box w="100%" border="1px solid black" p={2} mt={2}>
      <Flex flexDir="row">
      <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
    objectFit='cover'
    src='./device.jpg'
    alt='Dan Abramov'
  />
         <Heading fontSize="20px" fontWeight="medium" mt={4}>Watche+</Heading>
        <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
    objectFit='cover'
    src='./device.jpg'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Sounds+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
    objectFit='cover'
    src='./device.jpg'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Hand+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
    objectFit='cover'
    src='./device.jpg'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Sound+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
    objectFit='cover'
    src='./device.jpg'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Watch+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
    objectFit='cover'
    src='./device.jpg'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Lazer+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
  <Box padding='4' maxW='3xl' w="20%" h="200">
   <Flex flexDir="column" align="center">
   <Image
    boxSize='100px'
    objectFit='cover'
    src='./device.jpg'
    alt='Dan Abramov'
  />
      <Heading fontSize="20px" fontWeight="medium" mt={4}>Launch+</Heading>
      <Text fontSize="10px" fontweight="medium" mt={4}>Serial Number:</Text>
      <Text fontSize="10px" fontweight="medium">000-00000-00000</Text>
   </Flex>
  </Box>
      </Flex>
    </Box>
  </Container>
  
  <Box bg='blackAlpha.800' w="full" h="70px" color='white' mt={4}>
  <Flex flexDir="row">
   <Box w="20%">
     <Text ml={4} mt="30px">Rad Golf Ⓒ 2022</Text>
   </Box>
   <Box w="60%">
    <Flex flexDir="row" justifyContent="center" mt="30px">
    <Text>Privacy Policy</Text>
    <Text ml={8}  className='footer-before'>Terms & Conditions</Text>
    <Text ml={8} className='footer-before'>Account</Text>
    <Text ml={8} className='footer-before'>Contact</Text>
    </Flex>
   </Box>
   <Box w="20%">
    <Flex justifyContent="end" mt="30px" flexDir="row">
    <Link href="#">
    <a>
    <Image
    mr={4}
    src="./facebook.png"
    alt="Segun Adebayo"
    boxSize="20px"
  />
  </a>
  </Link>
  <Link href="#">
    <a>
  <Image
   mr={4}
    src="./twitter.png"
    alt="Segun Adebayo"
    boxSize="20px"
  />
  </a>
  </Link>
  <Link href="#">
    <a>
  <Image
   mr={4}
   boxSize="20px"
    src="./insta.png"
    alt="Segun Adebayo"
  />
  </a>
  </Link>
    </Flex>
   </Box>
  </Flex>
  </Box>
</>
   )
}
export default Gallery;
