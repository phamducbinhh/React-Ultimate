import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import Blockquote from '~/Components/Blockquote'
import ButtonApp from '~/Components/ButtonApp'
import FeatureTitle from '~/Components/FeatureTitle'
import Pagination from '~/Components/Pagination'
import Widget from '~/Components/Widget/Widget'
import { fetchListBlog } from '~/Redux/Blogs/Blog.Slice'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import './Blogs.css'

const Blogs: React.FC = () => {
  const dispatch = useAppDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(2)
  const blogs = useAppSelector<any[]>((state) => state.blog.listBlog)
  const isLoading = useAppSelector<any>((state) => state.blog.isLoading)

  useEffect(() => {
    dispatch(fetchListBlog())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <FeatureTitle title='Blog' page='Blog' />
      <Box className='blogs-page' sx={{ paddingTop: '100px', paddingBottom: '60px' }}>
        <Container sx={{ maxWidth: { md: 1200 } }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>
              <Grid item md={8} xs={12}>
                {isLoading &&
                  Array(2)
                    .fill(0)
                    .map((_, index) => {
                      return <BlogsSkeleton key={index} />
                    })}
                {!isLoading &&
                  currentPosts.map((blog, index) => {
                    const comments = blog.comments
                    const totalComments = comments && Object.keys(comments).length
                    return (
                      <Box key={index} className='post-item'>
                        <Box className='box-thumb'>
                          <Link to={`/blog/${blog.id - 1}`}>
                            <img src={blog.postThumb} alt='thumb' />
                          </Link>
                        </Box>
                        <Box className='box-text'>
                          <Box className='item-meta'>
                            <span>
                              <i className='far fa-calendar-check'></i>
                              September 15, 2018
                            </span>
                            <span>
                              <a href='#!'>
                                <i className='far fa-user'></i> MD. SALIM RANA
                              </a>
                            </span>
                            <span>
                              <a href='#!'>
                                <i className='far fa-comments'></i>{' '}
                                {totalComments !== undefined ? totalComments.toString().padStart(2, '0') : 0} Comments
                              </a>
                            </span>
                          </Box>
                          <h3 className='post-title hover-title red-color'>
                            <Link to={`/blog/${blog.id - 1}`}>{blog.title}</Link>
                          </h3>
                          <p>{blog.body}</p>
                          <ButtonApp
                            value='Read More'
                            classColor='orange-btn'
                            direction={`/blog/${blog.id - 1}`}
                          ></ButtonApp>
                        </Box>
                      </Box>
                    )
                  })}
                <Blockquote></Blockquote>
                <Pagination itemsPerPage={postsPerPage} total={blogs.length} paginate={paginate} />
              </Grid>
              <Widget></Widget>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export const BlogsSkeleton = () => {
  return (
    <Box className='post-item'>
      <Skeleton height={478} />
      <Box sx={{ marginTop: '25px' }} className='product-content'>
        <Box className='pro-cat mb-10'>
          <Skeleton />
        </Box>
        <Skeleton />
        <Box className='product-meta'>
          <Box className='pro-price'>
            <Skeleton />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Blogs
