var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayOne").innerHTML = days[d.getDay()];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayTwo").innerHTML = days[d.getDay() + 1 ];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayThree").innerHTML = days[d.getDay() + 2 ];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayFour").innerHTML = days[d.getDay() + 3 ];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("dayFive").innerHTML = days[d.getDay() + 4 ];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("daySix").innerHTML = days[d.getDay() - 2 ];

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("daySeven").innerHTML = days[d.getDay() - 1  ];
