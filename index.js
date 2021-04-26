//Артем: При нажатии на кнопку 
//Рассчитать должен выводиться объект с ключами и значениями ввода

let form = document.querySelector('.userForm');
let calculateButton = document.querySelector('.calculate-button');
let targetName = document.querySelector('.target-name');
let requiredAmount = document.querySelector('.required-amount');
let depositPercentage = document.querySelector('.deposit-percentage');
let startingAmount = document.querySelector('.starting-amount');
let ctx = document.getElementById('myChart').getContext('2d');
let termOfDeposit = document.querySelector('.deposit-term');
// import Chart from 'chart.js/auto';

class CalculateResultsObject {
    constructor(name, amount, percents, startamount) {
        this.name = name
        this.amount = amount;
        this.percents = percents;
        this.startamount = startamount;
    }
}



calculateButton.addEventListener('click', (element) => {
    element.preventDefault();
    let objOfResult = new CalculateResultsObject(targetName.value, requiredAmount.value, depositPercentage.value, startingAmount.value);
    const newSection = document.createElement('ul');
    newSection.className = 'target-card';
    newSection.innerHTML = `<li class="item"><p>Размер платежа</p><input value = ""></li>
                          <li class="item"><p>Название цели</p><input value = "${objOfResult.name}"></li>
                          <li class="item"><p>Требуемая сумма</p><input value = "${objOfResult.amount}"></li>
                          <li class="item"><p>Стартовая сумма</p><input value = "${objOfResult.startamount}"></li>
                          <li class="item"><p>Процент по вкладу</p><input value = "${objOfResult.percents}"></li>`;
    document.querySelector('.newSection').append(newSection);
    
    console.log(objOfResult);
})



let data = {
    labels: [
        'January',
        'Febrary',
        'March',
        'April',
        'May',
        'June',
        'Jule',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    datasets: [{
        label: 'My Dataset',
        data: [10, 20, 30,40],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(0, 128, 0)',
            'rgb(128, 0, 128)',
            'rgb(128, 128, 128)',
            'rgb(0, 255, 255)',
            'rgb(0, 100, 0)',
            'rgb(0, 255, 0)',
            'rgb(255, 215, 0)',
            'rgb(238, 130, 238)',
            'rgb(138 43 226)'
        ],
        // hoverOffset: 13,
        borderWidth: 2,
        borderColor: '#f11f23f3',
        borderRadius: 25
    }],

};



let myChart = new Chart(ctx, {
    type: 'pie',
    data: data
})


let updateChartValue = (input, dataOrder) => {
    input.addEventListener('input', event => {
        // console.log(event.target.value);
        // console.log(myChart[0].data.datasets.data[0]);
        console.log(data.datasets[0].data[0]);
        myChart.data.datasets[0].data[dataOrder] = Number(event.target.value);
        myChart.update();
        // console.log(data.datasets[0].data[0]);
    })
};

// termOfDeposit.oninput(() => {
//     myChart.data.dataset[0].data[dataOrder] = event.target.value;
//     myChart.update();
// })

updateChartValue(termOfDeposit, 0);
updateChartValue(requiredAmount, 1);
updateChartValue(depositPercentage, 2);
updateChartValue(startingAmount, 3);












// const chartOptions = {
//     options: {
//         responsive:true,
//         cutoutPercentage:20,
//         animation : {
//             animateScale:true
//         },
//         legend: {
//             display: true,

//             position: 'bottom'
//             },
//             labels : {
//                 fontColor: '#000'
//             }

//     }
// }


// const config = {
//     type: 'pie',
//     data: data,
//     // options: chartOptions
//   };

//   let myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
//   console.log(config)



// const data = {
//     labels: [
//       'January',
//       'Febrary',
//       'March',
//       'April',
//       'May',
//       'June',
//       'Jule',
//       'August',
//       'September',
//       'October',
//       'November',
//       'December'
//     ],
//     datasets: [{
//       label: 'My Dataset',
//       data: [300, 50, 100,300, 50, 100,300, 50, 100,300, 500, 100],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)',
//         'rgb(0, 128, 0)',
//         'rgb(128, 0, 128)',
//         'rgb(128, 128, 128)',
//         'rgb(0, 255, 255)',
//         'rgb(0, 100, 0)',
//         'rgb(0, 255, 0)',
//         'rgb(255, 215, 0)',
//         'rgb(238, 130, 238)',
//         'rgb(138 43 226)'
//       ],    
//       options: {
//         responsive: true,
//         legend: {
//           position: 'bottom'
//         },
//         plugins: {
//           datalabels: {
//             color: '#fff',
//             anchor: 'end',
//             align: 'start',
//             offset: -10,
//             borderWidth: 2,
//             borderColor: '#fff',
//             borderRadius: 25,
//             backgroundColor: (context) => {
//               return context.dataset.backgroundColor;
//             },
//             font: {
//               weight: 'bold',
//               size: '10'
//             },
//             formatter: (value) => {
//               return value + ' %';
//             }
//           }
//         }
//       },
//       hoverOffset: 13
//     }],

//   };



