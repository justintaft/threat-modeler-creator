goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36453){
var map__36454 = p__36453;
var map__36454__$1 = (((((!((map__36454 == null))))?(((((map__36454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36454):map__36454);
var m = map__36454__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36454__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36456_36670 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36457_36671 = null;
var count__36458_36672 = (0);
var i__36459_36673 = (0);
while(true){
if((i__36459_36673 < count__36458_36672)){
var f_36674 = chunk__36457_36671.cljs$core$IIndexed$_nth$arity$2(null,i__36459_36673);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36674], 0));


var G__36675 = seq__36456_36670;
var G__36676 = chunk__36457_36671;
var G__36677 = count__36458_36672;
var G__36678 = (i__36459_36673 + (1));
seq__36456_36670 = G__36675;
chunk__36457_36671 = G__36676;
count__36458_36672 = G__36677;
i__36459_36673 = G__36678;
continue;
} else {
var temp__5735__auto___36679 = cljs.core.seq(seq__36456_36670);
if(temp__5735__auto___36679){
var seq__36456_36680__$1 = temp__5735__auto___36679;
if(cljs.core.chunked_seq_QMARK_(seq__36456_36680__$1)){
var c__4609__auto___36681 = cljs.core.chunk_first(seq__36456_36680__$1);
var G__36682 = cljs.core.chunk_rest(seq__36456_36680__$1);
var G__36683 = c__4609__auto___36681;
var G__36684 = cljs.core.count(c__4609__auto___36681);
var G__36685 = (0);
seq__36456_36670 = G__36682;
chunk__36457_36671 = G__36683;
count__36458_36672 = G__36684;
i__36459_36673 = G__36685;
continue;
} else {
var f_36686 = cljs.core.first(seq__36456_36680__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36686], 0));


var G__36687 = cljs.core.next(seq__36456_36680__$1);
var G__36688 = null;
var G__36689 = (0);
var G__36690 = (0);
seq__36456_36670 = G__36687;
chunk__36457_36671 = G__36688;
count__36458_36672 = G__36689;
i__36459_36673 = G__36690;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36691 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36691], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36691)))?cljs.core.second(arglists_36691):arglists_36691)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36461_36692 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36462_36693 = null;
var count__36463_36694 = (0);
var i__36464_36695 = (0);
while(true){
if((i__36464_36695 < count__36463_36694)){
var vec__36476_36696 = chunk__36462_36693.cljs$core$IIndexed$_nth$arity$2(null,i__36464_36695);
var name_36697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36476_36696,(0),null);
var map__36479_36698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36476_36696,(1),null);
var map__36479_36699__$1 = (((((!((map__36479_36698 == null))))?(((((map__36479_36698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36479_36698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36479_36698):map__36479_36698);
var doc_36700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36479_36699__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36479_36699__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36697], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36701], 0));

if(cljs.core.truth_(doc_36700)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36700], 0));
} else {
}


var G__36702 = seq__36461_36692;
var G__36703 = chunk__36462_36693;
var G__36704 = count__36463_36694;
var G__36705 = (i__36464_36695 + (1));
seq__36461_36692 = G__36702;
chunk__36462_36693 = G__36703;
count__36463_36694 = G__36704;
i__36464_36695 = G__36705;
continue;
} else {
var temp__5735__auto___36706 = cljs.core.seq(seq__36461_36692);
if(temp__5735__auto___36706){
var seq__36461_36707__$1 = temp__5735__auto___36706;
if(cljs.core.chunked_seq_QMARK_(seq__36461_36707__$1)){
var c__4609__auto___36708 = cljs.core.chunk_first(seq__36461_36707__$1);
var G__36709 = cljs.core.chunk_rest(seq__36461_36707__$1);
var G__36710 = c__4609__auto___36708;
var G__36711 = cljs.core.count(c__4609__auto___36708);
var G__36712 = (0);
seq__36461_36692 = G__36709;
chunk__36462_36693 = G__36710;
count__36463_36694 = G__36711;
i__36464_36695 = G__36712;
continue;
} else {
var vec__36482_36713 = cljs.core.first(seq__36461_36707__$1);
var name_36714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36482_36713,(0),null);
var map__36485_36715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36482_36713,(1),null);
var map__36485_36716__$1 = (((((!((map__36485_36715 == null))))?(((((map__36485_36715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36485_36715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36485_36715):map__36485_36715);
var doc_36717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36485_36716__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36485_36716__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36714], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36718], 0));

if(cljs.core.truth_(doc_36717)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36717], 0));
} else {
}


var G__36719 = cljs.core.next(seq__36461_36707__$1);
var G__36720 = null;
var G__36721 = (0);
var G__36722 = (0);
seq__36461_36692 = G__36719;
chunk__36462_36693 = G__36720;
count__36463_36694 = G__36721;
i__36464_36695 = G__36722;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36488 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36489 = null;
var count__36490 = (0);
var i__36491 = (0);
while(true){
if((i__36491 < count__36490)){
var role = chunk__36489.cljs$core$IIndexed$_nth$arity$2(null,i__36491);
var temp__5735__auto___36723__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36723__$1)){
var spec_36724 = temp__5735__auto___36723__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36724)], 0));
} else {
}


var G__36725 = seq__36488;
var G__36726 = chunk__36489;
var G__36727 = count__36490;
var G__36728 = (i__36491 + (1));
seq__36488 = G__36725;
chunk__36489 = G__36726;
count__36490 = G__36727;
i__36491 = G__36728;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36488);
if(temp__5735__auto____$1){
var seq__36488__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36488__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36488__$1);
var G__36729 = cljs.core.chunk_rest(seq__36488__$1);
var G__36730 = c__4609__auto__;
var G__36731 = cljs.core.count(c__4609__auto__);
var G__36732 = (0);
seq__36488 = G__36729;
chunk__36489 = G__36730;
count__36490 = G__36731;
i__36491 = G__36732;
continue;
} else {
var role = cljs.core.first(seq__36488__$1);
var temp__5735__auto___36733__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36733__$2)){
var spec_36734 = temp__5735__auto___36733__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36734)], 0));
} else {
}


var G__36735 = cljs.core.next(seq__36488__$1);
var G__36736 = null;
var G__36737 = (0);
var G__36738 = (0);
seq__36488 = G__36735;
chunk__36489 = G__36736;
count__36490 = G__36737;
i__36491 = G__36738;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36739 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36740 = cljs.core.ex_cause(t);
via = G__36739;
t = G__36740;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36563 = datafied_throwable;
var map__36563__$1 = (((((!((map__36563 == null))))?(((((map__36563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36563):map__36563);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36563__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36564 = cljs.core.last(via);
var map__36564__$1 = (((((!((map__36564 == null))))?(((((map__36564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36564):map__36564);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36565 = data;
var map__36565__$1 = (((((!((map__36565 == null))))?(((((map__36565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36565):map__36565);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36566 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36566__$1 = (((((!((map__36566 == null))))?(((((map__36566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36566):map__36566);
var top_data = map__36566__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36566__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36597 = phase;
var G__36597__$1 = (((G__36597 instanceof cljs.core.Keyword))?G__36597.fqn:null);
switch (G__36597__$1) {
case "read-source":
var map__36598 = data;
var map__36598__$1 = (((((!((map__36598 == null))))?(((((map__36598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36598):map__36598);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36598__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36601 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36601__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36601,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36601);
var G__36601__$2 = (cljs.core.truth_((function (){var fexpr__36602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36602.cljs$core$IFn$_invoke$arity$1 ? fexpr__36602.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36602.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36601__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36601__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36601__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36603 = top_data;
var G__36603__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36603,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36603);
var G__36603__$2 = (cljs.core.truth_((function (){var fexpr__36605 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36605.cljs$core$IFn$_invoke$arity$1 ? fexpr__36605.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36605.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36603__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36603__$1);
var G__36603__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36603__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36603__$2);
var G__36603__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36603__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36603__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36603__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36603__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36606 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36606,(3),null);
var G__36609 = top_data;
var G__36609__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36609,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36609);
var G__36609__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36609__$1);
var G__36609__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36609__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36609__$2);
var G__36609__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36609__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36609__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36609__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36609__$4;
}

break;
case "execution":
var vec__36610 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36610,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36610,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36610,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36610,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36555_SHARP_){
var or__4185__auto__ = (p1__36555_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__36615 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36615.cljs$core$IFn$_invoke$arity$1 ? fexpr__36615.cljs$core$IFn$_invoke$arity$1(p1__36555_SHARP_) : fexpr__36615.call(null,p1__36555_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__36616 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36616__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36616,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36616);
var G__36616__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36616__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36616__$1);
var G__36616__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36616__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36616__$2);
var G__36616__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36616__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36616__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36616__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36616__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36597__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36621){
var map__36622 = p__36621;
var map__36622__$1 = (((((!((map__36622 == null))))?(((((map__36622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36622):map__36622);
var triage_data = map__36622__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36622__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36625 = phase;
var G__36625__$1 = (((G__36625 instanceof cljs.core.Keyword))?G__36625.fqn:null);
switch (G__36625__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36626 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36627 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36628 = loc;
var G__36629 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36630_36745 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36631_36746 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36632_36747 = true;
var _STAR_print_fn_STAR__temp_val__36633_36748 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36632_36747);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36633_36748);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36619_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36619_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36631_36746);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36630_36745);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36626,G__36627,G__36628,G__36629) : format.call(null,G__36626,G__36627,G__36628,G__36629));

break;
case "macroexpansion":
var G__36634 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36635 = cause_type;
var G__36636 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36637 = loc;
var G__36638 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36634,G__36635,G__36636,G__36637,G__36638) : format.call(null,G__36634,G__36635,G__36636,G__36637,G__36638));

break;
case "compile-syntax-check":
var G__36639 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36640 = cause_type;
var G__36641 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36642 = loc;
var G__36643 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36639,G__36640,G__36641,G__36642,G__36643) : format.call(null,G__36639,G__36640,G__36641,G__36642,G__36643));

break;
case "compilation":
var G__36644 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36645 = cause_type;
var G__36646 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36647 = loc;
var G__36648 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36644,G__36645,G__36646,G__36647,G__36648) : format.call(null,G__36644,G__36645,G__36646,G__36647,G__36648));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36649 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36650 = symbol;
var G__36651 = loc;
var G__36652 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36653_36749 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36654_36750 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36655_36751 = true;
var _STAR_print_fn_STAR__temp_val__36656_36752 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36655_36751);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36656_36752);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36620_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36620_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36654_36750);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36653_36749);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36649,G__36650,G__36651,G__36652) : format.call(null,G__36649,G__36650,G__36651,G__36652));
} else {
var G__36659 = "Execution error%s at %s(%s).\n%s\n";
var G__36660 = cause_type;
var G__36661 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36662 = loc;
var G__36663 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36659,G__36660,G__36661,G__36662,G__36663) : format.call(null,G__36659,G__36660,G__36661,G__36662,G__36663));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36625__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
