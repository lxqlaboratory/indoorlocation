import request from '@/utils/request'

export function getdStates(data) {
  return request({
    url: '/func/web/getdStates',
    method: 'post'
  })
}
