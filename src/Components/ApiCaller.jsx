import React from "react";
import { useQuery } from "react-query";
import { Button, Spinner, Table } from "reactstrap";
import {useNavigate } from "react-router-dom";
import { ModalDelete } from "./Modal1";

const ApiCaller = () => {

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await fetch("http://localhost:3004/posts");
    return data.json();
  };


  // Consoler();
  // Consoli();

  // function Consoler(){
  //   console.log("hello");
  // }

  // const Consoli =() =>{
  //   console.log("hello 123")
  // }

  const query = useQuery("post", fetchData);

  console.log("query", query);

  return (
    <div>
      <Button className="m-4" color="info" onClick={()=>navigate('/form')} >New Record</Button>

      {query.isLoading ? (
        <Spinner size="lg" color="primary">
          Loading....
        </Spinner>
      ) : (
        <Table>
          <thead>
            <tr>
              <th className="border border-danger">Id</th>
              <th className="border border-danger">FirstName</th>
              <th className="border border-danger">LastName</th>
              <th className="border border-danger">UserName</th>
              <th className="border border-danger">User Details</th>
            </tr>
          </thead>
          <tbody>
            {query.isSuccess
              ? query.data.map((post, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-danger">
                        {post.id}
                      </td>
                      <td className="border border-danger">{post.FirstName}</td>
                      <td className="border border-danger">{post.LastName}</td>
                      <td className="border border-danger">{post.UserName}</td>
                      <td className="border border-danger d-flex flex-row justify-content-around">
                        <Button color="info" onClick={()=>navigate(`/post/${post.id}`)}>
                          Check Details
                          </Button>
                          <Button color="primary" onClick={()=>navigate(`/update/${post.id}`)} >Update</Button>
                          <ModalDelete buttonLabel="Delete" id={post.id}/>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ApiCaller;
