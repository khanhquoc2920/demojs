// let rads = []; 
        
//             function checkrand(min,max) {
//                 let rand = Math.floor((Math.random() * (max - min)) + min);
//                 if (!rads.includes(Math.floor(Math.random() * (max - min)) + min)) {
//                     rads.push(rand);
//                 }
//                 else {
//                     checkrand(min,max);
//                 }

//             }
//             function addrand(min,max) {
//                 for (let i = 0; i < 8; i++) {
//                 checkrand(min,max);
//                 }
//                 document.getElementById("addrand").style.display="none";
//             }
//             switch (key) {
//                 case value:
                    
//                     break;
            
//                 default:
//                     break;
//             }
//             function checkve(min,max ){
//                 let rand = Math.floor((Math.random() * (max - min)) + min);
//                 switch (rand) {
//                     case rads[0]:
//                         console.log("giai dac biet");
//                         document.getElementById("giaidacbiet").innerHTML = " "  +  rads[0];
//                         break;
//                     case rads[1]:
//                         console.log("giai nhat");
//                         document.getElementById("giainhat").innerHTML = " "  +  rads[1];
//                         break;
//                     case rads[2]:
//                         console.log("giai nhi");
//                         document.getElementById("giainhi").innerHTML = " "  +  rads[2];
//                         break;
//                     case rads[3]:
//                         console.log("giai ba");
//                         document.getElementById("giaiba").innerHTML = " "  +  rads[3];
//                         break;
//                     case rads[4]:
//                         console.log("giai tu");
//                         document.getElementById("giaitu").innerHTML = " "  +  rads[4];
//                         break; 
//                     case rads[5]:
//                         console.log("giai nam");
//                         document.getElementById("giainam").innerHTML = " "  +  rads[5];
//                         break;
//                     case rads[6]:
//                         console.log("giai sau");
//                         document.getElementById("giaisau").innerHTML = " "  +  rads[6];
//                         break;
//                     case rads[7]:
//                         console.log("giai bay");
//                         document.getElementById("giaibay").innerHTML = " "  +  rads[7];
//                         break;      
//                     default:
//                         break;
//                 }

                
//             }

            var numrad ;
            function add(){
                numrad = setInterval(rand, 100);
                document.getElementById("addrand").style.display="none";
            }


            function rand() {
                document.getElementById("giaidacbiet").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;
                document.getElementById("giainhat").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;
                document.getElementById("giainhi").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;
                document.getElementById("giaiba").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;
                document.getElementById("giaitu").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;
                document.getElementById("giainam").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;
                document.getElementById("giaisau").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;
                document.getElementById("giaibay").innerHTML =
                Math.floor(Math.random() * (300 - 100) ) + 100;

            }
            function stopRad() {
            clearInterval(numrad);
            
            }
                        

            function startTime() {
                const date = new Date();
                document.getElementById("demo").innerHTML = date.toLocaleTimeString();
                setTimeout(function() {startTime()}, 1000);
              }
            document.querySelector('jsuites-calendar').addEventListener('onchange', function(e) {
                console.log('New value: ' + e.target.value);
            });
            document.querySelector('jsuites-calendar').addEventListener('onclose', function(e) {
                console.log('Calendar is closed');
            });