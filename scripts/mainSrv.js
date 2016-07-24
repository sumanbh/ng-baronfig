var app = angular.module('faronBig');

app.service('mainSrv', function($state) {

    // Relevant data: things we are selling
    this.dataArr = [{
        productName: 'Squire',
        "id": 'squire',
        productDesc: "The pen is a mighty sword. It’s a weapon of mass construction. It grants the power to move entire nations, to touch people’s hearts and souls—to make something from nothing.",
        color: [{
            type: 'COLOR',
            label: 'Silver',
            img: './images/squire_silver.jpg'
        }, {
            type: 'COLOR',
            label: 'Charcoal',
            img: './images/squire_charcoal.jpg'
        }],
        ink: [{
            type: 'INK',
            name: 'Black'
        }, {
            name: 'Blue'
        }],
        price: 55.00,
        save: [{
            type: 'SAVE',
            name: 'Single Pen',
            price: 55.00
        }, {
            name: '2 Pack - save $11',
            price: 99.00
        }, {
            name: '3 Pack - save $36',
            price: 129.00
        }],
        imgv2:'./images/product-v2/squire_v2.jpg'
    }, {
        productName: 'Confidant',
        "id": 'confidant',
        productDesc: 'Hardcover notebook that’s small enough to go everywhere you go and big enough to work with all day long, whether at home, work, or in transit.',
        color: [{
            type: 'COLOR',
            label: 'Flagship Gray',
            img: './images/confidant_gray-flag.jpg'
        }],
        price: 16.00,

        save: [{
            type: 'SAVE',
            name: 'Single Pack',
            price: 16.00
        }, {
            name: '2 Pack - save $2',
            price: 30.00
        }, {
            name: '3 Pack - save $4',
            price: 44.00
        }],
        imgv2:'./images/product-v2/confidant_v2.jpg'
    },
    {
        productName: 'Vanguard',
        "id": 'vanguard',
        productDesc: "Designed for greatness. The Vanguard softcover notebook comes in Light Gray & Charcoal. It's available in 3 sizes: Pocket, Flagship, & Plus—AKA Small, Medium, & Large.",
        color: [{
            type: 'BOOK TYPE',
            label: 'Light Gray - Flagship',
            img: './images/vanguard_lg-flag.jpg'
        }, {
            label: 'Light Gray - Pocket',
            img: './images/vanguard_lg_pocket.jpg'
        }, {
            label: 'Charcoal - Flagship',
            img: './images/vanguard_char-flag.jpg'
        }, {
            label: 'Charcoal - Pocket',
            img: './images/vanguard_char_pocket.jpg'
        }],
        price: 12.00,

        save: [{
            type: 'SAVE',
            name: 'Single Pack',
            price: 12.00
        }, {
            name: '2 Pack - save 5%',
            price: '5'
        }, {
            name: '3 Pack - save 10%',
            price: '10'
        }],
        imgv2:'./images/product-v2/vanguard_v2.jpg'
    }, {
        productName: 'Guardian Leather Case',
        "id": 'guardian',
        productDesc: 'The functional defender of ideas. The Guardian is designed to protect your Confidant notebook while adding utility and style–all day, every day.',
        color: [{
            img: './images/guardian_case.jpg'
        }],
        price: 85.00,

        save: [{
            type: 'SAVE',
            name: 'Single Case',
            price: 85.00
        }, {
            name: '2 Pack - save $10',
            price: 160.00
        }, {
            name: '3 Pack - save $25',
            price: 230.00
        }],
        imgv2:'./images/product-v2/guardian_v2.jpg'
    }, {
        productName: 'Explorer Apprentice',
        "id": 'explorer',
        productDesc: 'Your mind and the world around you are both places that deserve to be explored. Grab your notebook, don your raincoat, steel your willpower, and blaze a trail through the literal and figurative.',
        color: [{
            img: './images/explorer.jpg'
        }],
        price: 9.00,

        save: [{
            type: 'SAVE',
            name: 'Single Pack',
            price: 9.00
        }, {
            name: '2 Packs - save $1',
            price: 17.00
        }, {
            name: '3 Pack - save $3',
            price: 24.00
        }],
        imgv2:'./images/product-v2/explorer_v2.jpg'
    }]
})
