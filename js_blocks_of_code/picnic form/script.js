const sheetName = 'Sheet1'
const scriptProp = PropertiesService.getScriptProperties()

function initialSetup () {
    const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
    const lock = LockService.getScriptLock() // Fixed typo here
    lock.tryLock(10000)

    try {
        const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
        const sheet = doc.getSheetByName(sheetName)

        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
        const nextRow = sheet.getLastRow() + 1

        const newRow = headers.map(function(header) {
            return header === 'Date' ? new Date() : e.parameter[header]
        })

        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([ newRow ])

        return ContentService
            .createTextOutput(JSON.stringify({'result': 'success', 'row': nextRow}))
            .setMimeType(ContentService.MimeType.JSON)
    } catch (err) { // Changed the variable name to avoid overwriting 'e'
        return ContentService
            .createTextOutput(JSON.stringify({'result': 'error', 'error': err}))
            .setMimeType(ContentService.MimeType.JSON)
    } finally {
        lock.releaseLock()
    }
}


AKfycby_C3pLsrVs5NWUoYfp3ElMqawArks9ZePqapRzj6LYJ0SrvfQ3r-Rz9YrXxT1T0x40
https://script.google.com/macros/s/AKfycby_C3pLsrVs5NWUoYfp3ElMqawArks9ZePqapRzj6LYJ0SrvfQ3r-Rz9YrXxT1T0x40/exec
