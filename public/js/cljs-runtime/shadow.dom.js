goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32772 = coll;
var G__32773 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32772,G__32773) : shadow.dom.lazy_native_coll_seq.call(null,G__32772,G__32773));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32800 = arguments.length;
switch (G__32800) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32804 = arguments.length;
switch (G__32804) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32811 = arguments.length;
switch (G__32811) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32819 = arguments.length;
switch (G__32819) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32829 = arguments.length;
switch (G__32829) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32840 = arguments.length;
switch (G__32840) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32848){if((e32848 instanceof Object)){
var e = e32848;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32848;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32863 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32864 = null;
var count__32865 = (0);
var i__32866 = (0);
while(true){
if((i__32866 < count__32865)){
var el = chunk__32864.cljs$core$IIndexed$_nth$arity$2(null,i__32866);
var handler_33409__$1 = ((function (seq__32863,chunk__32864,count__32865,i__32866,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32863,chunk__32864,count__32865,i__32866,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33409__$1);


var G__33410 = seq__32863;
var G__33411 = chunk__32864;
var G__33412 = count__32865;
var G__33413 = (i__32866 + (1));
seq__32863 = G__33410;
chunk__32864 = G__33411;
count__32865 = G__33412;
i__32866 = G__33413;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32863);
if(temp__5735__auto__){
var seq__32863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32863__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32863__$1);
var G__33414 = cljs.core.chunk_rest(seq__32863__$1);
var G__33415 = c__4609__auto__;
var G__33416 = cljs.core.count(c__4609__auto__);
var G__33417 = (0);
seq__32863 = G__33414;
chunk__32864 = G__33415;
count__32865 = G__33416;
i__32866 = G__33417;
continue;
} else {
var el = cljs.core.first(seq__32863__$1);
var handler_33418__$1 = ((function (seq__32863,chunk__32864,count__32865,i__32866,el,seq__32863__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32863,chunk__32864,count__32865,i__32866,el,seq__32863__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33418__$1);


var G__33419 = cljs.core.next(seq__32863__$1);
var G__33420 = null;
var G__33421 = (0);
var G__33422 = (0);
seq__32863 = G__33419;
chunk__32864 = G__33420;
count__32865 = G__33421;
i__32866 = G__33422;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32873 = arguments.length;
switch (G__32873) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32883 = cljs.core.seq(events);
var chunk__32884 = null;
var count__32885 = (0);
var i__32886 = (0);
while(true){
if((i__32886 < count__32885)){
var vec__32898 = chunk__32884.cljs$core$IIndexed$_nth$arity$2(null,i__32886);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32898,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33424 = seq__32883;
var G__33425 = chunk__32884;
var G__33426 = count__32885;
var G__33427 = (i__32886 + (1));
seq__32883 = G__33424;
chunk__32884 = G__33425;
count__32885 = G__33426;
i__32886 = G__33427;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32883);
if(temp__5735__auto__){
var seq__32883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32883__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32883__$1);
var G__33428 = cljs.core.chunk_rest(seq__32883__$1);
var G__33429 = c__4609__auto__;
var G__33430 = cljs.core.count(c__4609__auto__);
var G__33431 = (0);
seq__32883 = G__33428;
chunk__32884 = G__33429;
count__32885 = G__33430;
i__32886 = G__33431;
continue;
} else {
var vec__32905 = cljs.core.first(seq__32883__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32905,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33432 = cljs.core.next(seq__32883__$1);
var G__33433 = null;
var G__33434 = (0);
var G__33435 = (0);
seq__32883 = G__33432;
chunk__32884 = G__33433;
count__32885 = G__33434;
i__32886 = G__33435;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32910 = cljs.core.seq(styles);
var chunk__32911 = null;
var count__32912 = (0);
var i__32913 = (0);
while(true){
if((i__32913 < count__32912)){
var vec__32924 = chunk__32911.cljs$core$IIndexed$_nth$arity$2(null,i__32913);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33436 = seq__32910;
var G__33437 = chunk__32911;
var G__33438 = count__32912;
var G__33439 = (i__32913 + (1));
seq__32910 = G__33436;
chunk__32911 = G__33437;
count__32912 = G__33438;
i__32913 = G__33439;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32910);
if(temp__5735__auto__){
var seq__32910__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32910__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32910__$1);
var G__33440 = cljs.core.chunk_rest(seq__32910__$1);
var G__33441 = c__4609__auto__;
var G__33442 = cljs.core.count(c__4609__auto__);
var G__33443 = (0);
seq__32910 = G__33440;
chunk__32911 = G__33441;
count__32912 = G__33442;
i__32913 = G__33443;
continue;
} else {
var vec__32932 = cljs.core.first(seq__32910__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32932,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33444 = cljs.core.next(seq__32910__$1);
var G__33445 = null;
var G__33446 = (0);
var G__33447 = (0);
seq__32910 = G__33444;
chunk__32911 = G__33445;
count__32912 = G__33446;
i__32913 = G__33447;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32939_33448 = key;
var G__32939_33449__$1 = (((G__32939_33448 instanceof cljs.core.Keyword))?G__32939_33448.fqn:null);
switch (G__32939_33449__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33451 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33451,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33451,"aria-");
}
})())){
el.setAttribute(ks_33451,value);
} else {
(el[ks_33451] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32961){
var map__32963 = p__32961;
var map__32963__$1 = (((((!((map__32963 == null))))?(((((map__32963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32963):map__32963);
var props = map__32963__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32963__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32966 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32966,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32966,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32966,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32970 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32970,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32970;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32972 = arguments.length;
switch (G__32972) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32973){
var vec__32974 = p__32973;
var seq__32975 = cljs.core.seq(vec__32974);
var first__32976 = cljs.core.first(seq__32975);
var seq__32975__$1 = cljs.core.next(seq__32975);
var nn = first__32976;
var first__32976__$1 = cljs.core.first(seq__32975__$1);
var seq__32975__$2 = cljs.core.next(seq__32975__$1);
var np = first__32976__$1;
var nc = seq__32975__$2;
var node = vec__32974;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32977 = nn;
var G__32978 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32977,G__32978) : create_fn.call(null,G__32977,G__32978));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32981 = nn;
var G__32982 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32981,G__32982) : create_fn.call(null,G__32981,G__32982));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32985 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32985,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32985,(1),null);
var seq__32989_33453 = cljs.core.seq(node_children);
var chunk__32990_33454 = null;
var count__32991_33455 = (0);
var i__32992_33456 = (0);
while(true){
if((i__32992_33456 < count__32991_33455)){
var child_struct_33457 = chunk__32990_33454.cljs$core$IIndexed$_nth$arity$2(null,i__32992_33456);
var children_33458 = shadow.dom.dom_node(child_struct_33457);
if(cljs.core.seq_QMARK_(children_33458)){
var seq__33014_33459 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33458));
var chunk__33016_33460 = null;
var count__33017_33461 = (0);
var i__33018_33462 = (0);
while(true){
if((i__33018_33462 < count__33017_33461)){
var child_33463 = chunk__33016_33460.cljs$core$IIndexed$_nth$arity$2(null,i__33018_33462);
if(cljs.core.truth_(child_33463)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33463);


var G__33464 = seq__33014_33459;
var G__33465 = chunk__33016_33460;
var G__33466 = count__33017_33461;
var G__33467 = (i__33018_33462 + (1));
seq__33014_33459 = G__33464;
chunk__33016_33460 = G__33465;
count__33017_33461 = G__33466;
i__33018_33462 = G__33467;
continue;
} else {
var G__33468 = seq__33014_33459;
var G__33469 = chunk__33016_33460;
var G__33470 = count__33017_33461;
var G__33471 = (i__33018_33462 + (1));
seq__33014_33459 = G__33468;
chunk__33016_33460 = G__33469;
count__33017_33461 = G__33470;
i__33018_33462 = G__33471;
continue;
}
} else {
var temp__5735__auto___33472 = cljs.core.seq(seq__33014_33459);
if(temp__5735__auto___33472){
var seq__33014_33473__$1 = temp__5735__auto___33472;
if(cljs.core.chunked_seq_QMARK_(seq__33014_33473__$1)){
var c__4609__auto___33474 = cljs.core.chunk_first(seq__33014_33473__$1);
var G__33475 = cljs.core.chunk_rest(seq__33014_33473__$1);
var G__33476 = c__4609__auto___33474;
var G__33477 = cljs.core.count(c__4609__auto___33474);
var G__33478 = (0);
seq__33014_33459 = G__33475;
chunk__33016_33460 = G__33476;
count__33017_33461 = G__33477;
i__33018_33462 = G__33478;
continue;
} else {
var child_33479 = cljs.core.first(seq__33014_33473__$1);
if(cljs.core.truth_(child_33479)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33479);


var G__33480 = cljs.core.next(seq__33014_33473__$1);
var G__33481 = null;
var G__33482 = (0);
var G__33483 = (0);
seq__33014_33459 = G__33480;
chunk__33016_33460 = G__33481;
count__33017_33461 = G__33482;
i__33018_33462 = G__33483;
continue;
} else {
var G__33484 = cljs.core.next(seq__33014_33473__$1);
var G__33485 = null;
var G__33486 = (0);
var G__33487 = (0);
seq__33014_33459 = G__33484;
chunk__33016_33460 = G__33485;
count__33017_33461 = G__33486;
i__33018_33462 = G__33487;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33458);
}


var G__33488 = seq__32989_33453;
var G__33489 = chunk__32990_33454;
var G__33490 = count__32991_33455;
var G__33491 = (i__32992_33456 + (1));
seq__32989_33453 = G__33488;
chunk__32990_33454 = G__33489;
count__32991_33455 = G__33490;
i__32992_33456 = G__33491;
continue;
} else {
var temp__5735__auto___33492 = cljs.core.seq(seq__32989_33453);
if(temp__5735__auto___33492){
var seq__32989_33493__$1 = temp__5735__auto___33492;
if(cljs.core.chunked_seq_QMARK_(seq__32989_33493__$1)){
var c__4609__auto___33494 = cljs.core.chunk_first(seq__32989_33493__$1);
var G__33495 = cljs.core.chunk_rest(seq__32989_33493__$1);
var G__33496 = c__4609__auto___33494;
var G__33497 = cljs.core.count(c__4609__auto___33494);
var G__33498 = (0);
seq__32989_33453 = G__33495;
chunk__32990_33454 = G__33496;
count__32991_33455 = G__33497;
i__32992_33456 = G__33498;
continue;
} else {
var child_struct_33499 = cljs.core.first(seq__32989_33493__$1);
var children_33500 = shadow.dom.dom_node(child_struct_33499);
if(cljs.core.seq_QMARK_(children_33500)){
var seq__33031_33501 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33500));
var chunk__33033_33502 = null;
var count__33034_33503 = (0);
var i__33035_33504 = (0);
while(true){
if((i__33035_33504 < count__33034_33503)){
var child_33505 = chunk__33033_33502.cljs$core$IIndexed$_nth$arity$2(null,i__33035_33504);
if(cljs.core.truth_(child_33505)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33505);


var G__33506 = seq__33031_33501;
var G__33507 = chunk__33033_33502;
var G__33508 = count__33034_33503;
var G__33509 = (i__33035_33504 + (1));
seq__33031_33501 = G__33506;
chunk__33033_33502 = G__33507;
count__33034_33503 = G__33508;
i__33035_33504 = G__33509;
continue;
} else {
var G__33510 = seq__33031_33501;
var G__33511 = chunk__33033_33502;
var G__33512 = count__33034_33503;
var G__33513 = (i__33035_33504 + (1));
seq__33031_33501 = G__33510;
chunk__33033_33502 = G__33511;
count__33034_33503 = G__33512;
i__33035_33504 = G__33513;
continue;
}
} else {
var temp__5735__auto___33514__$1 = cljs.core.seq(seq__33031_33501);
if(temp__5735__auto___33514__$1){
var seq__33031_33515__$1 = temp__5735__auto___33514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33031_33515__$1)){
var c__4609__auto___33516 = cljs.core.chunk_first(seq__33031_33515__$1);
var G__33517 = cljs.core.chunk_rest(seq__33031_33515__$1);
var G__33518 = c__4609__auto___33516;
var G__33519 = cljs.core.count(c__4609__auto___33516);
var G__33520 = (0);
seq__33031_33501 = G__33517;
chunk__33033_33502 = G__33518;
count__33034_33503 = G__33519;
i__33035_33504 = G__33520;
continue;
} else {
var child_33521 = cljs.core.first(seq__33031_33515__$1);
if(cljs.core.truth_(child_33521)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33521);


var G__33522 = cljs.core.next(seq__33031_33515__$1);
var G__33523 = null;
var G__33524 = (0);
var G__33525 = (0);
seq__33031_33501 = G__33522;
chunk__33033_33502 = G__33523;
count__33034_33503 = G__33524;
i__33035_33504 = G__33525;
continue;
} else {
var G__33526 = cljs.core.next(seq__33031_33515__$1);
var G__33527 = null;
var G__33528 = (0);
var G__33529 = (0);
seq__33031_33501 = G__33526;
chunk__33033_33502 = G__33527;
count__33034_33503 = G__33528;
i__33035_33504 = G__33529;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33500);
}


var G__33530 = cljs.core.next(seq__32989_33493__$1);
var G__33531 = null;
var G__33532 = (0);
var G__33533 = (0);
seq__32989_33453 = G__33530;
chunk__32990_33454 = G__33531;
count__32991_33455 = G__33532;
i__32992_33456 = G__33533;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33065 = cljs.core.seq(node);
var chunk__33066 = null;
var count__33067 = (0);
var i__33068 = (0);
while(true){
if((i__33068 < count__33067)){
var n = chunk__33066.cljs$core$IIndexed$_nth$arity$2(null,i__33068);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33534 = seq__33065;
var G__33535 = chunk__33066;
var G__33536 = count__33067;
var G__33537 = (i__33068 + (1));
seq__33065 = G__33534;
chunk__33066 = G__33535;
count__33067 = G__33536;
i__33068 = G__33537;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33065);
if(temp__5735__auto__){
var seq__33065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33065__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33065__$1);
var G__33538 = cljs.core.chunk_rest(seq__33065__$1);
var G__33539 = c__4609__auto__;
var G__33540 = cljs.core.count(c__4609__auto__);
var G__33541 = (0);
seq__33065 = G__33538;
chunk__33066 = G__33539;
count__33067 = G__33540;
i__33068 = G__33541;
continue;
} else {
var n = cljs.core.first(seq__33065__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33542 = cljs.core.next(seq__33065__$1);
var G__33543 = null;
var G__33544 = (0);
var G__33545 = (0);
seq__33065 = G__33542;
chunk__33066 = G__33543;
count__33067 = G__33544;
i__33068 = G__33545;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33074 = arguments.length;
switch (G__33074) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33077 = arguments.length;
switch (G__33077) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33080 = arguments.length;
switch (G__33080) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33549 = arguments.length;
var i__4790__auto___33550 = (0);
while(true){
if((i__4790__auto___33550 < len__4789__auto___33549)){
args__4795__auto__.push((arguments[i__4790__auto___33550]));

var G__33551 = (i__4790__auto___33550 + (1));
i__4790__auto___33550 = G__33551;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33099_33552 = cljs.core.seq(nodes);
var chunk__33100_33553 = null;
var count__33101_33554 = (0);
var i__33102_33555 = (0);
while(true){
if((i__33102_33555 < count__33101_33554)){
var node_33556 = chunk__33100_33553.cljs$core$IIndexed$_nth$arity$2(null,i__33102_33555);
fragment.appendChild(shadow.dom._to_dom(node_33556));


var G__33557 = seq__33099_33552;
var G__33558 = chunk__33100_33553;
var G__33559 = count__33101_33554;
var G__33560 = (i__33102_33555 + (1));
seq__33099_33552 = G__33557;
chunk__33100_33553 = G__33558;
count__33101_33554 = G__33559;
i__33102_33555 = G__33560;
continue;
} else {
var temp__5735__auto___33561 = cljs.core.seq(seq__33099_33552);
if(temp__5735__auto___33561){
var seq__33099_33562__$1 = temp__5735__auto___33561;
if(cljs.core.chunked_seq_QMARK_(seq__33099_33562__$1)){
var c__4609__auto___33563 = cljs.core.chunk_first(seq__33099_33562__$1);
var G__33564 = cljs.core.chunk_rest(seq__33099_33562__$1);
var G__33565 = c__4609__auto___33563;
var G__33566 = cljs.core.count(c__4609__auto___33563);
var G__33567 = (0);
seq__33099_33552 = G__33564;
chunk__33100_33553 = G__33565;
count__33101_33554 = G__33566;
i__33102_33555 = G__33567;
continue;
} else {
var node_33568 = cljs.core.first(seq__33099_33562__$1);
fragment.appendChild(shadow.dom._to_dom(node_33568));


var G__33569 = cljs.core.next(seq__33099_33562__$1);
var G__33570 = null;
var G__33571 = (0);
var G__33572 = (0);
seq__33099_33552 = G__33569;
chunk__33100_33553 = G__33570;
count__33101_33554 = G__33571;
i__33102_33555 = G__33572;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33095){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33095));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33111_33573 = cljs.core.seq(scripts);
var chunk__33112_33574 = null;
var count__33113_33575 = (0);
var i__33114_33576 = (0);
while(true){
if((i__33114_33576 < count__33113_33575)){
var vec__33127_33577 = chunk__33112_33574.cljs$core$IIndexed$_nth$arity$2(null,i__33114_33576);
var script_tag_33578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33127_33577,(0),null);
var script_body_33579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33127_33577,(1),null);
eval(script_body_33579);


var G__33580 = seq__33111_33573;
var G__33581 = chunk__33112_33574;
var G__33582 = count__33113_33575;
var G__33583 = (i__33114_33576 + (1));
seq__33111_33573 = G__33580;
chunk__33112_33574 = G__33581;
count__33113_33575 = G__33582;
i__33114_33576 = G__33583;
continue;
} else {
var temp__5735__auto___33584 = cljs.core.seq(seq__33111_33573);
if(temp__5735__auto___33584){
var seq__33111_33585__$1 = temp__5735__auto___33584;
if(cljs.core.chunked_seq_QMARK_(seq__33111_33585__$1)){
var c__4609__auto___33586 = cljs.core.chunk_first(seq__33111_33585__$1);
var G__33587 = cljs.core.chunk_rest(seq__33111_33585__$1);
var G__33588 = c__4609__auto___33586;
var G__33589 = cljs.core.count(c__4609__auto___33586);
var G__33590 = (0);
seq__33111_33573 = G__33587;
chunk__33112_33574 = G__33588;
count__33113_33575 = G__33589;
i__33114_33576 = G__33590;
continue;
} else {
var vec__33132_33591 = cljs.core.first(seq__33111_33585__$1);
var script_tag_33592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132_33591,(0),null);
var script_body_33593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33132_33591,(1),null);
eval(script_body_33593);


var G__33594 = cljs.core.next(seq__33111_33585__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__33111_33573 = G__33594;
chunk__33112_33574 = G__33595;
count__33113_33575 = G__33596;
i__33114_33576 = G__33597;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33135){
var vec__33136 = p__33135;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33136,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33147 = arguments.length;
switch (G__33147) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33161 = cljs.core.seq(style_keys);
var chunk__33162 = null;
var count__33163 = (0);
var i__33164 = (0);
while(true){
if((i__33164 < count__33163)){
var it = chunk__33162.cljs$core$IIndexed$_nth$arity$2(null,i__33164);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33599 = seq__33161;
var G__33600 = chunk__33162;
var G__33601 = count__33163;
var G__33602 = (i__33164 + (1));
seq__33161 = G__33599;
chunk__33162 = G__33600;
count__33163 = G__33601;
i__33164 = G__33602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33161);
if(temp__5735__auto__){
var seq__33161__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33161__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__33161__$1);
var G__33603 = cljs.core.chunk_rest(seq__33161__$1);
var G__33604 = c__4609__auto__;
var G__33605 = cljs.core.count(c__4609__auto__);
var G__33606 = (0);
seq__33161 = G__33603;
chunk__33162 = G__33604;
count__33163 = G__33605;
i__33164 = G__33606;
continue;
} else {
var it = cljs.core.first(seq__33161__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33607 = cljs.core.next(seq__33161__$1);
var G__33608 = null;
var G__33609 = (0);
var G__33610 = (0);
seq__33161 = G__33607;
chunk__33162 = G__33608;
count__33163 = G__33609;
i__33164 = G__33610;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33175,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33185 = k33175;
var G__33185__$1 = (((G__33185 instanceof cljs.core.Keyword))?G__33185.fqn:null);
switch (G__33185__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33175,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33189){
var vec__33190 = p__33189;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33190,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33190,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33174){
var self__ = this;
var G__33174__$1 = this;
return (new cljs.core.RecordIter((0),G__33174__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33176,other33177){
var self__ = this;
var this33176__$1 = this;
return (((!((other33177 == null)))) && ((this33176__$1.constructor === other33177.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33176__$1.x,other33177.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33176__$1.y,other33177.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33176__$1.__extmap,other33177.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33174){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33208 = cljs.core.keyword_identical_QMARK_;
var expr__33209 = k__4447__auto__;
if(cljs.core.truth_((pred__33208.cljs$core$IFn$_invoke$arity$2 ? pred__33208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33209) : pred__33208.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33209)))){
return (new shadow.dom.Coordinate(G__33174,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33208.cljs$core$IFn$_invoke$arity$2 ? pred__33208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33209) : pred__33208.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33209)))){
return (new shadow.dom.Coordinate(self__.x,G__33174,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33174),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33174){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33174,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33180){
var extmap__4478__auto__ = (function (){var G__33211 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33180,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33180)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33211);
} else {
return G__33211;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33180),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33180),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k33216,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__33229 = k33216;
var G__33229__$1 = (((G__33229 instanceof cljs.core.Keyword))?G__33229.fqn:null);
switch (G__33229__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33216,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__33233){
var vec__33234 = p__33233;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33215){
var self__ = this;
var G__33215__$1 = this;
return (new cljs.core.RecordIter((0),G__33215__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33217,other33218){
var self__ = this;
var this33217__$1 = this;
return (((!((other33218 == null)))) && ((this33217__$1.constructor === other33218.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33217__$1.w,other33218.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33217__$1.h,other33218.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33217__$1.__extmap,other33218.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__33215){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__33254 = cljs.core.keyword_identical_QMARK_;
var expr__33255 = k__4447__auto__;
if(cljs.core.truth_((pred__33254.cljs$core$IFn$_invoke$arity$2 ? pred__33254.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33255) : pred__33254.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33255)))){
return (new shadow.dom.Size(G__33215,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33254.cljs$core$IFn$_invoke$arity$2 ? pred__33254.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33255) : pred__33254.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33255)))){
return (new shadow.dom.Size(self__.w,G__33215,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__33215),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__33215){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33215,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33220){
var extmap__4478__auto__ = (function (){var G__33269 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33220,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33220)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33269);
} else {
return G__33269;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33220),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33220),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33613 = (i + (1));
var G__33614 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33613;
ret = G__33614;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33292){
var vec__33294 = p__33292;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33294,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33294,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33302 = arguments.length;
switch (G__33302) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33616 = ps;
var G__33617 = (i + (1));
el__$1 = G__33616;
i = G__33617;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33331 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33337_33618 = cljs.core.seq(props);
var chunk__33338_33619 = null;
var count__33339_33620 = (0);
var i__33340_33621 = (0);
while(true){
if((i__33340_33621 < count__33339_33620)){
var vec__33347_33622 = chunk__33338_33619.cljs$core$IIndexed$_nth$arity$2(null,i__33340_33621);
var k_33623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33347_33622,(0),null);
var v_33624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33347_33622,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33623);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33623),v_33624);


var G__33625 = seq__33337_33618;
var G__33626 = chunk__33338_33619;
var G__33627 = count__33339_33620;
var G__33628 = (i__33340_33621 + (1));
seq__33337_33618 = G__33625;
chunk__33338_33619 = G__33626;
count__33339_33620 = G__33627;
i__33340_33621 = G__33628;
continue;
} else {
var temp__5735__auto___33629 = cljs.core.seq(seq__33337_33618);
if(temp__5735__auto___33629){
var seq__33337_33630__$1 = temp__5735__auto___33629;
if(cljs.core.chunked_seq_QMARK_(seq__33337_33630__$1)){
var c__4609__auto___33631 = cljs.core.chunk_first(seq__33337_33630__$1);
var G__33632 = cljs.core.chunk_rest(seq__33337_33630__$1);
var G__33633 = c__4609__auto___33631;
var G__33634 = cljs.core.count(c__4609__auto___33631);
var G__33635 = (0);
seq__33337_33618 = G__33632;
chunk__33338_33619 = G__33633;
count__33339_33620 = G__33634;
i__33340_33621 = G__33635;
continue;
} else {
var vec__33350_33636 = cljs.core.first(seq__33337_33630__$1);
var k_33637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33350_33636,(0),null);
var v_33638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33350_33636,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33637);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33637),v_33638);


var G__33639 = cljs.core.next(seq__33337_33630__$1);
var G__33640 = null;
var G__33641 = (0);
var G__33642 = (0);
seq__33337_33618 = G__33639;
chunk__33338_33619 = G__33640;
count__33339_33620 = G__33641;
i__33340_33621 = G__33642;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33354 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
var seq__33357_33643 = cljs.core.seq(node_children);
var chunk__33359_33644 = null;
var count__33360_33645 = (0);
var i__33361_33646 = (0);
while(true){
if((i__33361_33646 < count__33360_33645)){
var child_struct_33647 = chunk__33359_33644.cljs$core$IIndexed$_nth$arity$2(null,i__33361_33646);
if((!((child_struct_33647 == null)))){
if(typeof child_struct_33647 === 'string'){
var text_33648 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33648),child_struct_33647].join(''));
} else {
var children_33649 = shadow.dom.svg_node(child_struct_33647);
if(cljs.core.seq_QMARK_(children_33649)){
var seq__33375_33650 = cljs.core.seq(children_33649);
var chunk__33377_33651 = null;
var count__33378_33652 = (0);
var i__33379_33653 = (0);
while(true){
if((i__33379_33653 < count__33378_33652)){
var child_33654 = chunk__33377_33651.cljs$core$IIndexed$_nth$arity$2(null,i__33379_33653);
if(cljs.core.truth_(child_33654)){
node.appendChild(child_33654);


var G__33655 = seq__33375_33650;
var G__33656 = chunk__33377_33651;
var G__33657 = count__33378_33652;
var G__33658 = (i__33379_33653 + (1));
seq__33375_33650 = G__33655;
chunk__33377_33651 = G__33656;
count__33378_33652 = G__33657;
i__33379_33653 = G__33658;
continue;
} else {
var G__33659 = seq__33375_33650;
var G__33660 = chunk__33377_33651;
var G__33661 = count__33378_33652;
var G__33662 = (i__33379_33653 + (1));
seq__33375_33650 = G__33659;
chunk__33377_33651 = G__33660;
count__33378_33652 = G__33661;
i__33379_33653 = G__33662;
continue;
}
} else {
var temp__5735__auto___33663 = cljs.core.seq(seq__33375_33650);
if(temp__5735__auto___33663){
var seq__33375_33664__$1 = temp__5735__auto___33663;
if(cljs.core.chunked_seq_QMARK_(seq__33375_33664__$1)){
var c__4609__auto___33665 = cljs.core.chunk_first(seq__33375_33664__$1);
var G__33666 = cljs.core.chunk_rest(seq__33375_33664__$1);
var G__33667 = c__4609__auto___33665;
var G__33668 = cljs.core.count(c__4609__auto___33665);
var G__33669 = (0);
seq__33375_33650 = G__33666;
chunk__33377_33651 = G__33667;
count__33378_33652 = G__33668;
i__33379_33653 = G__33669;
continue;
} else {
var child_33670 = cljs.core.first(seq__33375_33664__$1);
if(cljs.core.truth_(child_33670)){
node.appendChild(child_33670);


var G__33671 = cljs.core.next(seq__33375_33664__$1);
var G__33672 = null;
var G__33673 = (0);
var G__33674 = (0);
seq__33375_33650 = G__33671;
chunk__33377_33651 = G__33672;
count__33378_33652 = G__33673;
i__33379_33653 = G__33674;
continue;
} else {
var G__33675 = cljs.core.next(seq__33375_33664__$1);
var G__33676 = null;
var G__33677 = (0);
var G__33678 = (0);
seq__33375_33650 = G__33675;
chunk__33377_33651 = G__33676;
count__33378_33652 = G__33677;
i__33379_33653 = G__33678;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33649);
}
}


var G__33679 = seq__33357_33643;
var G__33680 = chunk__33359_33644;
var G__33681 = count__33360_33645;
var G__33682 = (i__33361_33646 + (1));
seq__33357_33643 = G__33679;
chunk__33359_33644 = G__33680;
count__33360_33645 = G__33681;
i__33361_33646 = G__33682;
continue;
} else {
var G__33683 = seq__33357_33643;
var G__33684 = chunk__33359_33644;
var G__33685 = count__33360_33645;
var G__33686 = (i__33361_33646 + (1));
seq__33357_33643 = G__33683;
chunk__33359_33644 = G__33684;
count__33360_33645 = G__33685;
i__33361_33646 = G__33686;
continue;
}
} else {
var temp__5735__auto___33687 = cljs.core.seq(seq__33357_33643);
if(temp__5735__auto___33687){
var seq__33357_33688__$1 = temp__5735__auto___33687;
if(cljs.core.chunked_seq_QMARK_(seq__33357_33688__$1)){
var c__4609__auto___33689 = cljs.core.chunk_first(seq__33357_33688__$1);
var G__33690 = cljs.core.chunk_rest(seq__33357_33688__$1);
var G__33691 = c__4609__auto___33689;
var G__33692 = cljs.core.count(c__4609__auto___33689);
var G__33693 = (0);
seq__33357_33643 = G__33690;
chunk__33359_33644 = G__33691;
count__33360_33645 = G__33692;
i__33361_33646 = G__33693;
continue;
} else {
var child_struct_33694 = cljs.core.first(seq__33357_33688__$1);
if((!((child_struct_33694 == null)))){
if(typeof child_struct_33694 === 'string'){
var text_33695 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33695),child_struct_33694].join(''));
} else {
var children_33696 = shadow.dom.svg_node(child_struct_33694);
if(cljs.core.seq_QMARK_(children_33696)){
var seq__33381_33697 = cljs.core.seq(children_33696);
var chunk__33383_33698 = null;
var count__33384_33699 = (0);
var i__33385_33700 = (0);
while(true){
if((i__33385_33700 < count__33384_33699)){
var child_33701 = chunk__33383_33698.cljs$core$IIndexed$_nth$arity$2(null,i__33385_33700);
if(cljs.core.truth_(child_33701)){
node.appendChild(child_33701);


var G__33702 = seq__33381_33697;
var G__33703 = chunk__33383_33698;
var G__33704 = count__33384_33699;
var G__33705 = (i__33385_33700 + (1));
seq__33381_33697 = G__33702;
chunk__33383_33698 = G__33703;
count__33384_33699 = G__33704;
i__33385_33700 = G__33705;
continue;
} else {
var G__33706 = seq__33381_33697;
var G__33707 = chunk__33383_33698;
var G__33708 = count__33384_33699;
var G__33709 = (i__33385_33700 + (1));
seq__33381_33697 = G__33706;
chunk__33383_33698 = G__33707;
count__33384_33699 = G__33708;
i__33385_33700 = G__33709;
continue;
}
} else {
var temp__5735__auto___33710__$1 = cljs.core.seq(seq__33381_33697);
if(temp__5735__auto___33710__$1){
var seq__33381_33711__$1 = temp__5735__auto___33710__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33381_33711__$1)){
var c__4609__auto___33712 = cljs.core.chunk_first(seq__33381_33711__$1);
var G__33713 = cljs.core.chunk_rest(seq__33381_33711__$1);
var G__33714 = c__4609__auto___33712;
var G__33715 = cljs.core.count(c__4609__auto___33712);
var G__33716 = (0);
seq__33381_33697 = G__33713;
chunk__33383_33698 = G__33714;
count__33384_33699 = G__33715;
i__33385_33700 = G__33716;
continue;
} else {
var child_33717 = cljs.core.first(seq__33381_33711__$1);
if(cljs.core.truth_(child_33717)){
node.appendChild(child_33717);


var G__33718 = cljs.core.next(seq__33381_33711__$1);
var G__33719 = null;
var G__33720 = (0);
var G__33721 = (0);
seq__33381_33697 = G__33718;
chunk__33383_33698 = G__33719;
count__33384_33699 = G__33720;
i__33385_33700 = G__33721;
continue;
} else {
var G__33722 = cljs.core.next(seq__33381_33711__$1);
var G__33723 = null;
var G__33724 = (0);
var G__33725 = (0);
seq__33381_33697 = G__33722;
chunk__33383_33698 = G__33723;
count__33384_33699 = G__33724;
i__33385_33700 = G__33725;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33696);
}
}


var G__33726 = cljs.core.next(seq__33357_33688__$1);
var G__33727 = null;
var G__33728 = (0);
var G__33729 = (0);
seq__33357_33643 = G__33726;
chunk__33359_33644 = G__33727;
count__33360_33645 = G__33728;
i__33361_33646 = G__33729;
continue;
} else {
var G__33730 = cljs.core.next(seq__33357_33688__$1);
var G__33731 = null;
var G__33732 = (0);
var G__33733 = (0);
seq__33357_33643 = G__33730;
chunk__33359_33644 = G__33731;
count__33360_33645 = G__33732;
i__33361_33646 = G__33733;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33734 = arguments.length;
var i__4790__auto___33735 = (0);
while(true){
if((i__4790__auto___33735 < len__4789__auto___33734)){
args__4795__auto__.push((arguments[i__4790__auto___33735]));

var G__33736 = (i__4790__auto___33735 + (1));
i__4790__auto___33735 = G__33736;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33387){
var G__33388 = cljs.core.first(seq33387);
var seq33387__$1 = cljs.core.next(seq33387);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33388,seq33387__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33390 = arguments.length;
switch (G__33390) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__31159__auto___33738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31160__auto__ = (function (){var switch__31123__auto__ = (function (state_33395){
var state_val_33396 = (state_33395[(1)]);
if((state_val_33396 === (1))){
var state_33395__$1 = state_33395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33395__$1,(2),once_or_cleanup);
} else {
if((state_val_33396 === (2))){
var inst_33392 = (state_33395[(2)]);
var inst_33393 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33395__$1 = (function (){var statearr_33397 = state_33395;
(statearr_33397[(7)] = inst_33392);

return statearr_33397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33395__$1,inst_33393);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31124__auto__ = null;
var shadow$dom$state_machine__31124__auto____0 = (function (){
var statearr_33398 = [null,null,null,null,null,null,null,null];
(statearr_33398[(0)] = shadow$dom$state_machine__31124__auto__);

(statearr_33398[(1)] = (1));

return statearr_33398;
});
var shadow$dom$state_machine__31124__auto____1 = (function (state_33395){
while(true){
var ret_value__31125__auto__ = (function (){try{while(true){
var result__31126__auto__ = switch__31123__auto__(state_33395);
if(cljs.core.keyword_identical_QMARK_(result__31126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31126__auto__;
}
break;
}
}catch (e33399){var ex__31127__auto__ = e33399;
var statearr_33400_33739 = state_33395;
(statearr_33400_33739[(2)] = ex__31127__auto__);


if(cljs.core.seq((state_33395[(4)]))){
var statearr_33401_33740 = state_33395;
(statearr_33401_33740[(1)] = cljs.core.first((state_33395[(4)])));

} else {
throw ex__31127__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33741 = state_33395;
state_33395 = G__33741;
continue;
} else {
return ret_value__31125__auto__;
}
break;
}
});
shadow$dom$state_machine__31124__auto__ = function(state_33395){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31124__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31124__auto____1.call(this,state_33395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31124__auto____0;
shadow$dom$state_machine__31124__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31124__auto____1;
return shadow$dom$state_machine__31124__auto__;
})()
})();
var state__31161__auto__ = (function (){var statearr_33402 = f__31160__auto__();
(statearr_33402[(6)] = c__31159__auto___33738);

return statearr_33402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31161__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
