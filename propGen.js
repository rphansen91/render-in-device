'use strict'

class PropGenerator {
    constructor (opts) {

    }

    commonProps () {

    }

    generate () {
        return {
            "spout": {
                "cdnHost":"",
                "distilDomain":"bender.spoutable.com",
                "sentryHost":null,
                "spoutEventHost":"//e-dev.spoutable.com",
                "spoutTrackHost":"//t.spoutable.dev"
            },
            "site":{
                "adminIsActive":true,
                "adminIsApproved":false,
                "path":"app/js/spoutable.js",
                "distilEnabled":false,
                "spoutableAdzerkSiteId":69320,
                "spoutableSiteId":"7cb00b24-5b4e-400c-abf0-c76f39b80cdc",
                "networkId":9637,
                "isActive":true,
                "mobileEnabled":true,
                "strategies": {
                    "selector": {
                        "id":-999,
                        "type":"waterfall",
                        "options":[{
                            "weight":2,
                            "id":-1001,
                            "countries":["US"]
                        }]
                    },
                    "units":{
                        "common":{
                            "shell":{
                                "unitTitle":"AS YOU GO, CHECK OUT MORE &mdash;",
                                "adzerkNetworkId":9637,
                                "unitCanBeToggled":false,
                                "openUnitMaximized":"all",
                                "cdnHost":"//cdn.spoutable.com",
                                "zemantaTest":1,
                                "zemantaMinCpc":0,
                                "zemantaAdCount":4,
                                "bidtellectTest":1,
                                "bidtellectMinCpc":0,
                                "bidtellectAdCount":4,
                                "mgidTest":1,
                                "mgidMinCpc":0,
                                "mgidAdCount":4,
                                "adzerkAdCount":8,
                                "revcontentAdCount":2,
                                "revcontentWidgetId":"31909",
                                "customFontName":"",
                                "customCSS":"",
                                "unitMode":"",
                                "partnerPriority":['adzerk','zemanta','bidtellect']
                            }
                        },
                        "site":{
                            "shell":{
                                "shouldNotShowUnitLogic":"return false;",
                                "adzerkSiteId":422071,
                                "zemantaIabCategories":["IAB1","IAB2","IAB3","IAB4","IAB5","IAB6","IAB7","IAB8","IAB9","IAB10","IAB11","IAB12","IAB13","IAB14","IAB15","IAB16","IAB17","IAB18","IAB19","IAB20","IAB21","IAB22","IAB23","IAB24"],
                                "explicitLayoutAdIds":[1445907]
                            }
                        },
                        "-2000":{
                            "fileName":"shell.js",
                            "className":"Shell",
                            "unitName":"shell",
                            "properties":{
                                "common":{
                                    "triggers":[{
                                        "event":"timer",
                                        "time":2
                                    }],
                                    "unitPlacement":"fixed-footer",
                                    "treatments":[""],
                                    "unitRegionId":2,
                                    "inPageTarget":{
                                        "selector":".sidebar .block:first",
                                        "add":"after"
                                    },
                                    "unitCfgName":"shell"
                                },
                                "site":{
                                    "unitMode":"",
                                    "iframeStyles":"#spout-unit-iframe,#spout-unit-block{height:169px !important;bottom: 0;top:auto !important;}",
                                    "customCSS":".spout-credit{left: 6px;bottom: 6px;margin: 0;opacity: 0.4;width: 20px;height: 20px;background:url(//cdn.spoutable.com/units/assets/spoutable_icon.png) no-repeat;background-size:20px 20px;} #spout-ads{text-align:left;height: 129px;margin-top:40px;padding-left:32px;padding-right:286px;background:white;position:relative;box-shadow: 0 0 32px rgba(0, 0, 0, 0.25);} #spout-wrapper{width:100% !important;background:transparent;} .spout-controls{width:32px;height:129px;background:#2B4570;position:absolute;top:0;left:0;} a#spout-header-close{display:block;right: 0;top: 0;background:  url(//cdn.spoutable.com/units/video_showcase/img/icon_close_retina_white.png) no-repeat center center;background-size: 12px 12px;} .spout-video-player{position:absolute;width:300px;height:169px;top:-40px;right:0;background:black;} .spout-ad-article{display:inline-block;width:286px !important;height:129px !important;border-right:1px solid #d4d4d4 !important;padding:18px 12px 18px 40px !important;margin:0 !important;counter-increment: article-counter;} .spout-ad-article:before{content:counter(article-counter)\\\".\\\" !important;position: absolute;top: 12px;left: 10px;color: #202526;font:26px/1em Georgia;font-weight:200;} .spout-ad-article .spout-ad-image{height:93px !important;} .spout-ad-article .spout-ad-copy{float:left;width:160px;text-align:left;color:black;font-size:14px;} .spout-ad-copy:after{content:\\\"►\\\";display:block;opacity:0.4;margin-top:5px;} .spout-ad-article.is-playing .spout-ad-copy:after{content:\\\"NOW PLAYING\\\";font-size:10px;color:#5856d6;opacity:1;}",
                                    "markup":"<div class=\\\"spout-controls\\\"><a href=\\\"\\\" id=\\\"spout-header-close\\\"></a></div><a href=\\\"\\\" class=\\\"spout-ad-article\\\" data-spout-content=\\\"additional-video\\\"><div class=\\\"spout-ad-image\\\"></div><div class=\\\"spout-ad-copy\\\"></div></a><a href=\\\"\\\" class=\\\"spout-ad-article\\\" data-spout-content=\\\"additional-video\\\"><div class=\\\"spout-ad-image\\\"></div><div class=\\\"spout-ad-copy\\\"></div></a><a href=\\\"\\\" class=\\\"spout-ad-article\\\" data-spout-content=\\\"additional-video\\\"><div class=\\\"spout-ad-image\\\"></div><div class=\\\"spout-ad-copy\\\"></div></a><a href=\\\"\\\" class=\\\"spout-ad-article\\\" data-spout-content=\\\"additional-video\\\"><div class=\\\"spout-ad-image\\\"></div><div class=\\\"spout-ad-copy\\\"></div></a><a href=\\\"\\\" class=\\\"spout-ad-article\\\" data-spout-content=\\\"additional-video\\\"><div class=\\\"spout-ad-image\\\"></div><div class=\\\"spout-ad-copy\\\"></div></a><a href=\\\"\\\" class=\\\"spout-ad-article\\\" data-spout-content=\\\"additional-video\\\"><div class=\\\"spout-ad-image\\\"></div><div class=\\\"spout-ad-copy\\\"></div></a><div class=\\\"spout-video-player\\\" data-spout-content=\\\"video-player\\\"><div id=\\\"spout-video-player\\\"></div></div>",
                                    "jwplayer":{
                                        "playerId":"PMYQfhLy",
                                        "playlistId":"https://ks9rqfic9k.execute-api.us-west-2.amazonaws.com/prod/MRSS_Proxy",
                                        "autoplay":true,
                                        "volume":-1,
                                        "autoAdvance":true
                                    },
                                    "videoAdroll":{
                                        "cpcvAmount":0,
                                        "completionRevenueFlag":true,
                                        "completionCount":0,
                                        "tagBlock":{
                                            "client":"vast",
                                            "schedule":{
                                                "adBreakPre":{
                                                    "offset":"pre",
                                                    "tag":"//search.spotxchange.com/vast/2.00/79391?VPAID=js&content_page_url=test.com&cb=3202405928168446&player_width=300&player_height=250&size=640x360&scout=true"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "-1001":{
                        "name":"A",
                        "hash":"A hash",
                        "placements":[{
                                "id":-1,
                                "type":"waterfall",
                                "options":[{
                                    "weight":1,
                                    "id":-2000
                                }]
                            }]
                        }
                    }
                }
            }
    }
}