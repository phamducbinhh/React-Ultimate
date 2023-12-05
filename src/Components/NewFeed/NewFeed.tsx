import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import './NewFeed.css'
import Skeleton from 'react-loading-skeleton'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import { fetchListBlog } from '~/Redux/Blogs/Blog.Slice'

const NewFeed = () => {
  const dispatch = useAppDispatch()
  const blogs = useAppSelector<any[]>((state) => state.blog.listBlog)
  const isLoading = useAppSelector<any>((state) => state.blog.isLoading)

  useEffect(() => {
    dispatch(fetchListBlog())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Box className='new-feed'>
      <Container sx={{ maxWidth: { md: 1755 } }}>
        <Box className='newsfeed-wrapper'>
          <Box sx={{ textAlign: 'center' }} className='area-title'>
            <h2>News Feeds</h2>
            <p>Check it out every updates</p>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {isLoading && <NewFeedSkeleton />}
              {!isLoading &&
                blogs.slice(0, 3).map((blog, index) => {
                  const comments = blog.comments
                  const totalComments = comments && Object.keys(comments).length
                  return (
                    <Grid key={index} item lg={4} xs={12}>
                      <Box className='new-feed-item'>
                        <Box className='item-image'>
                          <Link to={`/blogs/${index}`}>
                            <img src={blog.newThumb} alt='thumb' />
                          </Link>
                        </Box>
                        <Box className='item-meta'>
                          <span>
                            <i className='far fa-calendar-check'></i>
                            September 15, 2018
                          </span>
                          <span>
                            <a href='#!'>
                              <i className='far fa-user'></i> MD.
                            </a>
                          </span>
                          <span>
                            <a href='#!'>
                              <i className='far fa-comments'></i>{' '}
                              {totalComments !== undefined ? totalComments.toString().padStart(2, '0') : 0} Comments
                            </a>
                          </span>
                        </Box>
                        <h2 className='hover-title red-color'>
                          <Link to={`/blogs/${index}`}>{blog.title}</Link>
                        </h2>
                        <p>{blog.body}</p>
                      </Box>
                    </Grid>
                  )
                })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const NewFeedSkeleton = () => {
  return Array(3)
    .fill(0)
    .map((_, index) => {
      return (
        <Grid key={index} item lg={4} xs={12}>
          <Box className='new-feed-item'>
            <Box className='item-image'>
              <Skeleton height={200} />
            </Box>
            <Box sx={{ marginBottom: '15px' }}>
              <Skeleton style={{ marginRight: '15px' }} width='30%' inline={true} />
              <Skeleton style={{ marginRight: '15px' }} width='30%' inline={true} />
              <Skeleton width='30%' inline={true} />
            </Box>
            <Box sx={{ marginBottom: '25px' }}>
              <Skeleton height={60} />
            </Box>
            <p>
              <Skeleton count={4} />
            </p>
          </Box>
        </Grid>
      )
    })
}

export default NewFeed
