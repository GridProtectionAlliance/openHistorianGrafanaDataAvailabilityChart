//******************************************************************************************************
//  openHistorianGrafanaDataAvailabilityChart_ctrl.ts - Gbtc
//
//  Copyright © 2017, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  12/18/2017 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************
System.register(["app/plugins/sdk", "d3", "jquery", "moment"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var sdk_1, d3_1, jquery_1, moment_1, OpenHistorianGrafanaDataAvailabilityChart;
    return {
        setters: [
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (d3_1_1) {
                d3_1 = d3_1_1;
            },
            function (jquery_1_1) {
                jquery_1 = jquery_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }
        ],
        execute: function () {//******************************************************************************************************
            //  openHistorianGrafanaDataAvailabilityChart_ctrl.ts - Gbtc
            //
            //  Copyright © 2017, Grid Protection Alliance.  All Rights Reserved.
            //
            //  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
            //  the NOTICE file distributed with this work for additional information regarding copyright ownership.
            //  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
            //  file except in compliance with the License. You may obtain a copy of the License at:
            //
            //      http://opensource.org/licenses/MIT
            //
            //  Unless agreed to in writing, the subject software distributed under the License is distributed on an
            //  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
            //  License for the specific language governing permissions and limitations.
            //
            //  Code Modification History:
            //  ----------------------------------------------------------------------------------------------------
            //  12/18/2017 - Billy Ernest
            //       Generated original version of source code.
            //
            //******************************************************************************************************
            //import { varName } from '../js/constants'   // import constants from constant file using this format
            OpenHistorianGrafanaDataAvailabilityChart = (function (_super) {
                __extends(OpenHistorianGrafanaDataAvailabilityChart, _super);
                function OpenHistorianGrafanaDataAvailabilityChart($scope, $injector, $rootScope) {
                    var _this = _super.call(this, $scope, $injector) || this;
                    _this.$rootScope = $rootScope;
                    _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
                    _this.events.on('panel-teardown', _this.onPanelTeardown.bind(_this));
                    _this.events.on('render', _this.onRender.bind(_this));
                    _this.events.on('panel-initialized', _this.onPanelInitialized.bind(_this));
                    _this.events.on('data-received', _this.onDataRecieved.bind(_this));
                    //this.events.on('data-snapshot-load', console.log('data-snapshot-load'));
                    _this.events.on('data-error', _this.onDataError.bind(_this));
                    _this.events.on('refresh', _this.onRefresh.bind(_this));
                    _this.$scope.colors = [
                        { Color: '#6b486b', State: 'Good Data' },
                        { Color: '#ff8c00', State: 'Available Bad Data' },
                        { Color: '#FFFFFF', State: 'Total Available Data' }
                    ];
                    return _this;
                }
                // #region Events from Graphana Handlers
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onInitEditMode = function () {
                    //console.log('init-edit-mode');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onPanelTeardown = function () {
                    //console.log('panel-teardown');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onPanelInitialized = function () {
                    //console.log('panel-initialized');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onRefresh = function () {
                    //console.log('refresh');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onResize = function () {
                    var ctrl = this;
                    //console.log('refresh');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onRender = function () {
                    //console.log('render');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onDataRecieved = function (data) {
                    var _this = this;
                    this.datasource.getDataAvailability().then(function (data) {
                        console.log(data);
                        _this.$scope.data = data.data;
                        _this.buildChart(data.data);
                    });
                    //console.log('data-recieved');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onDataError = function (msg) {
                    //console.log('data-error');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.buildChart = function (data) {
                    jquery_1.default('#da_' + this.panel.id).children().remove();
                    var svg = d3_1.default.select('#da_' + this.panel.id).append('svg').attr("width", jquery_1.default('#da_' + this.panel.id).width()).attr("height", this.height), margin = { top: 40, right: 20, bottom: 20, left: 40 }, width = +svg.attr("width") - margin.left - margin.right, height = +svg.attr("height") - margin.top - margin.bottom, g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    var x = d3_1.default.scaleBand()
                        .rangeRound([0, width])
                        .paddingInner(0.05)
                        .align(0.1);
                    var y = d3_1.default.scaleLinear()
                        .rangeRound([height, 0]);
                    var z = d3_1.default.scaleOrdinal()
                        .range(["#6b486b", "#ff8c00"]);
                    var keys = ["GoodAvailableData", "BadAvailableData"];
                    x.domain(data.sort(function (a, b) { return b.ID - a.ID; }).map(function (d) { return moment_1.default().subtract(d.ID, 'days').format('MM/DD'); }));
                    y.domain([0, 100]).nice();
                    z.domain(keys);
                    g.selectAll("g")
                        .data(d3_1.default.stack().keys(keys)(data))
                        .enter().append("g")
                        .attr("fill", function (d) { return z(d.key); })
                        .selectAll("rect")
                        .data(function (d) { return d; })
                        .enter().append("rect")
                        .attr("x", function (d) { return x(moment_1.default().subtract(d.data.ID, 'days').format('MM/DD')); })
                        .attr("y", function (d) { return y(d[1]); })
                        .attr("height", function (d) { return y(d[0]) - y(d[1]); })
                        .attr("width", x.bandwidth());
                    g.append('g').selectAll("g")
                        .data(data)
                        .enter()
                        .append("text")
                        .attr("class", "label")
                        .attr("fill", "white")
                        .attr("font-size", "20px")
                        .attr("font-weight", "bold")
                        .attr("y", function (d) { return y(d.TotalAvailableData) - 10; })
                        .attr("x", function (d) {
                        return x(moment_1.default().subtract(d.ID, 'days').format('MM/DD')) + x.bandwidth() / 2 - 6;
                    })
                        .text(function (d) {
                        return d.TotalAvailableData + '%';
                    });
                    g.append("g")
                        .attr("class", "axis")
                        .attr("transform", "translate(0," + height + ")")
                        .attr("font-weight", "bold")
                        .call(d3_1.default.axisBottom(x));
                };
                return OpenHistorianGrafanaDataAvailabilityChart;
            }(sdk_1.MetricsPanelCtrl));
            OpenHistorianGrafanaDataAvailabilityChart.templateUrl = 'partials/module.html';
            exports_1("OpenHistorianGrafanaDataAvailabilityChart", OpenHistorianGrafanaDataAvailabilityChart);
        }
    };
});
//# sourceMappingURL=openHistorianGrafanaDataAvailabilityChart_ctrl.js.map