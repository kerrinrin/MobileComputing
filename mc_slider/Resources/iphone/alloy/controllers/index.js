function Controller() {
    function rgb2hex(red, green, blue) {
        return "#" + ("0" + parseInt(red, 10).toString(16)).slice(-2) + ("0" + parseInt(green, 10).toString(16)).slice(-2) + ("0" + parseInt(blue, 10).toString(16)).slice(-2);
    }
    function changeColor() {
        var color = rgb2hex($.RedSlider.value, $.GreenSlider.value, $.BlueSlider.value);
        $.indexWindow.backgroundColor = color;
        Ti.API.info(color);
        $.hex.setText("The hex color is " + color);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.indexWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "indexWindow"
    });
    $.__views.indexWindow && $.addTopLevelView($.__views.indexWindow);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Red",
        id: "label",
        top: "40"
    });
    $.__views.indexWindow.add($.__views.label);
    $.__views.RedSlider = Ti.UI.createSlider({
        id: "RedSlider",
        top: "70",
        min: "0",
        max: "255",
        value: "255",
        width: "80%"
    });
    $.__views.indexWindow.add($.__views.RedSlider);
    changeColor ? $.__views.RedSlider.addEventListener("change", changeColor) : __defers["$.__views.RedSlider!change!changeColor"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Green",
        id: "label",
        top: "90"
    });
    $.__views.indexWindow.add($.__views.label);
    $.__views.GreenSlider = Ti.UI.createSlider({
        id: "GreenSlider",
        top: "120",
        min: "0",
        max: "255",
        value: "255",
        width: "80%"
    });
    $.__views.indexWindow.add($.__views.GreenSlider);
    changeColor ? $.__views.GreenSlider.addEventListener("change", changeColor) : __defers["$.__views.GreenSlider!change!changeColor"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Blue",
        id: "label",
        top: "150"
    });
    $.__views.indexWindow.add($.__views.label);
    $.__views.BlueSlider = Ti.UI.createSlider({
        id: "BlueSlider",
        top: "180",
        min: "0",
        max: "255",
        value: "255",
        width: "80%"
    });
    $.__views.indexWindow.add($.__views.BlueSlider);
    changeColor ? $.__views.BlueSlider.addEventListener("change", changeColor) : __defers["$.__views.BlueSlider!change!changeColor"] = true;
    $.__views.hex = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "hex",
        top: "230"
    });
    $.__views.indexWindow.add($.__views.hex);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.indexWindow.open();
    __defers["$.__views.RedSlider!change!changeColor"] && $.__views.RedSlider.addEventListener("change", changeColor);
    __defers["$.__views.GreenSlider!change!changeColor"] && $.__views.GreenSlider.addEventListener("change", changeColor);
    __defers["$.__views.BlueSlider!change!changeColor"] && $.__views.BlueSlider.addEventListener("change", changeColor);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;