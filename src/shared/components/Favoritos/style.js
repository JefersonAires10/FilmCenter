import styled from "styled-components";
import { Card } from "antd";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    display: flex;       
    flex-direction: column; 
    align-items: center; 
    justify-content: flex-start; 
    box-sizing: border-box; 
`;

export const Div = styled.div`
    max-width: 90%;
    width: 100%;
    margin: auto;
`;	

export const Title = styled.h2`
    font-size: 30px; 
    font-weight: bold;
    text-align: left;
    color: #fff;
    margin-bottom: 12px; 
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

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-top-left-radius: 8px; 
    border-top-right-radius: 8px; 
    aspect-ratio: 2 / 3; 
    object-fit: cover; 
`;