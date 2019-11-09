import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Switch from "react-switch";
import axios from "axios";
import {config} from "../Config.js";
import {toast} from 'react-toastify';

class StatusChangeBlock extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({checked});

        axios.post(config.serverHost + 'api/status', {
            status: checked,
        })
            .then(function (response) {
                toast.success("Succeed!");
            })
            .catch(function (error) {
                toast.error("Something went wrong");
            });
    }

    convertStatus = (status) => {
        if (status === null) {
            return {
                title: "Unknown",
                color: "#f1c40f"
            };
        } else if (status) {
            return {
                title: "Online",
                color: "#2ecc71"
            };
        } else if (!status) {
            return {
                title: "Offline",
                color: "#e74c3c"
            };
        }
    };


    render() {
        let statusBoolean = this.props.status ? this.props.status.status : null;

        let status = this.convertStatus(statusBoolean);
        return (
            <div>
                <Card className={"bg-dark mt-3"}>
                    <Card.Header as="h5">Status of the device</Card.Header>
                    <Card.Body>
                        <Card.Title style={{color: status.color}}>
                            {status.title}</Card.Title>
                        <Card.Text>
                            <Switch onChange={this.handleChange} checked={statusBoolean}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default StatusChangeBlock;