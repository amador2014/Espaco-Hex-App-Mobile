import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Container = styled.SafeAreaView`
    background-color: #F2F3F5;
    flex: 1;
    position: relative;
    justify-content: flex-start;
    align-items: flex-end
`;

export const styles = StyleSheet.create({
    background:{
        marginRight: -40
    },    
    content:{
        alignSelf: 'center',
        marginHorizontal: 120,
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex: 1
    },
    font:{
        fontSize: 34,
        fontFamily: "Inter_600SemiBold"
    },
    
    
});