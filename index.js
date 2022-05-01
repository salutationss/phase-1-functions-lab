function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42
    } else return 42 - block
};

distanceFromHqInBlocks(block);

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
};


function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264;
    }
};

function calculatesFarePrice(start, destination) {
    const travel = distanceTravelledInFeet(start, destination);

    if (travel <= 400) {
        return 0;
    } else if (travel > 400 && travel <= 2000) {
        return .02 * (travel - 400);
    } else if (travel > 2000 && travel < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}