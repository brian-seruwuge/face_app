import * as React from 'react';
import { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export interface CommentsProps {
    
}
 
export interface CommentsState {
    comment: string;
    post: string;
    
}
 
class Comments extends React.Component<CommentsProps, CommentsState> {
    constructor(props:any){
        super(props)
    this.state = { comment:"" , post:"" }}
    render() { 
        return (
            <Comment.Group>
            <Header as='h3' dividing>
              Comments
            </Header>
        
            <Comment>
              <Comment.Avatar size="tiny" src='data:image/jpeg;base64,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' />
              <Comment.Content>
                <Comment.Author as='a'>Elon Mask</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
        
            <Comment>
              <Comment.Avatar src='/images/avatar/small/elliot.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Elliot Fu</Comment.Author>
                <Comment.Metadata>
                  <div>Yesterday at 12:30AM</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>This has been very useful for my research. Thanks as well!</p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src='/images/avatar/small/jenny.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                      <div>Just now</div>
                    </Comment.Metadata>
                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Comment>
        
            <Comment>
              <Comment.Avatar src='/images/avatar/small/joe.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                  <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
        
            <Form reply>
              <Form.TextArea />
              <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
          </Comment.Group>
          );
    }
}
 
export default Comments;
