import * as types from '../constants/ActionTypes'

export const addItem = (content) => ({ type: types.add,content:content})
export const changeCheckStatus = (id) => ({ type: types.changeCheckStatus,id:id})
export const changeTab = (status) => ({ type: types.changeTab,status:status})
export const changeContent = (id, content) => ({ type: types.changeContent,id:id,content:content})
