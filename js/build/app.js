
    $(document).ready(function(){

             var myDataRef = new Firebase('https://torrid-fire-7257.firebaseio.com');


             $('nav').addClass('onload-reveal');
             var uploadMessage = $('.uploadMessage');
             var toBeUploaded = $('.toBeUploaded');
             var asideComments = $(".aside-comments");

          // Log out button

          // Build Comments


          // Seconds to HH:MM:SS
          String.prototype.toHHMMSS = function () {
            var sec_num = parseInt(this, 10); // don't forget the second param
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}
            var time    = hours+':'+minutes+':'+seconds;
            return time;
          }

          // Function to parse the data

            function countProp(obj) {
                var count=0;
                for(var prop in obj) {
                    for( var secondProp in obj[prop]) {
                        ++count;
                    }
                }
                return count/obj.length;
            }

            function useData(originalJSON) {

            var numProperties = countProp(originalJSON);
            var holderArr = [];
            var keyHolderArr = [];

            for(prop in originalJSON) {
                for(secondProp in originalJSON[prop]) {
                    holderArr.push(originalJSON[prop][secondProp]);
                }
            }

          for(nextProp in originalJSON) {
            keyHolderArr.push(Object.keys(originalJSON[nextProp]));
          }

          // Creating dynamic variables to fill
          var makers = []
          for (var i = 0; i < (numProperties*2); i++) {
            makers[i] = [];
          }

          // Build all the objects to give to amcharts
          for (var i = 0; i < holderArr.length; i += numProperties) {

            var timeOfDay = holderArr[i].toHHMMSS();

              tmp = {};
              tmp[keyHolderArr[0][1]] = holderArr[i+1];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[0].push(tmp);

              tmp = {};
              tmp[keyHolderArr[0][2]] = holderArr[i+2];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[1].push(tmp);

              tmp = {};
              tmp[keyHolderArr[0][3]] = holderArr[i+3];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[2].push(tmp);

             tmp = {};
             tmp[keyHolderArr[0][4]] = holderArr[i+4];
             tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[3].push(tmp);
             tmp = {};
             tmp[keyHolderArr[0][5]] = holderArr[i+5];
             tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[4].push(tmp);

              tmp = {};
             tmp[keyHolderArr[0][6]] = holderArr[i+6];
             tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[5].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][7]] = holderArr[i+7];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[6].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][8]] = holderArr[i+8];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[7].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][9]] = holderArr[i+9];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[8].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][10]] = holderArr[i+10];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[9].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][11]] = holderArr[i+11];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[10].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][12]] = holderArr[i+12];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[11].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][13]] = holderArr[i+13];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[12].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][14]] = holderArr[i+14];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[13].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][15]] = holderArr[i+15];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[14].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][16]] = holderArr[i+16];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[15].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][17]] = holderArr[i+17];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[16].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][18]] = holderArr[i+18];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[17].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][19]] = holderArr[i+19];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[18].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][20]] = holderArr[i+20];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[19].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][21]] = holderArr[i+21];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[20].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][22]] = holderArr[i+22];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[21].push(tmp);

               tmp = {};
              tmp[keyHolderArr[0][23]] = holderArr[i+23];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[22].push(tmp);

                tmp = {};
               tmp[keyHolderArr[0][24]] = holderArr[i+24];
               tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[23].push(tmp);
               tmp = {};
              tmp[keyHolderArr[0][25]] = holderArr[i+25];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[24].push(tmp);
               tmp = {};
              tmp[keyHolderArr[0][26]] = holderArr[i+26];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[25].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][25]] = holderArr[i+25];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[26].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][27]] = holderArr[i+27];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[26].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][28]] = holderArr[i+28];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[27].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][29]] = holderArr[i+29];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[28].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][30]] = holderArr[i+30];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[29].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][31]] = holderArr[i+31];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[30].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][32]] = holderArr[i+32];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[31].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][33]] = holderArr[i+33];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[32].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][34]] = holderArr[i+34];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[33].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][35]] = holderArr[i+35];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[34].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][36]] = holderArr[i+36];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[35].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][37]] = holderArr[i+37];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[26].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][38]] = holderArr[i+38];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[37].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][39]] = holderArr[i+39];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[38].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][40]] = holderArr[i+40];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[39].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][41]] = holderArr[i+41];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[40].push(tmp);
              tmp = {};
              tmp[keyHolderArr[0][42]] = holderArr[i+42];
              tmp[keyHolderArr[0][0]] = holderArr[i].toHHMMSS();
              makers[41].push(tmp);

          }

            var prettyColors = [
                "#ed5153",
                "#323a45",
                "#3F51B5",
                "#009688",
                "#BF360C",
                "#4CAF50",
                "#FF9800",
                "#FF5722",
                "#607D8B",
                "#673AB7",
                "#D32F2F",
                "#880E4F",
                "#283593",
                "#004D40",
                "#01579B",
                "#4CAF50",
                "#FBC02D",
                "#424242",
                "#3F51B5",
                "#7CB342",
                "#00BCD4",
                "#455A64",
                "#1565C0",
                "#4CAF50",
                "#990000",
                "#283593",
                "#FF5722",
                "#607D8B",
                "#673AB7",
                "#D32F2F",
                "#880E4F",
                "#283593",
                "#ed5153",
                "#323a45",
                "#3F51B5",
                "#009688",
                "#BF360C",
                "#4CAF50",
                "#FF9800",
                "#FF5722",
                "#607D8B",
                "#673AB7",
                "#D32F2F",
                "#880E4F",
                "#283593",
                "#004D40",
                "#01579B",
                "#4CAF50",
                "#FBC02D",
                "#424242",
                "#3F51B5"
            ]


            // If Container, remove it so we can build a new one.

            var sideList = document.getElementById('sideList');
                // Loop to make the divs + charts

              var chartConfig = [];
              for(var i = 0; i<keyHolderArr[0].length-1; i++) {
                  chartConfig[i] = [];
              }

              charts = [];
              for (i = 0; i < keyHolderArr[0].length-1; i++) {

                var amChartContainer = document.createElement('div');
                var amChartList = document.createElement("li");
                var amChartAnchor = document.createElement('a');
                var header = document.createElement('h2');
                var spanOff = document.createElement('span');

                // If not amChartContainer, make one to insert graphs into
                if(!($('#amchartContainer').length)) {
                    amChartContainer.id = 'amchartContainer';
                    document.getElementsByTagName('body')[0].appendChild(amChartContainer);
                }

                spanOff.id = keyHolderArr[0][i+1];
                amChartContainer =  document.getElementById('amchartContainer');

                header.innerHTML = keyHolderArr[0][i+1];
                temp = document.createElement('div');
                temp.id = 'chartdiv'+[i];

                amChartAnchor.href = '#' + keyHolderArr[0][i+1];
                amChartAnchor.innerHTML = keyHolderArr[0][i+1];
                amChartList.appendChild(amChartAnchor);
                amChartList.innerHTML = "<a href='#"+keyHolderArr[0][i+1]+"'>" + keyHolderArr[0][i+1] + " </a>";
                amChartContainer.appendChild(header);
                amChartContainer.appendChild(temp);
                sideList.appendChild(amChartList);
                header.appendChild(spanOff);


                var divID = temp.id.toString();

                  chartConfig[i] = {
                      "type": "serial",
                      "theme": "dark",
                      "dataDateFormat": "HH:NN:SS",
                      "marginRight": 50,
                      "autoMarginOffset": 50,
                      "dataProvider": makers[i],
                      "responsive": {
                          "enabled": true
                        },
                      "balloon": {
                        "cornerRadius": 0
                      },
                      "valueAxes": [{
                        "axisAlpha": 0
                      }],
                      "graphs": [{
                        "balloonText": "[[lapTimeOfDay]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                        "bullet": "round",
                        "bulletSize": 6,
                        "connect": false,
                        "gapPeriod": 200,
                        "lineColor": prettyColors[i],
                        "lineThickness": 1,
                        "negativeLineColor": "#487dac",

                        "valueField": keyHolderArr[0][i+1].toString()
                      }],
                      "chartCursor": {
                        "categoryBalloonDateFormat":  "HH:NN:SS",
                        "cursorAlpha": 0.1,
                        "cursorColor": prettyColors[i],
                        "fullWidth": true,
                        "graphBulletSize": 2
                      },
                      "chartScrollbar": {},
                      "categoryField": "lapTimeOfDay",
                      "categoryAxis": {
                        "minPeriod": "ss",
                        "parseDates": true,
                        "minorGridEnabled": true
                      },
                      "export": {
                        "enabled": true
                      }
                    };
                    // Adding all the made charts to an Array
                    // This is to sync al the zooming of the graphs.
                    console.log(divID);
                    console.log(chartConfig[i]);
                     charts.push(AmCharts.makeChart(divID, chartConfig[i]));
                }

                for (var x in charts) {
                    charts[x].addListener("zoomed", syncZoom);
                    charts[x].addListener("init", addCursorListeners);
                }

                function addCursorListeners(event) {
                    event.chart.chartCursor.addListener("changed", handleCursorChange);
                    event.chart.chartCursor.addListener("onHideCursor", handleHideCursor);
                }

                function syncZoom(event) {
                    for (x in charts) {
                        if (charts[x].ignoreZoom) {
                            charts[x].ignoreZoom = false;
                        }
                        if (event.chart != charts[x]) {
                            charts[x].ignoreZoom = true;
                            charts[x].zoomToDates(event.startDate, event.endDate);
                        }
                    }
                }
                function handleCursorChange(event) {
                    for (var x in charts) {
                        if (event.chart != charts[x]) {
                            if (event.position) {
                                charts[x].chartCursor.isZooming(event.target.zooming);
                                charts[x].chartCursor.selectionPosX = event.target.selectionPosX;
                                charts[x].chartCursor.forceShow = true;
                                charts[x].chartCursor.setPosition(event.position, false, event.target.index);
                            }
                        }
                    }
                }

                function handleHideCursor() {
                    for (var x in charts) {
                        if (charts[x].chartCursor.hideCursor) {
                            charts[x].chartCursor.forceShow = false;
                            charts[x].chartCursor.hideCursor(false);
                        }
                    }
                }
              }


          // Default view of Data selection
          var selectedValue = $('.selectInput > option:first-child').val();
          var last = selectedValue.substr(selectedValue.lastIndexOf('/') + 1);
          var splitValue = last.split('.');
          var popValue = splitValue.shift();

          buildComments(popValue);

          $('.moreButton').click(function(){
            $('.moreInfo').toggleClass('showMoreInfo');
            var moreButton = document.querySelector('.moreButton');
            if($(this).text() === "More") {
               moreButton.innerHTML = "Less";
               moreButton.style.paddingLeft = "19px";
            } else {
                moreButton.innerHTML = "More";
                moreButton.style.paddingLeft = "16px";
            }

          });



          $(".hideLoading").show();
          $.getJSON( selectedValue, function( data ) {
               useData(data);
               $('.aside-default').addClass('aside-active');
               $(".hideLoading").fadeOut(333);
            });

          function buildComments(queryDate){
                var queryFireBase = new Firebase("https://torrid-fire-7257.firebaseio.com/" + queryDate);
                queryFireBase.on("value", function(snapshot) {
                snapshotObj = snapshot.val();

                var toBeFilled = [];
                for(prop in snapshotObj) {
                    for(secondProp in snapshotObj[prop]) {
                        toBeFilled.push(snapshotObj[prop][secondProp]);
                    }
                }
                var createListItems = [];
                for (var i = 0; i < toBeFilled.length; i++) {
                    createListItems[i] = document.createElement('li');
                }
                var items = document.getElementById("commentList");
                var unorderedList = $('#commentList');

                for (var i = 0; i < toBeFilled.length; i++ ) {
                    createListItems[i] = '<li>' + toBeFilled[i] + '</li>';
                    unorderedList.append(createListItems[i]);
                }

                }, function (errorObject) {
                        console.log("The read failed: " + errorObject.code);
                    });
            }



          $('.postComments').submit(function(event) {
              event.preventDefault();

               var selectedValue = $(".selectInput").val();
               var noSlashSelectedValue = selectedValue.substr(selectedValue.lastIndexOf('/') + 1);
               var splitValue = noSlashSelectedValue.split('.');
               var theDate = splitValue.shift();

              var theComment =  $('.addComment').val();

              $('.addComment').val('');

               var unorderedList = $('#commentList');
              if(unorderedList.children().length > 1) {
                    unorderedList.children().remove();
              }
              // Submitting POST to Firebase databse.

              var postsRef = myDataRef.child(theDate);
                postsRef.push({
                  comment: theComment,
                });

            });

          // Change Data file on user selection
          $(".selectInput").change(function (){

            var selectedValue = $(this).val();
            $(".hideLoading").show();
            $('aside').removeClass('aside-active');

            if($('#amchartContainer').children().length > 1) {
                $('#amchartContainer').fadeOut(300);
                setTimeout(function(){
                  $('#amchartContainer').remove();
                  $('#sideList').children().remove();
                },300);

            }



            function removeAmchartLists() {
                var unorderedList = $('#commentList');
                if(unorderedList.children().length > 1) {
                    $('#amchartContainer').fadeOut(300);
                      unorderedList.children().remove();
                }
            }


            var last = selectedValue.substr(selectedValue.lastIndexOf('/') + 1);
            var splitValue = last.split('.');
            var popValue = splitValue.shift();


            // Added in setTimout to give aside time to transform: translateX(0%)
            setTimeout(function(){
                buildComments(popValue);
              $.getJSON( selectedValue, function( data ) {
                 useData(data);
                 $('.aside-default').addClass('aside-active');
                 $(".hideLoading").fadeOut(333);

              });
             }, 505);

          });



            $('.toggleComments').click(function(){
              asideComments.toggleClass('aside-active');
            });

            $(document).keyup(function(e) {
                 if (e.keyCode == 27) {
                    asideComments.removeClass('aside-active');
                    $('.moreInfo').removeClass('showMoreInfo');
                       var moreButton = document.querySelector('.moreButton');
                        if($('.moreButton').text() === "More") {
                           moreButton.innerHTML = "Less";
                           moreButton.style.paddingLeft = "19px";
                        } else {
                            moreButton.innerHTML = "More";
                            moreButton.style.paddingLeft = "16px";
                        }
                }
            });

            // Initiazliaing scroll scope plugin for side bar
            $(document).scrollScope();

            // Logout button
            function doLogOut() {
                 myDataRef.unauth();
                 var authData = myDataRef.getAuth();
                 if (!authData) {
                    window.location = "/mrt/";
                 }
            }

            $('#fileToUpload').change(function(){
                   if(toBeUploaded.val().length > 30) {
                          $('.uploadMessage > p').text('Sorry, file name must be less than 30 characeters');
                          uploadMessage.addClass('uploadMessage-active').delay(5000).queue(function(next){
                              $(this).removeClass("uploadMessage-active");
                              next();
                          });
                    } else {
                      toBeUploaded.val($(this).val().split('\\').pop());
                      $('.confirmUpload').addClass('confirmUpload-active');
                    }
              });

            // Submittion of upload data
              $('.uploadForm').submit(function( event ) {
                  event.preventDefault();
                  var url = "/mrt/csvUploader.php"; // the script where you handle the form input.
                  var data = new FormData(this);
                  var fileName = $("#fileToUpload").val().split('\\').pop().split('.').shift();

                  $('.confirmUpload').removeClass('confirmUpload-active');
                  uploadMessage.css("background-color","#D32F2F");
                      $.ajax({
                             type: "POST",
                             url: url,
                             data: data,
                             processData: false,
                             contentType: false,
                             success: function(data)
                             {
                                $('.uploadMessage > p').text(data);
                                uploadMessage.addClass('uploadMessage-active').delay(4800).queue(function(next){
                                      $(this).removeClass("uploadMessage-active");
                                      next();
                                  });

                                if (data.indexOf("succesfully") > -1) {
                                   $('.uploadMessage').css("background-color","#388E3C");
                                    var optionElement = document.createElement('option');
                                    fileNameReplaced = fileName.replace(/_/g, " ");
                                    optionElement.innerHTML = fileNameReplaced;
                                    optionElement.value = '/mrt/inputdata/' + fileName + '.json';
                                    $('.selectInput').prepend(optionElement);
                                }
                             }
                           });

                      return false; // avoid to execute the actual submit of the form.
            });
});





