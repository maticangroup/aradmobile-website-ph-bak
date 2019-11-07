if ($('#map').length > 0) {

    $(document).ready(function () {
        var map = $.sMap({
            element: '#map',
            presets: {
                latlng: {
                    lat: $('#map').data('lat'),
                    lng: $('#map').data('lng'),
                },
                zoom: 12,
            },
        });

        $.sMap.layers.static.build();

        var marker = $.sMap.features.marker.create({
            name: 'demo-marker',
            popup: {
                title: {
                    html: 'آراد موبایل اینجاست',
                    i18n: '',
                },
                description: {
                    html: 'توضیحات و آدرس آراد موبایل رو اینجا مینویسیم',
                    i18n: '',
                },
                custom: false,
            },
            latlng: {
                lat: $('#map').data('lat'),
                lng: $('#map').data('lng')
            },
            icon: icons.default.blue,
            popupOpen: true,
            pan: true,
            on: {
                click: function () {
                    console.log('Click callback.');
                },
                contextmenu: function () {
                    console.log('Contextmenu callback.');
                },
            },
            toolbar: [],
        });
    });
}