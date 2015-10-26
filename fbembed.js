// fbalbumJS.js by zach@lysobey.com
(function ($) {
    $.fn.fbAlbum = function (options) {
        var $targetElement = this,
            graph = "https://graph.facebook.com/",
            settings = {
                'albumID' : '10150302289698306',
                'limit' : 100,
                'limitThumbs' : false,
                'ulClass' : 'album',
                'rel' : 'group',
                'callback' : '',
                'title' : true,
                'thumbSize' : 0,
                'fullSize' : 0,
                'caption' : false
            };
        if (options) {
            $.extend(settings, options);
        }
        graph += settings.albumID + "/photos?fields=name,picture,images,source&limit=" + settings.limit + "&callback=?";
        $.getJSON(graph, function (json) {
            var albumItem = [],
                currentIndex = 0,
                $ul = $('<ul>').addClass(settings.ulClass);
            $.each(json.data, function () {
                if (typeof this.picture !== "undefined") {
                    console.log(this.images);
                    var getThumbnail = function(context) {
                        var n = 9, thumb = context.images[n - settings.thumbSize];
                        if (settings.thumbSize === 0) {
                            return context.picture;
                        }
                        while(!thumb) {
                            console.log(thumb);
                            n--;
                            thumb = context.images[n - settings.thumbSize];
                        }
                        return thumb.source;
                    };
                    var thumbImg = getThumbnail(this),
                        fullImg = settings.fullSize === 0 ? this.source : this.images[8 - settings.fullSize].source,
                        title = (settings.title && this.name) ? this.name : '',
                        $noThumb = (settings.limitThumbs && (currentIndex += 1) >= settings.limitThumbs),
                        $img = $noThumb ? null : $('<img>').attr({
                            'src': thumbImg,
                            'alt': title
                        }),
                        $caption = (!settings.caption || title === '') ? null : $('<p>').addClass('caption').text(title),
                        $a = $('<a>').attr({
                            'class': 'imageLink',
                            'rel': settings.rel,
                            'title': title,
                            'href': fullImg
                        }),
                        $li = $('<li>').addClass($noThumb ? 'noThumb' : 'fbThumb');
                    $ul.append($li.append($a.append($img, $caption)));
                }
            });
            $targetElement.append($ul);
            if (settings.callback) {
                settings.callback();
            }
        });
        return $targetElement;
    };
}(jQuery));