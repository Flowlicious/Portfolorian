class NgThumbController {
    constructor($window) {
        this.$window = $window;
    }
}

NgThumbController.$inject = ['$window'];

class NgThumbDirective {
    constructor() {
        this.restrict = 'A';
        this.template = '<p align="center"><canvas class="roundBorder" /></p>';
        this.controller = NgThumbController;


    }

    static directiveFactory() {
        return new NgThumbDirective();
    }
    link(scope, element, attr, ctr) {

        var helper = {
            support: !!(ctr.$window.FileReader && ctr.$window.CanvasRenderingContext2D),
            isFile: function(item) {
                return angular.isObject(item) && item instanceof ctr.$window.File;
            },
            isImage: function(file) {
                var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

        if (!helper.support) return;

        var params = scope.$eval(attr.ngThumb);

        if (!helper.isFile(params.file)) return;
        if (!helper.isImage(params.file)) return;

        var canvas = element.find('canvas');
        var reader = new FileReader();

        reader.onload = onLoadFile;
        reader.readAsDataURL(params.file);

        function onLoadFile(event) {
            var img = new Image();
            img.onload = onLoadImage;
            img.src = event.target.result;
        }

        function onLoadImage() {
            var width = params.width || this.width / this.height * params.height;
            var height = params.height || this.height / this.width * params.width;
            canvas.attr({
                width: width,
                height: height
            });
            canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
        }

    }
}


export default NgThumbDirective.directiveFactory;
