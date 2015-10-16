module.exports = {
    url: '',
    getRoot: function () {
        return [
            {
                id: '1',
                name: 'Транспорт',
                image: 'buss.png',
                count: 23,
                type: 'category'
            },
            {
                id: '2',
                name: 'Недвижимость',
                image: 'buss.png',
                count: 23,
                type: 'category'
            },
            {
                id: '3',
                name: 'Для бизнеса',
                image: 'buss.png',
                count: 23,
                type: 'category'
            },
            {
                id: '4',
                name: 'Налоги',
                image: 'buss.png',
                count: 23,
                type: 'category'
            },
        ];
    },
    loadRoot: function (view) {
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
    },
    loadCategory: function (catId) {
        var page = tabris.create("Page", {
            title: "Юрист"  
        });
        tabris.create("CollectionView", {
            layoutData: {left: 0, top: 0, right: 0, bottom: 0},
            itemHeight: 80,
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
                cell.on("change:item", function (widget, item) {
                    imageView.set("image", '/images/category/' + item.image);
                    titleTextView.set("text", item.name);
                    authorTextView.set("text", item.count);
                });
            }
        }).on("select", this.itemSelect).appendTo(page);
        page.open();
    },
    itemSelect: function (widget, item) {
        switch(item.type) {
            case 'category': 
                this.loadCategory(item.id);
                break;
            case 'item': 
                this.loadItem(item.id);
                break;
        }
    }
}