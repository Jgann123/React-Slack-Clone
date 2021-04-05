import React from 'react';
import styled from 'styled-components';
  
  function ChatMessage() {
      return (
             <Container>
             <UserAvater>
               
               <img src="/images/SmallFacePic.jpg" alt="" />
              
             </UserAvater>
             <MessageContent>
                 <Name>
                     Jeremy Gann
                     <span>3/2/2021 10:55:31 AM</span>
                </Name>
                <Text>
                     Click the add Channel icon and add a channel! 
                </Text>
             </MessageContent>
                
             </Container>
      )
  }
  
  export default ChatMessage

  const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
        background: #c0c0c0;
    }
  `
  
  const UserAvater = styled.div`
    width: 36px;
    height: 36px;
    overflow: hidden;
    margin-right: 8px;
    

    img {
       width: 100%;


    }
  `


  const MessageContent = styled.div`
   display: flex;
   flex-direction: column;
  `



  const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
span{
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,96,97);
    font-size: 13px;
}

  `

  const Text = styled.span``

