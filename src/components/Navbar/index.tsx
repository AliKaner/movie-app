import { Navbar,Text,Button } from "@nextui-org/react"

export default function NavBar() {
    return(
        <Navbar isBordered variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            MOVII
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    )
}