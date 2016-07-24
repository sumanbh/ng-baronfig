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
            type:'SAVE',
            name: 'Single Pen',
            price: 55.00
        }, {
            name: '2 Pack - save $11',
            price: 99.00
        }, {
            name: '3 Pack - save $36',
            price: 129.00
        }]
    }, {
        productName: 'Vanguard',
        "id": 'vanguard',
        productDesc: "Designed for greatness. The Vanguard softcover notebook comes in Light Gray & Charcoal. It's available in 3 sizes: Pocket, Flagship, & Plus—AKA Small, Medium, & Large.",
        color: [{
            type: 'BOOK TYPE',
            label: 'Light Gray - Flagship',
            img: './images/vanguard_lg-flag.jpg'
        }, {
            label: 'Charcoal - Flagship',
            img: './images/vanguard_char-flag.jpg'
        }],
        price: 12.00,

        save: [{
            type:'SAVE',
            name: 'Single Pack',
            price: 12.00
        }, {
            name: '2 Pack - save 5%',
            price: '5'
        }, {
            name: '3 Pack - save 10%',
            price: '10'
        }]
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
            type:'SAVE',
            name: 'Single Pack',
            price: 16.00
        }, {
            name: '2 Pack - save $2',
            price: 30.00
        }, {
            name: '3 Pack - save $4',
            price: 44.00
        }]
    }, {
        productName: 'Guardian Leather Case',
        "id": 'guardian',
        productDesc: 'The functional defender of ideas. The Guardian is designed to protect your Confidant notebook while adding utility and style–all day, every day.',
        color: [{
            img: './images/guardian_case.jpg'
        }],
        price: 85.00,

        save: [{
            type:'SAVE',
            name: 'Single Case',
            price: 85.00
        }, {
            name: '2 Pack - save $10',
            price: 160.00
        }, {
            name: '3 Pack - save $25',
            price: 230.00
        }]
    }]
})
