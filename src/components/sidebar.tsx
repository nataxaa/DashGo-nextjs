import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";


export default function Sidebar(){
    return(
        <Box as="aside" w={64} mr='8'>
            <Stack spacing={8} align='flex-start'>
                <Box>
                    <Text fontWeight='bold' color={'gray.400'} fontSize='small'>GERAL</Text>
                    <Stack spacing={4} mt='8' align={'stretch'}>
                        <Link display='flex' alignItems={'center'}>
                        <Icon as={RiDashboardLine} fontSize='28'/>
                        <Text ml={4} fontWeight='medium'>Dashboard</Text>
                        </Link>
                        <Link display='flex' alignItems={'center'}>
                        <Icon as={RiContactsLine} fontSize='28'/>
                        <Text ml={4} fontWeight='medium'>Usuarios</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight='bold' color={'gray.400'} fontSize='small'>AUTOMAÇÃO</Text>
                    <Stack spacing={4} mt='8' align={'stretch'}>
                        <Link display='flex' alignItems={'center'}>
                        <Icon as={RiInputMethodLine} fontSize='28'/>
                        <Text ml={4} fontWeight='medium'>Formularios</Text>
                        </Link>
                        <Link display='flex' alignItems={'center'}>
                        <Icon as={RiGitMergeLine} fontSize='28'/>
                        <Text ml={4} fontWeight='medium'>Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}