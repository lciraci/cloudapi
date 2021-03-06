/**
 * OpenALPR Cloud API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenalprApi);
  }
}(this, function(expect, OpenalprApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenalprApi.InlineResponse200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be.a(OpenalprApi.InlineResponse200);
    });

    it('should have the property processingTime (base name: "processing_time")', function() {
      // uncomment below and update the code to test the property processingTime
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property imgWidth (base name: "img_width")', function() {
      // uncomment below and update the code to test the property imgWidth
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property imgHeight (base name: "img_height")', function() {
      // uncomment below and update the code to test the property imgHeight
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property creditCost (base name: "credit_cost")', function() {
      // uncomment below and update the code to test the property creditCost
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property creditsMonthlyUsed (base name: "credits_monthly_used")', function() {
      // uncomment below and update the code to test the property creditsMonthlyUsed
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property creditsMonthlyTotal (base name: "credits_monthly_total")', function() {
      // uncomment below and update the code to test the property creditsMonthlyTotal
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property regionsOfInterest (base name: "regions_of_interest")', function() {
      // uncomment below and update the code to test the property regionsOfInterest
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property epochTime (base name: "epoch_time")', function() {
      // uncomment below and update the code to test the property epochTime
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "data_type")', function() {
      // uncomment below and update the code to test the property dataType
      //var instane = new OpenalprApi.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
