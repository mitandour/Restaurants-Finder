export const toSearchString = (str) => {
    //  replace all whitespaces (&) and upper case characters (to lowercase)
   return str ? str.toLowerCase().split(' ').join('-') : '';
}

export const fromSearchString = (str) => {
  if (str) {
    //  replace all & to whitespaces and turn each letter to Uppercase
    const words = str.split('-');
    const original = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    console.log(original.join(' '));
    return original.join(' ');
  }
}