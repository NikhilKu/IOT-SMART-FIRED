import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import axios from "axios";
import {toast} from "react-toastify";


class QODBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: null,
            image: null
        }
    }

    componentDidMount() {
        axios.get('https://quotes.rest/qod').then((result) => {
            this.setState({
                quote: result.data.contents.quotes[0].quote,
                image: result.data.contents.quotes[0].background,
            });
        }).catch((e) => {
            toast.error("Quote of the day unavailable.")
        })
    }

    render() {
        return (
            <Card className={"bg-dark mt-3"}>
                <Card.Header as="h5">Quote of the day</Card.Header>
                <Card.Img variant="top" src={this.state.image}/>
                <Card.Body>
                    <Card.Text>
                        "{this.state.quote}"
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}


export default QODBlock;