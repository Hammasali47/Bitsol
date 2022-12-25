import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Spinner} from "reactstrap"

const Post = () => {
  const data1 = useParams();

  console.log("data1",data1)

  const fetchData = async () => {
    const data = await fetch(`http://localhost:3004/posts/${data1.id}`);
    return data.json();
  };

  const query = useQuery("postbyid", fetchData);

  console.log("query",query)

  return (
    <div>
      {query.isLoading ?
        <Spinner size="sm" color="primary">
          Loading....
        </Spinner>
       : 
       query.isSuccess ?
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">{query.data.UserName}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {query.data.id}
            </CardSubtitle>
            <CardText>
              {query.data.FirstName}
              {query.data.LastName}
            </CardText>
          </CardBody>
        </Card>
            :null
      }
    </div>
  );
};

export default Post;
