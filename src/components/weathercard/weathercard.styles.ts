import styled from 'styled-components';

export const WeatherCardWrapper = styled.div`
    height: 100%;
    min-width: 150px;

    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

export const WeatherCardImage = styled.img `
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

export const WeatherCardInfo = styled.div `
white-space: pre-wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
`;




