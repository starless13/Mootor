/**
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
        _pendingGo;
            
    // Dependencies
    
    App = Mootor.App;
    Route = Mootor.Route;
    
    // Private constructors

    Router = Mootor.Router = function() {
    };

    // Event handlers

    window.onpopstate = function() {
        _appGo(window.location.hash);
    };


    _appGo = function(url) { 
        _pendingGo = window.location.hash;
    };

    App.on("ready", function() {
        _appGo = function(url) {
            m.app.go(url,true);
        };
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
        */
        route: function(url, view) {
            Route = Mootor.Route;
            
            if (view === undefined) {
                var s,
                    route,
                    match;

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