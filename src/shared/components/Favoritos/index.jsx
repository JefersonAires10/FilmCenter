import { Col, Row } from "antd";
import { Container, Title, StyledCard, CardImage, Div } from "./style";

const { Meta } = StyledCard;

const Favorites = () => {
    const favoriteItems = [
        {
            id: 1,
            title: "Filme 1",
            description: "Descrição do filme 1",
            image: "https://midias.imagemfilmes.com.br/capas/8ba8f970-5f5a-438d-995e-f167738a3b8d_m.jpg?2023-11-16T14:42:31.862808",
        },
        {
            id: 2,
            title: "Série 1",
            description: "Descrição da série 1",
            image: "https://midias.imagemfilmes.com.br/capas/febf8229-6e35-482e-98b0-d37f83ba87e9_m.jpg?2023-08-02T14:24:00.296926",
        },
        {
            id: 3,
            title: "Livro 1",
            description: "Descrição do livro 1",
            image: "https://midias.imagemfilmes.com.br/capas/5b99a784-84a7-4fbb-b5c3-bf56ce77a7db_m.jpg?2025-01-15T11:40:24.512484",
        },
        {
            id: 1,
            title: "Filme 1",
            description: "Descrição do filme 1",
            image: "https://midias.imagemfilmes.com.br/capas/8ba8f970-5f5a-438d-995e-f167738a3b8d_m.jpg?2023-11-16T14:42:31.862808",
        },
        {
            id: 2,
            title: "Série 1",
            description: "Descrição da série 1",
            image: "https://midias.imagemfilmes.com.br/capas/febf8229-6e35-482e-98b0-d37f83ba87e9_m.jpg?2023-08-02T14:24:00.296926",
        },
        {
            id: 3,
            title: "Livro 1",
            description: "Descrição do livro 1",
            image: "https://midias.imagemfilmes.com.br/capas/5b99a784-84a7-4fbb-b5c3-bf56ce77a7db_m.jpg?2025-01-15T11:40:24.512484",
        },
    ];

    const myListItems = [
        {
            id: 4,
            title: "Filme 2",
            description: "Descrição do filme 2",
            image: "https://midias.imagemfilmes.com.br/capas/0f0f64a9-f16b-4f30-8f89-e9f0bfcbb541_m.jpg?2024-08-07T10:25:39.001657",
        },
        {
            id: 5,
            title: "Série 2",
            description: "Descrição da série 2",
            image: "https://midias.imagemfilmes.com.br/capas/843955aa-9452-4965-b8c7-bd6534e1c49c_m.jpg?2024-08-09T17:08:46.763024",
        },
    ];

    return (
        <Container>
            <Div>
                <Title>Meus Favoritos</Title>
                <Row gutter={[16, 16]}>
                    {favoriteItems.map((item) => (
                        <Col key={item.id} xs={12} sm={8} md={6} lg={4}> 
                            <StyledCard hoverable cover={<CardImage alt={item.title} src={item.image} />}>
                                <Meta title={item.title} description={item.description} />
                            </StyledCard>
                        </Col>
                    ))}
                </Row>

                <Title style={{ marginTop: "24px" }}>Minha Lista</Title>
                <Row gutter={[16, 16]}>
                    {myListItems.map((item) => (
                        <Col key={item.id} xs={12} sm={8} md={6} lg={4}>
                            <StyledCard hoverable cover={<CardImage alt={item.title} src={item.image} />}>
                                <Meta title={item.title} description={item.description} />
                            </StyledCard>
                        </Col>
                    ))}
                </Row>
            </Div>
        </Container>
    );
};

export default Favorites;