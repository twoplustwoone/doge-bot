module.exports = {
  getWeekNumber,
  getYear,
  formatCurrency,
}

function getWeekNumber() {
  const now = Date.now()
  const date = new Date(+now)

  date.setHours(0, 0, 0)
  date.setDate(date.getDate() + 4 - (date.getDay() || 7))

  const yearStart = new Date(date.getFullYear(), 0, 1)
  const weekNumber = Math.ceil(((date - yearStart) / 86400000 + 1) / 7)

  return weekNumber
}

function getYear() {
  const year = new Date().getFullYear()

  return year
}

// Function to ensure that a variable that can be either a string or a number is formatted as a currency
function formatCurrency(value) {
  if (typeof value === 'string') {
    value = parseFloat(value)
  }
  return value.toFixed(2)
}
