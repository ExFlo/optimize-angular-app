System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Aglja;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Aglja = (function () {
                function Aglja() {
                    this.msg = 'nothing to say';
                }
                Aglja.prototype.doNothing = function (evt) { };
                Aglja = __decorate([
                    core_1.Component({
                        selector: 'd-aglja',
                        template: "\n    <span [attr.aria-label]=\"msg\" [hidden]=\"false\">This is a dummy component for Aglja</span>\n    <div (click)=\"doNothing($event)\"></div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], Aglja);
                return Aglja;
            }());
            exports_1("Aglja", Aglja);
        }
    }
});
//# sourceMappingURL=aglja.js.map