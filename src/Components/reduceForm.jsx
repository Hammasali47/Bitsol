import React,{useReducer} from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const ReduceForm = () => {
  const initialState = {
    email: '',
    password: '',
    FirstName: '',
    LastName: '',
    UserName: '',
    About: '',
    Picture: '',
  };

  function reducer(state, action) {
    // const {type,...rest} = action
    switch (action.type) {
      case "changeValue":
        return { ...state, [action.field]: action.value };
      case 'reset':
        return initialState;
        
      default:
        throw new Error();
    }
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  const action = {
    type:'changeValue',
    field:'',
    value:''
  }


  const handleSubmit =() =>{

  }


  console.log("state",state)
  

  return (
    <div className='m-auto my-5 p-5 border border-info w-50'>
      <Form onSubmit={handleSubmit}>
        <Label tag="h4">Signup Form</Label>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter your email"
            value={state.email}
            onChange={(e)=>{dispatch(
                {
                    type:'changeValue',
                    field:e.target.name,
                    value:e.target.value   
                }
            )}}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter your password"
            value={state.password}
            onChange={(e)=>{dispatch(
              {
                  type:'changeValue',
                  field:e.target.name,
                  value:e.target.value   
              }
          )}}
          />
        </FormGroup>

        <FormGroup>
          <Label for="FirstName">FirstName</Label>
          <Input
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="Enter your firstname"
            value={state.FirstName}
            onChange={(e)=>{dispatch(
              {
                  type:'changeValue',
                  field:e.target.name,
                  value:e.target.value   
              }
          )}}
          />
        </FormGroup>
        <FormGroup>
          <Label for="LastName">LastName</Label>
          <Input
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Enter your lastname"
            value={state.LastName}
            onChange={(e)=>{dispatch(
              {
                  type:'changeValue',
                  field:e.target.name,
                  value:e.target.value   
              }
          )}}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UserName">UserName</Label>
          <Input
            type="text"
            name="UserName"
            id="UserName"
            placeholder="Enter your username"
            value={state.UserName}
            onChange={(e)=>{dispatch(
              {
                  type:'changeValue',
                  field:e.target.name,
                  value:e.target.value   
              }
          )}}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">About</Label>
          <Input
            type="textarea"
            name="About"
            id="exampleText"
            value={state.About}
            onChange={(e)=>{dispatch(
              {
                  type:'changeValue',
                  field:e.target.name,
                  value:e.target.value   
              }
          )}}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Image">Photo</Label>
          <Input
            type="file"
            name="Picture"
            id="Image"
            value={state.Picture}
            onChange={(e)=>{dispatch(
              {
                  type:'changeValue',
                  field:e.target.name,
                  value:e.target.value   
              }
          )}}
          />
          <FormText color="muted">Please Select your Picture.</FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> I accept terms
          </Label>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Button onClick={()=>dispatch({type:"reset"})}>Reset</Button>
      </Form>
    </div>
  );
};

export default ReduceForm;
