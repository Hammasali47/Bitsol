import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';


const Form1 = () => {

    // const [formState,setFormState] = useState({});

    const navigate = useNavigate();

    const mutation = useMutation(async newPost=>{
        // const payload ={

        // }

        const rawResponse = await fetch("http://localhost:3004/posts",{
            method:"post",
            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        const content = await rawResponse.json();
        console.log("response from endpoint is ",content);
    },
    {
      onSuccess : ()=>{
        return navigate("/")
      }
    }
    )

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("elements",e.target.elements)

        const {email,password,firstname,lastname,username,text,image} = e.target.elements;

        // console.log("data",email,password,firstname,lastname,username,text,image);


        let obj ={
            email:email.value,
            password:password.value,
            FirstName:firstname.value,
            LastName:lastname.value,
            UserName:username.value,
            About:text.value,
            Picture:image.value
        }

        // setFormState(...obj);

        mutation.mutate(obj)



        
    }

   
    return (
        <div className='m-auto my-5 p-5 border border-info w-50'>
        <Form onSubmit={handleSubmit}>
            <Label tag="h4">Signup Form</Label>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />
          </FormGroup>
          
          <FormGroup>
            <Label for="FirstName">FirstName</Label>
            <Input type="text" name="firstname" id="FirstName" placeholder="Enter your firstname" />
          </FormGroup>
          <FormGroup>
            <Label for="LastName">LastName</Label>
            <Input type="text" name="lastname" id="LastName" placeholder="Enter your lastname" />
          </FormGroup>
          <FormGroup>
            <Label for="UserName">UserName</Label>
            <Input type="text" name="username" id="UserName" placeholder="Enter your username" />
          </FormGroup>
          
          {/* <FormGroup>
            <Label for="exampleSelect">City</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Rawalpindi</option>
              <option>Islamabad</option>
              <option>Lahore</option>
              <option>Peshawar</option>
              <option>Karachi</option>
              <option>Quetta</option>
            </Input>
          </FormGroup> */}
          <FormGroup>
            <Label for="exampleText">About</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="Image">Photo</Label>
            <Input type="file" name="image" id="Image" />
            <FormText color="muted">
              Please Select your Picture.
            </FormText>
          </FormGroup>

          {/* <FormGroup tag="fieldset">
          <div className='d-flex flex-row'>
            <legend style={{"width":"13%","paddingRight":"124px"}}>Gender</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Female
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio1" disabled />{' '}
                Other
              </Label>
            </FormGroup>
          </div>
          </FormGroup> */}
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              I accept terms
            </Label>
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </Form>
        </div>
      );

}
 
export default Form1;