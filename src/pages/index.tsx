import { Button, Flex, Stack} from '@chakra-ui/react'
import React from 'react'
import { Input } from '../components/input'

export default function Home() {
  return (
    <Flex
     w='100vw'
     h='100vh'
     align='center'
     justify='center'
     >

      <Flex
       as='form'
       width='100%'
       maxWidth={360} 
       bg="gray.800" p={8} 
       borderRadius={8}
       flexDirection='column'
       >

        <Stack spacing={3}>

       <Input name='email' type='email' label='E-mail' />
      <Input name='password' type='password' label='Senha' />
        
        
        </Stack>

        <Button type='submit' mt={6} colorScheme='pink'>Entrar</Button>


      </Flex>

    </Flex>
  )
}
