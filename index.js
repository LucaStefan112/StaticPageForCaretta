let fixMenu = false;
let currentKit = 0, currentKitImg = 0;
let showImg;
let mainDiv;
let navBarSticky;
let house1, house2, house3;
let choosenside = 'left';
let optsum;
let total_sum;
let houses = [
	{
		'Pictures' : [
			'media/Casa structura usoara.jpg',
			'media/Casa structura usoara_2.jpg',
			'media/detaliu structura.jpg'
			],

		'Materiale structură; ' : {
			'dispune' : true,
			'Structură pereți și acoperiș; ' : 3164.63,
			'Pardoseală; ' : 632.93,
			'Stâlpi exteriori, țeavă 80*80*3; ' : 161.34,
		},
		'Materiale închideri exterioare; ' : {
			'dispune' : false
		},
		'Materiale acoperiș ' : {
			'dispune' : true,
			'Țiglă metalică Alpin, mat 0.45; ' : 828.02,
			'El. tinichigerie; ' : 330.55,
			'Accesorii etanșare-fixare; ' : 148.80,
			'Sistem pluvial; ' : 326.24,
		},
		'Instalații electrice: ' : {
			'dispune' : false
		},
		'Materiale închideri interioare: ' : {
			'dispune' : false
		},
		'Tâmplărie: ' : {
			'dispune' : false
		}
	},
	{
		'Pictures' : [
			'media/Casa structura usoara.jpg',
			'media/Casa structura usoara_2.jpg',
			'media/detaliu structura.jpg'
			],

		'Materiale structură; ' : {
			'dispune' : true,
			'Structură pereți și acoperiș; ' : 3164.63,
			'Pardoseală; ' : 632.93,
			'Stâlpi exteriori, țeavă 80*80*3; ' : 161.34,
		},
		'Materiale închideri exterioare: ' : {
			'dispune' : true,
			'Folie anticondens: ' : 61.41,
			'Șuruburi: ' : 50.42,
			'Flashing-uri: ' : 141.91,
			'Lambriu: ' : 546.22,
		},
		'Materiale acoperiș: ' : {
			'dispune' : true,
			'Țiglă metalică Alpin, mat 0.45: ' : 828.02,
			'El. tinichigerie: ' : 330.55,
			'Accesorii etanșare-fixare: ' : 148.80,
			'Sistem pluvial: ' : 326.24,
		},

		'Tâmplărie: ' : {
			'dispune' : true,
			'Ușă metalică 202*88: ' : 402.52,
			'Geam termopan 86*116, dublă deschidere: ' : 268.91,
		}
	},
	{
		'Pictures' : [
			'media/Casa structura usoara.jpg',
			'media/Casa structura usoara_2.jpg',
			'media/detaliu structura.jpg'
			],

		'Materiale structură; ' : {
			'dispune' : true,
			'Structură pereți și acoperiș; ' : 3164.63,
			'Pardoseală; ' : 632.93,
			'Stâlpi exteriori, țeavă 80*80*3; ' : 161.34,
		},
		'Materiale închideri exterioare: ' : {
			'dispune' : true,
			'Folie anticondens: ' : 61.41,
			'Șuruburi: ' : 50.42,
			'Flashing-uri: ' : 141.91,
			'Lambriu: ' : 546.22,
		},
		'Materiale acoperiș: ' : {
			'dispune' : true,
			'Țiglă metalică Alpin, mat 0.45: ' : 828.02,
			'El. tinichigerie: ' : 330.55,
			'Accesorii etanșare-fixare: ' : 148.80,
			'Sistem pluvial: ' : 326.24,
		},
		'Instalații electrice: ' : {
			'dispune' : true,
			'Tablou el. 4 module: ' : 15,
			'Cablu CYY 3*2.5: ' : 48,
			'Priză dublă, cu doză: ' : 32,
			'Întrerupător, cu doză: ' : 10,
			'Plafonieră: ' : 20,
		},
		'Materiale închideri interioare: ' : {
			'dispune' : true,
			'Izolație vată bazalică semirigidă 50: ' : 254.12,
			'Gips carton, pereți + acoperiș: ' : 479.38,
			'Folie barieră vapori: ' : 37.75,
			'Tencuieli ușoare și varuri: ' : 450,
		},
		'Tâmplărie: ' : {
			'dispune' : true,
			'Ușă metalică 202*88: ' : 402.52,
			'Geam termopan 86*116, dublă deschidere: ' : 268.91,
			'Geam Velux GZL CK02 55*78, Ramă EDW-0000: ' : 815.13,
		}
	},];
let multiplyRate = 1.5*1.19;
let data;
let headers = [], specifications;
let totalH, totalEuroH;

function display(nr){

	if(nr == 0)
		document.getElementById('checkD').style.display = 'none';
	else
		document.getElementById('checkD').style.display = 'flex';

	specifications.textContent = '';
	let count = 0;
	total_sum = 0;

	for(let properties in houses[nr]){

		if(houses[nr][properties]['dispune'] === true){
			let sum = 0;
			let curDiv = document.createElement('div');

			headers[count] = {head: null,menu: null};
			headers[count].head = document.createElement('li');
			let part1 = document.createElement('h3');
			part1.textContent = properties;
			part1.id = 'sp';
			let part2 = document.createElement('h3');
			
			if(nr == 0)
				headers[count].menu = document.createElement('div');
			else
				headers[count].menu = document.createElement('ul');

			headers[count].menu.style.width = '500px';
			let ron1 = document.createElement('h3');
			ron1.textContent = 'RON';

			for(let specs in houses[nr][properties]){
				if(specs != 'dispune'){
					let ron = document.createElement('p');
					ron.textContent = 'RON';
					let listMember = document.createElement('li');
					listMember.style.display = 'flex';
					let specs1 = document.createElement('p');
					specs1.textContent = specs;
					sum += Math.floor(houses[nr][properties][specs] * multiplyRate * 100) / 100;
					listMember.appendChild(specs1);
					headers[count].menu.appendChild(listMember);
				}
			}

			part2.textContent = Math.floor(sum * 100) / 100;
			part2.style.color = '#E0004D';
			part2.style.padding = '0px 10px';
			headers[count].head.appendChild(part1);
			headers[count].head.appendChild(part2);
			headers[count].head.appendChild(ron1);
			headers[count].head.id = 'NU';
			curDiv.appendChild(headers[count].head);
			curDiv.appendChild(headers[count].menu);
			specifications.appendChild(curDiv);
			count++;

			total_sum += sum;
		}
	}
	totalH.textContent = Math.floor((total_sum)* 100) / 100;
	totalEuroH.textContent = Math.floor(total_sum * 0.2 * 100) / 100;
	
	if(nr != 0)

		selectOpt('opt1');
}

function selectOpt(opt){
	if(opt == 'opt1'){
		optsum = 2724.71;
		document.getElementById('opt1').style.border = '2px solid #E0004D';
		document.getElementById('opt2').style.border = 'none';
	}
	else{
		optsum = 1942.97;
		document.getElementById('opt2').style.border = '2px solid #E0004D';
		document.getElementById('opt1').style.border = 'none';
	}

	totalH.textContent = Math.floor((total_sum + optsum)* 100) / 100;
	totalEuroH.textContent = Math.floor((total_sum + optsum) * 0.21 * 100) / 100;
}

function selected(house, house_nr){
	currentKit = house_nr;
	currentKitImg = 0;
	house1.id = 'house_button1';
	house2.id = 'house_button2';
	house3.id = 'house_button3';
	house.id = 'selected_button';

	house1.style.borderBottomLeftRadius = '0px';
	house1.style.borderBottomRightRadius = '0px';
	house2.style.borderBottomLeftRadius = '0px';
	house2.style.borderBottomRightRadius = '0px';
	house3.style.borderBottomLeftRadius = '0px';
	house3.style.borderBottomRightRadius = '0px';
	house1.style.borderTopLeftRadius = '20px';
	house3.style.borderTopRightRadius = '20px';

	house1.style.borderLeft = '2px solid #E0004D';
	house1.style.borderRight = '2px solid #E0004D';
	house2.style.borderLeft = '2px solid #E0004D';
	house2.style.borderRight = '2px solid #E0004D';
	house3.style.borderLeft = '2px solid #E0004D';
	house3.style.borderRight = '2px solid #E0004D';

	if(house_nr == 0){
		house2.style.borderBottomLeftRadius = '20px';
		house.style.borderRight = 'none';
	}

	else if(house_nr == 1){
		house1.style.borderBottomRightRadius = '20px';
		house3.style.borderBottomLeftRadius = '20px';
		house.style.borderRight = 'none';
		house.style.borderLeft = 'none';
	}

	else{
		house2.style.borderBottomRightRadius = '20px';
		house.style.borderLeft = 'none';
	}

	display(house_nr);
	showImg.src = houses[house_nr]['Pictures'][currentKitImg];
}

function preload(){
	specifications = document.getElementById('specifications');
	navBarSticky = document.getElementById('nav_bar_sticky');
	mainDiv = document.getElementById('main_div');
	mainDiv.removeChild(navBarSticky);

	house1 = document.getElementById('house_button1');
	house2 = document.getElementById('house_button2');
	house3 = document.getElementById('house_button3');
	data = document.getElementById('data');
	showImg = document.getElementById('show_img_left');
	totalH = document.getElementById('total');
	totalEuroH = document.getElementById('totalEuro');
}

function setup(){
		selected(house1, 0);
}

function draw(){
	if(window.scrollY >= 125 && !fixMenu){
		fixMenu = true;
		mainDiv.appendChild(navBarSticky);
		navBarSticky.id = 'nav_bar_sticky';
	}

	else if(window.scrollY < 125 && fixMenu){
		fixMenu = false;
		navBarSticky.id = 'nav_bar_sticky_out';
		setTimeout(function(){mainDiv.removeChild(navBarSticky);}, 400);
	}
}

function switchImg(direction){
	if(direction == 'left'){
		currentKitImg--;
		if(currentKitImg < 0)
			currentKitImg = houses[currentKit]['Pictures'].length - 1;
	}

	else{
		currentKitImg++;
		if(currentKitImg >= houses[currentKit]['Pictures'].length)
			currentKitImg = 0;
	}

	showImg.src = houses[currentKit]['Pictures'][currentKitImg];

	if(choosenside == 'left'){
		showImg.id = 'show_img_right';
		choosenside = 'right';
	}
	else{
		showImg.id = 'show_img_left';
		choosenside = 'left';
	}
}
