function mostrarFormulario() {
  const html = HtmlService.createHtmlOutputFromFile("formulario-sugerencia")
    .setWidth(500)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, "Formulario de Sugerencias");
}

function guardarSugerencia(data) {
  const hoja =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sugerencias");
  if (!hoja) {
    throw new Error('La hoja "Sugerencias" no existe.');
  }

  hoja.appendRow([
    "",
    new Date(),
    data.tipoSugerencia,
    data.carrera || "",
    data.sugerencia,
    data.contacto || "",
  ]);
}
