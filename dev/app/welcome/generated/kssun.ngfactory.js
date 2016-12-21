/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['./kssun', '@angular/core/src/linker/view', '@angular/core/src/linker/view_utils', '@angular/core/src/metadata/view', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/constants', '@angular/core/src/linker/component_factory', '@angular/core/src/change_detection/change_detection_util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import3, import4, import5, import6, import7, import8;
    var Wrapper_Kssun, renderType_Kssun_Host, View_Kssun_Host0, KssunNgFactory, styles_Kssun, renderType_Kssun, View_Kssun0;
    return {
        setters:[
            function (import0_1) {
                import0 = import0_1;
            },
            function (import1_1) {
                import1 = import1_1;
            },
            function (import3_1) {
                import3 = import3_1;
            },
            function (import4_1) {
                import4 = import4_1;
            },
            function (import5_1) {
                import5 = import5_1;
            },
            function (import6_1) {
                import6 = import6_1;
            },
            function (import7_1) {
                import7 = import7_1;
            },
            function (import8_1) {
                import8 = import8_1;
            }],
        execute: function() {
            Wrapper_Kssun = (function () {
                function Wrapper_Kssun() {
                    this._changed = false;
                    this.context = new import0.Kssun();
                }
                Wrapper_Kssun.prototype.ngOnDetach = function (view, componentView, el) {
                };
                Wrapper_Kssun.prototype.ngOnDestroy = function () {
                };
                Wrapper_Kssun.prototype.ngDoCheck = function (view, el, throwOnChange) {
                    var changed = this._changed;
                    this._changed = false;
                    return changed;
                };
                Wrapper_Kssun.prototype.checkHost = function (view, componentView, el, throwOnChange) {
                };
                Wrapper_Kssun.prototype.handleEvent = function (eventName, $event) {
                    var result = true;
                    return result;
                };
                Wrapper_Kssun.prototype.subscribe = function (view, _eventHandler) {
                    this._eventHandler = _eventHandler;
                };
                return Wrapper_Kssun;
            }());
            exports_1("Wrapper_Kssun", Wrapper_Kssun);
            renderType_Kssun_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
            View_Kssun_Host0 = (function (_super) {
                __extends(View_Kssun_Host0, _super);
                function View_Kssun_Host0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Kssun_Host0, renderType_Kssun_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                }
                View_Kssun_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'd-kssun', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
                    this.compView_0 = new View_Kssun0(this.viewUtils, this, 0, this._el_0);
                    this._Kssun_0_3 = new Wrapper_Kssun();
                    this.compView_0.create(this._Kssun_0_3.context);
                    this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
                    return new import7.ComponentRef_(0, this, this._el_0, this._Kssun_0_3.context);
                };
                View_Kssun_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import0.Kssun) && (0 === requestNodeIndex))) {
                        return this._Kssun_0_3.context;
                    }
                    return notFoundResult;
                };
                View_Kssun_Host0.prototype.detectChangesInternal = function (throwOnChange) {
                    this._Kssun_0_3.ngDoCheck(this, this._el_0, throwOnChange);
                    this.compView_0.internalDetectChanges(throwOnChange);
                };
                View_Kssun_Host0.prototype.destroyInternal = function () {
                    this.compView_0.destroy();
                };
                View_Kssun_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
                    cb(this._el_0, ctx);
                };
                return View_Kssun_Host0;
            }(import1.AppView));
            exports_1("KssunNgFactory", KssunNgFactory = new import7.ComponentFactory('d-kssun', View_Kssun_Host0, import0.Kssun));
            styles_Kssun = [];
            renderType_Kssun = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Kssun, {});
            View_Kssun0 = (function (_super) {
                __extends(View_Kssun0, _super);
                function View_Kssun0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Kssun0, renderType_Kssun, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                    this._expr_6 = import8.UNINITIALIZED;
                    this._expr_7 = import8.UNINITIALIZED;
                }
                View_Kssun0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'span', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_2 = this.renderer.createText(this._el_1, 'This is a dummy component for Kssun', null);
                    this._text_3 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
                    this.init(null, (this.renderer.directRenderer ? null : [
                        this._text_0,
                        this._el_1,
                        this._text_2,
                        this._text_3,
                        this._el_4,
                        this._text_5
                    ]), [disposable_0]);
                    return null;
                };
                View_Kssun0.prototype.detectChangesInternal = function (throwOnChange) {
                    var currVal_6 = this.context.msg;
                    if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
                        this.renderer.setElementAttribute(this._el_1, 'aria-label', ((currVal_6 == null) ? null : currVal_6.toString()));
                        this._expr_6 = currVal_6;
                    }
                    var currVal_7 = false;
                    if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
                        this.renderer.setElementProperty(this._el_1, 'hidden', currVal_7);
                        this._expr_7 = currVal_7;
                    }
                };
                View_Kssun0.prototype.handleEvent_4 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    if ((eventName == 'click')) {
                        var pd_sub_0 = (this.context.doNothing($event) !== false);
                        result = (pd_sub_0 && result);
                    }
                    return result;
                };
                return View_Kssun0;
            }(import1.AppView));
            exports_1("View_Kssun0", View_Kssun0);
        }
    }
});
//# sourceMappingURL=kssun.ngfactory.js.map