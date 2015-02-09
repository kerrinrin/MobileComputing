function Controller() {
    function calc() {
        var name = $.textField.value;
        var today = new Date();
        var theDate = $.picker.value;
        var d1 = Date.parse(today);
        var d2 = Date.parse(theDate);
        var d = d2 - d1;
        var numdays = Math.ceil(d / 864e5);
        Ti.API.info(numdays);
        if (0 == numdays) $.result.setText(name + " is today! "); else if (1 == numdays) $.result.setText(name + " will happen tomorrow"); else if (-1 == numdays) $.result.setText(name + " happened yesterday"); else if (0 > numdays) {
            var pastnum = Math.abs(numdays);
            $.result.setText(name + " happened " + pastnum + " days ago");
        } else numdays > 0 && $.result.setText(name + " will happen in " + numdays + " days");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.textField = Ti.UI.createTextField({
        id: "textField",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "50",
        left: "50",
        width: "250",
        height: "60",
        value: "This date"
    });
    $.__views.index.add($.__views.textField);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        type: Ti.UI.PICKER_TYPE_DATE
    });
    $.__views.index.add($.__views.picker);
    $.__views.calcButton = Ti.UI.createButton({
        width: "80%",
        backgroundColor: "#649a1a",
        color: "#fff",
        padding: 30,
        top: 350,
        id: "calcButton",
        title: "Calculate"
    });
    $.__views.index.add($.__views.calcButton);
    calc ? $.__views.calcButton.addEventListener("click", calc) : __defers["$.__views.calcButton!click!calc"] = true;
    $.__views.result = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "",
        top: "410",
        id: "result"
    });
    $.__views.index.add($.__views.result);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.calcButton!click!calc"] && $.__views.calcButton.addEventListener("click", calc);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;