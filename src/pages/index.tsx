import { PostList } from "@/blog/PostList";
import { Button, Typography , Container, Box} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';

export default function Home() {
  return (
    <div>
      <Container sx={{my:3}}>
      <Box
          className=""
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: '', sm: 'center' },
            justifyContent: { xs: '', sm: 'center' },
            gap: { xs: 1, sm: 2 },
          }}
      >       
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="text.primary"
          sx={{ flexGrow: 1 , mb:0 , paddingLeft : { xs : "0px" , sm: '140px'} }}

        >
          Blog Dashboard
        </Typography>

        <Box sx={{  display: 'flex', justifyContent: { xs: 'flex-end', sm: 'flex-start' } }}>
          <Button variant="contained" startIcon={<CreateIcon />} href="/add">
            Create Blog
          </Button>
        </Box>
      </Box>
      </Container>
      <PostList/>
    </div>
  );
}
