steal( 'jquery/controller',
    'jquery/view/ejs',
    'jquery/controller/view',
    'landlord/models',
    'chart/Chart.js')
    .then(
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
                    this.element = $(".graph"+this.property.id).get(0);
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
                    var data = this._agragateData(this.milesList);
                    this.graphData = this._transformGraphData(data, this.property.id);
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
                    var totalMiles = 0;
                    for(var milesType in dataForProperty) {
                        var milesForThisType = dataForProperty[milesType][propertyId] ? dataForProperty[milesType][propertyId] : 0;
                        totalMiles = totalMiles + milesForThisType
                        graphData[index] = {
                            value: milesForThisType,
                            color: this._getColor(milesType)
                        };
                        index++;
                    }
                    $('.totalMiles' + propertyId).text(totalMiles);
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