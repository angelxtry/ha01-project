import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

import { getPosts } from "../utils/Api";

const Boards = props => {
  const [posts, setPosts] = useState([]);

  const callbackData = posts => {
    // console.log(posts.length);
    setPosts(posts);
  };
  getPosts(callbackData);

  return (
    <div>
      <div className="div-boards">
        <Card>
          <CardHeader tag="h3">Posting</CardHeader>
          {posts.map(post => {
            return (
              <CardBody className="cardbody-post" key={post.id}>
                <CardTitle tag="h4">{post.title}</CardTitle>
                <CardText>{post.content}</CardText>
              </CardBody>
            );
          })}
        </Card>
      </div>
    </div>
  );
};

export default Boards;
