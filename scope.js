angular.module('itemsApp', []);
angular.module('itemsApp').controller('itemsCtrl', function ($scope) {
    $scope.items = [
        {
            id: 1,
            name: 'iPhone 7',
            price: 100,
            discount: true,
            discount_value: 20,
            limited: false,
            desc: "",
            img: 'https://content2.onliner.by/catalog/device/main/f8d7fac0fe59ead77f5199454a6e8c4a.jpeg'
        },
        {
            id: 2,
            name: 'Samsung Galaxy S8 Dual SIM 64GB',
            price: 1800,
            discount: false,
            limited: true,
            desc: "",
            img: 'https://content2.onliner.by/catalog/device/main/95e7e0c08bdbd3b1d9ba04d2938ae0ad.jpeg'
        },
        {
            id: 3,
            name: 'Xiaomi Redmi Note 4X 32GB Black',
            price: 395,
            discount: false,
            limited: false,
            desc: "",
            img: 'https://content2.onliner.by/catalog/device/main/34920f060b4fd8e8b9569f8c0723b747.jpeg'
        }
    ];
});



