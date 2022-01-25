import{Menu,MenuButton,ChevronDownIcon,MenuList,MenuItem ,Flex,Grid,Heading,Image,
         Text,GridItem,Wrap,WrapItem,Center,
         VStack,Container,Box,Button,SimpleGrid, FormControl,InputGroup,InputLeftElement,
         Input,FormLabel,Select,Avatar,AspectRatio,Spacer, InputRightElement} from '@chakra-ui/react';
import{SearchIcon} from '@chakra-ui/icons';
import {useState} from 'react'
import Link from "next/Link";

function Profile() {
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
      <Flex flexDir="row" justifyContent="space-between">
      <Text fontWeight="bold" > <Link href="/grid"><a>Dashboard</a></Link></Text>
        <Text fontWeight="bold"> <Link href="/roundhistory"><a>Round History</a></Link></Text>
        <Text fontWeight="bold" color="red"> <Link href="/profile"><a>Profile</a></Link></Text>
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
        <MenuItem  className='sub-menu'>Account</MenuItem>
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
   <Heading fontSize="20px" fontweight="medium">My Profile</Heading>
   <Box w="100%" h="auto" border="1px solid black" p={2} mt={2}>
      <Flex flexDir="row">
      <Box w="20%" h="auto">
         <Flex flexDir="column" p={4} mt={4} align="center">
         <Image
             borderRadius='full'
            boxSize='130px'
            src='https://bit.ly/dan-abramov'
           alt='Dan Abramov'/>
            <Heading fontSize="16px" mt={4}>Shaun Alexander</Heading>
          <Text fontSize='20px' color="gray" mt={2}  className='handicape'>Handicap:</Text>
         </Flex>
      </Box>
      <Box w="35%" h="auto">
      <Flex flexDir="column">
      <Flex flexDir="row" p={2} mt={8}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={4}>Home Course</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={4}>Executivr course balboa park</Heading>  
         </Flex>
         <Flex flexDir="row" p={2} mt={4}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={10}>Handicap</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={4}>+8</Heading>  
         </Flex>
         <Flex flexDir="row" p={2} mt={4}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={10}>Swing</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={10}>Left</Heading>  
         </Flex>
         <Flex flexDir="row" p={2} mt={4}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={10}>Gender</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={8}>Male</Heading>  
         </Flex>
         </Flex>
      </Box>
      <Box w="35%" h="auto">
      <Flex flexDir="column">
      <Flex flexDir="row" p={2} mt={8}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={14}>Email</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={8}>Shaunradgolf@gmail.com</Heading>  
         </Flex>
         <Flex flexDir="row" p={2} mt={4}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={2}>Phone Number</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={4}>480-628-5978</Heading>  
         </Flex>
         <Flex flexDir="row" p={2} mt={4}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={12}>Zip Code</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={4}>85205</Heading>  
         </Flex>
         <Flex flexDir="row" p={2} mt={4}>
      <Heading fontSize="14px" fontWeight="medium" mr={2} ml={6}>Date Of Birth</Heading>
       <Heading fontSize="16px" className='my-profile-after' ml={4}>02/04/1981</Heading>  
         </Flex>
         </Flex>
      </Box>
      <Box w="10%">
         <Flex>
         <Button bgColor="blackAlpha.900" color="white" mt={4} ml={4} borderRadius="30px" width="80px" height="30px">Edit</Button>
         </Flex>
      </Box>
      </Flex>
    </Box>
  </Container>
  {/* my devices */}
  <Container maxW="container.2xl" mt={4}>
  <Flex>
  <Box  w="50%">
    <Heading size='md'>My Devices</Heading>
  </Box>
  <Box w="50%">
  <Heading size='md'>Subscriptions</Heading>
  </Box>
</Flex>
   <Box w="100%" h="auto" mt={2}>
      <Flex flexDir="row">
      <Box width="50%" border='1px solid black'>
      <Flex flexDir="row">
   hii
      </Flex>
      </Box>
      <Box width="50%" border='1px solid black' ml={4}>
        <Flex flexDir="row" p={8}>
           <Box w="50%" h="auto">
           <Flex flexDir="column" align="center">
           <Image
            boxSize='100px'
            objectFit='cover'
            src='./device.jpg'
           alt='Dan Abramov'
  />
           <Heading fontSize="22px" letterSpacing="tight" textTransform="uppercase" mt={4}>Lazer Subscription</Heading>
            <Text fontSize="12px">Price: $49.99/year</Text>
            <Text fontSize="12px">Expire: 12.21.2021</Text>
            <Flex flexDir="row" align="center">
            <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="100px" height="30px">Renew</Button>
               <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="110px" height="30px">Plan Info</Button>
            </Flex>
           </Flex>
           </Box>
           <Box w="50%" h="auto" ml={4}>
           <Flex flexDir="column" align="center">
           <Image
             boxSize='100px'
             objectFit='cover'
             src='./device.jpg'
              alt='Dan Abramov'
  />
           <Heading fontSize="22px" letterSpacing="tight" textTransform="uppercase" mt={4}>Launch Subscription</Heading>
            <Text fontSize="12px">Price: $49.99/year</Text>
            <Text fontSize="12px">Expire: 12.21.2021</Text>
            <Flex flexDir="row" align="center">
            <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="105px" height="30px">Renew</Button>
               <Button bgColor="blackAlpha.900"
             color="white" mt={4} ml={4} borderRadius="30px" width="115px" height="30px">Plan Info</Button>
            </Flex>
           </Flex>
           </Box>
        </Flex>
   </Box>
      </Flex>
    </Box>
  </Container>
  {/* Build your bag */}
  <Container maxW="container.2xl" mt={4}>
   <Heading fontSize="20px" fontweight="medium">Build Your Bag</Heading>
   <Box w="100%" h="auto" border="1px solid black" p={2} mt={2}>
      <Flex flexDir="row" borderBottom="1px" pb={3}>
      <Box w="15%" h="auto">
         <Flex flexDir="row" p={2} mt={4}>
            <Heading fontSize="18px" mt={2} p={2}>Golf Club Brand</Heading>
         </Flex>
      </Box>
      <Box w="40%" h="auto">
         <Flex flexDir="row" mt={4} p={2}>
            <Box 
            width="80px" height="60px" 
            borderRadius="20px" border="1px solid black">
            <Image
            mt="20px"
            ml="2px"
          src='./b1.png'
           alt='Dan Abramov'
           width="65px"
           height="18px"
  />
            </Box>
            <Box 
            ml={2}
            width="80px" height="60px"
             borderRadius="20px" border="1px solid black">
            <Image
           mt="20px"
            ml="5px"
          src='./b2.png'
           alt='Dan Abramov'
           width="50px"
           height="18px"
  />
            </Box>
            <Box
              ml={2}
             width="80px" height="60px" 
             borderRadius="20px" border="1px solid black">
            <Image
            mt="16px"
            ml="5px"
          src='./b3.png'
           alt='Dan Abramov'
           width="52px"
           height="30px"
  />
            </Box>
            <Box 
              ml={2}
            width="80px" 
            height="60px" borderRadius="20px"
             border="1px solid black">
            <Image
            mt="20px"
            ml="5px"
          src='./b4.png'
           alt='Dan Abramov'
           width="55px"
           height="16px"
  />
            </Box>
            <Box 
              ml={2}
            width="80px" 
            height="60px" borderRadius="20px" border="1px solid black">
            <Image
           mt="20px"
            ml="5px"
          src='./b5.png'
           alt='Dan Abramov'
           width="53px"
           height="23px"
  />
            </Box>
            <Box 
              ml={2}
            width="80px" height="60px" borderRadius="20px" border="1px solid black">
            <Image
            mt="20px"
            ml="5px"
          src='./b6.png'
           alt='Dan Abramov'
           width="52px"
           height="28px"
  />
            </Box>
            <Box 
              ml={2}
            width="80px" height="60px" borderRadius="20px" border="1px solid black">
            <Image
            mt="14px"
            ml="5px"
          src='./b7.png'
           alt='Dan Abramov'
           width="52px"
           height="42px"
  />
            </Box>
         </Flex>
      </Box>
      <Box w="45%" h="auto">
        <Flex flexDir="row" mt={4} p={2} ml={16}>
        <Heading fontSize="18px" mt={2} p={2} className='golf-ball'>Golf Ball Brand</Heading>
        <Box  ml={8}
            width="65px" height="60px" 
            borderRadius="20px" border="1px solid black">
            <Image
            mt="20px"
            ml="2px"
          src='./b1.png'
           alt='Dan Abramov'
           width="65px"
           height="18px"
  />
            </Box>
            <Box 
            ml={2}
            width="65px" height="60px"
             borderRadius="20px" border="1px solid black">
            <Image
           mt="20px"
            ml="5px"
          src='./b2.png'
           alt='Dan Abramov'
           width="50px"
           height="18px"
  />
            </Box>
            <Box
              ml={2}
             width="65px" height="60px" 
             borderRadius="20px" border="1px solid black">
            <Image
            mt="16px"
            ml="5px"
          src='./b3.png'
           alt='Dan Abramov'
           width="52px"
           height="30px"
  />
            </Box>
            <Box 
              ml={2}
            width="65px" 
            height="60px" borderRadius="20px"
             border="1px solid black">
            <Image
            mt="20px"
            ml="5px"
          src='./b4.png'
           alt='Dan Abramov'
           width="55px"
           height="16px"
  />
            </Box>
        </Flex> 
      </Box>
      </Flex>
      {/* <hr pt="10px" color='red'/> */}
       <Flex flexDir="row" align="center">
      <Box w="30%" h="auto">
        <Heading fontSize="16px" mt={2} p={4} ml={4}>Woods/Hybrid</Heading>
        <Flex flexDir="column">
        <Flex flexDir="row">
            <Flex p={2} ml={4}>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px" borderRadius="50px" fontWeight="normal" textAlign="center" color="white" bgColor="red">Dr</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">3w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>4w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>5w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>7w</Button>
            </Flex>
        </Flex>
        <Flex flexDir="row">
            <Flex p={2} ml={4}>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal">2h</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">3h</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">4h</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>5h</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">6h</Button>
            </Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="30%" h="auto" className='iron-before'>
        <Heading fontSize="16px" mt={2} p={4} ml={8}>Irons</Heading>
        <Flex flexDir="column" ml={4}>
        <Flex flexDir="row">
            <Flex p={2} ml={4}>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" fontWeight="normal" textAlign="center" >1i</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>2i</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">3i</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">4i</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">5i</Button>
            </Flex>
        </Flex>
        <Flex flexDir="row">
            <Flex p={2} ml={4}>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal">6i</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">7i</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>8i</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">9i</Button>
            </Flex>
        </Flex>
        </Flex>
      </Box>
      <Box w="40%" h="auto" className='iron-before'>
        <Heading fontSize="16px" mt={2} p={4} ml={8}>Wedges</Heading>
        <Flex flexDir="column" ml={4}>
        <Flex flexDir="row">
            <Flex p={2} ml={4}>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px" borderRadius="50px" fontWeight="normal" textAlign="center" bgColor="red" color="white">Pw</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">Sw</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>Gw</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>Lw</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>50w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4} color="white" bgColor="red">52w</Button>
            </Flex>
        </Flex>
        <Flex flexDir="row">
            <Flex p={2} ml={4}>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" color="white" bgColor="red">54w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>56w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>58w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>60w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>62w</Button>
           <Button fontSize="26px" border="1px solid black" width="55px" height="55px"  borderRadius="50px" textAlign="center"  fontWeight="normal" ml={4}>64w</Button>
            </Flex>
        </Flex>
        </Flex>
      </Box>
      </Flex>
    </Box>
  </Container>
 {/* footer  */}
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
export default Profile;
