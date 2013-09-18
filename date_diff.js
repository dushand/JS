var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    },
    
    inAlls: function(d1, d2){
         
     var weeks_remain = parseInt((this.inDays(d1, d2) % 30) / 7);
     var days_remain  = (this.inDays(d1, d2) % 30) % 7;
     return this.inMonths(d1,d2) + " Months " + weeks_remain + " Weeks " + days_remain + " Days";
          
    }
}


var DateString1 = "2011-04-13";
var DS1 = DateString1.split('-'); 
var Date1 = new Date(DS1[1] + '/' + DS1[2] + '/' + DS1[0]);  

var DateString2 = "2011-05-13";
var DS2 = DateString2.split('-'); 
var Date2 = new Date(DS2[1] + '/' + DS2[2] + '/' + DS2[0]);  



var d1 = new Date(Date1);
var d2 = new Date(Date2);

var diff_days = DateDiff.inDays(d1, d2);
           // = DateDiff.inWeeks(d1, d2);
           // = DateDiff.inMonths(d1, d2);
           // = DateDiff.Alls(d1, d2);