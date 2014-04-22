/*! overthrow - An overflow:auto polyfill for responsive design. - v0.7.0 - 2013-11-04
* Copyright (c) 2013 Scott Jehl, Filament Group, Inc.; Licensed MIT */
!function(a){var b=a.document,c=b.documentElement,d="overthrow-enabled",e="ontouchmove"in b,f="WebkitOverflowScrolling"in c.style||"msOverflowStyle"in c.style||!e&&a.screen.width>800||function(){var b=a.navigator.userAgent,c=b.match(/AppleWebKit\/([0-9]+)/),d=c&&c[1],e=c&&d>=534;return b.match(/Android ([0-9]+)/)&&RegExp.$1>=3&&e||b.match(/ Version\/([0-9]+)/)&&RegExp.$1>=0&&a.blackberry&&e||b.indexOf("PlayBook")>-1&&e&&-1===!b.indexOf("Android 2")||b.match(/Firefox\/([0-9]+)/)&&RegExp.$1>=4||b.match(/wOSBrowser\/([0-9]+)/)&&RegExp.$1>=233&&e||b.match(/NokiaBrowser\/([0-9\.]+)/)&&7.3===parseFloat(RegExp.$1)&&c&&d>=533}();a.overthrow={},a.overthrow.enabledClassName=d,a.overthrow.addClass=function(){-1===c.className.indexOf(a.overthrow.enabledClassName)&&(c.className+=" "+a.overthrow.enabledClassName)},a.overthrow.removeClass=function(){c.className=c.className.replace(a.overthrow.enabledClassName,"")},a.overthrow.set=function(){f&&a.overthrow.addClass()},a.overthrow.canBeFilledWithPoly=e,a.overthrow.forget=function(){a.overthrow.removeClass()},a.overthrow.support=f?"native":"none"}(this),function(a,b,c){if(b!==c){b.easing=function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b},b.tossing=!1;var d;b.toss=function(a,e){b.intercept();var f,g,h=0,i=a.scrollLeft,j=a.scrollTop,k={top:"+0",left:"+0",duration:50,easing:b.easing,finished:function(){}},l=!1;if(e)for(var m in k)e[m]!==c&&(k[m]=e[m]);return"string"==typeof k.left?(k.left=parseFloat(k.left),f=k.left+i):(f=k.left,k.left=k.left-i),"string"==typeof k.top?(k.top=parseFloat(k.top),g=k.top+j):(g=k.top,k.top=k.top-j),b.tossing=!0,d=setInterval(function(){h++<k.duration?(a.scrollLeft=k.easing(h,i,k.left,k.duration),a.scrollTop=k.easing(h,j,k.top,k.duration)):(f!==a.scrollLeft?a.scrollLeft=f:(l&&k.finished(),l=!0),g!==a.scrollTop?a.scrollTop=g:(l&&k.finished(),l=!0),b.intercept())},1),{top:g,left:f,duration:b.duration,easing:b.easing}},b.intercept=function(){clearInterval(d),b.tossing=!1}}}(this,this.overthrow),function(a,b,c){if(b!==c){b.scrollIndicatorClassName="overthrow";var d=a.document,e=d.documentElement,f="native"===b.support,g=b.canBeFilledWithPoly,h=(b.configure,b.set),i=b.forget,j=b.scrollIndicatorClassName;b.closest=function(a,c){return!c&&a.className&&a.className.indexOf(j)>-1&&a||b.closest(a.parentNode)};var k=!1;b.set=function(){if(h(),!k&&!f&&g){a.overthrow.addClass(),k=!0,b.support="polyfilled",b.forget=function(){i(),k=!1,d.removeEventListener&&d.removeEventListener("touchstart",u,!1)};var j,l,m,n,o=[],p=[],q=function(){o=[],l=null},r=function(){p=[],m=null},s=function(a){n=j.querySelectorAll("textarea, input");for(var b=0,c=n.length;c>b;b++)n[b].style.pointerEvents=a},t=function(a,b){if(d.createEvent){var e,f=(!b||b===c)&&j.parentNode||j.touchchild||j;f!==j&&(e=d.createEvent("HTMLEvents"),e.initEvent("touchend",!0,!0),j.dispatchEvent(e),f.touchchild=j,j=f,f.dispatchEvent(a))}},u=function(a){if(b.intercept&&b.intercept(),q(),r(),j=b.closest(a.target),j&&j!==e&&!(a.touches.length>1)){s("none");var c=a,d=j.scrollTop,f=j.scrollLeft,g=j.offsetHeight,h=j.offsetWidth,i=a.touches[0].pageY,k=a.touches[0].pageX,n=j.scrollHeight,u=j.scrollWidth,v=function(a){var b=d+i-a.touches[0].pageY,e=f+k-a.touches[0].pageX,s=b>=(o.length?o[0]:0),v=e>=(p.length?p[0]:0);b>0&&n-g>b||e>0&&u-h>e?a.preventDefault():t(c),l&&s!==l&&q(),m&&v!==m&&r(),l=s,m=v,j.scrollTop=b,j.scrollLeft=e,o.unshift(b),p.unshift(e),o.length>3&&o.pop(),p.length>3&&p.pop()},w=function(){s("auto"),setTimeout(function(){s("none")},450),j.removeEventListener("touchmove",v,!1),j.removeEventListener("touchend",w,!1)};j.addEventListener("touchmove",v,!1),j.addEventListener("touchend",w,!1)}};d.addEventListener("touchstart",u,!1)}}}}(this,this.overthrow),function(a){a.overthrow.set()}(this);/**
* The Mootor module handles the creation of Namespaces and global objects
*
* @module Mootor
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function () {

    "use strict";
    
    var Mootor,
        m;

    Mootor = {
        // code here
    };
 
    // Static global objects
    
    /**
    * m public global object
    * @class window.m
    * @static
    */
    m = {
        // code here
    };

    // Make it public!
    
    window.Mootor = Mootor;
    window.m = m;
    

}());
/**
* The Event class defines and manage events
*
* @class Event
* @private
* @module Mootor
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";
    
    var Event;
    
    Event = Mootor.Event = {
        
        /**
        * Events collection
        * @private
        */
        _collection: {},

        /**
        * Add event to collection
        * @method on
        * @param {string} event Name of the event
        * @param {function} callback Callback function\
        * @example
        *     Mootor.on("myCustomEvent", function(self) {
        *         console.log("Event fired!");
        *     });
        * @private
        */
        on: function(event, callback) {
            if (Event._collection[event] === undefined) {
                Event._collection[event] = [];
            } 
            Event._collection[event].push(callback);
        },
        
        /**
        * Dispatch event
        * @method dispatch
        * @param {string} event Name of the event
        * @param {object} instance Instance for scope
        * @private
        * @example
        *     Mootor.dispatch("myCustomEvent", myInstance);
        */
        dispatch: function(event, instance) {
            var i,
                count = 0,
                callbacks = Event._collection[event],
                callback;
                
            if (callbacks !== undefined) {
                count = callbacks.length ;
            }
            
            for (i = 0; i < count; i++) {
                (function(callback) {
                    window.setTimeout(function() {
                        callback(instance);
                    }, 1);
                }(callbacks[i]));
            }
        }, 

        /**
        * Extend objects with Event methods
        * @method extend
        * @param {object} object Object to extend
        * @param {string} objectName String name of the object
        * @private
        * @example
        *     Person = function(name) {
        *         this.name = name;
        *     }
        *
        *     Mootor.Event.extend(Person.prototype);
        *
        *     person = new Person("Anon");
        *     person.on("fire", function(self) {
        *          console.log(self.name + " is on fire!");
        *     }
        *     person.dispatch("fire", person);
        */
        extend: function(object, objectName) {
            $.extend(object, {
                on: function(event, callback) {
                    Event.on(objectName + ":" + event, callback); 
                },
                dispatch: function(event, self) {
                    Event.dispatch(objectName + ":" + event, self);
                }
            });
            
        }

    };

}(window.$, window.Mootor));/**
* Information about the context of the application (ej: device's viewport)
* @class Context
* @return object
* @static
*/

(function ($, Mootor) {

    "use strict";

    var Context;

    Context = Mootor.Context = function() {
        return ({


            /**
            * System info
            * @property os
            * @type function
            * @example
            *     if (m.context.os === "android") {
            *          console.log("Your device use Android.");
            *     }
            */            
            os: $.os,

            /**
            * Browser info
            * @property browser
            * @type string
            * @example
            *     if (m.context.browser === "firefox") {
            *          console.log("Your browser is Firefox.");
            *     }
            */            
            browser: $.browser,

            /**
            * Viewport info
            * @property viewport
            * @type object
            * @example
            *     img.width = m.context.viewport.width
            *     img.height = m.context.viewport.height
            */            
            viewport: {
                width: window.screen.width,
                height: window.screen.height
            },
            
            cordova: (window.Cordova !== undefined),
            phonegap: (window.PhoneGap !== undefined),

        });
    };
    

    // Static global objects
    
    $.extend(m, { 
        
        /**
        * @property context
        * @for window.m
        * @type Context
        */
        context: new Context()
    });

}(window.$, window.Mootor));/*
 *  @author Emilio Mariscal (emi420 [at] gmail.com)
 *  @author Martín Szyszlican (martinsz [at] gmail.com)
 */

(function ($, Mootor) {

    "use strict";

    var App,
    
        Event,
        View;

    // Dependencies

    Event = Mootor.Event;
    View = Mootor.View;

    // Private constructors
    
    /**
    * The App class defines the main object of the applications
    *
    * @class App
    * @constructor
    * @module App
    * @private
    * @param {Object} options An object defining options for the application.
    * * views - An array with a list of view names
    */
    App = Mootor.App = function(options) {
    };

    // Private static 
    
    $.extend(App, {
  
        _version: undefined,

        _settings: {}
    });
    
    Event.extend(App, "App");
    
    // Public methods

    App.prototype = {
        
        /**
        * Stores the navigation history. 
        * An array of views, ordered in the sequence that they were visited by the user.
        *
        * @property history
        * @type array
        * @example
        *     if (m.app.history.length === 1) {
        *          console.log("You are on the first view")
        *     }
        */
        history: [],
       

        /**
        * The application's version number
        * Note: It's not Mootor version, this value is defined in application code, not framework code.
        *
        * @method version
        * @param {String} [version] The version number or name
        * @return {String} Version number or name
        * @example
        *     m.app.version("beta1");
        *     if (m.app.version().indexOf("beta") > -1) {
        *         console.log("Warning: beta version")
        *     }
        */
        version: function(version) {
            if (version !== undefined) {
                App._version = version;
            }
            return App._version;
        },

        /**
        * Application settings
        * If called with a key, returns the value. If called with key and value, sets value to key.
        *
        * @method settings
        * @param {String} key The name of the setting
        * @param {object} [value] The value of the setting
        * @return object the setting value
        * @example
        *     m.app.settings("debug", true);
        *     if (m.app.settings("debug") === true) {
        *          console.log("Debug mode activated.");
        *     }
        *     
        */
        settings: function(key, value) {
            if (value !== undefined) {
                // this.settings[key] = value;
                App._settings[key] = value;
            }
            // return this.settings[key] = value;
            return App._settings[key];
        },

        /**
        * Go to an url
        *
        * @method go
        * @param {String} url The url to go
        * @return Route
        * @example
        *     m.app.go("/product/15/");
        */
        go: function(url) {
            var route;
            route =  m.app.route(url);
            if (route !== undefined) {
                App._currentRoute = route;
                App.dispatch("go", this);
                if (this.history[this.history.length - 2] !== route.url) {
                    this.history.push(route.url);    
                } else {
                    this.history.pop();
                }
            } else {
                throw(new Error("Route " + url + " is not defined"));
            }                       
            return route;
        },        

        /**
        * Go to the previous view in the history
        *
        * @method back
        * @chainable
        * @return Route
        * @example
        *     m.app.back();
        */
        back: function() {
            var url = m.app.history[m.app.history.length - 2];
            if (url !== undefined) {
                m.app.go(url);
            }
            return this;
        },        

        /**
        * Set callbacks for app events
        * @method on
        * @chainable
        * @return App instance
        * @example
        *     m.app.on("ready", function(self) {
        *         console.log("App started.");
        *     });
        */    
        on: function(event, callback) {
            App.on(event, callback);
            return this;
        },
        
        /* 
        * Remove callbacks for app events
        * @method off
        * @chainable
        * @return App instance
        */    
        
        /** TODO
        off: function(event, callback) {
            return this;
        },
        */
        
        /*
        * Initialize app
        * @chainable
        * @method init
        * @return App instance
        * @example
        *     m.app.on("init", function() {
        *          console.log("App initialized.");
        *     })
        *     m.app.init();
        */
        init: function() {
            var self = this;
            App.dispatch("init", this);   
            this.init = function() { return self; };
            return this;
        }
        
    };
    
    $.extend(window.m, {        
        /**
        * Creates a new app with the defined options.
        * If the app is already created, it can be called without options to have a reference to the Mootor app. 
        *
        * App instance factory
        *
        * @method app 
        * @for window.m
        * @param {Array} [views] A list of view names to be initialized
        * @return App
        * @example
        *     window.m.app({
        *       views: [
        *          "index",
        *          "view1"
        *       ]
        *     });
        */
        app: function(options) {
            if (App.app === undefined) {
                if (options === undefined) {
                    options = {};
                }
                App.app = new App(options);
                App._options = options;
                this.app = App.app;
                return this.app;
            }
        }
    });


}(window.$, window.Mootor));
/**
* The View class handles each view of the application. 
* A list of views is specified in the applications options
* and the files are loaded from the "views" folder.
* Each view has a viewName.js, viewName.html and viewName.css files.
*
* @class View
* @module View
* @constructor
* @param {Object} options An object defining options for the current view.
* * constructor - A function that will be run after the view has loaded (optional).
* * animation - a string defining the type of animation used to show this view (one of: "slide-left", "slide-right", "none").
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor, document) {

    "use strict";
    
    var View,
    
        Event,
        App;
        
    // Dependencies
    
    Event = Mootor.Event;
    App = Mootor.App;
    
    // Event handlers
    
    App.on("init", function(self) {

        var views = App._options.views,
            viewCount = views.length,
            i,
            view;
            
        for (i = 0; i < viewCount; i++) {
            view = m.app.view(views[i]);
        }
        
        view.on("ready", function(self) {
            App.dispatch("ready");
        });
        
    });   
    
    App.on("go", function(self) {
        
        var view,
            currentView,
            app,
            stateObj,
            router = App._currentRoute,
            url = router.url;
        
        currentView = App._currentView;

        if (currentView !== undefined) {
            View.dispatch("beforeUnload", currentView);
        }

        view = App._currentView = router.view;

        if (currentView !== undefined) {
            View.dispatch("unload", currentView);
        }

        View.dispatch("beforeLoad", view);            
    
        stateObj = { view: view.id };
        
        if (currentView != view) {

            if (url !== "") {
                history.pushState(stateObj, view.id, url);
            } else {
                history.pushState(stateObj, view.id, window.location.pathname);                    
            }

        }
        View.dispatch("load", view);
        
    });
    
    // Private constructors

    View = Mootor.View = function(options) {
        this.id = options.id;
        View._init(options, this);
    };
    
    Event.extend(View, "View");
    View._dispatch = View.dispatch;
    View.dispatch = function(event, instance) {
        if (!instance) {
            console.error("view dispatch called with undefined instance for event: ",event);
            return false;    
        }
        
        if (event !== "init" ) {
            View._dispatch(event + ":" + instance.id, instance);
        } else {
            View._dispatch(event, instance);
        }
    };

    // Private static methods and properties
    
    $.extend(View, {        

        /**
        * Views collection
        */
        _collection: {},
    
        /**
        * Current active view
        */
        _current: undefined,

        /**
        * Init View instance, load HTML, CSS and JavaScript files for the view
        */
        _init: function(options, self) {
            View._collection[self.id] = {id: self.id, obj: self};

            View.dispatch("init", self);

            self.on("getHtml", function(view) {
                window.setTimeout(function() {
                    View._getScript(self);
                }, 1);
            });

            self.on("getScript", function() {
                View.dispatch("ready", self);
            });

            // Load Html, Css and JavaScript
            setTimeout(function() {
                View._getHtml(self);
            }, 1);
            View._getCss(self);

        },

        /**
        * Get view HTML
        */
        _getHtml: function(self) {
            var path,
                id = self.id;
                
            path = "views/" + id + "/" + id + ".html";
            $.get(
                path,
                function(source) {
                    View._get(self.id).html = source;
                    View.dispatch("getHtml", self);
                }
            );
        },

        /*
        * Get view script
        */
        _getScript: function (self) {
            var path,
                id = self.id,
                script,
                $script;
                
            path = "views/" + id + "/" + id + ".js";
            
            script = document.createElement("script");
            $script = $(script);
        
            script.src = path;
            script.type = "text/javascript";

            View._get(self.id).script = script;
            
            script.addEventListener("load", function() {
                View.dispatch("getScript", self);
            });
            
            $("head")[0].appendChild(script);
            
        },

        /*
        * Get view CSS
        */
        _getCss: function (self) {
            var path,
                id = self.id,
                link,
                $link;
                
            path = "views/" + id + "/" + id + ".css";
            
            link = document.createElement("link");
            $link = $(link);
        
            link.href = path;
            link.type = "text/css";
            link.rel = "stylesheet";

            $("head").append(link);
            
            $link.one("load", {
                path: path
            }, function() {
                View._get(self.id).css = link;
                View.dispatch("getCss", self);
            });
        },
        
        _get: function(id) {
            return View._collection[id];
        },
        
        _getHtmlPath: function(self) {
            return  View._get(self.id).html;
        },

        _getCssPath: function(self) {
            return View._get(self.id).css;
        },

        _getScriptPath: function(self) {
            return View._get(self.id).script;
        }
    });
    
    // Public instance prototype
    
    $.extend(View.prototype, {
        
        /**
        * Title is the friendly name for the current view.
        * When called without parameters, returns a string containing the title. When called with parameters, sets the title.
        * 
        * @method title
        * @param {string} [title] New title for this view.
        * @return string
        * @example
        *     // Get title
        *     m.app.view("index").title();
        *    
        *     // Get title
        *     m.app.view("index").title("My title");
        */  
        title: function(title) {
            var view = View._collection[this.id];
            if (title === undefined) {
                return view.title;
            } else {
                view.title = title;
                return this;
            }
        },

        /**
        * Sets an event handler for the view
        * Possible values for event: load, beforeLoad, unload, beforeUnload, init
        * 
        * @method on
        * @param {string} event Defines in which event the handler will be called
        * @param {function} callback The function to be called when the event is fired.
        * @return View
        * @example
        *
        *     // Simple example
        *
        *     m.app.route("^#index$", app.view("index"));
        *
        *     m.app.view("index").on("load", function(self) {
        *        console.log("Index view is loaded."); 
        *     });
        *
        *     // With parameters
        *
        *     m.app.route("^#product/(.*)", app.view("product"));
        *   
        *     m.app.view("product").on("load", function(self) {
        *        console.log("Product Id: " + self.params[0];
        *     });
        */   
        on: function(event,callback) {
            if (event !== "init") {
                View.on(event + ":" + this.id, callback);                
            } else {
                View.on(event, callback);
            }
            return this;
        },

        /**
        * Unsets event handlers for the view
        * Possible values for event: load, beforeLoad, unload, beforeUnload, init
        * 
        * @method off
        * @param {string} event Defines in which event we want to unset handlers
        * @param {function} [callback] If this parameter is specified, only that function is removed. Otherwise all callbacks for this event are removed.
        * @return View
        */  
        /*
        off: function(event,callback) {

        }*/

    });    
    
    $.extend(Mootor.App.prototype, {

        /**
        * Create or get a view
        *
        * @method view
        * @param {String} id The id of the view
        * @for App
        * @param {String} [options] The options object for the view
        * @return View the referenced view object
        * @example
        *     indexView = m.app.view("index");
        */
        view: function(id, options) {
            var i,
                views = View._collection,
                view;
            
            if (id !== "" && id !== undefined) {
                
                if (views[id] !== undefined) {
                    view = views[id].obj;
                } else {
                    if (options === undefined) {
                        options = {};
                    }
                    options.id = id;
                    view = new View(options);
                }
            } else {
                view = App._currentView;
            }

            return view;
        },
        
    });

}(window.$, window.Mootor, window.document));
/**
* The UI class is the class for all user interface elements.
* It is not directly used, but extended by many other classes.
*
* @class UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";

    var UI;
    
    // Private constructors

    UI = Mootor.UI = function() {
    };

    // Private static methods and properties

    $.extend(UI, {
        // code here
    });
    
    // Public methods

    $.extend(UI.prototype, {
        
        /**
        * DOM element
        *
        * @property el
        * @return {DOM Element}
        * @example
        *     appDOMElement = m.app.ui.el;
        *     appDOMElement.addEventListener("touchend", function() {
        *         console.log("Header was touched.");
        *     });
        */
        el: undefined,
        
        /**
        * Zepto/jQuery object for DOM element
        *
        * @property $el
        * @return {Zepto/jQuery object instance}
        * @example
        *     $appDOMElement = m.app.ui.$el;
        *     $appDOMElement.on("tap", function() {
        *         console.log("Header was tapped.");
        *     });
        */
        $el: undefined ,
        
        /**
        * Shows element (not necesarily, since the element's parent might be hidden or out of view)
        *
        * @method show
        * @return {UI}
        * @example
        *     m.app.ui.show();
        */
        show: function() {
            this.$el.removeClass("m-hidden");
        },

        /**
        * Hides element from view
        *
        * @method hide
        * @return {UI}
        * @example
        *     m.app.ui.hide();
        */
        hide: function() {
            this.$el.addClass("m-hidden");
        }
    });
        
}(window.$, window.Mootor));
/**
* The UIApp class is the UI representation of an app
*
* @class UIApp
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";

    var UIApp,
    
        UI,
        App,
        View,
        Event;

    // Dependences

    UI = Mootor.UI;
    Event = Mootor.Event;
    App = Mootor.App;
    View = Mootor.View;

    // Private constructors

    UIApp = Mootor.UIApp = function() {
        var $container,
            app = m.app,
            self = this;

        App = Mootor.App;

        if (App._options.container) {
            $container = App._options.container;
        }
        else {
            $("html").addClass("m-html");
            $container = $("body");
        }
        $container.addClass("m-app");
        
        // Update context viewport
        m.context.viewport = {
            width: $container.width(),
            height: $container.height()
        };

        // Event handlers
    
        window.addEventListener("resize", function() {
            m.context.viewport = {
                width: $container.width(),
                height: $container.height()
            };
        });

        this.$el = $("<div>").addClass("m-views-container");

        // Disable transitions on Android
        m.app.settings("uipanel-transitions", m.context.os.android !== true)

        if (m.app.settings("uipanel-transitions") !== true) {
            this.$el.addClass("m-no-transitions");
        }
        
        this.el = this.$el[0];        
        this.$el.appendTo($container);
        this.$container = $container;

        UIApp.dispatch("init", this);
        
    };
    
    // Event handlers
    
    App.on("init", function(self) {
        $.extend(self, {
           ui: new UIApp()
        });
    });    

    // Extends from UI

    $.extend(UIApp.prototype, UI.prototype);


    // Private static methods and properties

    Event.extend(UIApp, "UIApp");

    // Public methods

    $.extend(UIApp.prototype, {
    
    });   
    
    // App.on("ready", function() {
    //     var links = $("a"),
    //         i,
    //         href;
        
    //     for (i = links.length; i--;) {
    //         href = links[i].getAttribute("href");
    //         if (href !== null) {                
    //             if (m.app.route(links[i].getAttribute("href")) !== undefined) {
    //                 (function(href) {
    //                     $(links[i]).on("tap", function(e) {
    //                         m.app.go(href);
    //                     })
    //                 }(href));
    //                 $(links[i]).on("click", function(e) {
    //                     e.stopPropagation();
    //                     e.preventDefault();
    //                 })
    //             }
    //         }
    //     }
        
    // });  
    

}(window.$, window.Mootor));
/**
* The UIView class is the UI representation of a view
*
* @class UIView
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor, document) {

    "use strict";

    var UIView,
    
        UI,
        Event,
        View;

    // Dependences

    Event = Mootor.Event;
    UI = Mootor.UI;
    View = Mootor.View;

    // Event handlers
    
    View.on("init", function(self) {
        self.ui = new UIView(self);

        self.ui.el = document.createElement("div");
        self.ui.$el = $(self.ui.el);

        if (View._getHtmlPath(self) !== undefined) {
            self.ui.el.innerHTML = View._getHtmlPath(self);                
        } else {
            self.on("getHtml", function(self) {
                self.ui.el.innerHTML = View._getHtmlPath(self);
            });
        }

        self.on("getHtml", function() {
            UIView.dispatch("init", self.ui);
        });


        self.on("ready", function() {
            for (var index in UIView._enhancements) {
                $(UIView._enhancements[index].selector).each(function (i,element) {
                    new UIView._enhancements[index].className(element);    
                });    
            }
        });
    });


        
    // Private constructors

    UIView = Mootor.UIView = function(view) {
        var self = this;
        self.view = view;
    };


    // Private static methods and properties

    Event.extend(UIView, "UIView");

    // Private static methods and properties

    $.extend(UIView, {
        // code here
    });

    // Public methods

    UIView.prototype = {
        // code here
    };

    // Prototypal inheritance

    $.extend(UIView.prototype, UI.prototype);

}(window.$, window.Mootor, window.document));
/**
* A Panel to show views
*
* @class UIPanel
* @extends UI
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";

    var UIPanel,
        
        UI,
        View,
        UIView,
        UIApp,
        Event;
        
    // Dependences 

    Event = Mootor.Event;
    UI = Mootor.UI;  
    View = Mootor.View;
    UIView = Mootor.UIView;
    UIApp = Mootor.UIApp;

    // Event handlers

    UIView.on("init", function(self) {
        var view = self.view;
        
        self.panel = new UIPanel(view);
        self.panel.el = self.el;
        self.panel.$el = $(self.el);
        self.panel.hide();
        
        UIPanel.on("transitionEnd", function(self) {
            if (Mootor.App._currentView !== view) {
                view.ui.panel.hide();    
            } 
        });
        
        view.on("load", function(view) {

            self.panel.position("right").show();

            UIPanel._startTransition();
            
            if (m.app.settings("uipanel-transitions") === true) {
                window.setTimeout(function() {
                    UIPanel.dispatch("transitionEnd", self.panel);
                }, UIPanel._transitionDuration);
            }

            UIPanel.on("transitionEnd", function() {
                self.panel.position("left");
            });
            

            if (m.app.settings("uipanel-transitions") !== true) {
                UIPanel.dispatch("transitionEnd", self.panel);
            }
            
        });
    
        view.on("unload", function(view) {
            self.panel.position("left");
        }); 
                
    });
    
    UIApp.on("init", function(self) {
        
        UIPanel._addTransitionClass();    
        UIPanel._setTransitionDuration();  
    });

  
    // Private constructors

    UIPanel = Mootor.UIPanel = function(view) {
        UIPanel._init(this, view);
    };

    // Prototypal inheritance

    $.extend(UIPanel.prototype, UI.prototype);
    Event.extend(UIPanel, "UIPanel");
    
    // Private static methods and properties
        
    $.extend(UIPanel, {

        DEFAULT_TRANSITION: "hslide",
        
        //Initialize panel

        /**
        * Initialize  a panel
        *
        * @method _init
        * @private
        */
        _init: function(self, view) {

            var $el,
                el;

            el = view.ui.el;
            $el = $(el);
            
            $el.addClass("m-panel overthrow");
            
            self.transition(UIPanel.DEFAULT_TRANSITION);

            m.app.ui.$el.append(el);            
            
        },
        
        _startTransition: function (self) {
            
            var uiapp = m.app.ui;
            
            if (m.app.settings("uipanel-transitions") === true) {
                uiapp.$el.addClass("m-transition-hslide");
                uiapp.$el.addClass("m-transition-hslide-left").removeClass("m-transition-hslide-right");
            }
            
            UIPanel.on("transitionEnd", function () {
                if (m.app.settings("uipanel-transitions") === true) {
                    uiapp.$el.removeClass("m-transition-hslide");
                    uiapp.$el.addClass("m-transition-hslide-right").removeClass("m-transition-hslide-left");
                }
            });
        },
        
        _addTransitionClass: function (self) {
            var uiapp = m.app.ui;

            if (UIPanel.DEFAULT_TRANSITION == "hslide") {
                uiapp.$el.addClass("m-transition-hslide m-double-width");
                uiapp.$el.addClass("m-transition-hslide-right").removeClass("m-transition-hslide-left");
            }
        },
        
        _transitionDuration: null,
        
        _setTransitionDuration: function() {

            var getStyleBySelector,
                transitionDurationCSS,
                transitionDurationMiliseconds,
                t;
            
                getStyleBySelector = function ( selector ) {
               var sheetList = document.styleSheets,
                   ruleList,
                   i, j, ss;

               /* look through stylesheets in reverse order that
                  they appear in the document */
               for (i=sheetList.length-1; i >= 0; i--)
               {
                    if (!sheetList[i].href) {
                        continue;
                    }
                    ss = sheetList[i].href.split("/");
                   
                   if (ss[ss.length-1] != "mootor.css") {
                        continue;
                   }
                   
                   ruleList = sheetList[i].cssRules;
                   
                   for (j=0; j<ruleList.length; j++)
                   {
                       if (ruleList[j].type == CSSRule.STYLE_RULE && 
                           ruleList[j].selectorText == selector)
                       {
                           return ruleList[j].style;
                       }   
                   }
               }
               return null;
            };


            t = getStyleBySelector(".m-app .m-transition-hslide");
            
            if (t !== null) {
                transitionDurationCSS = t.transitionDuration || t.webkitTransitionDuration || t.operaTransitionDuration || t.mozTransitionDuration;
                transitionDurationMiliseconds = parseFloat(transitionDurationCSS) * 1000;
            } else {
                transitionDurationMiliseconds = 0;
            }

            UIPanel._transitionDuration = transitionDurationMiliseconds;
        }        
        
    });

    // Public prototype    
    
    $.extend(UIPanel.prototype, {

        _transition: UIPanel.DEFAULT_TRANSITION,

        /**
        * Move the element to the specified position inside the UIApp / m-views-container. 
        * If coordinates are not specified, it returns coordinates object with the current position.
        *
        * @method position
        * @param {object} [coordinates] Object with coordinates. Example: {x: 0, y: 0}
        * @return {object} Object with coordinates. Example: {x: 0, y: 0}
        */
        position: function(side) {
            if (side) {
                var counterSide = (side == "left" ? "right" : "left");
                this.$el.addClass("m-position-"+side).removeClass("m-position-"+counterSide);
                return this;                
            }
            else {
                var $el = $(this.el);
                return $el.hasClass("m-position-left") ? "left" : "right"; 
            }
            
        },

        /**
        * Block/Unblock or return block status.
        *
        * @method blocked
        * @param {Boolean} [blocked] Whether the panel is blocked
        * @return {Boolean} Whether the panel is blocked
        */
        /*
        blocked: function(blocked) {
            
        },
        */

        /**
        * Set or get transition type
        *
        * @method transition
        * @param {String} [transition] Transition type. MUST be one of: slide-left, slide-right, none
        * @return {String} Transition type
        */
        transition: function(transition) {
            if (transition) {
                this._transition = transition;
            }
            else {
                return this._transition;
            }
        },
        
        /**
        * Set callback function for an event
        *
        * @method on
        * @param {String} event Event string name
        * @return {Function} Callback function
        * @example
        *     m.app.view("index").panel.on("transitionEnd", function(self) {
        *         console.log("transition end!")
        *     });
        */
        on: function(event, callback) {
            UIPanel.on(event, callback);    
            return this;            
        }

    });
    
}(window.$, window.Mootor));/**
* The Router class is for defining routes
*
* @class Router
* @constructor
*  @module Router
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";

    var Router,

        Route,
        App,
        _appGo,
        _pendingGo,
        _lastHash,
        _onPopState;
                    
    // Dependencies
    
    App = Mootor.App;
    Route = Mootor.Route;
    
    // Private constructors

    Router = Mootor.Router = function() {
    };

    // Event handlers

    _onPopState = function() {
        
        var urlBack;

        if (_lastHash === window.location.hash) {
            urlBack = m.app.history[m.app.history.length - 2];
            if (urlBack !== undefined) {
                _appGo(urlBack);
            } else {
                _appGo(window.location.hash);
            }
        } else {
            _appGo(window.location.hash);
        }

        _lastHash = window.location.hash;

    };

    if (m.context.os.android === true) {
        window.onhashchange = _onPopState;
    } else {
        window.onpopstate = _onPopState;
    }


    _appGo = function(url) { 
        _pendingGo = url;
    };

    App.on("ready", function() {
        _appGo = function(url) {
            m.app.go(url);
        };
        if (_pendingGo === undefined) {
            _pendingGo = window.location.hash
        }
        
        m.app.go(_pendingGo);
    });

    // Private static methods and properties

    $.extend(Router, {
        _collection: {}
    });

    
    $.extend(App.prototype, {
        
        /**
        * Create a route
        *
        * @method route
        * @param {string} url Regular expresion string
        * @param {string} url URL to route
        * @param {View} view View object
        * @return Route
        * @example
        *     // Set route
        *     m.app.route("index.html", m.app.view("index"));
        *     /
        *     // Get route
        *     route = m.app.route("index.html");
        */
        route: function(url, view) {
            Route = Mootor.Route;
            
            if (view === undefined) {
                var s,
                    route,
                    match;
                    
                    if (url === undefined) {
                    //    debugger;
                    }

                for (s in Router._collection) {
                    match = url.match(new RegExp(s));
                    if (match !== null) {
                        route = Router._collection[s];
                        route.view.params = match.slice(1, match.length);
                        route.url = url;
                        return route;
                    }
                }
                return undefined;
            } else {
                Router._collection[url] = new Route(url, view);
                return Router._collection[url];
            }
        }
    });
          
}(window.$, window.Mootor));
/**
* The Route class is for defining a route
*
* @class Route
* @constructor
* @module Router
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/


(function ($, Mootor) {

    "use strict";

    var Route;

    // Private constructors
    
    Route = Mootor.Route = function(regex, view) {
        this.regex = regex;
        this.view = view;
    };
    
    // Private static methods and properties

    $.extend(Route, {
        // code here
    });

    // Public methods

    $.extend(Route.prototype, {
        
        /**
        * The URL regex referenced by this route
        *
        * @property regex
        * @type String
        * @example
        *     url_regex = m.app.route("index.html").regex;
        */
        regex: "",

        /**
        * The view that implements this route
        * If called with no parameters, it returns the currently set view in this route.
        *
        * @method view
        * @param {View} [view] - The view that implements this route
        * @return view
        * @example
        *     url_view = m.app.route("index.html").view;
        */
        view: {},

    });        

}(window.$, window.Mootor));
/**
* The UINavItem is an item of a UINavBar, like an action button or an anchor link
*
* @class UINavItem
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {
    
    "use strict";

    var UINavItem,
    
        UI;

    // Dependences

    UI = Mootor.UI;
    
    // Private constructors

    Mootor.UINavItem = UINavItem = function(options) {
        this.el = options.el;
        this.$el = $(this.el);
        this.$el.addClass("m-nav-item");
    };

    // Prototypal inheritance
    $.extend(UINavItem.prototype, UI.prototype);

    // Private static methods and properties

    $.extend(UINavItem, {
   
    });

    // Public methods and properties

    $.extend(UINavItem.prototype, {
        
        /**
        * Block/Unblock or return block status.
        *
        * @method blocked
        * @param {Boolean} [blocked] Whether the item is blocked
        * @return {Boolean} Whether the panel is blocked
        * @chainable
        */
        /*
        blocked: function(blocked) {
            // code here
        }*/

    });        
}(window.$, window.Mootor));
/**
* The UINavBar class is a navigational element at the top or bottom of the page (header or footer)
*
* @class UINavBar
* @extends UI
* @module UI
* @constructor
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";

    var UINavBar,
    
        UI,
        UINavItem;
        
    // Dependences
    
    UI = Mootor.UI;
    UINavItem = Mootor.UINavItem;

    // Private constructors

    UINavBar = Mootor.UINavBar = function(options) {
        this.el = options.container;
        this.$el = $(this.el);
        this.$el.addClass("m-navbar");
        this.nav = UINavBar._initNavItems(this.el);
    };

    // Prototypal inheritance
    
    $.extend(UINavBar.prototype, UI.prototype);
    
    // Private static methods and properties

    $.extend(UINavBar, {
        _initNavItems: function(el) {
            var i,
                j,
                navGroupsElements = el.getElementsByTagName("nav"),
                navItemsElements,
                navGroups = [],
                navItem;
                
            for (i = navGroupsElements.length; i--; i > 1) {
                $(navGroupsElements[i]).addClass("m-nav");
                navItemsElements = navGroupsElements[i].getElementsByTagName("a");
                for (j = navItemsElements.length; j--;) {
                    navItem = new UINavItem({
                        el: navItemsElements[j]
                    });
                }
                navGroups.push();
            }
            
            return navGroups;
        }
    });

    //Public methods

    $.extend(UINavBar.prototype, {
    });  

}(window.$, window.Mootor));
/**
* The UIHeader class is a navigational element at the top of the page (header)
*
* @class UIHeader
* @extends UI
* @module UI
* @constructor
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";

    var UIHeader,
    
        UINavBar,
        UIView,
        View,
        UIApp,
        UINavItem,
        App,
        UI,
        headerContainerEl;

    // Dependences

    View = Mootor.View;
    UINavBar = Mootor.UINavBar;
    UIView = Mootor.UIView;
    UIApp = Mootor.UIApp;
    UINavItem = Mootor.UINavItem;
    App = Mootor.App;
    UI = Mootor.UI;
    
    // Event handlers

    UIApp.on("init", function(self) {

        // FIXME CHECK (parentElement?)
        var headerEl = self.el.parentElement.getElementsByTagName("header")[0];
        
        headerContainerEl = document.createElement("div");
        headerContainerEl.setAttribute("class","m-header-container");
        headerEl.parentElement.replaceChild(headerContainerEl, headerEl);
        headerContainerEl.appendChild(headerEl);

        if (headerEl) {
            self.header = new UIHeader({
                el: headerEl
            });
        }
        m.app.ui.header.hide()
        
    });

    UIView.on("init", function(self) {
        
        var headerEl = self.panel.el.getElementsByTagName("header")[0];

        if (headerEl) {

            self.header = new UIHeader({
                el: headerEl
            });
            
            self.panel.el.removeChild(headerEl);
            headerContainerEl.appendChild(headerEl);
            
            self.header.hide();

            self.view.on("load", function(self) {
               self.ui.header.show();
            });

            self.view.on("unload", function(self) {
               self.ui.header.hide();
            });

        } else {
            self.view.on("load", function(self) {
               m.app.ui.header.show()
            });

            self.view.on("unload", function(self) {
                m.app.ui.header.hide()
            });
        }
    });
    
    // Private constructors

    UIHeader = Mootor.UIHeader = function(options) {
        this.nav = new UINavBar({
            container: options.el
        });
        this.el = this.nav.el;
        this.$el = $(this.el);
        if (this.$el.find("nav").length < 1) {
            this.el.appendChild(document.createElement("nav"));
        }
        UIHeader._initBackButton(this);
    };

    
    // Private static methods and properties

    $.extend(UIHeader, {
        
        _initBackButton: function(self) {
            var backEl = document.createElement("a"),
                backIconEl = document.createElement("icon"),
                backNavEl = document.createElement("nav");
                
                // FIXME CHECK (white?)
                backIconEl.setAttribute("class", "m-icon-arrow-left-white");
                
            backEl.appendChild(backIconEl);
            backNavEl.appendChild(backEl);
            backNavEl.setAttribute("class", "m-nav-header-back-container");

            if (self.el.firstChild !== undefined) {
               self.el.insertBefore(backNavEl,self.el.firstChild) 
            } else {
               self.el.appendChild(backNavEl)
               pa.appendChild(who);
            }
            
            self.back = new UINavItem({
                el: backEl
            });
            self.back.$el.addClass("m-header-back");
            self.back.hide();
            
            self.back.$el.on("tap click", function(e) {
                m.app.back();
            });
            self.back.el.onclick = function(e) {
                return false;
            };
            App.on("go", function(app) {
                if (app.history.length > 1) {
                    self.back.show();
                } else {
                    self.back.hide();
                }
            });            
        }
        
    });

    // Public methods

    $.extend(UIHeader.prototype, {
        
        /**
        * Back
        * The back button
        *
        * @object back
        * @return {UINavItem} 
        * @example
        *     m.app.view("index").ui.header.back.hide();
        */
        back: {},
        
        /**
        * Title
        * The text to display in the header
        * If called with no arguments returns the current title
        *
        * @method title
        * @param {string} [title] The text for the title
        * @return {String} 
        * @chainable
        * @example
        *     m.app.view("index").ui.header.title("My title");
        */
        title: function(title) {
            var titleEl = this.el.getElementsByTagName("h1")[0];
            if (title !== undefined) {
                titleEl.innerHTML = title;
            } else {
                return titleEl.innerHTML;
            }
            return this;
        }
        
    });  
          
    // Prototypal inheritance

    $.extend(UIHeader.prototype, UINavBar.prototype);
    $.extend(UIHeader.prototype, UI.prototype);

}(window.$, window.Mootor));
/**
* The UIFooter class is a navigational element at the bottom of the page (footer)
*
* @class UIFooter
* @extends UI
* @module UI
* @constructor
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    "use strict";

    var UIFooter,
    
        UINavBar,
        UIView,
        View,
        UIApp,
        UINavItem,
        App,
        UI,
        footerContainerEl,
        $footerContainerEl,
        _appFooter = false;

    // Dependences

    View = Mootor.View;
    UINavBar = Mootor.UINavBar;
    UIView = Mootor.UIView;
    UIApp = Mootor.UIApp;
    UINavItem = Mootor.UINavItem;
    App = Mootor.App;
    UI = Mootor.UI,
    
    // Event handlers

    UIApp.on("init", function(self) {

        var footerEl;
        
        if (self.el !== undefined) {
            
            footerContainerEl = document.createElement("div");
            $footerContainerEl = $(footerContainerEl);
            $footerContainerEl.addClass("m-footer-container m-hidden");

            footerEl = self.el.parentElement.getElementsByTagName("footer")[0];

            if (footerEl !== undefined) {
                _appFooter = true;
                footerEl.parentElement.replaceChild(footerContainerEl, footerEl);
            } else {
                footerEl = document.createElement("footer");
                document.body.appendChild(footerContainerEl);
            }
            
            footerContainerEl.appendChild(footerEl);
            
            self.footer = new UIFooter({
                el: footerEl
            });
            

        }
        
    });

    UIView.on("init", function(self) {
        
        var footerEl = self.panel.el.getElementsByTagName("footer")[0];
        
        if (footerEl !== undefined) {
        
            self.footer = new UIFooter({
                el: footerEl
            });
            
            self.panel.el.removeChild(footerEl);
            footerContainerEl.appendChild(footerEl);
            
            self.footer.hide();

            self.view.on("load", function(self) {
               self.ui.footer.show();
               $footerContainerEl.removeClass("m-hidden");
            });

            self.view.on("unload", function(self) {
               self.ui.footer.hide();
               $footerContainerEl.addClass("m-hidden");
            });
            
        } else {
            
            if (_appFooter === true) {                
                self.view.on("load", function(self) {
                   m.app.ui.footer.show()
                   $footerContainerEl.addClass("m-hidden");
                });

                self.view.on("unload", function(self) {
                    m.app.ui.footer.hide()
                    $footerContainerEl.removeClass("m-hidden");
                });
            } else {
                self.view.on("load", function(self) {
                    $footerContainerEl.addClass("m-hidden");
                });
            }
            
        }
        
        self.view.on("load", function() {
            self.el.style.height = (m.app.ui.el.offsetHeight - footerContainerEl.offsetHeight*2) + "px"
        });
        
    });
    
    // Private constructors

    UIFooter = Mootor.UIFooter = function(options) {
        this.nav = new UINavBar({
            container: options.el
        });
        this.el = this.nav.el;
        this.$el = $(this.el);
    };

    
    // Private static methods and properties

    $.extend(UIFooter, {
        
    });

    // Prototypal inheritance

    $.extend(UIFooter.prototype, UINavBar.prototype);
    $.extend(UIFooter.prototype, UI.prototype);

}(window.$, window.Mootor));
/**
* The UILoading is the loading indicator 
*
* @class UILoading
* @extends UI
* @module UI
* @constructor
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {

    // Force strict mode for ECMAScript
    "use strict";

    var UILoading,
        
        UIApp,
        UI;

    // Dependences

    UI = Mootor.UI;
    UIApp = Mootor.UIApp;

    // Event handlers
    UIApp.on("init", function(self) {
        var uiloading = new UILoading();

        $.extend(UIApp.prototype, {
            
            /**
            * Show/Hide the loading indicator
            *
            * @method loading
            * @for UIApp
            * @param {Boolean} [show] Show or hide the loading indicator
            * @return {Boolean}
            * @example
            *     m.app.ui.loading();
            *     m.app.ui.loading(true);
            */
            loading: function(show) {
                if (show === true) {
                    uiloading.show();
                }
                else {
                    uiloading.hide();
                }
            }

        });   

    });    


    // Private constructors

    UILoading = Mootor.UILoading = function() {
        var $el = this.$el = UILoading.create();
        $el.appendTo(m.app.ui.$container);
        //debugger;
        this.hide();
    };

    // Prototypal inheritance

    UILoading.prototype = UI.prototype;

    
    // Private static methods and properties

    $.extend(UILoading, {
        /**
        * Create and add the loading indicator's elements to the DOM
        *
        * @method create
        * @return {Zepto} Zeptified element
        */

        create: function() {
            var el = document.createElement("div");
            var $el = $(el);
            $el.addClass("m-loading");
            $el.addClass("m-loading-circles");//m-loading-default-style

            $("<div>").addClass("m-loading-circle m-loading-circle-01").appendTo($el);
            $("<div>").addClass("m-loading-circle m-loading-circle-02").appendTo($el);
            $("<div>").addClass("m-loading-circle m-loading-circle-03").appendTo($el);

            return $el;
        }
    });

    // Public methods

    $.extend(UILoading.prototype, {
        
        /**
        * Set the style for the loading animation
        *
        * @method style
        * @param {object} [options] Style options TODO: Define this object's structure
        * @return {UILoading} 
        * @chainable
        */
        /*
        style: function(options) {
            
        }*/
    });      

      
}(window.$, window.Mootor));


/**
* The UIForm is a form to input data
*
* @class UIForm
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {
    
    "use strict";

    var UIForm,
        UIView,
        UI,
        View;
        
    // Dependences

    UI = Mootor.UI;
    UIView = Mootor.UIView;
    View = Mootor.View;

    // Private constructors

    Mootor.UIForm = UIForm = function(element) {
        console.log("UIForm",element);
    };
    
    // Event handlers

    UIView.on("init", function(self) {
        var i;
        for (i in UIForm._controls) {
            UIForm._controls[i].constructor._init(self);
        }
    });


    // Prototypal inheritance
    $.extend(UIForm.prototype, UI.prototype);

    // Private static methods and properties

    $.extend(UIForm, {
        /**
        * Controls
        * @private
        */
        _controls: [],

        registerControl: function(constructor) {
            UIForm._controls.push({
                constructor: constructor
            });
        }
    });

    // Public methods and properties

    $.extend(UIForm.prototype, {
        
        /**
        * Serialize form's data
        *
        * @method serialize
        * @return {Object} Serialized data in a JSON object
        */
        serialize: function() {
            
        },

        /**
        * Clear all form fields
        *
        * @method clear
        * @chainable
        */
        clear: function() {
            // code here
        }
    });        
}(window.$, window.Mootor));
/**
* UIFormText is a text input of a form
*
* @class UIFormText
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {
    
    "use strict";

    var UIFormText,
    
        UI,
        UIForm;

    // Dependences

    UI = Mootor.UI;
    UIForm = Mootor.UIForm;

    // Event handelers
    
    // Private constructors

    UIFormText = function() {
        // Code here
    };

    // Prototypal inheritance
    $.extend(UIFormText.prototype, UI.prototype);

    // Private static methods and properties

    $.extend(UIFormText, {

        _init: function(uiview) {
            var inputs,
                i;
                
            inputs = uiview.$el.find(".m-text");
            
            // code here

        },
        
    });

    // Public methods and properties

    $.extend(UIFormText.prototype, {
    });      
    
    UIForm.registerControl(UIFormText);  

}(window.$, window.Mootor));
/**
* UIFormTextArea is a textarea input of a form
*
* @class UIFormTextArea
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {
    
    "use strict";

    var UIFormTextArea,
    
        UI,
        UIForm;

    // Dependences

    UI = Mootor.UI;
    UIForm = Mootor.UIForm;
    
    // Private constructors

    UIFormTextArea = function() {
        // code here
    };

    // Prototypal inheritance
    $.extend(UIFormTextArea.prototype, UI.prototype);

    // Private static methods and properties

    $.extend(UIFormTextArea, {
        _init: function(uiview) {
            var inputs,
                i;
                
            inputs = uiview.$el.find(".m-textarea");

           // code here
        }
   
    });

    // Public methods and properties

    $.extend(UIFormTextArea.prototype, {
    });        

    UIForm.registerControl(UIFormTextArea);  

}(window.$, window.Mootor));
/**
* UIFormSelect is a select input of a form
*
* @class UIFormSelect
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {
    
    "use strict";

    var UIFormSelect,
    
        UI,
        UIForm;

    // Dependences

    UI = Mootor.UI;
    UIForm = Mootor.UIForm;
    
    // Private constructors

    UIFormSelect = function() {
        // code here
    };

    // Prototypal inheritance
    $.extend(UIFormSelect.prototype, UI.prototype);

    // Private static methods and properties

    $.extend(UIFormSelect, {
        _init: function(uiview) {
            var inputs,
                i;
                
            inputs = uiview.$el.find(".m-select");
            inputs.each(function(index,element) {
                var $element = $(element);

                var coverHTML = '<div class="m-select m-select-cover">\
                    <span class="m-value"></span>\
                    <span class="m-icon-arrow-down-small"></span>\
                </div>';

                var $cover = element.$cover = $(coverHTML).insertBefore(element);

                updateValue();
                $element.on("change", updateValue);

                // https://code.google.com/p/expandselect/

                function updateValue() {
                    //Value is the text of the selected option or the placeholder text
                    var value = element.options[element.selectedIndex].text || element.placeholder;
                    $cover.find(".m-value").html(value);
                }
            });
        }
   
    });

    // Public methods and properties

    $.extend(UIFormSelect.prototype, {
    });        

    UIForm.registerControl(UIFormSelect);  

}(window.$, window.Mootor));
/**
* UIButton is a button element, it uses UIForm to extend elements with aria-roles
*
* @class UIButton
* @extends UI
* @constructor
* @module UI
* @author Emilio Mariscal (emi420 [at] gmail.com)
* @author Martín Szyszlican (martinsz [at] gmail.com)
*/

(function ($, Mootor) {
    
    "use strict";

    var UIButton,
    
        UI,
        UIForm;

    // Dependences

    UI = Mootor.UI;
    UIForm = Mootor.UIForm;

    // Event handelers
    
    // Private constructors

    UIButton = function() {
        // Code here
    };

    // Prototypal inheritance
    $.extend(UIButton.prototype, UI.prototype);

    // Private static methods and properties

    $.extend(UIButton, {

        _init: function(uiview) {
            var buttons;
                
            buttons = uiview.$el.find(".m-button");
            
            // code here

            buttons.attr("aria-role","button");

        },
        
    });

    // Public methods and properties

    $.extend(UIButton.prototype, {
    });      
    
    UIForm.registerControl(UIButton);  

}(window.$, window.Mootor));