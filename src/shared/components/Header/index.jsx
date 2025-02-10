import { Input } from 'antd';
import { Container, Menu, Logo, LogoText, Nav, NavItem, StyledLink } from './style';

const { Search } = Input;

const Header = () => {
    const onSearch = value => console.log(value);

    return (
        <Container>
            <Nav>
                <Logo>
                    <LogoText>FilmCenter</LogoText>
                </Logo>
                <div>
                    <Search
                        placeholder="Buscar filmes"
                        onSearch={onSearch}
                        style={{ width: 700 }}
                    />
                </div>
                <Menu>
                    <NavItem>
                        <StyledLink to="/home">Não sabe o que assistir?</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/favoritos">Minhas Observações</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink to="/dashboard">DashBoard</StyledLink>
                    </NavItem>
                    <NavItem>
                    </NavItem>
                </Menu>
            </Nav>
        </Container>
    );
}

export default Header;