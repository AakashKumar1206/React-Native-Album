import React, { Component } from 'react';
import { View,Text,ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails.js';

export default class AlbumList extends React.Component{
    constructor(props){
        super(props);

        this.state={albums:[]};
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({albums:response.data}));
    }

    renderAlbum(){
        return this.state.albums.map(album =>
        <AlbumDetails key={album.title} album={album}/>
        )
    }
    render(){
        return (
            <ScrollView>
            {this.renderAlbum()} 
            </ScrollView>
        )
    }
}
