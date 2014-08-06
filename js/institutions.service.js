(function() {
  'use strict';

  angular.module('talis.services.institutions', []).factory("InstitutionsService",["$rootScope","$http", 'TDC_ENDPOINT', function($rootScope, $http, TDC_ENDPOINT) {
    var instance = function() {};

    /**
     * Find all institutions
     * @param callback
     */
    instance.findAll = function(callback) {
      $http.get(TDC_ENDPOINT + '/institutions').success(function(data) {
        callback(null,data);
      });
    };

    /**
     * Find an institution based on shortcode
     * @param inst - the shortcode to lookup
     * @param callback
     */
    instance.findInstitution = function(inst, callback) {
      $http.get(TDC_ENDPOINT + '/institutions/' + inst).success(function(data) {
        callback(null,data);
      }).error(function(response) {
          callback(response,null);
        });
    };

    return instance;
  }]);

}).call(this);
