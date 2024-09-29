import { SafeAreaView, Text, Box , StatusBar} from "@gluestack-ui/themed"


const Header = () =>{
    return(
        <SafeAreaView bg='#2c3e50' >
            <StatusBar style= 'light'bg='#2c3e50'/>
            <Box bg='#2c3e50' alignItems="center" justifyContent="center" SafeAreaTop py={5}>
                <Text fontSize={20} fontWeight="bold" color="#fff">
                    Movies App
                </Text>
            </Box>
            
            
        </SafeAreaView>
    )
}

export default Header;