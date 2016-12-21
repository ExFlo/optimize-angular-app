/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
System.register(['./ewamj', '@angular/core/src/linker/view', '@angular/core/src/linker/view_utils', '@angular/core/src/metadata/view', '@angular/core/src/linker/view_type', '@angular/core/src/change_detection/constants', '@angular/core/src/linker/component_factory', '@angular/core/src/change_detection/change_detection_util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var import0, import1, import3, import4, import5, import6, import7, import8;
    var Wrapper_Ewamj, renderType_Ewamj_Host, View_Ewamj_Host0, EwamjNgFactory, styles_Ewamj, renderType_Ewamj, View_Ewamj0;
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
            Wrapper_Ewamj = (function () {
                function Wrapper_Ewamj() {
                    this._changed = false;
                    this.context = new import0.Ewamj();
                }
                Wrapper_Ewamj.prototype.ngOnDetach = function (view, componentView, el) {
                };
                Wrapper_Ewamj.prototype.ngOnDestroy = function () {
                };
                Wrapper_Ewamj.prototype.ngDoCheck = function (view, el, throwOnChange) {
                    var changed = this._changed;
                    this._changed = false;
                    return changed;
                };
                Wrapper_Ewamj.prototype.checkHost = function (view, componentView, el, throwOnChange) {
                };
                Wrapper_Ewamj.prototype.handleEvent = function (eventName, $event) {
                    var result = true;
                    return result;
                };
                Wrapper_Ewamj.prototype.subscribe = function (view, _eventHandler) {
                    this._eventHandler = _eventHandler;
                };
                return Wrapper_Ewamj;
            }());
            exports_1("Wrapper_Ewamj", Wrapper_Ewamj);
            renderType_Ewamj_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
            View_Ewamj_Host0 = (function (_super) {
                __extends(View_Ewamj_Host0, _super);
                function View_Ewamj_Host0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Ewamj_Host0, renderType_Ewamj_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                }
                View_Ewamj_Host0.prototype.createInternal = function (rootSelector) {
                    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'd-ewamj', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
                    this.compView_0 = new View_Ewamj0(this.viewUtils, this, 0, this._el_0);
                    this._Ewamj_0_3 = new Wrapper_Ewamj();
                    this.compView_0.create(this._Ewamj_0_3.context);
                    this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
                    return new import7.ComponentRef_(0, this, this._el_0, this._Ewamj_0_3.context);
                };
                View_Ewamj_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
                    if (((token === import0.Ewamj) && (0 === requestNodeIndex))) {
                        return this._Ewamj_0_3.context;
                    }
                    return notFoundResult;
                };
                View_Ewamj_Host0.prototype.detectChangesInternal = function (throwOnChange) {
                    this._Ewamj_0_3.ngDoCheck(this, this._el_0, throwOnChange);
                    this.compView_0.internalDetectChanges(throwOnChange);
                };
                View_Ewamj_Host0.prototype.destroyInternal = function () {
                    this.compView_0.destroy();
                };
                View_Ewamj_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
                    cb(this._el_0, ctx);
                };
                return View_Ewamj_Host0;
            }(import1.AppView));
            exports_1("EwamjNgFactory", EwamjNgFactory = new import7.ComponentFactory('d-ewamj', View_Ewamj_Host0, import0.Ewamj));
            styles_Ewamj = [];
            renderType_Ewamj = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Ewamj, {});
            View_Ewamj0 = (function (_super) {
                __extends(View_Ewamj0, _super);
                function View_Ewamj0(viewUtils, parentView, parentIndex, parentElement) {
                    _super.call(this, View_Ewamj0, renderType_Ewamj, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
                    this._expr_6 = import8.UNINITIALIZED;
                    this._expr_7 = import8.UNINITIALIZED;
                }
                View_Ewamj0.prototype.createInternal = function (rootSelector) {
                    var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
                    this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
                    this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'span', import3.EMPTY_INLINE_ARRAY, null);
                    this._text_2 = this.renderer.createText(this._el_1, 'This is a dummy component for Ewamj', null);
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
                View_Ewamj0.prototype.detectChangesInternal = function (throwOnChange) {
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
                View_Ewamj0.prototype.handleEvent_4 = function (eventName, $event) {
                    this.markPathToRootAsCheckOnce();
                    var result = true;
                    if ((eventName == 'click')) {
                        var pd_sub_0 = (this.context.doNothing($event) !== false);
                        result = (pd_sub_0 && result);
                    }
                    return result;
                };
                return View_Ewamj0;
            }(import1.AppView));
            exports_1("View_Ewamj0", View_Ewamj0);
        }
    }
});
//# sourceMappingURL=ewamj.ngfactory.js.map