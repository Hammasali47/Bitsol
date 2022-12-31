import React, { useState } from "react"
import { Form, FormGroup, Button, Label, Input } from "reactstrap"

const ProductForm = () => {

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        quantity: 1
    });

    const handleChange = (e) => {
        setProduct(prevProduct => ({...prevProduct,[e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) =>{
        console.log("e",e)
        e.preventDefault();
        console.log("submited values",product)
    }

    return (
        <div className="d-flex justify-content-center align-items-center flexable">
        <Form onSubmit={handleSubmit} className="d-flex flex-column w-50 border border-info p-4 rounded">
            <FormGroup >
                <Label for="exampleName">Name</Label>
                <Input type="text" name="name" value={product.name} id="exampleName" placeholder="Enter product name" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePrice">Price</Label>
                <Input type="number" name="price" value={product.price} id="examplePrice" placeholder="Enter product price" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleQuantity">Quantity</Label>
                <Input type="number" name="quantity" value={product.quantity} id="exampleQuantity" placeholder="Enter product quantity" onChange={handleChange}/>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </div>
    );
}

export default ProductForm;