var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var simple;
    (function (simple) {
        var TreeDisclosureButtonSkin = (function (_super) {
            __extends(TreeDisclosureButtonSkin, _super);
            function TreeDisclosureButtonSkin() {
                _super.call(this);
                this.minHeight = 22;
                this.elementsContent = [this.__7_i()];
                this.states = [
                    new egret.gui.State("up", [
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "tree_btndown_png")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__7", "source", "tree_btndisabled_png")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tree_btnupselect_png")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tree_btndownselect_png")
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tree_btndisabledselect_png")
                    ])
                ];
            }
            TreeDisclosureButtonSkin.prototype.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                t.percentHeight = 100;
                t.source = "tree_btnup_png";
                t.percentWidth = 100;
                return t;
            };
            return TreeDisclosureButtonSkin;
        })(egret.gui.Skin);
        simple.TreeDisclosureButtonSkin = TreeDisclosureButtonSkin;
        TreeDisclosureButtonSkin.prototype.__class__ = "simple.TreeDisclosureButtonSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
