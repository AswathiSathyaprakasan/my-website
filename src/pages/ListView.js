import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ListView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>List View</Typography>
      {posts.map(post => (
        <Card key={post.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2">{post.body}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to={`/detail/${post.id}`}>View Details</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default ListView;

