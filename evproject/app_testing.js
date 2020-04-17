var ctx, timeStamp, myChart, tfData, actualData, houses, newData;

timeStamp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];


document.querySelector('.btn-submit').addEventListener('click', function(){

    tfData = document.getElementById('tf-data').value;

    tfData = tfData - (0.1*tfData);

    actualData = [tfData*0.3 , tfData*0.25,tfData*0.22,tfData*0.2,tfData*0.15,tfData*0.2,tfData*0.23,tfData*0.28,tfData*0.35,tfData*0.45,tfData*0.60,tfData*0.7,tfData*0.9,tfData*0.95,tfData*0.95,tfData*0.9,tfData*0.8,tfData*0.7,tfData*0.6,tfData*0.7,tfData*0.75,tfData*0.7,tfData*0.65,tfData*0.55,];


// PLOT ACTUAL LOAD CURVE

ctx = document.getElementById('myChart').getContext('2d');
myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: timeStamp,
    datasets: [{
        label: 'Load Duration curve' ,
        data: actualData,
        pointBackgroundColor: 'gray',
            pointBorderColor: 'gray',
        backgroundColor:'rgba(255,255,255,0)',
        borderWidth: 3,
        borderColor:'#c6ca53'
    }]
},
options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
// ======= END LOAD CURVE
    console.log(tfData);
    console.log(actualData);
    
});

document.querySelector('.btn-ev').addEventListener('click', function(){
   

    tfData = document.getElementById('tf-data').value;

    tfData = tfData - (0.1*tfData);

    actualData = [tfData*0.3 , tfData*0.25,tfData*0.22,tfData*0.2,tfData*0.15,tfData*0.2,tfData*0.23,tfData*0.28,tfData*0.35,tfData*0.45,tfData*0.60,tfData*0.7,tfData*0.9,tfData*0.95,tfData*0.95,tfData*0.9,tfData*0.8,tfData*0.7,tfData*0.6,tfData*0.7,tfData*0.75,tfData*0.7,tfData*0.65,tfData*0.55,];

    houses = document.getElementById('houses').value;
    houses = houses*0.75;

    newData = [tfData*0.3 , tfData*0.25,tfData*0.22,tfData*0.2,tfData*0.15,tfData*0.2,tfData*0.23,tfData*0.28,tfData*0.35,tfData*0.45,tfData*0.60,tfData*0.7,tfData*0.9,tfData*0.95,tfData*0.95,tfData*0.9,tfData*0.8,tfData*0.7,(tfData*0.6 + houses),(tfData*0.7 + houses),(tfData*0.75 + houses),(tfData*0.7 + houses),tfData*0.65,tfData*0.55,];
    


    ctx = document.getElementById('myChart-ev').getContext('2d');
myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: timeStamp,
    datasets: [{
        label: 'Load Duration curve during EV charging' ,
        data: newData,
        pointBackgroundColor: 'gray',
            pointBorderColor: 'gray',
        backgroundColor:'rgba(255,255,255,0)',
        borderWidth: 3,
        borderColor:'#c6ca53'
    }]
},
options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
// ======= END LOAD CURVE
});

document.querySelector('.btn-ev-algo').addEventListener('click', function(){

    tfData = document.getElementById('tf-data').value;

    tfData = tfData - (0.1*tfData);

    actualData = [tfData*0.3 , tfData*0.25,tfData*0.22,tfData*0.2,tfData*0.15,tfData*0.2,tfData*0.23,tfData*0.28,tfData*0.35,tfData*0.45,tfData*0.60,tfData*0.7,tfData*0.9,tfData*0.95,tfData*0.95,tfData*0.9,tfData*0.8,tfData*0.7,tfData*0.6,tfData*0.7,tfData*0.75,tfData*0.7,tfData*0.65,tfData*0.55,];

    houses = document.getElementById('houses').value;
    houses = houses*0.75;

    newData = [(tfData*0.3 + houses) , (tfData*0.25 + houses),(tfData*0.22 + houses),(tfData*0.2 + houses),(tfData*0.15 + houses) ,(tfData*0.2 + houses) ,tfData*0.23,tfData*0.28,tfData*0.35,tfData*0.45,tfData*0.60,tfData*0.7,tfData*0.9,tfData*0.95,tfData*0.95,tfData*0.9,tfData*0.8,tfData*0.7,tfData*0.6,tfData*0.7,tfData*0.75,tfData*0.7,tfData*0.65,tfData*0.55,];
    


    ctx = document.getElementById('myChart-ev-algo').getContext('2d');
myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: timeStamp,
    datasets: [{
        label: 'Load Duration curve during EV charging' ,
        data: newData,
        pointBackgroundColor: 'gray',
            pointBorderColor: 'gray',
        backgroundColor:'rgba(255,255,255,0)',
        borderWidth: 3,
        borderColor:'#c6ca53'
    }]
},
options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
});
// ======= END LOAD CURVE


});