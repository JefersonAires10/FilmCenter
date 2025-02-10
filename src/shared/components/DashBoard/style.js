import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  background-color: #181818;
  margin-top: 4rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  margin-top: 3rem;
`;

export const SingleChartContainer = styled.div`
  width: 45%;
  height: 400px;
  background-color: #2c2c2c;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

export const PieChartContainer = styled.div`
  width: 100%;
  height: 450px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  background-color: #2c2c2c;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

export const StreamingChartContainer = styled.div`
  width: 45%;
  height: 400px;
  background-color: #2c2c2c;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-top: 3rem;
`;

export const TotalTimeContainer = styled.div`
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 45%;
    margin: 0 auto; 
    margin-bottom: 20px;
    margin-top: 4rem;
`;

export const TotalTimeValue = styled.span`
   font-size: 2em; 
   font-weight: bold; 
   color: #fff;
`;