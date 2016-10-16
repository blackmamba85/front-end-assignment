angular.module('myApp', []).controller('appCtrl', function($scope) {
    $scope.ambities = [
        { title: '# Ambitie05', subtitle1: 'Ondernemen', subtitle2: 'Mobilitiet', text: 'Een manier vinden om het gebruik van smartphones tijdens het rijden terug te dringen.' },
        { title: '# Ambitie06', subtitle1: 'Mobilitiet', subtitle2: 'Wonen', text: 'We willen het aantal ongevallen rondom scholen halveren.' },
        { title: '# Ambitie07', subtitle1: 'Mobilitiet', subtitle2: '', text: 'We willen carsharing nieuw leven inblazen.' },
        { title: '# Ambitie08', subtitle1: 'Ondernemen', subtitle2: '', text: 'We willen carsharing nieuw leven inblazen.' },
        { title: '# Ambitie09', subtitle1: 'Mobilitiet', subtitle2: 'Wonen', text: 'We willen het aantal ongevallen rondom scholen halveren.' },
        { title: '# Ambitie10', subtitle1: 'Ondernemen', subtitle2: 'Wonen', text: 'We willen het aantal ongevallen rondom scholen halveren.' },

    ];

    $scope.acties = [
        { number: '1', class: 'ambie07', title: '# Ambitie07', subtitle1: 'Mobilitiet', subtitle2: '', text: 'Heel Nederland in Automodus.', textSmall: '', textMedium: 'Campagne:' },
        { number: '2', class: 'ambie05', title: '# Ambitie05', subtitle1: 'Mobilitiet', subtitle2: 'Wonen', text: 'Nieuwe onderzoeks-resultaten rond domotica vs inbraak..', textSmall: '', textMedium: '' },
        { number: '3', class: 'ambie04', title: '# Ambitie04', subtitle1: 'Mobilitiet', subtitle2: 'Ondernemen', text: 'Freelancers + veilige wifi, Webinar di 14 juni 2016', textSmall: '', textMedium: '' },
        { number: '4', class: 'ambie06', title: '# Ambitie07', subtitle1: 'Ondernemen', subtitle2: '', text: 'Ongevallen met driverless cars.', textSmall: 'Livestrem', textMedium: 'Debat TU Delft:' },


    ];



});