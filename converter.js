const fs = require('fs');
const path = require('path');
const html_to_pdf = require('html-pdf-node');
const colors = require('colors');

const exportFileName = 'cv.pdf';
const exportPath = 'exports';

try {
  const exportDir = path.resolve(__dirname, exportPath);
  
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir);
  }
  
  const fullFilePath = path.join(exportDir, exportFileName);
  const content = fs.readFileSync(path.resolve(__dirname, 'template', 'cv.html')).toString();
  const options = { format: 'A4', path: fullFilePath, printBackground: true };
  const file = { content };

  html_to_pdf.generatePdf(file, options).then(() => {
    console.log(`Your PDF file was generated in the following path: ${fullFilePath}`.green.bold.underline);
  });
} catch (err) {
  console.error(err)
}
