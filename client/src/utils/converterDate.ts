export const convertDateToString = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const formattedDate = `${day < 10 ? '0' + day : day}:${
    month < 10 ? '0' + month : month
  }:${year}`
  const formattedTime = `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }`

  return `${formattedDate} ${formattedTime}`
}
