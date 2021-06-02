const baseUrl = 'http://aca-va-la-ip-del-dispositivo.com'
const roomMappings = {
  'cocina': 1,
  'sala': 2,
  'comedor': 3,
  'alcoba': 4
}

export const toggleLight = (room) => {
  return fetch(`${baseUrl}/toggleLight/${roomMappings[room]}`, { method: 'post' })
}

export const toggleCurtain = () => {
  return fetch(`${baseUrl}/toggleCurtain`, { method: 'post' })
}

export const queryAlarmStatus = () => {
  return fetch(`${baseUrl}/queryAlarmStatus`, { method: 'get' })
  // .then(stream => stream.json())
  // .then(() => {
  //   console.log(`Light for room ${room} toggled successfully!`)
  // })
  // .catch(error => console.error(error))
}

export const queryTemperatureStatus = () => {
  return fetch(`${baseUrl}/queryTemperatureStatus`, { method: 'get' })
  // .then(stream => stream.json())
  // .then(() => {
  //   console.log(`Light for room ${room} toggled successfully!`)
  // })
  // .catch(error => console.error(error))
}