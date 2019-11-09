import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import moment from "moment";

class TimeBlock extends Component {
    render() {
        return (
            <div>
                <Card className={"bg-dark mt-3"}>
                    <Card.Header as="h5">Current Time</Card.Header>
                    <Card.Body>
                        <Card.Title>{moment().add(1, 'hours').format('LTS')}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TimeBlock;