import { createStandaloneToast } from "@chakra-ui/react"

const ThemeToast = ({status, title, themeName}) => {
    const toast = createStandaloneToast()
    toast({
        title: title,
        description: `${themeName} applied successfully...`,
        status: status,
        duration: 9000,
        isClosable: true,
        variant: 'solid'
      })
    //   
    return (
        <>
            {toast}
        </>
    )
}
 
export default ThemeToast;