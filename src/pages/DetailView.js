import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent } from '@mui/material';

const DetailView = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      {post ? (
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>{post.title}</Typography>
            <Typography variant="body1">{post.body}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Container>
  );
};

export default DetailView;
