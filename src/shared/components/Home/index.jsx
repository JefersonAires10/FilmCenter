import { useState, useEffect } from 'react';
import { Input, Select, Button, Card, Row, Col, DatePicker } from 'antd';
import * as S from './style';
import styled from 'styled-components'; 
import Services from '../../services/services';
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Meta } = Card; 


const CardImage = styled.img`
  object-fit: cover;  
  width: 100%;
  height: 200px;
`;

const Home = () => {
    const [filters, setFilters] = useState({
        genre: '',
        year: [],
        rating: '',
        type: '',
        platform: ''
    });

    const [results, setResults] = useState([]);
    const genres = [
        { "id": 28, "name": "Ação" },
        { "id": 12, "name": "Aventura" },
        { "id": 16, "name": "Animação" },
        { "id": 35, "name": "Comédia" },
        { "id": 80, "name": "Crime" },
        { "id": 99, "name": "Documentário" },
        { "id": 18, "name": "Drama" },
        { "id": 10751, "name": "Família" },
        { "id": 14, "name": "Fantasia" },
        { "id": 36, "name": "História" },
        { "id": 27, "name": "Terror" },
        { "id": 10402, "name": "Música" },
        { "id": 9648, "name": "Mistério" },
        { "id": 10749, "name": "Romance" },
        { "id": 878, "name": "Ficção Científica" },
        { "id": 10770, "name": "Filme para TV" },
        { "id": 53, "name": "Suspense" },
        { "id": 10752, "name": "Guerra" },
        { "id": 37, "name": "Faroeste" }
      ]

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const handleSearch = () => {
        // Lógica para buscar filmes com base nos filtros
        // Aqui você pode fazer uma chamada à API e atualizar o estado `results`
        console.log('Filtros aplicados:', filters);
        
        const newFilters = {
            genre_id: filters.genre,
            min_date: filters.year[0]+'-01-01',
            max_date: filters.year[1]+'-12-31',
            vote_average: filters.rating,
            streaming_providers: [
                filters.platform
            ]
        }

        console.log(newFilters);
        // Exemplo de resultado fictício
        /*setResults([
            {
                id: 1, 
                poster: 'https://midias.imagemfilmes.com.br/capas/9030fd55-c808-4765-ba1a-30d8970059c5_m.jpg?2025-02-04T16:12:03.786338',
                title: 'Filme Exemplo',
                year: '2021',
                rating: '8.5',
                platform: 'Netflix',
                description: 'A sample movie description'
            }
        ]);*/
        const fetchMovies = async () => {
            const response = await Services.getMovies(newFilters);
            console.log(response);
            setResults(response);
        }
        fetchMovies();
    };

    const handleSetMovies = async (id,status) => {
        const response = await Services.setMovies(id, status);
        if(response) {
            console.log('Filme atualizado');
            setResults(
                //tira o filme que foi atualizado
                results.filter((item
                    ) => item.id !== id
            )
            );
        }
    }

    return (
        <S.Container>
            <S.Title>Te ajudamos a escolher.</S.Title>
            <S.Div>
                <S.SubTitle>Não sabe qual filme assistir? Nós te ajudamos! Use os filtros para escolher seu gênero favorito, ano de lançamento,
                    avaliação e muito mais. Com base nas suas preferências, encontramos as melhores opções para você curtir sem perder tempo.
                    Explore, descubra e aproveite!</S.SubTitle>
            </S.Div>
            <div>
                <Select
                    placeholder="Gênero"
                    style={{ width: 350, marginRight: 10 }}
                    onChange={(value) => handleFilterChange('genre', value)}
                >
                    {genres.map((genre) => (
                        <Option key={genre.id} value={genre.id}>{genre.name}</Option>
                    ))}
                </Select>
                <RangePicker
                    placeholder={['Ano de início', 'Ano de término']}
                    style={{ width: 350, marginRight: 10 }}
                    picker="year"
                    onChange={(dates, dateStrings) => handleFilterChange('year', dateStrings)}
                />
                <Input
                    placeholder="Nota mínima"
                    style={{ width: 350, marginRight: 10 }}
                    onChange={(e) => handleFilterChange('rating', e.target.value)}
                />
                <Select
                    placeholder="Plataforma"
                    style={{ width: 350, marginRight: 10 }}
                    onChange={(value) => handleFilterChange('platform', value)}
                >
                    <Option value="Netflix">Netflix</Option>
                    <Option value="Amazon Prime Video">Amazon Prime</Option>
                    <Option value="Disney Plus">Disney+</Option>
                </Select>

                <Button type="primary" onClick={handleSearch}>
                    Buscar
                </Button>

                <S.DivCard style={{ marginTop: 50, marginLeft: 135 }}>
                    <Row gutter={20}>
                        {results.map((item) => (
                            <Col key={item.id} xs={18} sm={8} md={6} lg={4} >
                                <Card
                                    hoverable
                                    cover={<CardImage alt={item.title} src={'https://image.tmdb.org/t/p/w400/'+item.poster_path} />}

                                >
                                    <Meta
                                        title={item.title}
                                        description={item.description}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            marginTop: 10
                                        }}
                                    >
                                        <Button onClick={
                                            () => handleSetMovies(item.id, 2)
                                        } type="primary" style={{ marginTop: 10 }}>Já Assisti!</Button>
                                        <Button onClick={
                                            () => handleSetMovies(item.id, 1)
                                        } type="primary" style={{ marginTop: 10 }}>Quero Assistir!</Button>
                                        <Button onClick={
                                            () => handleSetMovies(item.id, 3)
                                        } type="primary" style={{ marginTop: 10 }}>Blacklist</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </S.DivCard>
            </div>

        </S.Container >
    );
};

export default Home;