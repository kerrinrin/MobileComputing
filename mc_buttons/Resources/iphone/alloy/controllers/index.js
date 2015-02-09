function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.indexWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "indexWindow"
    });
    $.__views.indexWindow && $.addTopLevelView($.__views.indexWindow);
    $.__views.redButton = Ti.UI.createButton({
        width: "80%",
        height: 50,
        borderRadius: 5,
        borderColor: "black",
        color: "#fff",
        top: 100,
        backgroundColor: "#f00",
        id: "redButton",
        title: "Red"
    });
    $.__views.indexWindow.add($.__views.redButton);
    $.__views.greenButton = Ti.UI.createButton({
        width: "80%",
        height: 50,
        borderRadius: 5,
        borderColor: "black",
        color: "#fff",
        top: 200,
        backgroundColor: "#690",
        id: "greenButton",
        title: "Green"
    });
    $.__views.indexWindow.add($.__views.greenButton);
    $.__views.blueButton = Ti.UI.createButton({
        width: "80%",
        height: 50,
        borderRadius: 5,
        borderColor: "black",
        color: "#fff",
        top: 300,
        backgroundColor: "#39f",
        id: "blueButton",
        title: "Blue"
    });
    $.__views.indexWindow.add($.__views.blueButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.redButton.addEventListener("click", function() {
        $.indexWindow.backgroundColor = "#f00";
    });
    $.greenButton.addEventListener("click", function() {
        $.indexWindow.backgroundColor = "#690";
    });
    $.blueButton.addEventListener("click", function() {
        $.indexWindow.backgroundColor = "#39f";
    });
    $.indexWindow.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;