// var d = new Date();
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayOne").innerHTML = days[d.getDay()];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayTwo").innerHTML = days[d.getDay() + 1 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayThree").innerHTML = days[d.getDay() + 2 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayFour").innerHTML = days[d.getDay() + 3 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("dayFive").innerHTML = days[d.getDay() + 4 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("daySix").innerHTML = days[d.getDay() - 2 ];

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.getElementById("daySeven").innerHTML = days[d.getDay() - 1  ];


$(document).ready(function(){
 
				$('.lightbox').click(function(){
					console.warn("CLICK")
					//$('.backdrop, .box').animate({'opacity':'.5'}, 100, 'linear');
					$('.backdrop').show();
					$('.box').animate({'opacity':'1.00'}, 100, 'linear');
					$('.backdrop, .box').css('display', 'block');
				});
 
				$('.close').click(function(){
					close_box();
				});
 
				$('.backdrop').click(function(){
					close_box();

				});
				 $('#configreset').click(function(){
          			  $('#configform')[0].reset();
 });

 
			});
 
			function close_box()
			{
				// $('.backdrop, .box').animate({'opacity':'0'}, 100, 'linear', function(){
					$('.backdrop, .box').css('display', 'none');
				// });
			}

			// function getData(){

			// 	$.get("assets/js/partners.json").done(function(data){
			// 		console.log( data );
			// 	})
			// }
			var partners =  [
	{
    "index": 0,
    "isActive": true,
    "style": "Toprope, Lead, Bouldering",
    "name": "Soto Gaines",
    "gender": "male",
    "about": "Exercitation laboris esse cupidatat irure. Consectetur enim et veniam laborum dolore commodo velit magna proident proident laboris laborum occaecat ad. Officia et ipsum quis do ex elit commodo cillum nulla.\r\n",
    "favoriteGym": "Brooklyn Boulders Queensbridge"
  },
  {
    "index": 1,
    "isActive": true,
    "style": "Bouldering",
    "name": "Anthony Whitehead",
    "gender": "male",
    "about": "Nostrud elit culpa commodo quis proident consequat proident labore. Laboris deserunt nulla ullamco magna. Aliqua duis dolore minim aute id amet fugiat pariatur amet ipsum.\r\n",
    "favoriteGym": "The Cliffs LIC"
  },
  {
    "index": 2,
    "isActive": true,
    "style": "Bouldering",
    "name": "Santana Watts",
    "gender": "male",
    "about": "Quis minim cillum dolor quis in sint proident adipisicing sunt magna. Eiusmod labore anim labore qui commodo fugiat. Exercitation irure Lorem et voluptate mollit laboris eiusmod magna. Mollit eiusmod pariatur ut qui. Amet qui sunt nostrud laborum minim minim sint reprehenderit dolor consequat elit.\r\n",
    "favoriteGym": "Everyday Athlete"
  },
  {
    "index": 3,
    "isActive": false,
    "style": "Toprope, Bouldering",
    "name": "Michael Nichols",
    "gender": "female",
    "about": "Veniam nulla elit velit ullamco laboris sunt reprehenderit adipisicing fugiat magna ullamco. Ullamco irure ex occaecat minim officia. Amet elit eiusmod nisi qui. Amet ea sit occaecat cupidatat culpa sunt ex consequat fugiat ipsum excepteur. Voluptate fugiat pariatur elit sunt ut eu occaecat enim velit pariatur deserunt et. Occaecat ullamco officia dolor aute tempor esse irure ad mollit consectetur proident dolor.\r\n",
    "favoriteGym": "Brooklyn Boulders"
  },
  {
    "index": 4,
    "isActive": true,
    "style": "Toprope, Bouldering",
    "name": "Tia Webb",
    "gender": "female",
    "about": "Aliqua sit in eiusmod nisi. Do culpa eiusmod sunt Lorem deserunt veniam qui. Irure cillum consequat cupidatat fugiat irure labore aliquip. Veniam laborum sunt dolor tempor ea adipisicing. Et consectetur elit cupidatat veniam Lorem sint et dolore consequat eu fugiat. Esse cupidatat qui et sit cupidatat ea et eiusmod magna tempor adipisicing ad.\r\n",
    "favoriteGym": "The Climbing Gym at Manhattan Plaza Health Club"
  },
  {
    "index": 5,
    "isActive": false,
    "style": "Toprope, Lead",
    "name": "Tracey Thornton",
    "gender": "female",
    "about": "Ut commodo deserunt pariatur labore pariatur ea culpa excepteur. Dolor ut dolor pariatur adipisicing minim fugiat dolore. Elit commodo deserunt amet do irure consectetur adipisicing incididunt esse aliquip dolore aliqua. Veniam ut ad dolore deserunt sint ullamco aliquip amet dolore veniam sint enim. Occaecat incididunt duis velit aliquip laboris sint dolore.\r\n",
    "favoriteGym": "Brooklyn Boulders"
  },
  {
    "index": 6,
    "isActive": true,
    "style": "Toprope",
    "name": "Glenna Waller",
    "gender": "female",
    "about": "Voluptate aliqua reprehenderit voluptate voluptate mollit pariatur qui aliqua. Dolor deserunt fugiat elit dolore enim ullamco. Ea laboris nisi mollit fugiat fugiat quis consequat excepteur nostrud cillum minim duis.\r\n",
    "favoriteGym": "The Sports Center at Chelsea Piers"
  },
  {
    "index": 7,
    "isActive": false,
    "style": "Bouldering",
    "name": "Mosley Hurley",
    "gender": "male",
    "about": "Veniam consectetur est amet pariatur officia consequat aliquip laboris nulla. Amet quis sint aliquip excepteur voluptate id ex non est et. Ad nisi sunt duis ea.\r\n",
    "favoriteGym": "DUMBO Boulders"
  },
  {
    "index": 8,
    "isActive": true,
    "style": "Toprope",
    "name": "Lupe Preston",
    "gender": "female",
    "about": "Duis elit culpa quis nostrud veniam velit eu commodo eiusmod non exercitation. Aute non ad deserunt non laboris amet esse anim veniam consequat. Veniam sint sunt minim ea eu adipisicing consequat duis et ea aliquip. Incididunt aute esse laboris ullamco duis anim nostrud incididunt dolore anim occaecat. Consequat amet qui et ea est ex et consequat labore et aliqua officia aute. Ea nisi consequat irure consequat minim deserunt deserunt officia duis amet excepteur cillum.\r\n",
    "favoriteGym": "Brooklyn Boulders"
  },
  {
    "index": 9,
    "isActive": false,
    "style": "Toprope",
    "name": "Pennington Greer",
    "gender": "male",
    "about": "Adipisicing ullamco ea cillum reprehenderit enim amet ipsum fugiat. Pariatur Lorem aute dolor nisi veniam adipisicing veniam. Aliqua do amet non dolore veniam consequat ea ut labore aliquip laboris aliquip proident nisi. Duis officia velit incididunt incididunt eu elit ipsum enim dolor duis commodo.\r\n",
    "favoriteGym": "The Climbing Gym at Manhattan Plaza Health Club"
  },
  {
    "index": 10,
    "isActive": true,
    "style": "Toprope, Lead, Bouldering",
    "name": "Angelita Banks",
    "gender": "female",
    "about": "Non enim minim veniam est aliquip fugiat labore minim nostrud sit qui sit. Et nisi ut dolor proident consectetur culpa do ea ad et nisi. Aute pariatur culpa excepteur incididunt duis culpa fugiat. Aliquip Lorem elit excepteur ad qui non. Excepteur aliqua reprehenderit fugiat cillum ea reprehenderit ipsum eu mollit in ea sint. Nulla sint duis elit culpa consequat eu aliquip sit reprehenderit Lorem. Sunt est exercitation excepteur deserunt sit sint.\r\n",
    "favoriteGym": "The Sports Center at Chelsea Piers"
  },
  {
    "index": 11,
    "isActive": false,
    "style": "Toprope, Lead",
    "name": "Guthrie Henry",
    "gender": "male",
    "about": "Commodo minim aute fugiat minim et consectetur magna officia duis et irure. Deserunt aute adipisicing est consectetur commodo. Eu nostrud elit irure dolore fugiat ipsum qui amet amet non. Dolor laborum magna consectetur non aliqua. Reprehenderit ad occaecat commodo laborum cupidatat velit sint. Lorem aliqua proident velit Lorem et exercitation. Ex ea labore adipisicing fugiat non anim sint Lorem non sunt ullamco mollit deserunt voluptate.\r\n",
    "favoriteGym": "The Sports Center at Chelsea Piers"
  },
  {
    "index": 12,
    "isActive": false,
    "style": "Toprope, Lead",
    "name": "Ida Baker",
    "gender": "female",
    "about": "Cillum occaecat laboris occaecat eu esse quis exercitation consectetur. Qui irure esse qui qui Lorem. Duis voluptate incididunt non ea eiusmod magna officia pariatur cillum cupidatat ea laborum commodo proident. Reprehenderit nostrud dolore pariatur dolor elit dolore magna ad nulla eiusmod. Nulla consequat enim nisi ea commodo sit. Ullamco officia ea irure nostrud sint Lorem officia adipisicing incididunt est deserunt qui excepteur aute.\r\n",
    "favoriteGym": "The Sports Center at Chelsea Piers"
  },
  {
    "index": 13,
    "isActive": false,
    "style": "Toprope",
    "name": "Gamble Stone",
    "gender": "male",
    "about": "Consectetur esse ullamco fugiat laboris occaecat occaecat et. Anim cillum veniam tempor qui Lorem do culpa nulla aute ullamco nostrud pariatur cillum veniam. Ad nisi culpa reprehenderit qui esse adipisicing ad nulla. Esse laborum proident magna consectetur exercitation commodo ipsum labore ullamco excepteur laboris in cupidatat. Cupidatat ad nostrud sint ea ex deserunt mollit sint sit labore. Pariatur Lorem deserunt dolor culpa.\r\n",
    "favoriteGym": "Brooklyn Boulders"
  },
  {
    "index": 14,
    "isActive": false,
    "style": "Toprope, Lead, Bouldering",
    "name": "Knowles Aguirre",
    "gender": "male",
    "about": "Nisi et cillum laborum consectetur laboris esse enim nulla qui ullamco. Quis commodo incididunt amet enim dolor laborum dolor adipisicing aliquip nisi non sint. Laboris exercitation ut nostrud dolor qui veniam ut nulla. Consequat magna eiusmod cillum nulla nulla fugiat reprehenderit. Est proident ipsum incididunt ut non Lorem exercitation id proident. Culpa aliquip velit non quis quis qui aute mollit Lorem anim aliquip esse. Reprehenderit eu dolore elit cupidatat nostrud.\r\n",
    "favoriteGym": "The Cliffs LIC"
  },
  {
    "index": 15,
    "isActive": true,
    "style": "Bouldering",
    "name": "Harding Espinoza",
    "gender": "male",
    "about": "Id labore laboris reprehenderit duis. Nisi cillum non incididunt ut cillum pariatur ex ipsum Lorem ex non dolore. Cupidatat aliquip Lorem officia id eu nulla sit aliqua est aliquip velit eu mollit cillum.\r\n",
    "favoriteGym": "The Climbing Gym at Manhattan Plaza Health Club"
  },
  {
    "index": 16,
    "isActive": false,
    "style": "Toprope",
    "name": "Gilmore Hoffman",
    "gender": "male",
    "about": "Cillum amet cupidatat enim est dolor nisi adipisicing consectetur. Magna velit id non duis consectetur. Aliqua aliquip exercitation aliquip dolor ea eu minim deserunt eu qui deserunt. Occaecat eiusmod quis culpa deserunt dolore ipsum ex do velit ullamco excepteur. Minim sunt magna aute dolor occaecat magna fugiat nulla. Dolore eu consequat sunt sunt tempor excepteur commodo anim aliquip esse sint ad est exercitation.\r\n",
    "favoriteGym": "Brooklyn Boulders Queensbridge"
  },
  {
    "index": 17,
    "isActive": true,
    "style": "Toprope",
    "name": "Burgess Suarez",
    "gender": "male",
    "about": "Non deserunt quis esse eu ea id quis in eu consectetur fugiat non. Lorem deserunt voluptate ut eu labore esse eu sint. Qui pariatur aliqua dolore Lorem do incididunt quis velit magna pariatur cillum consequat.\r\n",
    "favoriteGym": "Steep Rock Bouldering"
  },
  {
    "index": 18,
    "isActive": false,
    "style": "Toprope, Lead, Bouldering",
    "name": "Morris Hodge",
    "gender": "male",
    "about": "Minim occaecat pariatur ut in esse Lorem commodo irure anim minim. Ad labore excepteur et Lorem cillum nisi qui nisi cillum officia veniam proident. Sunt duis do mollit ut sint id in velit. Aliqua anim proident nisi nostrud nostrud dolor adipisicing ea laborum ex ipsum labore Lorem. Id nisi velit consectetur adipisicing eiusmod veniam et ex. Ex cupidatat et minim magna ex reprehenderit velit ea pariatur culpa tempor ut. Nulla commodo Lorem veniam nulla ea aliquip dolore do occaecat elit esse laboris eiusmod irure.\r\n",
    "favoriteGym": "DUMBO Boulders"
  },
  {
    "index": 19,
    "isActive": false,
    "style": "Toprope, Lead",
    "name": "Mai Harper",
    "gender": "female",
    "about": "Anim est dolor tempor sunt incididunt officia eu labore. Aute duis enim aliquip reprehenderit non qui consequat elit est ea incididunt culpa. Dolor anim deserunt mollit sint sit fugiat reprehenderit. Eu voluptate nulla qui dolore reprehenderit aliqua enim. Ipsum minim laboris ullamco laboris ea culpa incididunt laborum consectetur esse ad dolor. Consectetur velit consequat laboris irure. Excepteur voluptate laborum minim adipisicing nostrud tempor ex aliqua enim.\r\n",
    "favoriteGym": "DUMBO Boulders"
  },
  {
    "index": 20,
    "isActive": false,
    "style": "Bouldering",
    "name": "Cantu Daniels",
    "gender": "male",
    "about": "Exercitation ipsum nostrud nisi veniam sunt adipisicing qui. Irure id laborum proident reprehenderit tempor pariatur cupidatat enim est aliqua ipsum anim commodo anim. Magna proident deserunt laboris qui incididunt dolore occaecat excepteur laborum nulla.\r\n",
    "favoriteGym": "The Sports Center at Chelsea Piers"
  }
  ];

		// document.getElementById("partners").innerHTML =
		// partners[0].favoriteGym + "   |   " + partners[0].name;

		myFunction(partners);
		function myFunction(ppl){
			var out = "<table>";
			var i;
			for(i=0; i < ppl.length; i++) {
			out += "<tr><td>" +
	        ppl[i].favoriteGym +
	        "</td><td>" + " " +
	        ppl[i].name +
	        "</td><td>" + " " +
	        ppl[i].style +
	        "</td></tr>";
	    }
	    out += "</table>";

	    document.getElementById("partners").innerHTML = out;
	}


  var css = {"favoriteGym":{"fontWeight":"bold","borderBottom":"1px","padding":"5px"}}
        



