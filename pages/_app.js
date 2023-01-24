import {ChakraProvider}from "@chakra-ui/react"
function MyApp({Component,pageprops}){
    return (
        <ChakraProvider>
            <Component {...pageprops}/>
        </ChakraProvider>
    )
}
export default MyApp