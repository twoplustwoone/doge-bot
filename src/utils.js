module.exports = {
  getWeekNumber,
  getYear,
  formatCurrency,
}

function getWeekNumber(date = new Date()) {
  date.setHours(0, 0, 0)
  date.setDate(date.getDate() + 4 - (date.getDay() || 7))

  const yearStart = new Date(date.getFullYear(), 0, 1)
  const weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7)

  return weekNumber
}

// Function to return current year
function getYear(date = new Date()) {
  const year = date.getFullYear()
  return year
}

// Function to ensure that a variable that can be either a string or a number is formatted as a currency
function formatCurrency(value) {
  console.log('formatCurrency...', value)
  if (typeof value === 'string') {
    if (isNaN(value)) {
      throw Error('Invalid value')
    }
    value = parseFloat(value)
    console.log('value is string...', value)
  }
  return `$${value.toFixed(2)}`
}
