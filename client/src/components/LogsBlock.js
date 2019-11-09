import React, {Component} from 'react';
import {Card, Table} from "react-bootstrap";
import moment from "moment";
import {AreaChart} from 'react-chartkick'
import 'chart.js';
import Button from "react-bootstrap/Button";
import axios from "axios";
import {toast} from 'react-toastify';
import {config} from "../Config";

class LogsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogs: 5
        }
    }

    groupBy = (obj) => {
        let result = {};
        obj.forEach((item) => {
            return result[item.sortDate] ? result[item.sortDate]++ : result[item.sortDate] = 1;
        });

        return result;
    };
    addSortDate = (logs) => {
        logs.map((log) => {
           return log.sortDate = moment(log.createdAt).format("MMM");
        })
    };
    emptyLogs = (e) => {
        e.preventDefault();
        axios.delete(config.serverHost + 'api/log/',)
            .then((response) => {
                toast.success("Succeed!");
            })
            .catch((error) => {
                toast.error("Something went wrong!!");
            });
    };

    updateShowLogs = (e) => {
        e.preventDefault();
        this.setState({
            showLogs: this.state.showLogs + 5,
        });
    };

    render() {
        let logs = this.props.logs ? this.props.logs.reverse() : [];
        this.addSortDate(logs);
        let chartData = (this.groupBy(logs, 'sortDate'));

        return (
            <div>
                <Card className={"bg-dark mt-3"}>
                    <Card.Header as="h5">Logs</Card.Header>
                    <Card.Body>
                        <AreaChart colors={["#e19a3e", "#e15d60"]} data={chartData}/>
                        <Table variant={"dark"} striped bordered hover responsive size="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Temperature</th>
                                <th>Time</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {logs.map((log, index) => {
                                return (
                                    <tr className={index >= this.state.showLogs ? "hidden" : null} key={index}>
                                        <td>{index + 1}</td>
                                        <td>{log.temperature}</td>
                                        <td>{moment(log.createdAt).add(1, 'hours').format('LTS')}</td>
                                        <td>{moment(log.createdAt).format('L')}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Table>
                        <a href="/" className={"orange-text"} onClick={this.updateShowLogs}>Show more</a>
                        <Button variant={"danger"} className={"float-right"} onClick={this.emptyLogs}> Empty
                            Logs </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default LogsBlock;