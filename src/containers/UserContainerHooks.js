import React, { useState, useEffect } from 'react';

export default function UserContainerHook() {
    const [productData, setProductdata] = useState([])
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        fetchData();
    })

    useEffect(() => {
        console.log('count');

    }, [count])

    useEffect(() => {
        console.log(count, 'second');

    })

    useEffect(() => {
        console.log(count, 'third');

    }, [])

    const fetchData = () => {
        const axios = require('axios');

        // Make a request for a user with a given ID
        axios.get('http://192.168.10.84:3009/product/newArrival?page=1&perPage=20&fbclid=IwAR2lYzbR7-L18uG1trh3-B4Xutc-AEhvmfFenjWFx3ldw1bpCYe8EEIxW5c')
            .then((response) => {

                /*------------------- CLASS COMPONENT ALTERNATIVE ----------------------*/

                // this.setState({
                //     productData: [...this.state.productData, ...response.data.result],
                // })

                /*---------------------------------------------------------------*/

                //assign to array
                setProductdata(response.data.result)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const onClickHandler = () => {
        setCount(
            p => p + 1
        )
    }

    const onClickHandler2 = () => {
        setCount2(
            count2 + 1
        )
    }

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
                    {productData.map((value, index) => {
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

            <p>Count: {count}</p>
            <button onClick={() => onClickHandler()}>Click</button>
            <button onClick={() => onClickHandler2()}>Click</button>

        </div>
    )
}