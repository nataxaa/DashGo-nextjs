import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default function UsersList(){
    return(
        <Box>
            <Header/>

            <Flex w='100%' my='6' maxWidth='1180' px='10' mx={'auto'}>
            <Sidebar/>

            <Box flex={1} borderRadius='8' bg={'gray.800'} p='8'>
            
                <Flex mb={8} justify='space-between' align={'center'}>
                    <Heading size={'lg'} fontWeight='normal'>Usuarios</Heading>

                    <Button
                    as={'a'}
                    size='sm'
                    fontSize={'sm'}
                    colorScheme='pink'
                    leftIcon={<Icon as={RiAddLine}/>} 
                    >
                        Criar
                    </Button>
                </Flex>

                <Table colorScheme={'whiteAlpha'}>
                    <Thead>
                        <Tr>
                            <Th px={6} color='gray.300' width={8}>
                                <Checkbox colorScheme={'pink'}/>
                            </Th>
                            <Th>Usuarios</Th>
                            <Th>Data de cadastro</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr>
                            <Td px={6}>
                                <Checkbox colorScheme={'pink'}/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight={'bold'}>Natan Xavier</Text>
                                    <Text fontSize='sm' color={'gray.300'}>natanxavierr457@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>09 de janeiro, 2022</Td>
                            <Td>
                            <Button
                            as={'a'}
                            size='sm'
                            fontSize={'sm'}
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine}/>} 
                            >
                                Editar
                            </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px={6}>
                                <Checkbox colorScheme={'pink'}/>
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight={'bold'}>Natan Xavier</Text>
                                    <Text fontSize='sm' color={'gray.300'}>natanxavierr457@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>09 de janeiro, 2022</Td>
                            <Td>
                            <Button
                            as={'a'}
                            size='sm'
                            fontSize={'sm'}
                            colorScheme='pink'
                            leftIcon={<Icon as={RiAddLine}/>} 
                            >
                                Editar
                            </Button>
                            </Td>
                        </Tr>
                    </Tbody>

                </Table>


            </Box>

            </Flex>

        </Box>
    )
}