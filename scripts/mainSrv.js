var app = angular.module('faronBig');

app.service('mainSrv', function($state) {

  // Relevant data: things we are selling
    this.dataArr = [{
        productName: 'Squire',
        "id": 'squire',
        productDesc: 'The pen is a mighty sword. It’s a weapon of mass construction. It grants the power to move entire nations, to touch people’s hearts and souls—to make something from nothing.',
        color: [{
            name: 'Color',
            label: 'Silver',
            img: './images/squire_silver.jpg'
        }, {
            name: 'Color',
            label: 'Charcoal',
            img: './images/squire_charcoal.jpg'
        }],
        price: 55.00,
        save: [{
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
        productDesc: 'Designed for greatness. The Vanguard softcover notebook.',
        color: [{
            name: 'Book Type',
            label: 'Light Gray - Flagship',
            img: './images/vanguard_lg-flag.jpg'
        }, {
            label: 'Charcoal - Flagship',
            img: './images/vanguard_char-flag.jpg'
        }],
        price: 12.00,

        save: [{
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
            name: 'Color',
            label: 'Flagship Gray',
            img: './images/confidant_gray-flag.jpg'
        }],
        price: 16.00,

        save: [{
            name: 'Single Pack',
            price: 16.00
        }, {
            name: '2 Pack - save $2',
            price: 30
        }, {
            name: '3 Pack - save $4',
            price: 44
        }]
    }]
})
