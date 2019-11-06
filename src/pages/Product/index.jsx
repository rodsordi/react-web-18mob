import React, { Component } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading';

class Product extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            id: props.match.params.id,
            data: {},
            active: true,
        }

    }
    
    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}?attributes=title,price,initial_quantity,pictures,condition`)
                .then((response) => {
                    this.setState({data: response.data})
                });
    }

    render() {
        if (this.state.active) {
            return (<Loading active={this.state.active}/>)
        }

        return (
            <div>
                <h1>Teste</h1>
                <p>Lorem Ipsom</p>
                <button>oi</button>
            </div>
        );
    }
}

export default Product;