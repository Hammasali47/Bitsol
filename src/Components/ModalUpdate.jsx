import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup,
  FormText,
  Spinner,
} from "reactstrap";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const ModalUpdate = ({ buttonLabel, className, id }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const queryClient = useQueryClient();
  const updateQuery = queryClient.getQueryData("post");
  console.log(updateQuery);
  const currUser = updateQuery.find((x) => x.id === id);

  const mutation = useMutation(async (newPost) => {
    const rawResponse = await fetch(`http://localhost:3004/posts/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    const content = await rawResponse.json();
    console.log("response from endpoint is ", content);
  },
  {
    onSuccess:()=>{
      toggle();
      return navigate("/")
    }
  }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("elements", e.target.elements);

    const { email, password, firstname, lastname, username, text, image } =
      e.target.elements;

    let obj = {
      email: email.value,
      password: password.value,
      FirstName: firstname.value,
      LastName: lastname.value,
      UserName: username.value,
      About: text.value,
      Picture: image.value,
    };

    mutation.mutate(obj);
  };

  console.log("curr", currUser);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Label tag="h4">Signup Form</Label>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your email"
                defaultValue={currUser.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter your password"
                defaultValue={currUser.password}
              />
            </FormGroup>
            <FormGroup>
              <Label for="FirstName">FirstName</Label>
              <Input
                type="text"
                name="firstname"
                id="FirstName"
                placeholder="Enter your firstname"
                defaultValue={currUser.FirstName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="LastName">LastName</Label>
              <Input
                type="text"
                name="lastname"
                id="LastName"
                placeholder="Enter your lastname"
                defaultValue={currUser.LastName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="UserName">UserName</Label>
              <Input
                type="text"
                name="username"
                id="UserName"
                placeholder="Enter your username"
                defaultValue={currUser.UserName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">About</Label>
              <Input
                type="textarea"
                name="text"
                id="exampleText"
                defaultValue={currUser.About}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Image">Photo</Label>
              <Input type="file" name="image" id="Image" />
              <FormText color="muted">Please Select your Picture.</FormText>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> I accept terms
              </Label>
            </FormGroup>
            <Button color="primary" type="submit">
              Update
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
        {/* <ModalFooter>
                    <Button color="primary" type="submit" onClick={handleSubmit}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default ModalUpdate;
