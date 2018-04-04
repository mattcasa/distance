var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){

    return ((p2.x-p1.x)**2+(p2.y-p1.y)**2)**0.5;    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.forEach(function(item){
        item.distance = exercise.distance(item, newPoint)
    });

    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //------------------- 
    return 'Error: 3rd function not implemented';    
};

module.exports = exercise;
