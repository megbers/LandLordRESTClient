steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'chart/Chart.js')
    .then(
    //'./views/miles_list.ejs',
    //'./views/miles.ejs',
    function($){

        /**
         * @class Landlord.Miles.Graph
         * @parent index
         * @inherits jQuery.Controller
         * Lists expenses and lets you destroy them.
         */
        $.Controller('Landlord.Miles.Graph',
            /** @Static */
            {
                defaults : {}
            },
            /** @Prototype */
            {
                init : function(options){
                    this.milesList = options && options.milesList ? options.milesList : this.options.milesList;;
                    this.property = options && options.property ? options.property : this.options.property;
                    this.element = $(".graph").get(0);
                    this.context = this.element.getContext("2d");
                    this.update(options);
                },
                update: function(options) {
                    this._initGraph();
                },
                destroy: function() {
                    console.log("Remove this when there is only one graph");
                },
                _initGraph: function() {
                    console.log(this.property);
                    var data = this._agragateData(this.milesList);
                    //console.log(data);
                    this.graphData = this._transformGraphData(data, this.property.id);
                    //console.log(this.graphData);
                    this._showChart();
                },

                _showChart: function() {
                    this.chart = new Chart(this.context).Pie(this.graphData);
                },

                _agragateData: function(milesList) {
                    var data = {
                        RENTAL: [],
                        HARDWARE_STORE: [],
                        BANK: [],
                        REALTOR: [],
                        OTHER: []
                    };
                    for(var i = 0; i < milesList.length; i++) {
                        var miles = milesList[i];
                        if(miles.property) {
                            data[miles.milesType][miles.property.id] = data[miles.milesType][miles.property.id] ? data[miles.milesType][miles.property.id] + miles.numberOfMiles : miles.numberOfMiles;
                        }
                    }
                    return data;
                },

                _transformGraphData: function(data, propertyId) {
                    var dataForProperty = data;//[propertyId];
                    var graphData = [];
                    var index = 0;
                    for(var milesType in dataForProperty) {
                        console.log(milesType, propertyId, dataForProperty[milesType][propertyId]);
                        graphData[index] = {
                            value: dataForProperty[milesType][propertyId] ? dataForProperty[milesType][propertyId] : 0,
                            color: this._getColor(milesType)
                        };
                        index++;
                    }

                    return graphData;
                },

                _getColor: function(milesType) {
                    if(milesType == 'HARDWARE_STORE')
                        return '#FF0000';
                    else if(milesType == 'RENTAL')
                        return '#00FF00';
                    else if(milesType == 'OTHER')
                        return '#FF00FF';
                    else if(milesType == 'BANK')
                        return '#00FFFF';
                    else if(milesType == 'REALTOR')
                        return '#FFFF00';
                }


            });

    });