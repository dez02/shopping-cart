const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');


const products = [
	new Product({
		imagePath:"https://www.mtlblog.com/uploads/297912_b6001c2da895671df387d21a6ecc654bfbb25f19.jpg",
		title:"Macarons",
		description:"miaaammmm",
		price:15

	}),
	new Product({
		imagePath:"https://www.atelierdeschefs.com/media/recette-e5924-salade-de-lentilles-au-celeri.jpg",
		title:"Lentilles",
		description:"beurkkk!!!",
		price:5

	}),
	new Product({
		imagePath:"http://www.lemoncoffee.fr/crepes-with-chocolate.jpg",
		title:"Crêpes",
		description:"trop bonnes!!!",
		price:7

	}),
	new Product({
		imagePath:"http://www.patissier-chocolatier-faure.fr/images/entremet-nougatine-glace-fruit-rouge.jpg",
		title:"Glaces",
		description:"miammiam",
		price:8

	}),
	new Product({
		imagePath:"http://www.sainte-adele.net/wp-content/uploads/2014/07/patisserie.jpg",
		title:"pâtisseries",
		description:"mhuuuuuum",
		price:18

	}),
	new Product({
		imagePath:"http://www.lemoncoffee.fr/crepes-with-chocolate.jpg",
		title:"Crêpes",
		description:"delicious!!!",
		price:7

	})
];

let done = 0;
for (let i = 0; i < products.length; i++) {
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		}
	});
}


function exit(){
	mongoose.disconnect();
}