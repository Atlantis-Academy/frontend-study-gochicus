import React            from 'react'
import styled           from '@emotion/styled'

import { PostListItem } from '@ui/post-list-item'

const List = styled('div')(() => ({
  marginTop: '10px',
  padding: '20px 35px 10px 35px',
  minWidth: '300px',
}))

const PostList: any = ({ data }: any) => {
  const elements = data.map((item: any) => {
    return (
      <List key={item.id}>
        <PostListItem> {item.post}</PostListItem>
      </List>
    )
  })
  return elements
}

export default PostList
