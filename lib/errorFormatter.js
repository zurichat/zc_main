module.exports = errorObject => {
  const details = errorObject.details
  const errorMessagesArray = details.map(detail => {
    return detail.message
  })
  return errorMessagesArray
}
