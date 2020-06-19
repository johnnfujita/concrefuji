
import PropTypes from "prop-types"
import React from "react"

import  Navbar  from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import Logo from "../images/Concrefuji-logo.png"
import { Link } from "react-router-dom"


const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><img style={{width: "100px"}} src={Logo} alt="concrefujita"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav  className="ml-auto nav">
      <Nav.Item className={`ml-5`}><Link  to="/" style={{color:"#666"}}><strong>Home</strong></Link></Nav.Item>
      <Nav.Item className="ml-5"><Link to="/about" style={{color:"#666"}}><strong>About</strong></Link></Nav.Item>
      <Nav.Item className="ml-5"><Link to="/login" style={{color:"#666"}}><strong>Login</strong></Link></Nav.Item>
      <NavDropdown  className="ml-5 mr-5" title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item> <Link to="/contact" style={{color:"#666"}}>Contato</Link></NavDropdown.Item>
        <NavDropdown.Item href="/team">Equipe</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to="/corpodeprova" style={{color:"#666"}}> Corpo de Prova </Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Item className={`ml-5`}><Link  to="/adicionarcp" style={{color:"#666", fontSize: "30px", padding: "30px"}}><strong>+</strong></Link></Nav.Item>
    </Nav>
    <Form inline>
      <FormControl  type="text" placeholder="o que procura?" className="mr-sm-2" />
      <Button variant="outline-secondary">Busca</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
