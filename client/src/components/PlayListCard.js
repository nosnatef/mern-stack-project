import React,{ Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PlayListCard extends Component{
    render(){
        return(
            <div style={{margin: '2rem'}}>
                <Card>
                    
                        <CardBody>
                            <CardTitle>PlayList1</CardTitle>
                            <CardSubtitle>Playlist1 Create Time</CardSubtitle>
                            <CardText>Playlist1 Des</CardText>
                            <Button>Enter</Button>
                        </CardBody>
                </Card>
            </div>
        );
    }
};

export default PlayListCard;