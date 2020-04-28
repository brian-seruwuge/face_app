import * as React from 'react';
import { Component } from 'react';
import {Item} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export interface PostProps {
    
}
 
export interface PostState {
    post:string
    header: string;
    description: string;
}
 
class Post extends React.Component<PostProps, PostState> {
    constructor(props: any){
        super(props)
    this.state = {post :"" , header:"", description:""}}
    render() { 
        return ( 
            <Item>
            <Item.Image size = "huge"src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6_Y7BnbvgUd-4JO3sJ5J-5WlbZJo0Xn1FUgdrrn3cZozWcVQu&usqp=CAU' />
          </Item>
      

         );
    }
}
 
export default Post;
