import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout' 
import io from 'socket.io-client'
var socket = io();
const IndexPage = (prop) => {
    socket.on('conns', function (conns) {
        console.log('conn:',conns);
    });
    return (
        <MainLayout> 
        </MainLayout>
    );
};

export default connect()(IndexPage);
