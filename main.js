var PAGE_MARGIN = 15;

var Category = require("./modules/category");

var drawer = tabris.create("Drawer").append(tabris.create("PageSelector"));

var page = tabris.create("Page", {
    title: "Юрист",
    topLevel: true
});

tabris.create("Action", {
    title: 'Поиск',
    placementPriority: 'high',
    image: {
        src: "images/search.png"
    }
});
tabris.create("Action", {
    title: 'Share',
    placementPriority: 'high',
    image: {
        src: "images/share.png"
    }
});
tabris.create("Action", {
    title: 'Настройки',
    placementPriority: 'low',
    image: {
        src: "images/settings.png"
    }
});


var categoryView = tabris.create("CollectionView", {
    layoutData: {left: 0, top: 0, right: 0, bottom: 0},
    itemHeight: 80,
    refreshEnabled: true,
    initializeCell: function (cell) {
        var imageView = tabris.create("ImageView", {
            layoutData: {left: PAGE_MARGIN, centerY: 0, width: 32, height: 48},
            scaleMode: "fit"
        }).appendTo(cell);
        var titleTextView = tabris.create("TextView", {
            layoutData: {left: 64, centerY: 0, right: PAGE_MARGIN},
            markupEnabled: true,
            textColor: "#000",
            font: "22px"
        }).appendTo(cell);
        var authorTextView = tabris.create("TextView", {
            layoutData: {right: PAGE_MARGIN, centerY: 0, top: PAGE_MARGIN},
            textColor: "#7b7b7b",
            font: "18px"
        }).appendTo(cell);
        cell.on("change:item", function (widget, category) {
            imageView.set("image", '/images/category/' + category.image);
            titleTextView.set("text", category.name);
            authorTextView.set("text", category.count);
        });
    }
}).on("refresh", function () {
    Category.loadRoot(categoryView);
}).on("select", function () {
    createBookPage(value).open();
}).appendTo(page);

Category.loadRoot(categoryView);


page.open();
