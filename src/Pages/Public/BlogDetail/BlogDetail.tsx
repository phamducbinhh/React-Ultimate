import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import FeatureTitle from '~/Components/FeatureTitle'
import { fetchListBlogDetails } from '~/Redux/Blogs/Blog.Slice'
import { useAppDispatch, useAppSelector } from '~/Redux/Hooks'
import BlogArea from './BlogArea'

const BlogDetail: React.FC = () => {
  const route = useParams()
  const blogID = Number(route.id)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const item = useAppSelector<any>((state) => state.blog.listBlogDetails)

  useEffect(() => {
    dispatch(fetchListBlogDetails({ id: blogID }))
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogID])

  return (
    <>
      <FeatureTitle title='Blog' page='Blog'></FeatureTitle>
      <>
        {(item || !isLoading) && <BlogArea isLoading={isLoading} currentPost={item}></BlogArea>}
        {!item && (
          <Typography
            variant='h1'
            sx={{ fontSize: '40px', textAlign: 'center', paddingTop: '100px', paddingBottom: '40px' }}
          >
            Post Not Found
          </Typography>
        )}
      </>
    </>
  )
}

export default BlogDetail
