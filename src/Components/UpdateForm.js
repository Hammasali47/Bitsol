import React,{useState,useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Spinner } from 'reactstrap';
import { useMutation,useQuery } from 'react-query';
import { useNavigate,useParams } from 'react-router-dom';


const Form1 = () => {

     const data1 = useParams();
    const navigate = useNavigate();

    const [formData,setFormData] = useState({})
    // const [updateId,setUpdateId]=useState(data1.id);

    const fetchData = async () => {
      const data = await fetch(`http://localhost:3004/posts/${data1.id}`);
      return data.json();
    };

    useEffect(()=>{
      fetchData()
    },[data1.id])

    const mutation = useMutation(async newPost=>{

        const rawResponse = await fetch(`http://localhost:3004/posts/${data1.id}`,{
            method:"put",
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



        let obj ={
            email:email.value,
            password:password.value,
            FirstName:firstname.value,
            LastName:lastname.value,
            UserName:username.value,
            About:text.value,
            Picture:image.value
        }

        mutation.mutate(obj)



        
    }

    const query = useQuery("update", fetchData);
    console.log("out",formData,query.data)
   if(Object.keys(formData).length===0 && query?.data?.field){
    setFormData(...formData,query.data)
    console.log("form",formData)
   }

   
    return (
        <div className='m-auto my-5 p-5 border border-info w-50'>

            {query.isLoading ? (
        <Spinner size="sm" color="primary">
          Loading....
        </Spinner>
      ) : (
        query.isSuccess?    
        <Form onSubmit={handleSubmit}>
            <Label tag="h4">Signup Form</Label>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" defaultValue={formData.email}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" defaultValue={formData.password}/>
          </FormGroup>
          
          <FormGroup>
            <Label for="FirstName">FirstName</Label>
            <Input type="text" name="firstname" id="FirstName" placeholder="Enter your firstname" defaultValue={formData.FirstName} />
          </FormGroup>
          <FormGroup>
            <Label for="LastName">LastName</Label>
            <Input type="text" name="lastname" id="LastName" placeholder="Enter your lastname" defaultValue={formData.LastName}/>
          </FormGroup>
          <FormGroup>
            <Label for="UserName">UserName</Label>
            <Input type="text" name="username" id="UserName" placeholder="Enter your username" defaultValue={formData.UserName}/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">About</Label>
            <Input type="textarea" name="text" id="exampleText" defaultValue={formData.About}/>
          </FormGroup>
          <FormGroup>
            <Label for="Image">Photo</Label>
            <Input type="file" name="image" id="Image" />
            <FormText color="muted">
              Please Select your Picture.
            </FormText>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" />{' '}
              I accept terms
            </Label>
          </FormGroup>
          <Button type='submit'>Submit</Button>
        </Form>
        :null
// }
)}
        </div>
      );

}
 
export default Form1;