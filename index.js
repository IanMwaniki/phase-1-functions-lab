function distanceFromHqInBlocks(blocks){
    if (blocks > 42){
        return blocks - 42;
    }
    else {
        return blocks - 26;
    }
}

function distanceFromHqInFeet(blocks){
 return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(blocks,feet){
    return Math.abs(feet-blocks) * 264;
}

function  calculatesFarePrice(blocks, feet){
    const myPrice =distanceTravelledInFeet(blocks, feet);
    if (myPrice < 400){
        return 0;
      }
    else if (myPrice < 2000 && myPrice > 400){
        return 0.02 * (myPrice - 400);
    }
    else if (myPrice > 2000 && myPrice <2500){
        return 25;
    }
    else if (myPrice > 2500){
        return "cannot travel that far";
    }

}
