import React from 'react';

export default class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const axios = require('axios');

        // Make a request for a user with a given ID
        axios.get('http://192.168.1.154:3009/product/newArrival?page=1&perPage=20&fbclid=IwAR2lYzbR7-L18uG1trh3-B4Xutc-AEhvmfFenjWFx3ldw1bpCYe8EEIxW5c')
            .then((response) => {
                // handle success
                // console.log(response.data.result);

                //assign to array
                this.setState({
                    productData: [...this.state.productData, ...response.data.result],
                }, () => {
                    console.log(this.state.productData)
                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        return (
            <div className="users" >
                <table>
                    <thead>
                        <tr className="tablehead">
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Code</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.productData.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td><img src={value.thumbnail} alt="" className="product_img" /></td>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.productCode}</td>
                                    <td>{value.shortDetail}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}