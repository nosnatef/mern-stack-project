import React,{ Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Fade } from 'reactstrap';

class PlayListCard extends Component{

    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    render(){
        return(
            <div style={{margin: '2rem'}}>
            <Fade in={this.state.fadeIn} className='mt-3'>
                <Card>
                    
                        <CardBody>
                            <CardTitle>PlayList1</CardTitle>
                            <CardSubtitle>Playlist1 Create Time</CardSubtitle>
                            <CardText>Playlist1 Des</CardText>
                            <Button>Enter</Button>
                        </CardBody>
                </Card>
            </Fade>
            </div>
        );
    }
};

export default PlayListCard;