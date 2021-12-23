module.exports.getData = (file) => {
  const fs = require('fs')
  try { 
    const json = fs.readFileSync(file, 'utf8');
    return JSON.parse(json);
  } catch (e) {
    console.log('Data error...') 
  }
}