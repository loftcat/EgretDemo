/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    /**
     * 加载进度界面
     */
    function GameApp() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    GameApp.prototype.onAddToStage = function (event) {
        egret.Profiler.getInstance().run();
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        this.shape1 = new egret.Sprite();
        this.shape1.graphics.beginFill(0xaaaaaa, 1);
        this.shape1.graphics.drawRect(0, 0, 100, 100);
        this.shape1.graphics.endFill();
        this.shape2 = new egret.Sprite();
        this.shape2.graphics.beginFill(0xaaaaaa, 1);
        this.shape2.graphics.drawRect(0, 0, 100, 100);
        this.shape2.graphics.endFill();
        this.shape1.width = 100;
        this.shape1.height = 100;
        this.shape2.width = 100;
        this.shape2.height = 100;
        this.shape1.x = stageW / 2 - 200;
        this.shape1.y = stageH / 2;
        this.shape2.x = stageW / 2 + 100;
        this.shape2.y = stageH / 2;
        this.text1 = new egret.TextField();
        this.text2 = new egret.TextField();
        this.blood1 = 100;
        this.blood2 = 100;
        this.text1.text = "贺彬";
        this.text2.text = "奥巴马";
        this.text1.size = 5;
        this.text2.size = 5;
        this.text1.anchorOffsetX = this.text1.width / 2;
        this.text1.anchorOffsetY = this.text1.height / 2;
        this.text2.anchorOffsetX = this.text2.width / 2;
        this.text2.anchorOffsetY = this.text2.height / 2;
        this.text1.x = stageW / 2 - 150;
        this.text1.y = stageH / 2 + 120;
        this.text2.x = stageW / 2 + 150;
        this.text2.y = stageH / 2 + 120;
        this.shape1.touchEnabled = true;
        this.shape2.touchEnabled = true;
        this.shape1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap1, this);
        this.shape2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap2, this);
        this.addChild(this.text1);
        this.addChild(this.text2);
        this.addChild(this.shape1);
        this.addChild(this.shape2);
    };
    GameApp.prototype.onTouchTap1 = function (evt) {
        console.log("tap1");
        var random = Math.floor(Math.random() * 10);
        this.blood2 -= random;
        if (this.blood2 <= 0) {
            this.text2.text = "奥巴马死了";
        }
        else {
            this.text2.text = "奥巴马" + this.blood2 + "血";
        }
    };
    GameApp.prototype.onTouchTap2 = function (evt) {
        console.log("tap2");
        var random = Math.floor(Math.random() * 10);
        this.blood1 -= random;
        if (this.blood1 <= 0) {
            this.text1.text = "贺彬投胎了";
        }
        else {
            this.text1.text = "贺彬" + this.blood1 + "血";
        }
    };
    return GameApp;
})(egret.DisplayObjectContainer);
