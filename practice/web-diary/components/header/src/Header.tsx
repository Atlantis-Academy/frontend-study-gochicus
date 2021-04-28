import React                from 'react'
import { useIntl }          from 'react-intl'

import { Row }              from '@ui/layout'
import { Space, Text }      from '@ui/text'
import { useFavouredCount } from '@store/favoured-count'
import { usePostData }      from '@store/post-data'

import messages             from '../messages/messages'
import { counter }          from '../actions'

export const Header = () => {
  const intl = useIntl()
  const [favoured] = useFavouredCount()
  const [postData] = usePostData()
  return (
    <Row justifyContent='space-between' alignItems='flex-end'>
      <Text fontSize='25px'>{counter(postData)}</Text>
      <Space />
      <Text fontSize='25px'>{intl.formatMessage(messages.postCount)}</Text>
      <Space />
      <Text fontSize='25px'>{favoured}</Text>
    </Row>
  )
}
