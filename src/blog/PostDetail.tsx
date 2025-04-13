import { Loader } from '@/components/Loader';
import { useGetBlogByIdQuery } from '@/services';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Alert,
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

export function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useGetBlogByIdQuery(Number(id));

  if (isLoading) return <Loader />;
  if (error) return <Alert severity="error">Error loading post!</Alert>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" color="text.primary" gutterBottom align="center">
        Blog Detail
      </Typography>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            {data?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            sx={{ fontStyle: 'italic' }}
          >
            By {data?.author} |
            {new Date(Number(data?.date)).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.primary' }}>
            {data?.excerpt}
          </Typography>
          <Typography variant="body1" sx={{ mt: 3, color: 'text.secondary' }}>
            {data?.body}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
