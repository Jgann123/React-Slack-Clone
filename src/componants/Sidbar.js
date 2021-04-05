import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { SidebarItemsData } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from '../firebase';
// import { ChannelsItemsData } from "../data/ChannelsData";

function Sidbar(props) {

  console.log(props);

  const addChannel = () => {
    const promptName = prompt("Enter Channel name");
    if(promptName){
      db.collection('rooms').add({
        name: promptName
        //you could add more information here that pulls data from the user that is logged in if you did not want to fill out an entire form
        //How could you add people to the channel?? 
        // This will be fun to figure out. ??? 
      })
    }
  }


  return (
    <Container>
      <WorkspaceContainer>
        <Name>Full-Stack Programmer...</Name>

        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {SidebarItemsData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div> Channels </div>
          <AddIcon  onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map(item => (
            <Channel>
              # {item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidbar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`

   cursor: pointer;
 
`

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #350D36;
}
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
  cursor: pointer;
`


const ChannelsList = styled.div``







const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
       background: #350D36;
  }
  
`





