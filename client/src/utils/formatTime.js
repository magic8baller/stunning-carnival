export const convertUnix = (string) => {
	let sunTime = new Date(string * 1000)
	return `${sunTime.getHours()}:${sunTime.getMinutes()}`
}

export const formatClockTime = (date) => {

	return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
}