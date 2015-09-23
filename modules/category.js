module.exports.getRoot = function () {
    var items = [];
    for (var i = 0; i < 25; i++) {
      items.push("Item ");
    }
    return [
        {
            name: 'Транспорт',
            image: 'buss.png',
            count: 23
        },
        {
            name: 'Недвижимость',
            image: 'buss.png',
            count: 23
        },
        {
            name: 'Для бизнеса',
            image: 'buss.png',
            count: 23
        },
        {
            name: 'Налоги',
            image: 'buss.png',
            count: 23
        },
    ];
};
module.exports.loadRoot = function (view) {
    view.set({
        refreshIndicator: true,
        refreshMessage: "загрузка..."
    });
    setTimeout(function () {
        view.set({
            items: module.exports.getRoot(),
            refreshIndicator: false,
            refreshMessage: ""
        });
    }, 1000);
}