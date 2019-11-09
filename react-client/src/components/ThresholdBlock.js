import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from 'react-toastify';
import {config} from "../Config";

class ThresholdBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_threshold: 0,
        }
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.updateThreshold();
        }
    };

    updateThreshold = (e) => {
        e.preventDefault();
        axios.post(config.serverHost + 'api/threshold', {
            threshold: this.state.new_threshold,
        })
            .then(function (response) {
                toast.success("Succeed!");
            })
            .catch(function (error) {
                toast.error("Something went wrong!!");
            });
    };

    handleChange = (event) => {
        this.setState({new_threshold: event.target.value});
    };

    render() {
        let threshold = this.props.status ? this.props.status.threshold : "Unknown";
        return (
            <div>
                <Card className={"bg-dark mt-3"}>
                    <Card.Header as="h5">Threshold</Card.Header>
                    <Card.Body>
                        <Card.Title>Current Threshold: <span className={ "orange-text"}> {JSON.stringify(threshold)}</span></Card.Title>
                        <Form>
                            <Form.Group controlId="newThreshold">
                                <Form.Label>New Threshold</Form.Label>
                                <Form.Control type="text" placeholder="1 ~ 200" onChange={this.handleChange}
                                              onKeyDown={this._handleKeyDown}/>
                            </Form.Group>

                            <Button variant="warning" className={"btn-warning-custom"} type="submit" onClick={this.updateThreshold}>
                                Change Threshold
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ThresholdBlock;