import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const CardBox = styled.TouchableOpacity`
    background-color: #d9d9d9;
    margin: 0 10px 0 10px;
    border-radius: 8px;
    padding: 10px;
`;

export const BoldText = styled.Text`
    font-size: 15px;
    font-weight: bold;
`;

export const LeftBox = styled.View`
    flex: 1;
    background-color: #da1e37;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 5px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 5px;
`;

export const RightBox = styled.TouchableOpacity`
    background-color: #59a5d8;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: 5px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 5px;
`;