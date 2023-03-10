
import { Container } from "./container"
import { MenuNav } from "./menunav"
import { Footer } from "./footer"
import { MobileMenu } from "./mobilemenu"






export const MenuNav__Footer = ({children}) => {


    return(
        <>
            <Container>
                <MobileMenu />
                <MenuNav />
                {children}
                <Footer />
            </Container>
        </>
    )
    
}