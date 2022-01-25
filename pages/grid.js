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
    <Container maxW="container.2xl" mt={4}>
   <Heading fontSize="20px" fontweight="medium">Key Insights</Heading>
    <Flex flexDir="row" mt={2}>
    <Box padding='2'  w="20%" h="200" border="1px solid black">
   <Flex flexDir="column" align="center">
      <Heading fontSize="18px" fontWeight="normal" className='best-round'>Best Round</Heading>
      <Heading fontSize="55px" fontWeight="normal" mt={8}>74</Heading>
      <Button colorScheme='blue' size="sm" bgColor="blackAlpha.900" borderRadius="30px" mt={4} width="100px">View</Button>
   </Flex>
  </Box>
  <Box maxW='3xl' w="70%" h="auto" border="1px solid black" mx={4}>
   <Flex flexDir="row" align="center">
   <Box padding='2'  w="30%" h="150" mx={2}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="12px" fontWeight="normal">Average Puts</Heading>
      <Image
    boxSize='100px'
    objectFit='cover'
    src='./saveputs.jpg'
    alt='Dan Abramov'
    mt={4}
  />
    <Slider
      mt="15px"
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    justifyContent="space-between"
    >
      <SliderMark value={25} mt='1' ml='-5' fontSize='8px'>
        1M
      </SliderMark>
      <SliderMark value={50} mt='1' ml='-2' fontSize='8px'>
        6M
      </SliderMark>
      <SliderMark value={75} mt='1' ml={2} fontSize='8px'>
        12M
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
   </Flex>
  </Box>
  <Box padding='2'  w="30%" h="150" mx={2} mt={2}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="12px" fontWeight="normal">Fairways</Heading>
      <Image
    boxSize='100px'
    objectFit='cover'
    src='./saveputs.jpg'
    alt='Dan Abramov'
    mt={4}
  />
       <Slider
      mt="15px"
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    justifyContent="space-between"
    >
      <SliderMark value={25} mt='1' ml='-5' fontSize='8px'>
        1M
      </SliderMark>
      <SliderMark value={50} mt='1' ml='-2' fontSize='8px'>
        6M
      </SliderMark>
      <SliderMark value={75} mt='1' ml={2} fontSize='8px'>
        12M
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
   </Flex>
  </Box>
  <Box padding='2' w="30%" h="150" mx={2} mt={2}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="12px" fontWeight="normal">Greenin regulation</Heading>
      <Image
    boxSize='100px'
    objectFit='cover'
    src='./saveputs.jpg'
    alt='Dan Abramov'
    mt={4}
  />
      <Slider
      mt="10px"
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    justifyContent="space-between"
    >
      <SliderMark value={25} mt='1' ml='-5' fontSize='8px'>
        1M
      </SliderMark>
      <SliderMark value={50} mt='1' ml='-2' fontSize='8px'>
        6M
      </SliderMark>
      <SliderMark value={75} mt='1' ml={2} fontSize='8px'>
        12M
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
   </Flex>
  </Box>
   </Flex>
  </Box> 
  <Box maxW='3xl' w="70%" h="100">
   <Flex flexDir="row" justify="space-around" mx={2}>
   <Box maxW='3xl' w="30%" h="120px" border="1px solid black">
  <Flex flexDir="column" align="center" mt={4}>
      <Heading fontWeight="normal" fontSize="50px">204</Heading>
      <Text color="red" fontWeight="medium">Total Rounds</Text>
  </Flex>
  </Box>
  <Box maxW='3xl' w="30%" h="120px" border="1px solid black"mx={4}>
  <Flex flexDir="column" align="center" mt={4}>
  <Heading fontWeight="normal" fontSize="50px">82</Heading>
      <Text color="red" fontWeight="medium" fontsize="30px">Average Score</Text>
  </Flex>
  </Box>
  <Box w="40%" h="120px" border="1px solid black">
  <Flex flexDir="column" align="center" mt={2}>
      <Heading fontSize="18px" fontWeight="normal" letterSpacing="tight" className='best-round'>Average Drive</Heading>
     <Flex flexDir="row">
     <Heading fontSize="55px" fontWeight="normal" mt={2} className='yards'>224</Heading>
     </Flex>
  </Flex>
  </Box>
   </Flex>
   <Flex flexDir="column" mt={4} justifyContent="space-around" mx={2}>
   <Box maxW='3xl' w="100%" h="65px" border="1px solid black">
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
       <Text fontSize="20px" color="gray" fontweight="medium" className='total-steps1'>Total Steps:</Text>
       <Text fontSize="20px" color="gray" fontweight="medium" className='total-steps2'>Miles Walked:</Text>
   </Flex>
  </Box>
   </Flex>
  </Box> 
  <Box padding='2' maxW='3xl' w="20%" h="200" border="1px solid black" mx={2}>
   <Flex flexDir="column" align="center">
      <Heading fontSize="16px" fontWeight="normal" className='best-round'>Longest Drive</Heading>
      <Heading fontSize="50px" fontWeight="normal" mt={4} className='yard-after'>248</Heading>
      <Button colorScheme='blue' size="sm" bgColor="blackAlpha.900" borderRadius="30px" mt={8} width="100px">View</Button>
   </Flex>
  </Box>
    </Flex>
  </Container>
{/*--top 5 rounds container...*/}
  <Container maxW="container.2xl" mt={4}>
  <Flex>
  <Box p={2} w="74%">
  <Heading size='md'>Top 5 Rounds</Heading>
  </Box>
  <Box p={2} w="25%">
  <Heading size='md'>Profile</Heading>
  </Box>
</Flex>
    <Flex flexDir="row" mt={2}>
    <Box maxW='' w="75%" h="220">
    <Box  w="full" h="60px" border="1px solid black">
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
       <Heading fontSize="40px" mt="-12px" mr="5px">74 </Heading>
       <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>Executivr course balboa park</Heading>
       <Heading fontSize="16px" className='top-five-r'>Putts: 20</Heading>
       <Heading fontSize="16px" className='top-five-r'>Fairways: 14</Heading>
       <Heading fontSize="16px" className='top-five-r'>GIR: 16</Heading>
       <Heading fontSize="16px" className='top-five-r'>Par: +8</Heading>
   </Flex>
  </Box>
  <Box  w="full" h="60px" border="1px solid black" mt={5}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Heading fontSize="40px" mt="-12px" mr="5px">74 </Heading>
       <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>Executivr course balboa park</Heading>
       <Heading fontSize="16px" className='top-five-r'>Putts: 20</Heading>
       <Heading fontSize="16px" className='top-five-r'>Fairways: 14</Heading>
       <Heading fontSize="16px" className='top-five-r'>GIR: 16</Heading>
       <Heading fontSize="16px" className='top-five-r'>Par: +8</Heading>
   </Flex>
  </Box>
  <Box  w="full" h="60px" border="1px solid black" mt={4}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Heading fontSize="40px" mt="-12px" mr="5px">78</Heading>
       <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>Executivr course balboa park</Heading>
       <Heading fontSize="16px" className='top-five-r'>Putts: 20</Heading>
       <Heading fontSize="16px" className='top-five-r'>Fairways: 14</Heading>
       <Heading fontSize="16px" className='top-five-r'>GIR: 16</Heading>
       <Heading fontSize="16px" className='top-five-r'>Par: +8</Heading>
   </Flex>
  </Box>
  <Box  w="full" h="60px" border="1px solid black" mt={4}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Heading fontSize="40px" mt="-12px" mr="5px">79 </Heading>
       <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>Executivr course balboa park</Heading>
       <Heading fontSize="16px" className='top-five-r'>Putts: 20</Heading>
       <Heading fontSize="16px" className='top-five-r'>Fairways: 14</Heading>
       <Heading fontSize="16px" className='top-five-r'>GIR: 16</Heading>
       <Heading fontSize="16px" className='top-five-r'>Par: +8</Heading>
   </Flex>
  </Box>
  <Box  w="full" h="60px" border="1px solid black" mt={5}>
   <Flex flexDir="row" justifyContent="space-around" mt={4}>
   <Heading fontSize="40px" mt="-12px" mr="5px">80</Heading>
       <Heading fontSize="16px" className='top-five-r'>02.04.2020 </Heading>
       <Heading fontSize="16px" className='top-five-r'>Executivr course balboa park</Heading>
       <Heading fontSize="16px" className='top-five-r'>Putts: 20</Heading>
       <Heading fontSize="16px" className='top-five-r'>Fairways: 14</Heading>
       <Heading fontSize="16px" className='top-five-r'>GIR: 16</Heading>
       <Heading fontSize="16px" className='top-five-r'>Par: +8</Heading>
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
     borderRadius="30px" width="150px" fontSize="18px">Edit your Bag</Button>
    </Flex>
   </Flex>
  </Box>
    </Flex>
  </Container>
{/*--recent rounds section ---*/}
  <Container maxW="container.2xl" mt={4}>
   <Heading fontSize="20px" fontweight="medium">Recent round history</Heading>
   <Box w="100%" border="1px solid black" p={5} mt={2}>
    <Flex flexDir="row" mt={2}>
    <Box  w="50%" h="auto">
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
  </Box>
  <Box maxW='' w="50%" h="380" mx={2}>
  <AspectRatio ratio={16 / 9}>
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
    alt='demo'
  />
</AspectRatio>
  </Box>
    </Flex>
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
