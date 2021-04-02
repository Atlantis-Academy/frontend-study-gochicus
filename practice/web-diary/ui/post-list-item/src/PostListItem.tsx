import React           from 'react'
import styled          from '@emotion/styled'

import { Button }      from '../../button'
import { Box, Layout } from '../../layout'

const Label = styled('span')(() => ({
  display: 'block',
  lineHeight: '35px',
  cursor: 'pointer',
  userSelect: 'none',
  transition: ' 0.5s all',
}))
export const PostListItem: any = ({ children }: any) => {
  return (
    <Layout justifyContent='space-around'>
      <Box minWidth='100px'>
        <Label>{children} </Label>
      </Box>
      <Box justifyContent='space-around' alignItems='center' minWidth='100px'>
        <Button color='red'>
          <i className='fa fa-star' />
        </Button>
        <Box flexBasis='30px' />
        <Button color='yellow'>
          <i className='fa fa-trash-o' />
        </Button>
        <Box flexBasis='30px' />
        <i className='fa fa-heart' />
      </Box>
    </Layout>
  )
}
