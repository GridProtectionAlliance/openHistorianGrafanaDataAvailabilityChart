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

///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import { MetricsPanelCtrl } from 'app/plugins/sdk';
import d3 from 'd3';
import $ from 'jquery';
import moment from 'moment';

//import { varName } from '../js/constants'   // import constants from constant file using this format

export class OpenHistorianGrafanaDataAvailabilityChart extends MetricsPanelCtrl{
    static templateUrl:string = 'partials/module.html';
    Plotly: any;

    constructor($scope, $injector, private $rootScope) {
        super($scope, $injector);
        this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
        this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
        this.events.on('render', this.onRender.bind(this));
        this.events.on('panel-initialized', this.onPanelInitialized.bind(this));
        this.events.on('data-received', this.onDataRecieved.bind(this));
        //this.events.on('data-snapshot-load', console.log('data-snapshot-load'));
        this.events.on('data-error', this.onDataError.bind(this));
        this.events.on('refresh', this.onRefresh.bind(this));

        this.$scope.colors = [
            { Color: '#6b486b', State: 'Good Data' },
            { Color: '#ff8c00', State: 'Available Bad Data' },
            { Color: '#FFFFFF', State: 'Total Available Data'}
        ];
    }

    // #region Events from Graphana Handlers
    onInitEditMode() {
        //console.log('init-edit-mode');
    }

    onPanelTeardown() {
        //console.log('panel-teardown');
    }

    onPanelInitialized() {
        //console.log('panel-initialized');
    }

    onRefresh() {
        //console.log('refresh');
    }

    onResize() {
        var ctrl = this;
        //console.log('refresh');
    }

    onRender() {
        //console.log('render');

    }

    onDataRecieved(data) {
        this.datasource.getDataAvailability().then((data) => {
            console.log(data);
            this.$scope.data = data.data;
            this.buildChart(data.data);
        })
        //console.log('data-recieved');
    }

    onDataError(msg) {
        //console.log('data-error');
    }

    buildChart(data) {
        $('#da_' + this.panel.id).children().remove();
        var svg = d3.select('#da_' + this.panel.id).append('svg').attr("width", $('#da_' + this.panel.id).width()).attr("height", this.height),
            margin = { top: 40, right: 20, bottom: 20, left: 40 },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.05)
            .align(0.1);

        var y = d3.scaleLinear()
            .rangeRound([height, 0]);

        var z = d3.scaleOrdinal()
            .range(["#6b486b", "#ff8c00"]);

        var keys = ["GoodAvailableData", "BadAvailableData"];

        x.domain(data.sort(function (a, b) { return b.ID - a.ID; }).map(function (d) { return moment().subtract(d.ID, 'days').format('MM/DD'); }));
        y.domain([0, 100]).nice();
        z.domain(keys);

        g.selectAll("g")
            .data(d3.stack().keys(keys)(data))
            .enter().append("g")
            .attr("fill", function (d) { return z(d.key); })
            .selectAll("rect")
            .data(function (d) { return d; })
            .enter().append("rect")
            .attr("x", function (d) { return x(moment().subtract(d.data.ID, 'days').format('MM/DD')); })
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
            .attr("y", function (d) { return y(d.TotalAvailableData ) - 10 })
            .attr("x", function (d) {
                return x(moment().subtract(d.ID, 'days').format('MM/DD')) + x.bandwidth() / 2 - 6;
            })
            .text(function (d) {
                return d.TotalAvailableData + '%';
            });

        g.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .attr("font-weight", "bold")
            .call(d3.axisBottom(x))
    }
    // #endregion

}