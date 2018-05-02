const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let size;
	let startpoints;
	let distance;
	let points;

	
	//hillsize
	if (hillSize >= 75 && < 110) {
        size = 'normal';
    } else if (hillSize >= 110 && < 185) {
        size = 'big';
    } else if (hillSize >= 185) {
        size = 'mamut';
    }

    if (size = 'normal' || 'big') {
    	startpoints = 60;
    else {
    	startpoints = 120;
    	}
    }

    //distane
	let distancepoints = distance - kPoint;

	//points
    switch(size) {
    	case 'normal':
    		points = startpoints + (distancepoints * 2)
    		break;
    	case 'big':
    		points = startpoints + (distancepoints * 1.8)
    		break;
    	case 'mamut':
    		points = startpoints + (distancepoints * 1.3)
    }

    return points;

};

module.exports = calculateDistancePoints;