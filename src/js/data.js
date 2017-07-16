let siteObjects = {
    "facets" : [
        {
        "category" : "By Price",
        "filters" : [{
            "name" : "Equal or Less than $50",
            "results" : 6,
            "url" : "/filter/attribute/1"
        },{
            "name" : "Within $51-$100",
            "results" : 14,
            "url" : "/filter/attribute/2"
        },{
            "name" : "More than $100",
            "results" : 2,
            "url" : "/filter/attribute/3"
        }]
    },{
        "category" : "By Color",
        "filters" : [
            {
                "name" : "Purple",
                "results" : 19,
                "url" : "/filter/attribute/1"
            },{
                "name" : "Blue",
                "results" : 14,
                "url" : "/filter/attribute/1"
            },{
                "name" : "Green",
                "results" : 12,
                "url" : "/filter/attribute/2"
            },{
                "name" : "Pink",
                "results" : 13,
                "url" : "/filter/attribute/3"
            },{
                "name" : "Orange",
                "results" : 19,
                "url" : "/filter/attribute/4"
            }
        ]
    },{
        "category" : "By Rating",
        "filters" : [{
            "name" : "5 Stars",
            "results" : 2,
            "url" : "/filter/attribute/1"
        },{
            "name" : "4 Stars and Above",
            "results" : 20,
            "url" : "/filter/attribute/2"
        },{
            "name" : "3 Stars and Above",
            "results" : 22,
            "url" : "/filter/attribute/3"
        },{
            "name" : "2 Stars and Above",
            "results" : 22,
            "url" : "/filter/attribute/4"
        }]
    }],
    "activeFacets" : [],

    "topControls" : {
        "views" : [{
            "name" : "grid",
            "url"  : "/view/grid"
        },{
            "name" : "list",
            "url"  : "/view/list"
        }],
        "sorting" : [{
            "name" : "Position",
            "url"  : "/sort/position"
        },{
            "name" : "Price Asc.",
            "url"  : "/sort/price/asc"
        },{
            "name" : "Price Desc.",
            "url"  : "/sort/price/desc"
        }],
        "productsShown": [12,18,24,46, 120]
    },

    "catalog": [
	    {
	        "name": "Product Title 01",
	        "id": "761",
	        "sku": "14WPN7BW",
	        "price": 75,
	        "subtotal": 75,
	        "img": "http://placehold.it/500x500",
	        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
	        "qty": 100,
	        "ribbon": "New",
	        "rating": 5,
	        "colors": [{
	            "name": "Purple",
	            "code": "#872e42"
	        },
	            {
	                "name": "Blue",
	                "code": "#16989c"
	            },
	            {
	                "name": "Green",
	                "code": "#66b99d"
	            }]
	    },
        {
            "name": "Product Title 02",
            "id": "762",
            "sku": "14WPN7BR",
            "price": {
                "regular": 82,
                "special": 49.99
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "Sale",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 03",
            "id": "775",
            "sku": "13HCS7J",
            "price": {
                "regular": 93,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4.3,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 04",
            "id": "776",
            "sku": "13HCS7EL",
            "price": {
                "regular": 55,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 05",
            "id": "777",
            "sku": "13HCS7CR",
            "price": {
                "regular": 62,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 06",
            "id": "778",
            "sku": "13HCS7B",
            "price": {
                "regular": 189,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 3.5,
            "colors": [
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 07",
            "id": "801",
            "sku": "14WPN7TC",
            "price": {
                "regular": 87,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 08",
            "id": "802",
            "sku": "14WPN7RC",
            "price": {
                "regular": 20,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 3.5,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Green",
                    "code": "#66b99d"
                }]
        },
        {
            "name": "Product Title 09",
            "id": "806",
            "sku": "14WPN7SV",
            "price": {
                "regular": 35,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 10",
            "id": "809",
            "sku": "14WPN7PE",
            "price": {
                "regular": 54,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 11",
            "id": "837",
            "sku": "14WPN7BJ",
            "price": {
                "regular": 75,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 12",
            "id": "980",
            "sku": "14WPN7BW",
            "price": 97,
            "subtotal": 75,
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "New",
            "rating": 5,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 13",
            "id": "981",
            "sku": "14WPN7BR",
            "price": {
                "regular": 36,
                "special": 49.99
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "Sale",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 14",
            "id": "982",
            "sku": "13HCS7J",
            "price": {
                "regular": 69,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4.3,
            "colors": [
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 15",
            "id": "983",
            "sku": "13HCS7EL",
            "price": {
                "regular": 80,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 16",
            "id": "984",
            "sku": "13HCS7CR",
            "price": {
                "regular": 70,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 17",
            "id": "985",
            "sku": "13HCS7B",
            "price": {
                "regular": 160,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 3.5,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Green",
                    "code": "#66b99d"
                }]
        },
        {
            "name": "Product Title 18",
            "id": "986",
            "sku": "14WPN7TC",
            "price": {
                "regular": 65,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },

                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 19",
            "id": "987",
            "sku": "14WPN7RC",
            "price": {
                "regular": 52,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 3.5,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Green",
                    "code": "#66b99d"
              },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 20",
            "id": "988",
            "sku": "14WPN7SV",
            "price": {
                "regular": 75,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 21",
            "id": "989",
            "sku": "14WPN7PE",
            "price": {
                "regular": 47,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        },
        {
            "name": "Product Title 22",
            "id": "990",
            "sku": "14WPN7BJ",
            "price": {
                "regular": 19,
                "special": null
            },
            "img": "http://placehold.it/500x500",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget eros eu felis aliquet elementum. Proin vel mauris tincidunt, condimentum nisi in, pretium sapien. Proin augue ligula, euismod eu elementum non, sagittis sed leo. Nunc interdum eros non tellus interdum laoreet.",
            "qty": 100,
            "ribbon": "",
            "rating": 4,
            "colors": [{
                "name": "Purple",
                "code": "#872e42"
            },
                {
                    "name": "Blue",
                    "code": "#16989c"
                },
                {
                    "name": "Green",
                    "code": "#66b99d"
                },
                {
                    "name": "Pink",
                    "code": "#fd6068"
                },
                {
                    "name": "Orange",
                    "code": "#e66e2b"
                }]
        }
    ]
};