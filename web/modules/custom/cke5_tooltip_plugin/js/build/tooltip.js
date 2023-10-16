!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CKEditor5=e():(t.CKEditor5=t.CKEditor5||{},t.CKEditor5.tooltip=e())}(self,(()=>(()=>{var t={"ckeditor5/src/core.js":(t,e,i)=>{t.exports=i("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/typing.js":(t,e,i)=>{t.exports=i("dll-reference CKEditor5.dll")("./src/typing.js")},"ckeditor5/src/ui.js":(t,e,i)=>{t.exports=i("dll-reference CKEditor5.dll")("./src/ui.js")},"ckeditor5/src/utils.js":(t,e,i)=>{t.exports=i("dll-reference CKEditor5.dll")("./src/utils.js")},"dll-reference CKEditor5.dll":t=>{"use strict";t.exports=CKEditor5.dll}},e={};function i(o){var s=e[o];if(void 0!==s)return s.exports;var l=e[o]={exports:{}};return t[o](l,l.exports,i),l.exports}i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};return(()=>{"use strict";i.d(o,{default:()=>h});var t=i("ckeditor5/src/core.js"),e=i("ckeditor5/src/typing.js");function s(t){return Array.from(t.getItems()).reduce(((t,e)=>e.is("text")||e.is("textProxy")?t+e.data:t),"")}var l=i("ckeditor5/src/utils.js");class n extends t.Command{refresh(){const t=this.editor.model,i=t.document.selection,o=i.getFirstRange();if(o.isCollapsed)if(i.hasAttribute("tooltip")){const o=i.getAttribute("tooltip"),l=(0,e.findAttributeRange)(i.getFirstPosition(),"tooltip",o,t);this.value={text:s(l),tooltipId:o,range:l}}else this.value=null;else if(i.hasAttribute("tooltip")){const l=i.getAttribute("tooltip");(0,e.findAttributeRange)(i.getFirstPosition(),"tooltip",l,t).containsRange(o,!0)?this.value={text:s(o),tooltipId:l,range:o}:this.value=null}else this.value=null;this.isEnabled=t.schema.checkAttributeInSelection(i,"tooltip")}execute({title:t,tooltipId:e}){const i=this.editor.model,o=i.document.selection;i.change((s=>{if(o.isCollapsed){if(this.value){const{end:o}=i.insertContent(s.createText(t,{tooltip:e,class:["ds-c-tooltip__trigger-link","ds-u-display--inline"]}),this.value.range);s.setSelection(o)}else if(""!==t){const n=o.getFirstPosition(),r=(0,l.toMap)(o.getAttributes());r.set("tooltip",e);const{end:a}=i.insertContent(s.createText(t,r),n);s.setSelection(a)}s.removeSelectionAttribute("tooltip")}else{const t=i.schema.getValidRanges(o.getRanges(),"tooltip");for(const i of t)s.setAttribute("tooltip",e,i)}}))}}class r extends t.Plugin{static get pluginName(){return"TooltipEditing"}init(){this._defineSchema(),this._defineConverters(),this.editor.commands.add("insertTooltip",new n(this.editor))}_defineSchema(){this.editor.model.schema.extend("$text",{allowAttributes:"tooltip"})}_defineConverters(){const t=this.editor.conversion;t.for("downcast").attributeToElement({model:"tooltip",view:(t,{writer:e})=>e.createAttributeElement("a",{"data-tooltip-id":t,class:"ds-c-tooltip__trigger-link"},{priority:5})}),t.for("upcast").elementToAttribute({view:{name:"a",attributes:["data-tooltip-id"]},model:{key:"tooltip",value:t=>t.getAttribute("data-tooltip-id")}})}}var a=i("ckeditor5/src/ui.js");class c extends a.View{constructor(e){super(e);const i=e.t;this.focusTracker=new l.FocusTracker,this.keystrokes=new l.KeystrokeHandler,this.formHeader=new a.FormHeaderView(e,{label:i("Add tooltip")}),this.titleInputView=this._createInput("Tooltip Title"),this.titleInputView.infoText=i("Start typing the title of the tooltip you want to link to, then select it from the select list."),this.tooltipInputView=this._createInput("Tooltip Id"),this.saveButtonView=this._createButton(i("Save"),t.icons.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(i("Cancel"),t.icons.cancel,"ck-button-cancel"),this.cancelButtonView.delegate("execute").to(this,"cancel"),this.childViews=this.createCollection([this.formHeader,this.titleInputView,this.tooltipInputView,this.saveButtonView,this.cancelButtonView]),this._focusCycler=new a.FocusCycler({focusables:this.childViews,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-tooltip-form","ck-responsive-form"],tabindex:"-1"},children:this.childViews})}render(){super.render(),(0,a.submitHandler)({view:this}),this.childViews._items.forEach((t=>{this.focusTracker.add(t.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.childViews.get(1).focus()}_createInput(t){const e=this.locale.t,i=new a.LabeledFieldView(this.locale,a.createLabeledInputText);return i.label=e(t),i}_createButton(t,e,i){const o=new a.ButtonView;return o.set({label:t,icon:e,tooltip:!0,class:i}),o}}const d=jQuery;class u extends t.Plugin{static get requires(){return[a.ContextualBalloon]}init(){const t=this.editor,e=t.t;this._balloon=t.plugins.get(a.ContextualBalloon),this.formView=this._createFormView(),this._enableBalloonActivators(),t.ui.componentFactory.add("tooltip",(t=>{const i=new a.ButtonView(t);return i.set({label:e("Tooltip"),icon:'<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4 2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4l-4 4-4-4h-4a2 2 0 0 1 -2-2v-12a2 2 0 0 1 2-2z"/></svg>',tooltip:!0}),this.listenTo(i,"execute",(()=>{this._showUI()})),i}))}_createFormView(){const t=this.editor,e=new c(t.locale);return this.listenTo(e,"submit",(()=>{const i={title:e.titleInputView.fieldView.element.value,tooltipId:e.tooltipInputView.fieldView.element.value};t.execute("insertTooltip",i),this._hideUI()})),this.listenTo(e,"cancel",(()=>{this._hideUI()})),(0,a.clickOutsideHandler)({emitter:e,activator:()=>this._balloon.visibleView===e,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()}),e}_showUI(){const t=this.editor.model.document.selection;this._enableTooltipAutocomplete();const e=this.editor.commands.get("insertTooltip").value;this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this.formView.tooltipInputView.isEnabled=t.getFirstRange().isCollapsed,e?(this.formView.titleInputView.fieldView.value=e.text,this.formView.tooltipInputView.fieldView.value=e.tooltipId):(this.formView.titleInputView.fieldView.value="",this.formView.tooltipInputView.fieldView.value=""),this.formView.focus()}_hideUI(){this.formView.titleInputView.fieldView.value="",this.formView.tooltipInputView.fieldView.value="",this.formView.element.reset(),this._balloon.remove(this.formView),this.editor.editing.view.focus()}_getBalloonPositionData(){const t=this.editor.editing.view,e=t.document;return{target:()=>t.domConverter.viewRangeToDom(e.selection.getFirstRange())}}_enableBalloonActivators(){const t=this.editor.editing.view.document;this.listenTo(t,"click",(()=>{this._getSelectedTooltipElement()&&this._showUI()}))}_getSelectedTooltipElement(){const t=this.editor.editing.view,e=t.document.selection,i=e.getSelectedElement();if(e.isCollapsed||i&&this._isTooltip(i))return this._findTooltipElementAncestor(e.getFirstPosition());{const i=e.getFirstRange().getTrimmed(),o=this._findTooltipElementAncestor(i.start),s=this._findTooltipElementAncestor(i.end);return o&&o===s&&t.createRangeIn(o).getTrimmed().isEqual(i)?o:null}}_findTooltipElementAncestor(t){if(!t)return null;let e=t.parent;for(;e;){if(e.is("element")&&this._isTooltip(e))return e;e=e.parent}return null}_isTooltip(t){return!!t.hasAttribute("data-tooltip-id")}_enableTooltipAutocomplete(){const t=this.editor,e=this.formView;let i=!1;t.plugins.get("ContextualBalloon")._rotatorView.content.on("add",((t,o)=>{if(o!==e||i)return;let s;!function(t,e){const{autocompleteUrl:i,selectHandler:o,closeHandler:s,openHandler:l}=e,n={cache:{},ajax:{dataType:"json",jsonp:!1}},r={appendTo:t.closest(".ck-labeled-field-view"),source:function(t,e){const{cache:o}=n;var s=t.term;o.hasOwnProperty(s)?e(o[s]):d.ajax(i,{success:function(t){o[s]=t,e(t)},data:{q:s},...n.ajax})},select:o,focus:()=>!1,search:()=>!r.isComposing,close:s,open:l,minLength:1,isComposing:!1},a=d(t).autocomplete(r);a.autocomplete("widget").addClass("tooltip-ui-autocomplete"),a.on("click",(function(){a.autocomplete("search",a.val())})),a.on("compositionstart.autocomplete",(function(){r.isComposing=!0})),a.on("compositionend.autocomplete",(function(){r.isComposing=!1}))}(e.titleInputView.fieldView.element,{autocompleteUrl:Drupal.url("admin/cke5_tooltip_plugin/tooltip/autocomplete"),selectHandler:(t,{item:i})=>{if(i.label||i.value){if(!i.label||!i.value)throw"Missing path param."+JSON.stringify(i);this.set("tooltipId",i.id),this.set("title",i.label)}else this.set("tooltipId",null),this.set("title",null);return e.titleInputView.fieldView.value=i.label,e.tooltipInputView.fieldView.value=i.id,s=!0,!1},openHandler:()=>{s=!1},closeHandler:()=>{s||(this.set("tooltipId",null),this.set("title",null)),s=!1}}),i=!0,e.titleInputView.fieldView.template.attributes.class.push("form-tooltip-autocomplete")}))}}class p extends t.Plugin{static get requires(){return[r,u]}}const h={Tooltip:p}})(),o=o.default})()));