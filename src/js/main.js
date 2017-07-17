SiteCore.siteObjects.facets.forEach(e => {
	let newElement = document.createElement('li'), newEle = document.createElement('li'), attrList=[], selList=[], selEle;

	// Attr Aggregator
	e.filters.forEach(v => {
		attrList.push('<li class="attrItem">'+v.name+'<span class="results">('+v.results+')</span></li>');
        selList.push('<li class="attrSel">'+v.name+'</li>');
	});

    selEle               = '<ul>'+selList.join("")+'</ul>';
    newElement.className = "attrSection"; 
    newElement.innerHTML = '<h3>'+e.category+':</h3><ul class="attrListContainer">'+attrList.join("")+'</ul>';
    newEle.innerHTML     = selEle; 
    document.getElementById('attrList').appendChild(newElement);
    document.getElementById('selectedAttr').appendChild(newEle);
});

/*
 * CATALOG GRID
 */
SiteCore.siteObjects.catalog.forEach(e => {
	let newElement = document.createElement('li'),
		regPrice,specPrice,colors=[],colorData=[];
    
    // Price Checker
	e.price.regular != undefined ? regPrice = '$'+e.price.regular+'.00' : regPrice = '$'+e.price+'.00';
	if (e.price.special != null) {
		specPrice = '<span class="special">$'+e.price.special+'.00</span>';
		regPrice = '<span class="slashed">'+regPrice+'</span>';
	} else { specPrice = '' }

	// Color Checker
	e.colors.forEach((v,i) => {
        colorData.push( v.name.toLowerCase() );
		colors.push('<li class="swatch '+v.name.toLowerCase()+'" style="background-color:'+v.code+'"></li>');
	});
    newElement.dataset.color = colorData.join(" ");

    newElement.id = e.id; 
    newElement.className = "product";

    if (e.price.regular === undefined) newElement.dataset.price = e.price;
    else if (e.price.special !== null) newElement.dataset.price = e.price.special;
    else newElement.dataset.price = e.price.regular;

    newElement.dataset.rating = e.rating;  
    newElement.innerHTML = '<img src="http://placehold.it/500x500" alt="'+e.name+' image" /><h3>'+e.name+'</h3><div class="rateOverlay"></div><div class="rating'+e.rating.toString().replace(".","")+'"></div><p class="price">'+regPrice+specPrice+'</p><ul class="colors">'+colors.join("")+'</ul>';
    newElement.setAttribute('aria-label', e.name);

    document.getElementById('productGrid').appendChild(newElement);
});

/*
 * EVENT OBSERVERS
 */
window.addEventListener('load', ()=> {
    // ATTRIBUTE SELECTION
    let attrEle = document.getElementsByClassName("attrItem"), 
    attrClick = function(e){
        let val = parseInt( this.innerHTML.split('<span')[0].replace( /^\D+/g, '') ), count=0;
        document.getElementById('productGrid').classList.remove('smallProd');

        if ( isNaN(val) ) {
            val = this.innerHTML.split('<span')[0].toLowerCase();
            Array.prototype.forEach.call(document.querySelectorAll('[data-price]'), e => {
                e.style.display = 'inline';
                if ( e.dataset.color.indexOf(val) === -1 ) { ++count; e.style.display = 'none'; }
            });
        } else if (val > 5) {
            Array.prototype.forEach.call(document.querySelectorAll('[data-price]'), e => {
                e.style.display = 'inline';
                if (val === 50 && e.dataset.price > 50) {++count; e.style.display = 'none';}
                else if (val === 100 && e.dataset.price < 100) {++count; e.style.display = 'none';}
                else if ( val === 51 && ( e.dataset.price < 50 || e.dataset.price > 100 ) ) {++count; e.style.display = 'none';}
            });
        } else {
            Array.prototype.forEach.call(document.querySelectorAll('[data-rating]'), e => {
                e.style.display = 'inline';
                if (val === 5 && e.dataset.rating < val) {++count; e.style.display = 'none';}
                else if (val === 4 && e.dataset.rating < val) {++count; e.style.display = 'none';}
                else if ( e.dataset.rating < val ) {++count; e.style.display = 'none';}
            });
        }

        if (count === 20) document.getElementById('productGrid').classList.add('smallProd');
        count=0;

        // Show attribute
        document.getElementById('selectedAttr').classList.add('active');
        document.getElementsByClassName('attrSel')[e.target.dataset.index].classList.toggle('active');
    },
    attrSelClick = function (e) {
        e.target.classList.remove('active');
        if (document.querySelectorAll('#selectedAttr .attrSel.active').length < 1) document.getElementById('selectedAttr').classList.remove('active');
    };

    // ATTRIBUTES LIST
    Array.prototype.forEach.call(attrEle, (e,i) => {
        e.dataset.index = i;
    	e.addEventListener('click', attrClick);
    });

    // ACTIVE ATTRIBUTES
    Array.prototype.forEach.call(document.getElementsByClassName("attrSel"), (e,i) => {
        e.addEventListener('click', attrSelClick);
    });

    // MINICART CLICK
    document.getElementById('minicart').addEventListener('click', e=> {
        e.target.classList.toggle('active');
    });

    // EMAIL VALIDATOR
    function validEmail () {
        if ( /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test( document.getElementById('newsletterInput').value )) return true
        console.log('bad email');
        return;
    }
    document.getElementById('newsletterButton').addEventListener('click', validEmail);
});