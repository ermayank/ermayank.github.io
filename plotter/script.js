const dbRoot = firebase.database().ref();
const inputv1 = document.querySelector('#v1');
const inputv2 = document.querySelector('#v2');
const inputv3 = document.querySelector('#v3');
const inputDate = document.querySelector('#date');

inputv1.value=""
inputv2.value=""
inputv3.value=""

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: [],
        datasets: [
            {
                label: 'v1',
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'darkblue',
                data: [],
                lineTension:0.1
            },
            {
                label: 'v2',
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'darkslategray',
                data: [],
                lineTension:0.1
            },
            {
                label: 'v3',
                backgroundColor: 'rgba(0,0,0,0)',
                borderColor: 'brown',
                data: [],
                lineTension:0.1
            }
        ]
    },
    // Configuration options go here
    options: {
        maintainAspectRatio: false,
    }
});

const addEntry = (v1,v2,v3,date) =>{
    if(!date){
        date=new Date();
        date=date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
    }
    let newData={
        v1,
        v2,
        v3
    }
    dbRoot.child(date).set(newData);
}

const formatDate = (input) => {
    input=input.split('-');
    input=input[0]+'/'+parseInt(input[1])+'/'+parseInt(input[2]);
    return input;
}

document.querySelector("#submit").addEventListener('click',(e)=>{
    e.preventDefault();
    let v1=parseInt(inputv1.value || 0);
    let v2=parseInt(inputv2.value || 0);
    let v3=parseInt(inputv3.value || 0);
    let today = new Date();
    today=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let date=document.querySelector('#date').value || today;
    addEntry(v1,v2,v3,formatDate(date));
    inputv1.value="";
    inputv2.value="";
    inputv3.value="";
})

dbRoot.on('value',snap=>{
    const entry=snap.val();
    let tv1=[];
    let tv2=[];
    let tv3=[];
    let tdates=[];
    for(year in entry){
        for(month in entry[year]){
            for(day in entry[year][month]){
                tdates.push(day+'/'+month+'/'+year) 
                tv1.push(entry[year][month][day].v1)
                tv2.push(entry[year][month][day].v2)
                tv3.push(entry[year][month][day].v3)
            }
        }
    }
    chart.data.datasets[0].data=tv1;
    chart.data.datasets[1].data=tv2;
    chart.data.datasets[2].data=tv3;
    chart.data.labels=tdates;
    chart.update();
})