// Your code here
const createEmployeeRecord = (array) => {
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

const createEmployeeRecords = (array) => {
    const employeeRecords = array.map(employeeData => {
        const employee = {
            firstName: employeeData[0]
        }
        return employee
    })
    return employeeRecords
}

const createTimeInEvent = (employeeObj, dateTimeString) => {
    const timeInEvent = {
        type: 'TimeIn',
        date: dateTimeString.slice(0, 10),
        hour: parseInt(dateTimeString.slice(11))
    }
    employeeObj.timeInEvents.push(timeInEvent)
    return employeeObj
}

const createTimeOutEvent = (employeeObj, dateTimeString) => {
    const timeOutEvent = {
        type: 'TimeOut',
        date: dateTimeString.slice(0, 10),
        hour: parseInt(dateTimeString.slice(11))
    }
    employeeObj.timeOutEvents.push(timeOutEvent)

    return employeeObj
}

const hoursWorkedOnDate = (employeeObj, date) => {
    console.log('employeeObj', employeeObj)
    const timeInArray = employeeObj.timeInEvents.filter(timeInObj => timeInObj.date === date)
    const timeOutArray = employeeObj.timeOutEvents.filter(timeOutObj => timeOutObj.date === date)
    const timeIn = timeInArray[0].hour
    const timeOut = timeOutArray[0].hour
    const totalHours = timeOut - timeIn
    return totalHours / 100
}

const wagesEarnedOnDate = (employee, date) => {
    const hours = hoursWorkedOnDate(employee, date)
    return hours * employee.payPerHour
}

const allWagesFor = (employee) => {
    let wages = []
    for (let i = 0; i < employee.timeInEvents.length; i++) {
        const wagesForTheDay = wagesEarnedOnDate(employee, employee.timeInEvents[i].date)
        wages.push(wagesForTheDay)
    }
    const totalWages = wages.reduce((wage1, wage2) => wage1 + wage2)
    return totalWages
}
/*
Given an array of multiple employees. CalculatePayroll aggregates all the dates' wages and adds them together


psudo code:

*/
const calculatePayroll = (array) => {

}