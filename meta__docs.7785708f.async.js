"use strict";(self.webpackChunk_jswork_react_selection_docs=self.webpackChunk_jswork_react_selection_docs||[]).push([[904],{27432:function(s,a,e){e.r(a),e.d(a,{ErrorCode:function(){return A},ReactSelection:function(){return W},default:function(){return Q}});var n=e(75271),u=Object.defineProperty,d=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,c=(t,l,r)=>l in t?u(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r,h=(t,l)=>{for(var r in l||(l={}))R.call(l,r)&&c(t,r,l[r]);if(d)for(var r of d(l))y.call(l,r)&&c(t,r,l[r]);return t},M=(t,l)=>u(t,"name",{value:l,configurable:!0});function v(t){return t&&typeof t=="object"&&"component"in t}M(v,"isSlotConfig");function I(t,l,r){return t?typeof t=="function"?n.createElement(t,r?h({key:r},l):l):v(t)?n.createElement(t.component,h(h({key:r},t.props),l)):r!==void 0?n.createElement(n.Fragment,{key:r},t):t:null}M(I,"renderSlot");function m(t,l,r){var p;return typeof r=="function"?r(t,l):(p=t[r])!=null?p:l}M(m,"getKey");function i({data:t,keyExtractor:l,slots:r}){let p=(0,n.useMemo)(()=>t.map((S,f)=>m(S,f,l)),[t,l]);return t.length===0?n.createElement(n.Fragment,null,I(r.empty,{data:t})):n.createElement(n.Fragment,null,t.map((S,f)=>I(r.item,{item:S,index:f,data:t},p[f])))}M(i,"ReactList");var x=null,C=e(3341),o=e.n(C),L=Object.defineProperty,Z=Object.defineProperties,V=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,K=(t,l,r)=>l in t?L(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r,O=(t,l)=>{for(var r in l||(l={}))N.call(l,r)&&K(t,r,l[r]);if(D)for(var r of D(l))U.call(l,r)&&K(t,r,l[r]);return t},G=(t,l)=>Z(t,V(l)),P=(t,l)=>L(t,"name",{value:l,configurable:!0}),Y=(t,l)=>{var r={};for(var p in t)N.call(t,p)&&l.indexOf(p)<0&&(r[p]=t[p]);if(t!=null&&D)for(var p of D(t))l.indexOf(p)<0&&U.call(t,p)&&(r[p]=t[p]);return r},H=P((t,l)=>{let r=t.indexOf(l);return r>-1?t.splice(r,1):t.push(l),t},"toggle"),A;(function(t){t.MAX_LIMIT_EXCEED="MAX_LIMIT_EXCEED"})(A||(A={}));var J={max:1e3,allowDeselect:!1,multiple:!1,keyExtractor:"value"};function z(t,l,r){return typeof t=="function"?n.createElement(t,r?O({key:r},l):l):t&&typeof t=="object"&&"component"in t?n.createElement(t.component,O(O({key:r},t.props),l)):r!==void 0?n.createElement(n.Fragment,{key:r},t):t}P(z,"renderSlot");var W=P(t=>{let l=O(O({},J),t),{allowDeselect:r=!1,max:p=1e3,value:S,onChange:f,onError:w,multiple:T=!1,slots:j}=l,q=Y(l,["allowDeselect","max","value","onChange","onError","multiple","slots"]),[g,B]=(0,n.useState)(S||(T?[]:null));(0,n.useEffect)(()=>{let k=o()(S,g);S!==void 0&&!k&&(B(S),f==null||f(S))},[S,f,g]);let _=(0,n.useCallback)(k=>{let E=k.value,b=r&&E===g?null:E;B(b),g!==b&&(f==null||f(b))},[g,r,f]),ee=(0,n.useCallback)(k=>{let E=H([...g],k.value),b=p>0?E.slice(0,p):E;if(E.length>p){w==null||w({code:"MAX_LIMIT_EXCEED"});return}B(b),f==null||f(b)},[g,p,w,f]),X=T?ee:_,ne=(0,n.useCallback)(k=>{var E;let{item:b,index:F,data:te}=k,$=T?g==null?void 0:g.includes(b.value):g===b.value,ae=T&&(g==null?void 0:g.length)>=p&&!$,oe=P(()=>X(b),"onClick"),le=(E=b.value)!=null?E:F;return z(j.item,{item:b,index:F,data:te,active:$,disabled:ae,onClick:oe},le)},[g,T,p,X,j.item]);return n.createElement(i,G(O({},q),{slots:{item:ne,empty:j.empty}}))},"ReactSelection"),Q=W},76517:function(s,a,e){e.r(a),e.d(a,{demos:function(){return u}});var n=e(75271),u={}},58966:function(s,a,e){e.r(a),e.d(a,{demos:function(){return u}});var n=e(75271),u={}},99195:function(s,a,e){e.r(a),e.d(a,{demos:function(){return u}});var n=e(75271),u={}},72612:function(s,a,e){e.r(a),e.d(a,{demos:function(){return u}});var n=e(75271),u={}},34748:function(s,a,e){e.r(a),e.d(a,{demos:function(){return u}});var n=e(75271),u={}},27890:function(s,a,e){e.r(a),e.d(a,{demos:function(){return u}});var n=e(75271),u={}},60358:function(s,a,e){var n;e.r(a),e.d(a,{demos:function(){return M}});var u=e(90228),d=e.n(u),R=e(87999),y=e.n(R),c=e(75271),h=e(27432),M={"docs-playground-demo-single-selection":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,47230))})),asset:{type:"BLOCK",id:"docs-playground-demo-single-selection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60462).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Basic single selection with controlled value"},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-allow-deselect":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,3922))})),asset:{type:"BLOCK",id:"docs-playground-demo-allow-deselect",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93809).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Single selection where you can deselect the active item"},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-multiple-selection":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,72237))})),asset:{type:"BLOCK",id:"docs-playground-demo-multiple-selection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38398).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Select multiple items with checkbox-style UI"},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-max-limit":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,56539))})),asset:{type:"BLOCK",id:"docs-playground-demo-max-limit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40350).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Multiple selection with a maximum limit of 3"},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-empty-state":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,92540))})),asset:{type:"BLOCK",id:"docs-playground-demo-empty-state",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88229).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Handle empty data array with a custom empty slot"},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-slot-component":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,26287))})),asset:{type:"BLOCK",id:"docs-playground-demo-slot-component",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70655).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Using a component reference with default props"},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-value-extractor-string":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,54737))})),asset:{type:"BLOCK",id:"docs-playground-demo-value-extractor-string",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(7662).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:`Use valueExtractor="id" when data items don't have a value field`},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-value-extractor-fn":{component:c.memo(c.lazy(function(){return e.e(433).then(e.bind(e,42879))})),asset:{type:"BLOCK",id:"docs-playground-demo-value-extractor-fn",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49946).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Use a custom function to extract selection identity"},context:{react:n||(n=e.t(c,2)),"@jswork/react-selection":h},renderOpts:{compile:function(){var v=y()(d()().mark(function m(){var i,x=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(631).then(e.bind(e,10631));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,x));case 3:case"end":return o.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}}}},57069:function(s,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"A headless, type-safe selection component for React with slot-based architecture.",paraId:0,tocIndex:0},{value:"You need single or multiple selection without being tied to a specific UI framework",paraId:1,tocIndex:1},{value:"You want full control over the visual presentation of selection items",paraId:1,tocIndex:1},{value:"You need type-safe selection with TypeScript generics",paraId:1,tocIndex:1},{value:"You need configurable max selection limits with error handling",paraId:1,tocIndex:1},{value:"Export",paraId:2,tocIndex:2},{value:"Type",paraId:2,tocIndex:2},{value:"Description",paraId:2,tocIndex:2},{value:"ReactSelection",paraId:2,tocIndex:2},{value:"Component",paraId:2,tocIndex:2},{value:"The main selection component",paraId:2,tocIndex:2},{value:"ReactSelectionProps",paraId:2,tocIndex:2},{value:"Interface",paraId:2,tocIndex:2},{value:"Props type for the component",paraId:2,tocIndex:2},{value:"SelectionItemSlotProps",paraId:2,tocIndex:2},{value:"Interface",paraId:2,tocIndex:2},{value:"Props passed to the item slot",paraId:2,tocIndex:2},{value:"ValueExtractor",paraId:2,tocIndex:2},{value:"Type",paraId:2,tocIndex:2},{value:"string | ((item: T) => any)",paraId:2,tocIndex:2},{value:" for value extraction",paraId:2,tocIndex:2},{value:"Slot",paraId:2,tocIndex:2},{value:"Type",paraId:2,tocIndex:2},{value:"Slot type (component, function, or object)",paraId:2,tocIndex:2},{value:"ErrorCode",paraId:2,tocIndex:2},{value:"Enum",paraId:2,tocIndex:2},{value:"Error codes for selection errors",paraId:2,tocIndex:2},{value:"Extends ",paraId:3,tocIndex:4},{value:"Omit<ReactListProps<T>, 'slots' | 'keyExtractor'>",paraId:3,tocIndex:4},{value:" plus:",paraId:3,tocIndex:4},{value:"Property",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"data",paraId:4,tocIndex:4},{value:"Array of data items (any shape)",paraId:4,tocIndex:4},{value:"T[]",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"valueExtractor",paraId:4,tocIndex:4},{value:"How to extract selection identity (also used as React key)",paraId:4,tocIndex:4},{value:"string | ((item: T) => any)",paraId:4,tocIndex:4},{value:"'value'",paraId:4,tocIndex:4},{value:"allowDeselect",paraId:4,tocIndex:4},{value:"Allow deselecting in single selection mode",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"max",paraId:4,tocIndex:4},{value:"Maximum selections allowed (multiple mode)",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"1000",paraId:4,tocIndex:4},{value:"multiple",paraId:4,tocIndex:4},{value:"Enable multiple selection",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"value",paraId:4,tocIndex:4},{value:"Current selected value",paraId:4,tocIndex:4},{value:"any",paraId:4,tocIndex:4},{value:"null",paraId:4,tocIndex:4},{value:" (or ",paraId:4,tocIndex:4},{value:"[]",paraId:4,tocIndex:4},{value:" when multiple)",paraId:4,tocIndex:4},{value:"onChange",paraId:4,tocIndex:4},{value:"Callback when selection changes",paraId:4,tocIndex:4},{value:"(value: any) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onError",paraId:4,tocIndex:4},{value:"Callback when an error occurs",paraId:4,tocIndex:4},{value:"(error: { code: ErrorCode }) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"slots",paraId:4,tocIndex:4},{value:"Slot configuration (see below)",paraId:4,tocIndex:4},{value:"SelectionSlots<T>",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Props received by the ",paraId:5,tocIndex:5},{value:"slots.item",paraId:5,tocIndex:5},{value:" slot:",paraId:5,tocIndex:5},{value:"Property",paraId:6,tocIndex:5},{value:"Description",paraId:6,tocIndex:5},{value:"Type",paraId:6,tocIndex:5},{value:"item",paraId:6,tocIndex:5},{value:"The current data item",paraId:6,tocIndex:5},{value:"T",paraId:6,tocIndex:5},{value:"index",paraId:6,tocIndex:5},{value:"Index in the data array",paraId:6,tocIndex:5},{value:"number",paraId:6,tocIndex:5},{value:"data",paraId:6,tocIndex:5},{value:"The full data array",paraId:6,tocIndex:5},{value:"T[]",paraId:6,tocIndex:5},{value:"active",paraId:6,tocIndex:5},{value:"Whether this item is currently selected",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"disabled",paraId:6,tocIndex:5},{value:"Whether this item is disabled (max reached)",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"onClick",paraId:6,tocIndex:5},{value:"Handler to select/deselect this item",paraId:6,tocIndex:5},{value:"() => void",paraId:6,tocIndex:5},{value:"Value",paraId:7,tocIndex:6},{value:"Description",paraId:7,tocIndex:6},{value:"MAX_LIMIT_EXCEED",paraId:7,tocIndex:6},{value:"Selection count has exceeded the configured ",paraId:7,tocIndex:6},{value:"max",paraId:7,tocIndex:6},{value:" value",paraId:7,tocIndex:6},{value:`interface SelectionSlots<T> {
  item: Slot<SelectionItemSlotProps<T>>; // Required
  empty?: Slot<{ data: T[] }>; // Optional
}
`,paraId:8,tocIndex:7},{value:"A ",paraId:9,tocIndex:7},{value:"Slot",paraId:9,tocIndex:7},{value:" can be:",paraId:9,tocIndex:7},{value:"Component",paraId:10,tocIndex:7},{value:": ",paraId:10,tocIndex:7},{value:"MyComponent",paraId:10,tocIndex:7},{value:"Render function",paraId:10,tocIndex:7},{value:": ",paraId:10,tocIndex:7},{value:"({ item, active, onClick }) => <button>...</button>",paraId:10,tocIndex:7},{value:"Object with props",paraId:10,tocIndex:7},{value:": ",paraId:10,tocIndex:7},{value:"{ component: MyComponent, props: { className: 'item' } }",paraId:10,tocIndex:7},{value:`import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

function App() {
  const [selected, setSelected] = useState('apple');

  return (
    <ReactSelection
      data={items}
      value={selected}
      onChange={setSelected}
      slots={{
        item: ({ item, active, onClick }) => (
          <button
            className={active ? 'btn-primary' : 'btn-default'}
            onClick={onClick}
          >
            {item.label}
          </button>
        ),
      }}
    />
  );
}
`,paraId:11,tocIndex:9},{value:`// Data without a \`value\` field \u2014 use \`id\` instead
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

<ReactSelection
  data={users}
  valueExtractor="id"
  value={selectedId}
  onChange={setSelectedId}
  slots={{
    item: ({ item, active, onClick }) => (
      <button className={active ? 'active' : ''} onClick={onClick}>
        {item.name}
      </button>
    ),
  }}
/>;
`,paraId:12,tocIndex:10},{value:`const products = [
  { sku: 'A-001', title: 'Widget' },
  { sku: 'B-002', title: 'Gadget' },
];

<ReactSelection
  data={products}
  valueExtractor={(item) => item.sku}
  value={selected}
  onChange={setSelected}
  slots={{
    item: ({ item, active, onClick }) => (
      <div onClick={onClick} className={active ? 'active' : ''}>
        {item.title}
      </div>
    ),
  }}
/>;
`,paraId:13,tocIndex:11},{value:`<ReactSelection
  multiple
  max={3}
  data={items}
  value={selectedItems}
  onChange={setSelectedItems}
  onError={(err) => {
    if (err.code === ErrorCode.MAX_LIMIT_EXCEED) {
      console.warn('Maximum selections reached');
    }
  }}
  slots={{
    item: ({ item, active, disabled, onClick }) => (
      <button disabled={disabled} onClick={onClick}>
        {active ? '\u2713 ' : ''}
        {item.label}
      </button>
    ),
  }}
/>
`,paraId:14,tocIndex:12},{value:`<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: ({ item, active, onClick }) => (
      <div onClick={onClick} className={active ? 'active' : ''}>
        {item.label}
      </div>
    ),
    empty: () => <div>No items available</div>,
  }}
/>
`,paraId:15,tocIndex:13}]},50249:function(s,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"ReactSelection is built on a few core principles:",paraId:0,tocIndex:1},{value:"ReactSelection renders ",paraId:1,tocIndex:2},{value:"no wrapper DOM element",paraId:1,tocIndex:2},{value:" \u2014 it directly returns a ",paraId:1,tocIndex:2},{value:"ReactList",paraId:1,tocIndex:2},{value:". There is no CSS, no className, no extra DOM nodes. You have full control over the rendered output through slots.",paraId:1,tocIndex:2},{value:"ReactSelection wraps ",paraId:2,tocIndex:3},{value:"@jswork/react-list",paraId:2,tocIndex:3},{value:", adding selection behavior to the list's slot system. It does not extend or subclass \u2014 it composes:",paraId:2,tocIndex:3},{value:`ReactSelection \u2192 ReactList \u2192 Your Slots
`,paraId:3,tocIndex:3},{value:"The user's ",paraId:4,tocIndex:4},{value:"slots.item",paraId:4,tocIndex:4},{value:" is wrapped internally. Selection state (",paraId:4,tocIndex:4},{value:"active",paraId:4,tocIndex:4},{value:", ",paraId:4,tocIndex:4},{value:"disabled",paraId:4,tocIndex:4},{value:", ",paraId:4,tocIndex:4},{value:"onClick",paraId:4,tocIndex:4},{value:") is injected before rendering:",paraId:4,tocIndex:4},{value:"ReactSelection receives your ",paraId:5,tocIndex:4},{value:"slots.item",paraId:5,tocIndex:4},{value:"For each data item, it computes selection state",paraId:5,tocIndex:4},{value:"It wraps your slot with the computed props (",paraId:5,tocIndex:4},{value:"active",paraId:5,tocIndex:4},{value:", ",paraId:5,tocIndex:4},{value:"disabled",paraId:5,tocIndex:4},{value:", ",paraId:5,tocIndex:4},{value:"onClick",paraId:5,tocIndex:4},{value:")",paraId:5,tocIndex:4},{value:"The enhanced slot is passed to ",paraId:5,tocIndex:4},{value:"ReactList",paraId:5,tocIndex:4},{value:"valueExtractor",paraId:6,tocIndex:6},{value:" serves a dual purpose \u2014 it extracts both the ",paraId:6,tocIndex:6},{value:"selection identity",paraId:6,tocIndex:6},{value:" and ",paraId:6,tocIndex:6},{value:"React keys",paraId:6,tocIndex:6},{value:" for the underlying list:",paraId:6,tocIndex:6},{value:`valueExtractor: 'value' (default)
  \u2192 item.value is used for selection comparison
  \u2192 item.value is used as React key

valueExtractor: 'id'
  \u2192 item.id is used for selection comparison
  \u2192 item.id is used as React key

valueExtractor: (item) => item.sku
  \u2192 item.sku is used for selection comparison
  \u2192 item.sku is used as React key
`,paraId:7,tocIndex:6},{value:`User clicks item
  \u2192 onClick handler fires
    \u2192 If item is already selected and allowDeselect is true \u2192 deselect (value = null)
    \u2192 If item is not selected \u2192 select (value = extractedValue)
  \u2192 onChange callback fires with new value
`,paraId:8,tocIndex:7},{value:`User clicks item
  \u2192 onClick handler fires
    \u2192 If item is already selected \u2192 remove from array
    \u2192 If item is not selected:
      \u2192 If current count >= max \u2192 fire onError (MAX_LIMIT_EXCEED)
      \u2192 Otherwise \u2192 add to array
  \u2192 onChange callback fires with new array
`,paraId:9,tocIndex:8},{value:"Memoized handlers",paraId:10,tocIndex:9},{value:" \u2014 Selection handlers are memoized with ",paraId:10,tocIndex:9},{value:"useCallback",paraId:10,tocIndex:9},{value:"Deep equality",paraId:10,tocIndex:9},{value:" \u2014 State comparison uses ",paraId:10,tocIndex:9},{value:"fast-deep-equal",paraId:10,tocIndex:9},{value:" for accurate change detection",paraId:10,tocIndex:9},{value:"Value extraction",paraId:10,tocIndex:9},{value:" \u2014 ",paraId:10,tocIndex:9},{value:"valueExtractor",paraId:10,tocIndex:9},{value:" handles both selection identity and React keys in one pass",paraId:10,tocIndex:9},{value:`// valueExtractor type \u2014 string key or custom function
type ValueExtractor<T> = string | ((item: T) => any);

// Generic works with any data type
interface ReactSelectionProps<T> {
  data: T[];
  valueExtractor?: ValueExtractor<T>; // default: 'value'
  // ... other props
}

// Slot props are fully typed based on your data type
interface SelectionItemSlotProps<T> {
  item: T;
  index: number;
  data: T[];
  active: boolean;
  disabled: boolean;
  onClick: () => void;
}
`,paraId:11,tocIndex:10},{value:"Package",paraId:12,tocIndex:11},{value:"Version",paraId:12,tocIndex:11},{value:"Purpose",paraId:12,tocIndex:11},{value:"react",paraId:12,tocIndex:11},{value:"peer",paraId:12,tocIndex:11},{value:"UI framework",paraId:12,tocIndex:11},{value:"fast-deep-equal",paraId:12,tocIndex:11},{value:"peer",paraId:12,tocIndex:11},{value:"Deep equality comparison for state",paraId:12,tocIndex:11},{value:"@jswork/react-list",paraId:12,tocIndex:11},{value:"^2.0.0",paraId:12,tocIndex:11},{value:"Base list component with slot system",paraId:12,tocIndex:11},{value:`react-selection/
\u251C\u2500\u2500 packages/
\u2502   \u251C\u2500\u2500 lib/
\u2502   \u2502   \u2514\u2500\u2500 src/
\u2502   \u2502       \u2514\u2500\u2500 index.tsx       # Main component
\u2502   \u2514\u2500\u2500 example/
\u2502       \u2514\u2500\u2500 src/
\u2502           \u251C\u2500\u2500 App.tsx         # Demo entry
\u2502           \u2514\u2500\u2500 demos/          # Individual demo files
\u251C\u2500\u2500 llms.txt                    # LLM context file
\u2514\u2500\u2500 README.md
`,paraId:13,tocIndex:12}]},52696:function(s,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"ReactSelection extends ",paraId:0,tocIndex:1},{value:"Omit<ReactListProps<T>, 'slots' | 'keyExtractor'>",paraId:0,tocIndex:1},{value:" with the following selection-specific props:",paraId:0,tocIndex:1},{value:"Property",paraId:1,tocIndex:2},{value:"Description",paraId:1,tocIndex:2},{value:"Type",paraId:1,tocIndex:2},{value:"Default",paraId:1,tocIndex:2},{value:"allowDeselect",paraId:1,tocIndex:2},{value:"Allow deselecting in single selection mode",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"max",paraId:1,tocIndex:2},{value:"Maximum selections allowed (multiple mode)",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"1000",paraId:1,tocIndex:2},{value:"multiple",paraId:1,tocIndex:2},{value:"Enable multiple selection",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"Current selected value",paraId:1,tocIndex:2},{value:"any",paraId:1,tocIndex:2},{value:"null",paraId:1,tocIndex:2},{value:" (or ",paraId:1,tocIndex:2},{value:"[]",paraId:1,tocIndex:2},{value:" when multiple)",paraId:1,tocIndex:2},{value:"valueExtractor",paraId:1,tocIndex:2},{value:"How to extract selection identity from data items",paraId:1,tocIndex:2},{value:"string | ((item: T) => any)",paraId:1,tocIndex:2},{value:"'value'",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:"Callback when selection changes",paraId:1,tocIndex:2},{value:"(value: any) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onError",paraId:1,tocIndex:2},{value:"Callback when an error occurs (e.g., max exceeded)",paraId:1,tocIndex:2},{value:"(error: { code: ErrorCode }) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"slots",paraId:1,tocIndex:2},{value:"Slot configuration for rendering",paraId:1,tocIndex:2},{value:"SelectionSlots<T>",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"Property",paraId:2,tocIndex:3},{value:"Description",paraId:2,tocIndex:3},{value:"Type",paraId:2,tocIndex:3},{value:"Default",paraId:2,tocIndex:3},{value:"data",paraId:2,tocIndex:3},{value:"Array of data items (any shape)",paraId:2,tocIndex:3},{value:"T[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"The ",paraId:3,tocIndex:4},{value:"valueExtractor",paraId:3,tocIndex:4},{value:" prop tells the component how to identify each item for selection. It also serves as the React key for the underlying list. This replaces the separate ",paraId:3,tocIndex:4},{value:"keyExtractor",paraId:3,tocIndex:4},{value:" prop \u2014 one config handles both.",paraId:3,tocIndex:4},{value:`type ValueExtractor<T> = string | ((item: T) => any);
`,paraId:4,tocIndex:5},{value:"By default, ",paraId:5,tocIndex:6},{value:"valueExtractor",paraId:5,tocIndex:6},{value:" is ",paraId:5,tocIndex:6},{value:"'value'",paraId:5,tocIndex:6},{value:", so it reads ",paraId:5,tocIndex:6},{value:"item.value",paraId:5,tocIndex:6},{value:":",paraId:5,tocIndex:6},{value:`const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

// No valueExtractor needed \u2014 uses item.value by default
<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
`,paraId:6,tocIndex:6},{value:"When your data items don't have a ",paraId:7,tocIndex:7},{value:"value",paraId:7,tocIndex:7},{value:" field, specify which field to use:",paraId:7,tocIndex:7},{value:`const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

<ReactSelection
  data={users}
  valueExtractor="id"
  value={selectedId}
  onChange={setSelectedId}
  slots={{ item: ItemSlot }}
/>;
`,paraId:8,tocIndex:7},{value:"For more complex extraction logic, use a function:",paraId:9,tocIndex:8},{value:`const products = [
  { sku: 'A-001', title: 'Widget' },
  { sku: 'B-002', title: 'Gadget' },
];

<ReactSelection
  data={products}
  valueExtractor={(item) => item.sku}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
`,paraId:10,tocIndex:8},{value:"The ",paraId:11,tocIndex:9},{value:"slots",paraId:11,tocIndex:9},{value:" prop controls how items are rendered. It accepts the following slot entries:",paraId:11,tocIndex:9},{value:"slots.item",paraId:12},{value:"The main slot for rendering each selection item. Receives ",paraId:13,tocIndex:10},{value:"SelectionItemSlotProps",paraId:13,tocIndex:10},{value:":",paraId:13,tocIndex:10},{value:"Property",paraId:14,tocIndex:10},{value:"Description",paraId:14,tocIndex:10},{value:"Type",paraId:14,tocIndex:10},{value:"item",paraId:14,tocIndex:10},{value:"The current data item",paraId:14,tocIndex:10},{value:"T",paraId:14,tocIndex:10},{value:"index",paraId:14,tocIndex:10},{value:"Index in the data array",paraId:14,tocIndex:10},{value:"number",paraId:14,tocIndex:10},{value:"data",paraId:14,tocIndex:10},{value:"The full data array",paraId:14,tocIndex:10},{value:"T[]",paraId:14,tocIndex:10},{value:"active",paraId:14,tocIndex:10},{value:"Whether this item is currently selected",paraId:14,tocIndex:10},{value:"boolean",paraId:14,tocIndex:10},{value:"disabled",paraId:14,tocIndex:10},{value:"Whether this item is disabled (max reached)",paraId:14,tocIndex:10},{value:"boolean",paraId:14,tocIndex:10},{value:"onClick",paraId:14,tocIndex:10},{value:"Handler to select/deselect this item",paraId:14,tocIndex:10},{value:"() => void",paraId:14,tocIndex:10},{value:"slots.empty",paraId:12},{value:"Rendered when the data array is empty. Receives ",paraId:15,tocIndex:11},{value:"{ data: T[] }",paraId:15,tocIndex:11},{value:".",paraId:15,tocIndex:11},{value:"A slot can be provided in three forms:",paraId:16,tocIndex:12},{value:"Pass a React component directly:",paraId:17,tocIndex:13},{value:`const ItemSlot = ({ item, active, onClick }: SelectionItemSlotProps<Fruit>) => (
  <button className={active ? 'active' : ''} onClick={onClick}>
    {item.label}
  </button>
);

<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
`,paraId:18,tocIndex:13},{value:"Use an inline render function:",paraId:19,tocIndex:14},{value:`<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: ({ item, active, onClick }) => (
      <button onClick={onClick}>{item.label}</button>
    ),
  }}
/>
`,paraId:20,tocIndex:14},{value:"Pass a component with additional props merged in:",paraId:21,tocIndex:15},{value:`<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: { component: ItemSlot, props: { className: 'btn-sm' } },
  }}
/>
`,paraId:22,tocIndex:15},{value:"The ",paraId:23,tocIndex:16},{value:"onError",paraId:23,tocIndex:16},{value:" callback receives an object with a ",paraId:23,tocIndex:16},{value:"code",paraId:23,tocIndex:16},{value:" property:",paraId:23,tocIndex:16},{value:`enum ErrorCode {
  MAX_LIMIT_EXCEED = 'MAX_LIMIT_EXCEED',
}
`,paraId:24,tocIndex:16},{value:`<ReactSelection
  multiple
  max={3}
  data={items}
  value={selectedItems}
  onChange={setSelectedItems}
  onError={(err) => {
    if (err.code === ErrorCode.MAX_LIMIT_EXCEED) {
      console.warn('Maximum selections reached');
    }
  }}
  slots={{ item: ItemSlot }}
/>
`,paraId:25,tocIndex:17}]},33154:function(s,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"React >= 16.8 (hooks support)",paraId:0,tocIndex:1},{value:"fast-deep-equal",paraId:0,tocIndex:1},{value:" (peer dependency)",paraId:0,tocIndex:1},{value:`# npm
npm install @jswork/react-selection

# yarn
yarn add @jswork/react-selection

# pnpm
pnpm add @jswork/react-selection
`,paraId:1,tocIndex:2},{value:"Data items can have ",paraId:2,tocIndex:3},{value:"any shape",paraId:2,tocIndex:3},{value:". By default, ReactSelection uses the ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:" field for selection identity. If your data uses a different field (like ",paraId:2,tocIndex:3},{value:"id",paraId:2,tocIndex:3},{value:" or ",paraId:2,tocIndex:3},{value:"sku",paraId:2,tocIndex:3},{value:"), use the ",paraId:2,tocIndex:3},{value:"valueExtractor",paraId:2,tocIndex:3},{value:" prop:",paraId:2,tocIndex:3},{value:`// Default: uses item.value
interface Fruit {
  value: string;
  label: string;
}

// Custom: uses item.id via valueExtractor="id"
interface User {
  id: number;
  name: string;
}

// Custom: uses a function via valueExtractor={(item) => item.sku}
interface Product {
  sku: string;
  title: string;
}
`,paraId:3,tocIndex:3},{value:"Your data array:",paraId:4,tocIndex:3},{value:`const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];
`,paraId:5,tocIndex:3},{value:"The simplest usage \u2014 select one item from a list:",paraId:6,tocIndex:4},{value:`import { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

function App() {
  const [selected, setSelected] = useState('apple');

  return (
    <ReactSelection
      data={items}
      value={selected}
      onChange={setSelected}
      slots={{
        item: ({ item, active, onClick }) => (
          <button
            style={{
              padding: '8px 16px',
              background: active ? '#1890ff' : '#fff',
              color: active ? '#fff' : '#333',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
            }}
            onClick={onClick}
          >
            {item.label}
          </button>
        ),
      }}
    />
  );
}
`,paraId:7,tocIndex:4},{value:"Enable multi-select with the ",paraId:8,tocIndex:5},{value:"multiple",paraId:8,tocIndex:5},{value:" prop:",paraId:8,tocIndex:5},{value:`function App() {
  const [selected, setSelected] = useState([]);

  return (
    <ReactSelection
      multiple
      data={items}
      value={selected}
      onChange={setSelected}
      slots={{
        item: ({ item, active, onClick }) => (
          <button
            style={{
              padding: '8px 16px',
              background: active ? '#1890ff' : '#fff',
              color: active ? '#fff' : '#333',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
            }}
            onClick={onClick}
          >
            {active ? '\u2713 ' : ''}
            {item.label}
          </button>
        ),
      }}
    />
  );
}
`,paraId:9,tocIndex:5},{value:"ReactSelection is a ",paraId:10,tocIndex:6},{value:"controlled component",paraId:10,tocIndex:6},{value:" \u2014 you manage the state via ",paraId:10,tocIndex:6},{value:"value",paraId:10,tocIndex:6},{value:" and ",paraId:10,tocIndex:6},{value:"onChange",paraId:10,tocIndex:6},{value:":",paraId:10,tocIndex:6},{value:`// Single selection
const [value, setValue] = useState(null);
<ReactSelection value={value} onChange={setValue} ... />

// Multiple selection (initial value should be an array)
const [value, setValue] = useState([]);
<ReactSelection multiple value={value} onChange={setValue} ... />
`,paraId:11,tocIndex:6},{value:"Configuration",paraId:12,tocIndex:7},{value:" \u2014 Explore all available props and slot types",paraId:13,tocIndex:7},{value:"Playground",paraId:14,tocIndex:7},{value:" \u2014 Interactive examples",paraId:13,tocIndex:7},{value:"Architecture",paraId:15,tocIndex:7},{value:" \u2014 Learn how it works internally",paraId:13,tocIndex:7}]},95523:function(s,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Welcome to the ReactSelection guide. This section covers everything you need to know about using the headless selection component.",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:1},{value:" - Installation, prerequisites, and your first selection",paraId:2,tocIndex:1},{value:"Configuration",paraId:3,tocIndex:1},{value:" - All props, types, and slot configuration",paraId:2,tocIndex:1},{value:"Architecture",paraId:4,tocIndex:1},{value:" - Design decisions, internals, and how it works",paraId:2,tocIndex:1},{value:"ReactSelection is a ",paraId:5,tocIndex:3},{value:"headless",paraId:5,tocIndex:3},{value:" component \u2014 it renders no DOM wrapper, no CSS, and no className. You provide all styling through the slot system, giving you complete control over presentation.",paraId:5,tocIndex:3},{value:"The slot system allows you to customize how each item is rendered. A slot can be:",paraId:6,tocIndex:4},{value:"Component",paraId:7,tocIndex:4},{value:" \u2014 ",paraId:7,tocIndex:4},{value:"<ReactSelection slots={{ item: MyComponent }} />",paraId:7,tocIndex:4},{value:"Render function",paraId:7,tocIndex:4},{value:" \u2014 ",paraId:7,tocIndex:4},{value:"slots={{ item: ({ item }) => <div>{item.label}</div> }}",paraId:7,tocIndex:4},{value:"Component with props",paraId:7,tocIndex:4},{value:" \u2014 ",paraId:7,tocIndex:4},{value:"slots={{ item: { component: MyComp, props: { className: 'item' } } }}",paraId:7,tocIndex:4},{value:"ReactSelection uses TypeScript generics ",paraId:8,tocIndex:5},{value:"<T>",paraId:8,tocIndex:5},{value:" \u2014 data items can have any shape. Use ",paraId:8,tocIndex:5},{value:"valueExtractor",paraId:8,tocIndex:5},{value:" (string or function) to tell the component which field to use for selection identity. All slot props are fully typed.",paraId:8,tocIndex:5},{value:"GitHub Repository",paraId:9,tocIndex:6},{value:"npm Package",paraId:9,tocIndex:6}]},39972:function(s,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:`# npm
npm install @jswork/react-selection

# yarn
yarn add @jswork/react-selection

# pnpm
pnpm add @jswork/react-selection
`,paraId:0,tocIndex:0},{value:`import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
];

function App() {
  const [selected, setSelected] = useState('apple');

  return (
    <ReactSelection
      data={items}
      value={selected}
      onChange={setSelected}
      slots={{
        item: ({ item, active, onClick }) => (
          <button
            className={active ? 'btn-primary' : 'btn-default'}
            onClick={onClick}
          >
            {item.label}
          </button>
        ),
      }}
    />
  );
}
`,paraId:1,tocIndex:1},{value:"Getting Started",paraId:2,tocIndex:2},{value:" - Installation and basic usage",paraId:3,tocIndex:2},{value:"API Reference",paraId:4,tocIndex:2},{value:" - Full component API documentation",paraId:3,tocIndex:2},{value:"Playground",paraId:5,tocIndex:2},{value:" - Interactive examples and demos",paraId:3,tocIndex:2},{value:"Architecture",paraId:6,tocIndex:2},{value:" - Design decisions and internals",paraId:3,tocIndex:2}]},15895:function(s,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Interactive examples demonstrating all ReactSelection features. Each demo is fully runnable and editable.",paraId:0,tocIndex:0}]},3341:function(s){s.exports=function a(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var u,d,R;if(Array.isArray(e)){if(u=e.length,u!=n.length)return!1;for(d=u;d--!==0;)if(!a(e[d],n[d]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(R=Object.keys(e),u=R.length,u!==Object.keys(n).length)return!1;for(d=u;d--!==0;)if(!Object.prototype.hasOwnProperty.call(n,R[d]))return!1;for(d=u;d--!==0;){var y=R[d];if(!a(e[y],n[y]))return!1}return!0}return e!==e&&n!==n}},93809:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

export default () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Allow Deselect</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected || 'None (click again to deselect)'}</strong>
      </p>
      <ReactSelection
        allowDeselect
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <button
              onClick={onClick}
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? item.value : '#d9d9d9',
                borderRadius: '6px',
                background: active ? item.value : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {active ? '\u2713 ' : ''}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
`},88229:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

export default () => {
  const [selected, setSelected] = useState(null);
  const [hasData, setHasData] = useState(false);

  const items = hasData
    ? [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ]
    : [];

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Empty State</h3>
      <button
        onClick={() => setHasData(!hasData)}
        style={{
          marginBottom: '12px',
          padding: '6px 16px',
          border: '1px solid #1890ff',
          borderRadius: '4px',
          background: '#1890ff',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '13px',
        }}
      >
        {hasData ? 'Clear Data' : 'Load Data'}
      </button>
      <ReactSelection
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <button
              onClick={onClick}
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                border: '1px solid',
                borderColor: active ? '#1890ff' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#1890ff' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              {item.label}
            </button>
          ),
          empty: () => (
            <div
              style={{
                padding: '24px',
                textAlign: 'center',
                color: '#999',
                border: '1px dashed #d9d9d9',
                borderRadius: '6px',
              }}
            >
              No items available. Click "Load Data" to add items.
            </div>
          ),
        }}
      />
    </div>
  );
};
`},40350:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection, ErrorCode } from '@jswork/react-selection';

const items = [
  { value: 'mon', label: 'Monday' },
  { value: 'tue', label: 'Tuesday' },
  { value: 'wed', label: 'Wednesday' },
  { value: 'thu', label: 'Thursday' },
  { value: 'fri', label: 'Friday' },
  { value: 'sat', label: 'Saturday' },
  { value: 'sun', label: 'Sunday' },
];

export default () => {
  const [selected, setSelected] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Max Limit (3)</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected.length > 0 ? selected.join(', ') : 'None'}</strong>
        {' '}({selected.length}/3)
      </p>
      {errorMsg && (
        <p style={{ color: '#ff4d4f', marginBottom: '8px' }}>{errorMsg}</p>
      )}
      <ReactSelection
        multiple
        max={3}
        data={items}
        value={selected}
        onChange={setSelected}
        onError={(err) => {
          if (err.code === ErrorCode.MAX_LIMIT_EXCEED) {
            setErrorMsg('You can only select up to 3 days!');
            setTimeout(() => setErrorMsg(''), 2000);
          }
        }}
        slots={{
          item: ({ item, active, disabled, onClick }) => (
            <button
              disabled={disabled}
              onClick={onClick}
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#faad14' : disabled ? '#f0f0f0' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#faad14' : disabled ? '#f5f5f5' : '#fff',
                color: active ? '#fff' : disabled ? '#bbb' : '#333',
                cursor: disabled ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {active ? '\u2713 ' : ''}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
`},38398:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'SolidJS' },
];

export default () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Multiple Selection</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected.length > 0 ? selected.join(', ') : 'None'}</strong>
      </p>
      <ReactSelection
        multiple
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <button
              onClick={onClick}
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#52c41a' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#52c41a' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {active ? '\u2611 ' : '\u2610 '}{item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
`},60462:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

export default () => {
  const [selected, setSelected] = useState('apple');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Single Selection</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected || 'None'}</strong>
      </p>
      <ReactSelection
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <button
              onClick={onClick}
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#1890ff' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#1890ff' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              {item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
`},70655:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'X-Large' },
];

// Standalone component for the item slot
const SizeButton = ({ item, active, onClick, className }: any) => (
  <button
    onClick={onClick}
    className={className}
    style={{
      padding: '8px 20px',
      marginRight: '8px',
      marginBottom: '8px',
      border: '1px solid',
      borderColor: active ? '#722ed1' : '#d9d9d9',
      borderRadius: '20px',
      background: active ? '#722ed1' : '#fff',
      color: active ? '#fff' : '#333',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.2s',
    }}
  >
    {active ? '\u25CF ' : '\u25CB '}{item.label}
  </button>
);

export default () => {
  const [selected, setSelected] = useState('medium');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Slot Component Reference</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected}</strong>
      </p>
      <ReactSelection
        data={items}
        value={selected}
        onChange={setSelected}
        slots={{
          item: { component: SizeButton, props: { className: 'size-btn' } },
        }}
      />
    </div>
  );
};
`},49946:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

// Data with a \`sku\` field \u2014 use a function to extract it
const products = [
  { sku: 'A-001', title: 'Widget', price: 9.99 },
  { sku: 'B-002', title: 'Gadget', price: 19.99 },
  { sku: 'C-003', title: 'Doohickey', price: 29.99 },
  { sku: 'D-004', title: 'Thingamajig', price: 39.99 },
];

export default () => {
  const [selected, setSelected] = useState('A-001');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>valueExtractor (function)</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Using <code>valueExtractor=&#123;(item) =&gt; item.sku&#125;</code>
      </p>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected SKU: <strong>{selected || 'None'}</strong>
      </p>
      <ReactSelection
        data={products}
        valueExtractor={(item) => item.sku}
        value={selected}
        onChange={setSelected}
        slots={{
          item: ({ item, active, onClick }) => (
            <div
              onClick={onClick}
              style={{
                display: 'inline-block',
                padding: '10px 16px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#13c2c2' : '#d9d9d9',
                borderRadius: '8px',
                background: active ? '#13c2c2' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{item.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>
                {item.sku} \xB7 \${item.price}
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
};
`},7662:function(s,a){a.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

// Data without a \`value\` field \u2014 use \`id\` instead
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
];

export default () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>valueExtractor (string)</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Using <code>valueExtractor="id"</code> \u2014 data has no <code>value</code> field
      </p>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected ID: <strong>{selectedId}</strong>
      </p>
      <ReactSelection
        data={users}
        valueExtractor="id"
        value={selectedId}
        onChange={setSelectedId}
        slots={{
          item: ({ item, active, onClick }) => (
            <button
              onClick={onClick}
              style={{
                padding: '8px 20px',
                marginRight: '8px',
                marginBottom: '8px',
                border: '1px solid',
                borderColor: active ? '#eb2f96' : '#d9d9d9',
                borderRadius: '6px',
                background: active ? '#eb2f96' : '#fff',
                color: active ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ marginRight: '4px', opacity: 0.6 }}>#{item.id}</span>
              {item.name}
            </button>
          ),
        }}
      />
    </div>
  );
};
`}}]);
