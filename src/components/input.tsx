import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface inputProps extends ChakraInputProps{
    name: string,
    label?: string 
}


export function Input({name, label, ...rest}:inputProps){
    return(

        <FormControl>

        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        
        <ChakraInput 
        name={name} 
        id={name}
        focusBorderColor='pink.500' 
        bgColor='gray.900' 
        variant='filled'
        _hover={{
          bgColor: 'gray.900'
        }}
        size='lg' 
        {...rest}
        />
        </FormControl>
    )
}