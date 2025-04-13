'use client'

import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useGetBlogCountQuery, useGetBlogListQuery } from "@/services";
import Link from 'next/link';
import { Loader } from '@/components/Loader';
import { useCallback, useRef, useState } from 'react';

export const PostList = () =>{
    const page = 1;
    const observer = useRef<IntersectionObserver | null>(null);;
    const [limit,setLimit] = useState<number>(10);
    const [hasMore,setHasMore] = useState<boolean>(false);
    const { data : totalData } = useGetBlogCountQuery(undefined,
      {
        pollingInterval: 120000,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        //auto refetching the api 
      }
    );
    const { data, error, isLoading , isFetching } = useGetBlogListQuery({page,limit},
      {
        pollingInterval: 120000,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        //auto refetching the api 
      }
    );

    const loadMoreRef = useCallback((node: HTMLDivElement | null) => {
      if (isFetching) return;
  
      if (observer.current) observer.current.disconnect();
  
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !hasMore) {
          if (totalData && totalData.length > limit) {
            setLimit(prev => prev + 10);
          } else {
            setHasMore(true);
          }
        }
      });
  
      if (node) observer.current.observe(node);
    }, [isFetching, hasMore, totalData, limit]);


    if (isLoading) return <Loader/>;
    if (error) return <div>Error loading posts!</div>;

  return(
    <Container>
      <Grid container spacing={2}>
        {Array.isArray(data) && data.length > 0 && data?.map((post) => (    
          <Grid item size={{ xs: 12, sm: 4, md: 4 }} key={post.id}>
            <Card sx={{width:'100%'}}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{post.title}</Typography>
                <Typography variant="subtitle2" paragraph>{post?.author}</Typography>
                <Typography variant="body2" color='text.secondary' paragraph>{post?.excerpt}</Typography>
                <Button
                  component={Link}
                  href={{
                      pathname: '/detail',
                      query: { id: post.id },
                    }}
                  variant="contained"
                  color="primary"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
    
      <div ref={loadMoreRef} style={{ height: '20px' }} />
     
      {
        hasMore && 
          <Typography variant="h6" align='center' paragraph>you have reached the limit</Typography>
      }

      {isFetching && <Loader />}
  </Container>
  )
}