module.exports.objectToArray = (obj, isId = false) => {
  if (isId) { 
    delete obj.id 
  }
  return Object.values(obj)
}