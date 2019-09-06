import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Player = props => {
    return (
        <div>
            <Card>
                <Card.Content>
                <Card.Header>{props.player.name}</Card.Header>
                <Card.Meta>
                    # {props.player.id + 1}
                </Card.Meta>
                <Card.Description>
                    Country: {props.player.country}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='search' />
                    {props.player.searches} Search(es)
                </Card.Content>
            </Card>
        </div>
    )
}

export default Player;