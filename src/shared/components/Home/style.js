import styled from 'styled-components';
import { Card } from 'antd';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 36px;
    margin-bottom: 20px;
    margin-top: 3rem;
    text-align: center;
`;

export const SubTitle = styled.h2`
    color: #fff;    
    font-size: 18px;
    text-align: center;
    margin-top: 1rem;
    font-weight: 300;
    max-width: 800px;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 1200px;
`;

export const DivCard = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-top: 20px;
`;


export const StyledCard = styled(Card)`
    border-radius: 8px; 
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); 
    }

    .ant-card-meta-title {
        font-size: 14px;
    }

    .ant-card-meta-description {
        font-size: 12px; 
    }
`;
