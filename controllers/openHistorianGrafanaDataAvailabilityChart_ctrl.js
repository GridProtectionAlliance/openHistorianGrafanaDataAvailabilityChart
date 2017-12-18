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
System.register(["app/plugins/sdk"], function (exports_1, context_1) {
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
    var sdk_1, OpenHistorianGrafanaDataAvailabilityChart;
    return {
        setters: [
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
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
                    //console.log('data-recieved');
                };
                OpenHistorianGrafanaDataAvailabilityChart.prototype.onDataError = function (msg) {
                    //console.log('data-error');
                };
                return OpenHistorianGrafanaDataAvailabilityChart;
            }(sdk_1.MetricsPanelCtrl));
            OpenHistorianGrafanaDataAvailabilityChart.templateUrl = 'partials/module.html';
            exports_1("OpenHistorianGrafanaDataAvailabilityChart", OpenHistorianGrafanaDataAvailabilityChart);
        }
    };
});
//# sourceMappingURL=openHistorianGrafanaDataAvailabilityChart_ctrl.js.map