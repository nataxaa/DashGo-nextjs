import {Flex, Input, Text, Icon, HStack, Box, Avatar} from '@chakra-ui/react'
import {FiSearch} from 'react-icons/fi'
import {RiNotificationLine, RiUserAddLine} from 'react-icons/ri'

export default function Header(){
    return(
        <Flex
        as='header'
        w='100%'
        maxWidth={1200}
        h='20'
        mx='auto'
        mt='4'
        px='10'
        align='center'
        >
            <Text
             fontSize='3xl' 
             fontWeight='bold' 
             letterSpacing='tight' 
             w={64}>
                DashGo
                <Text as='span' color='pink.500'>.</Text>
            </Text>

            <Flex


            as='label'
            flex={1}
            py='4'
            px='8'
            ml={-6}
            maxWidth='400'
            alignSelf='center'
            color='gray.200'
            position='relative'
            bg='gray.800'
            borderRadius='full'
            >
                <Input
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='2'
                placeholder='Buscar na Plataforma'
                _placeholder={{color:'gray.400'}}
                />
                <Icon as={FiSearch} fontSize='20' />
          
    
            </Flex>

            <Flex
            align='center'
            ml='auto'
            >
            <HStack
            spacing='8'
            mx='8'
            pr='8'
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
            >

            <Icon as={RiNotificationLine} fontSize='20'/>
            <Icon as={RiUserAddLine} fontSize='20'/>
            
            </HStack>

            <Flex align='center'>
                <Box mr={3} textAlign='right'>
                    <Text>Natan Xavier</Text>
                    <Text color='gray.300' fontSize='small'>
                        natanxavierr457@gmail.com
                    </Text>
                </Box>
                <Avatar size='md' name='Natan Xavier' src='https://github.com/nataxaa.png'/>
            </Flex>

            </Flex>
        </Flex>
    )
}