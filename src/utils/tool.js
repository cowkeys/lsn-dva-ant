import moment from 'moment'

module.exports = {
    timeFromUnix : function(u = "0") {
        if (!u) {
            return "";
        }
        if (u=="0"){
            return "";
        }
        return moment.unix(u).format('YYYY-MM-DD HH:mm:ss');
    },
    unixToMoment:function(u = "0") {
        if (!u) {
            return null
        }
        return moment.unix(u)
    },
    timeFromUnixMs : function(u = "0") {
        if (!u) {
            return "";
        }
        if (u=="0") {
            return "";
        }
        var day = moment(+u);
        var res = day.format('YYYY-MM-DD HH:mm:ss.SSSS');
        return res;
    },
    timeDiff : function(begin="0",real="0") {
        var begintime = moment(+begin);
        var realtime = moment(+real);
        var diftime = realtime.diff(begintime);
        return diftime;
    },
    trim:function(value) {
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }
        if (value){
            return value.trim();
        }
        return "";
    }
}
