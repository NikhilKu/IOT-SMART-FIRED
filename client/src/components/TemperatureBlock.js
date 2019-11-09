import React, {Component} from 'react';
import Card from "react-bootstrap/Card";

class TemperatureBlock extends Component {
    render() {
        return (
            <div>
                <Card className={"bg-dark mt-3"}>
                    <Card.Header as="h5">Temperature</Card.Header>
                    <Card.Body>
                        <Card.Title>Follow the realtime temperature</Card.Title>
                        <p className={"temperature"}>{this.props.temperature ? this.props.temperature.temperature : "??"}</p>
                        <p className={"degrees-text"}>Degrees</p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TemperatureBlock;