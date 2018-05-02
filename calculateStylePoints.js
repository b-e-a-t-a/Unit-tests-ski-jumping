const calculateStylePoints = (styleNotes) => {

	//const stylesNotes = [16,17,16.5,16,18];

	let max = Math.max(...stylesNotes);
  	let min = Math.min(...stylesNotes);

  return styleNotes.reduce((acc,cur) => acc + cur, 0) - (max + min) 
};

module.exports = calculateStylePoints;