export const getDate = () => {
    const dateTime = new Date().toString().split(" ")
    return dateTime[2] + " " + dateTime[1] + " " + dateTime[3]
}
