let nextPhoneId = 0
export const addPhone = payload => ({
  type: 'ADD_PHONE',
  id: nextPhoneId++,
  payload
})

export const fetchPhones = payload => ({
  type: 'FETCH_SUCCESS',
  payload
})
