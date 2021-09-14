const formatString = (str) => {
  // trim all whitespaces and replace uppercase chars to lowercase
  //return str ? str.toLowerCase().replace(/\s/g, '') : '';
     return str ? str.toLowerCase().split(' ').join('-') : '';
}

module.exports = {
  formatString
}


