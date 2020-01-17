import React from 'react';
import Message from "./Messages";
import Input from './Input';
import './../App.css'


class ChatApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        {
          text: "This is a test message!",
          member: {
            color: "blue",
            username: "bluemoon"
          }
        }
      ],
      member: {
        username: 'ABC',
        color: 'red'
      }
    }
  }
  onSendMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages})
  }
 


render() {
  return (
    <div className="message-app">
      <Message
        messages={this.state.messages}
        currentMember={this.state.member}
      />
      <Input
        onSendMessage={this.onSendMessage}
        />
    </div>
  );
}



}

export default ChatApp;
