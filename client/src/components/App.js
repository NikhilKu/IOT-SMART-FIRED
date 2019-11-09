import React, {Component} from 'react';
import {ToastContainer} from 'react-toastify';
import socketIOClient from "socket.io-client";
import {Container, Row} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import TemperatureBlock from "./TemperatureBlock";
import LogsBlock from "./LogsBlock";
import QODBlock from "./QODBlock";
import StatusChangeBlock from "./StatusChangeBlock";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThresholdBlock from "./ThresholdBlock";
import TimeBlock from "./TimeBlock";
import Loader from 'react-loader-spinner'
import {config} from '../Config';
import Logo from "./Logo";
import 'react-toastify/dist/ReactToastify.css';

import '../App.css';


class Api extends Component {
    constructor() {
        super();
        this.state = {
            data: false,
        };
    }

    componentDidMount() {
        const socket = socketIOClient(config.serverHost);
        socket.on("summary", data => this.setState({data: (data)}));
    }

    render() {
        const {status, temperature, logs} = this.state.data;
        return (
            <>

                <ToastContainer/>
                <div className={"content" + this.state.data ? "loaded" : "loading"}>
                    <Container className={"mb-5 mt-5"}>
                        <Logo/>
                        {this.state.data ? (
                            <>
                                <Row className={"mt-3"}>
                                    <Col sm={12} md={6} lg={4}>
                                        <TimeBlock/>
                                        <TemperatureBlock temperature={temperature}/>

                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <StatusChangeBlock status={status}/>
                                        <ThresholdBlock status={status}/>
                                    </Col>
                                    <Col sm={12} md={12} lg={4}>

                                        <QODBlock/>
                                    </Col>
                                    <Col sm={12}>
                                        <LogsBlock logs={logs}/>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <div className={"loader"}>
                                <Loader
                                    type="Puff"
                                    color="#e19a3e"
                                    height={200}
                                    width={200}
                                />
                            </div>
                        )}
                    </Container>

                </div>
            </>
        );
    }
}

export default Api;
