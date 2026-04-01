"use strict";(self.webpackChunk_jswork_react_selection_docs=self.webpackChunk_jswork_react_selection_docs||[]).push([[904],{27432:function(i,t,e){e.r(t),e.d(t,{ErrorCode:function(){return j},ReactSelection:function(){return X},default:function(){return Q}});var a=e(75271),c=Object.defineProperty,d=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,s=(n,o,r)=>o in n?c(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,b=(n,o)=>{for(var r in o||(o={}))E.call(o,r)&&s(n,r,o[r]);if(d)for(var r of d(o))g.call(o,r)&&s(n,r,o[r]);return n},M=(n,o)=>c(n,"name",{value:o,configurable:!0});function v(n){return n&&typeof n=="object"&&"component"in n}M(v,"isSlotConfig");function I(n,o,r){return n?typeof n=="function"?a.createElement(n,r?b({key:r},o):o):v(n)?a.createElement(n.component,b(b({key:r},n.props),o)):r!==void 0?a.createElement(a.Fragment,{key:r},n):n:null}M(I,"renderSlot");function m(n,o,r){var p;return typeof r=="function"?r(n,o):(p=n[r])!=null?p:o}M(m,"getKey");function u({data:n,keyExtractor:o,slots:r}){let p=(0,a.useMemo)(()=>n.map((S,f)=>m(S,f,o)),[n,o]);return n.length===0?a.createElement(a.Fragment,null,I(r.empty,{data:n})):a.createElement(a.Fragment,null,n.map((S,f)=>I(r.item,{item:S,index:f,data:n},p[f])))}M(u,"ReactList");var x=null,R=e(3341),l=e.n(R),L=Object.defineProperty,Z=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,z=(n,o,r)=>o in n?L(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,O=(n,o)=>{for(var r in o||(o={}))N.call(o,r)&&z(n,r,o[r]);if(P)for(var r of P(o))K.call(o,r)&&z(n,r,o[r]);return n},G=(n,o)=>Z(n,Y(o)),D=(n,o)=>L(n,"name",{value:o,configurable:!0}),H=(n,o)=>{var r={};for(var p in n)N.call(n,p)&&o.indexOf(p)<0&&(r[p]=n[p]);if(n!=null&&P)for(var p of P(n))o.indexOf(p)<0&&K.call(n,p)&&(r[p]=n[p]);return r},V=D((n,o)=>{let r=n.indexOf(o);return r>-1?n.splice(r,1):n.push(o),n},"toggle"),j;(function(n){n.MAX_LIMIT_EXCEED="MAX_LIMIT_EXCEED"})(j||(j={}));var J={max:1e3,allowDeselect:!1,multiple:!1,keyExtractor:"value"};function U(n,o,r){return typeof n=="function"?a.createElement(n,r?O({key:r},o):o):n&&typeof n=="object"&&"component"in n?a.createElement(n.component,O(O({key:r},n.props),o)):r!==void 0?a.createElement(a.Fragment,{key:r},n):n}D(U,"renderSlot");var X=D(n=>{let o=O(O({},J),n),{allowDeselect:r=!1,max:p=1e3,value:S,onChange:f,onError:w,multiple:T=!1,slots:A}=o,q=H(o,["allowDeselect","max","value","onChange","onError","multiple","slots"]),[y,B]=(0,a.useState)(S||(T?[]:null));(0,a.useEffect)(()=>{let k=l()(S,y);S!==void 0&&!k&&(B(S),f==null||f(S))},[S,f,y]);let _=(0,a.useCallback)(k=>{let C=k.value,h=r&&C===y?null:C;B(h),y!==h&&(f==null||f(h))},[y,r,f]),ee=(0,a.useCallback)(k=>{let C=V([...y],k.value),h=p>0?C.slice(0,p):C;if(C.length>p){w==null||w({code:"MAX_LIMIT_EXCEED"});return}B(h),f==null||f(h)},[y,p,w,f]),W=T?ee:_,ne=(0,a.useCallback)(k=>{var C;let{item:h,index:F,data:ae}=k,$=T?y==null?void 0:y.includes(h.value):y===h.value,te=T&&(y==null?void 0:y.length)>=p&&!$,oe=D(()=>W(h),"onClick"),le=(C=h.value)!=null?C:F;return U(A.item,{item:h,index:F,data:ae,active:$,disabled:te,onClick:oe},le)},[y,T,p,W,A.item]);return a.createElement(u,G(O({},q),{slots:{item:ne,empty:A.empty}}))},"ReactSelection"),Q=X},76517:function(i,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},58966:function(i,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},99195:function(i,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},72612:function(i,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},34748:function(i,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},27890:function(i,t,e){e.r(t),e.d(t,{demos:function(){return c}});var a=e(75271),c={}},60358:function(i,t,e){var a;e.r(t),e.d(t,{demos:function(){return M}});var c=e(90228),d=e.n(c),E=e(87999),g=e.n(E),s=e(75271),b=e(27432),M={"docs-playground-demo-single-selection":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,47230))})),asset:{type:"BLOCK",id:"docs-playground-demo-single-selection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60462).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Basic single selection with controlled value"},context:{react:a||(a=e.t(s,2)),"@jswork/react-selection":b},renderOpts:{compile:function(){var v=g()(d()().mark(function m(){var u,x=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(631).then(e.bind(e,10631));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-allow-deselect":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,3922))})),asset:{type:"BLOCK",id:"docs-playground-demo-allow-deselect",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(93809).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Single selection where you can deselect the active item"},context:{react:a||(a=e.t(s,2)),"@jswork/react-selection":b},renderOpts:{compile:function(){var v=g()(d()().mark(function m(){var u,x=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(631).then(e.bind(e,10631));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-multiple-selection":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,72237))})),asset:{type:"BLOCK",id:"docs-playground-demo-multiple-selection",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(38398).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Select multiple items with checkbox-style UI"},context:{react:a||(a=e.t(s,2)),"@jswork/react-selection":b},renderOpts:{compile:function(){var v=g()(d()().mark(function m(){var u,x=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(631).then(e.bind(e,10631));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-max-limit":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,56539))})),asset:{type:"BLOCK",id:"docs-playground-demo-max-limit",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(40350).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Multiple selection with a maximum limit of 3"},context:{react:a||(a=e.t(s,2)),"@jswork/react-selection":b},renderOpts:{compile:function(){var v=g()(d()().mark(function m(){var u,x=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(631).then(e.bind(e,10631));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-empty-state":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,92540))})),asset:{type:"BLOCK",id:"docs-playground-demo-empty-state",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(88229).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Handle empty data array with a custom empty slot"},context:{react:a||(a=e.t(s,2)),"@jswork/react-selection":b},renderOpts:{compile:function(){var v=g()(d()().mark(function m(){var u,x=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(631).then(e.bind(e,10631));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-slot-component":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,26287))})),asset:{type:"BLOCK",id:"docs-playground-demo-slot-component",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70655).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Using a component reference with default props"},context:{react:a||(a=e.t(s,2)),"@jswork/react-selection":b},renderOpts:{compile:function(){var v=g()(d()().mark(function m(){var u,x=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(631).then(e.bind(e,10631));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}},"docs-playground-demo-custom-key":{component:s.memo(s.lazy(function(){return e.e(433).then(e.bind(e,47892))})),asset:{type:"BLOCK",id:"docs-playground-demo-custom-key",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96520).Z},react:{type:"NPM",value:"18.3.1"},"@jswork/react-selection":{type:"NPM",value:"2.0.0"}},entry:"index.tsx",title:"Custom key extractor using string or function"},context:{react:a||(a=e.t(s,2)),"@jswork/react-selection":b},renderOpts:{compile:function(){var v=g()(d()().mark(function m(){var u,x=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(631).then(e.bind(e,10631));case 2:return l.abrupt("return",(u=l.sent).default.apply(u,x));case 3:case"end":return l.stop()}},m)}));function I(){return v.apply(this,arguments)}return I}()}}}},57069:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"A headless, type-safe selection component for React with slot-based architecture.",paraId:0,tocIndex:0},{value:"You need single or multiple selection without being tied to a specific UI framework",paraId:1,tocIndex:1},{value:"You want full control over the visual presentation of selection items",paraId:1,tocIndex:1},{value:"You need type-safe selection with TypeScript generics",paraId:1,tocIndex:1},{value:"You need configurable max selection limits with error handling",paraId:1,tocIndex:1},{value:"Export",paraId:2,tocIndex:2},{value:"Type",paraId:2,tocIndex:2},{value:"Description",paraId:2,tocIndex:2},{value:"ReactSelection",paraId:2,tocIndex:2},{value:"Component",paraId:2,tocIndex:2},{value:"The main selection component",paraId:2,tocIndex:2},{value:"ReactSelectionProps",paraId:2,tocIndex:2},{value:"Interface",paraId:2,tocIndex:2},{value:"Props type for the component",paraId:2,tocIndex:2},{value:"SelectionItemSlotProps",paraId:2,tocIndex:2},{value:"Interface",paraId:2,tocIndex:2},{value:"Props passed to the item slot",paraId:2,tocIndex:2},{value:"Slot",paraId:2,tocIndex:2},{value:"Type",paraId:2,tocIndex:2},{value:"Slot type (component, function, or object)",paraId:2,tocIndex:2},{value:"ErrorCode",paraId:2,tocIndex:2},{value:"Enum",paraId:2,tocIndex:2},{value:"Error codes for selection errors",paraId:2,tocIndex:2},{value:"Extends ",paraId:3,tocIndex:4},{value:"Omit<ReactListProps<T>, 'slots'>",paraId:3,tocIndex:4},{value:" plus:",paraId:3,tocIndex:4},{value:"Property",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"data",paraId:4,tocIndex:4},{value:"Array of data items (each must have ",paraId:4,tocIndex:4},{value:"value",paraId:4,tocIndex:4},{value:" field)",paraId:4,tocIndex:4},{value:"T[]",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"keyExtractor",paraId:4,tocIndex:4},{value:"Custom key for list items",paraId:4,tocIndex:4},{value:"keyof T | ((item: T, index: number) => string | number)",paraId:4,tocIndex:4},{value:"item.value",paraId:4,tocIndex:4},{value:"allowDeselect",paraId:4,tocIndex:4},{value:"Allow deselecting in single selection mode",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"max",paraId:4,tocIndex:4},{value:"Maximum selections allowed (multiple mode)",paraId:4,tocIndex:4},{value:"number",paraId:4,tocIndex:4},{value:"1000",paraId:4,tocIndex:4},{value:"multiple",paraId:4,tocIndex:4},{value:"Enable multiple selection",paraId:4,tocIndex:4},{value:"boolean",paraId:4,tocIndex:4},{value:"false",paraId:4,tocIndex:4},{value:"value",paraId:4,tocIndex:4},{value:"Current selected value",paraId:4,tocIndex:4},{value:"any",paraId:4,tocIndex:4},{value:"null",paraId:4,tocIndex:4},{value:" (or ",paraId:4,tocIndex:4},{value:"[]",paraId:4,tocIndex:4},{value:" when multiple)",paraId:4,tocIndex:4},{value:"onChange",paraId:4,tocIndex:4},{value:"Callback when selection changes",paraId:4,tocIndex:4},{value:"(value: any) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"onError",paraId:4,tocIndex:4},{value:"Callback when an error occurs",paraId:4,tocIndex:4},{value:"(error: { code: ErrorCode }) => void",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"slots",paraId:4,tocIndex:4},{value:"Slot configuration (see below)",paraId:4,tocIndex:4},{value:"SelectionSlots<T>",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Props received by the ",paraId:5,tocIndex:5},{value:"slots.item",paraId:5,tocIndex:5},{value:" slot:",paraId:5,tocIndex:5},{value:"Property",paraId:6,tocIndex:5},{value:"Description",paraId:6,tocIndex:5},{value:"Type",paraId:6,tocIndex:5},{value:"item",paraId:6,tocIndex:5},{value:"The current data item",paraId:6,tocIndex:5},{value:"T",paraId:6,tocIndex:5},{value:"index",paraId:6,tocIndex:5},{value:"Index in the data array",paraId:6,tocIndex:5},{value:"number",paraId:6,tocIndex:5},{value:"data",paraId:6,tocIndex:5},{value:"The full data array",paraId:6,tocIndex:5},{value:"T[]",paraId:6,tocIndex:5},{value:"active",paraId:6,tocIndex:5},{value:"Whether this item is currently selected",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"disabled",paraId:6,tocIndex:5},{value:"Whether this item is disabled (max reached)",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"onClick",paraId:6,tocIndex:5},{value:"Handler to select/deselect this item",paraId:6,tocIndex:5},{value:"() => void",paraId:6,tocIndex:5},{value:"Value",paraId:7,tocIndex:6},{value:"Description",paraId:7,tocIndex:6},{value:"MAX_LIMIT_EXCEED",paraId:7,tocIndex:6},{value:"Selection count has exceeded the configured ",paraId:7,tocIndex:6},{value:"max",paraId:7,tocIndex:6},{value:" value",paraId:7,tocIndex:6},{value:`interface SelectionSlots<T> {
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
`,paraId:11,tocIndex:9},{value:`<ReactSelection
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
`,paraId:12,tocIndex:10},{value:`<ReactSelection
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
`,paraId:13,tocIndex:11}]},50249:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"ReactSelection is built on a few core principles:",paraId:0,tocIndex:1},{value:"ReactSelection renders ",paraId:1,tocIndex:2},{value:"no wrapper DOM element",paraId:1,tocIndex:2},{value:" \u2014 it directly returns a ",paraId:1,tocIndex:2},{value:"ReactList",paraId:1,tocIndex:2},{value:". There is no CSS, no className, no extra DOM nodes. You have full control over the rendered output through slots.",paraId:1,tocIndex:2},{value:"ReactSelection wraps ",paraId:2,tocIndex:3},{value:"@jswork/react-list",paraId:2,tocIndex:3},{value:", adding selection behavior to the list's slot system. It does not extend or subclass \u2014 it composes:",paraId:2,tocIndex:3},{value:`ReactSelection \u2192 ReactList \u2192 Your Slots
`,paraId:3,tocIndex:3},{value:"The user's ",paraId:4,tocIndex:4},{value:"slots.item",paraId:4,tocIndex:4},{value:" is wrapped internally. Selection state (",paraId:4,tocIndex:4},{value:"active",paraId:4,tocIndex:4},{value:", ",paraId:4,tocIndex:4},{value:"disabled",paraId:4,tocIndex:4},{value:", ",paraId:4,tocIndex:4},{value:"onClick",paraId:4,tocIndex:4},{value:") is injected before rendering:",paraId:4,tocIndex:4},{value:"ReactSelection receives your ",paraId:5,tocIndex:4},{value:"slots.item",paraId:5,tocIndex:4},{value:"For each data item, it computes selection state",paraId:5,tocIndex:4},{value:"It wraps your slot with the computed props (",paraId:5,tocIndex:4},{value:"active",paraId:5,tocIndex:4},{value:", ",paraId:5,tocIndex:4},{value:"disabled",paraId:5,tocIndex:4},{value:", ",paraId:5,tocIndex:4},{value:"onClick",paraId:5,tocIndex:4},{value:")",paraId:5,tocIndex:4},{value:"The enhanced slot is passed to ",paraId:5,tocIndex:4},{value:"ReactList",paraId:5,tocIndex:4},{value:`User clicks item
  \u2192 onClick handler fires
    \u2192 If item is already selected and allowDeselect is true \u2192 deselect (value = null)
    \u2192 If item is not selected \u2192 select (value = item.value)
  \u2192 onChange callback fires with new value
`,paraId:6,tocIndex:6},{value:`User clicks item
  \u2192 onClick handler fires
    \u2192 If item is already selected \u2192 remove from array
    \u2192 If item is not selected:
      \u2192 If current count >= max \u2192 fire onError (MAX_LIMIT_EXCEED)
      \u2192 Otherwise \u2192 add to array
  \u2192 onChange callback fires with new array
`,paraId:7,tocIndex:7},{value:"Memoized handlers",paraId:8,tocIndex:8},{value:" \u2014 Selection handlers are memoized with ",paraId:8,tocIndex:8},{value:"useCallback",paraId:8,tocIndex:8},{value:"Deep equality",paraId:8,tocIndex:8},{value:" \u2014 State comparison uses ",paraId:8,tocIndex:8},{value:"fast-deep-equal",paraId:8,tocIndex:8},{value:" for accurate change detection",paraId:8,tocIndex:8},{value:"Key handling",paraId:8,tocIndex:8},{value:" \u2014 Keys default to ",paraId:8,tocIndex:8},{value:"item.value",paraId:8,tocIndex:8},{value:", falling back to ",paraId:8,tocIndex:8},{value:"index",paraId:8,tocIndex:8},{value:" for React's reconciliation",paraId:8,tocIndex:8},{value:`// The generic constraint ensures data items have a value field
interface ReactSelectionProps<T extends { value: any }> {
  data: T[];
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
`,paraId:9,tocIndex:9},{value:"Package",paraId:10,tocIndex:10},{value:"Version",paraId:10,tocIndex:10},{value:"Purpose",paraId:10,tocIndex:10},{value:"react",paraId:10,tocIndex:10},{value:"peer",paraId:10,tocIndex:10},{value:"UI framework",paraId:10,tocIndex:10},{value:"fast-deep-equal",paraId:10,tocIndex:10},{value:"peer",paraId:10,tocIndex:10},{value:"Deep equality comparison for state",paraId:10,tocIndex:10},{value:"@jswork/react-list",paraId:10,tocIndex:10},{value:"^2.0.0",paraId:10,tocIndex:10},{value:"Base list component with slot system",paraId:10,tocIndex:10},{value:`react-selection/
\u251C\u2500\u2500 packages/
\u2502   \u251C\u2500\u2500 lib/
\u2502   \u2502   \u2514\u2500\u2500 src/
\u2502   \u2502       \u2514\u2500\u2500 index.tsx       # Main component
\u2502   \u2514\u2500\u2500 example/
\u2502       \u2514\u2500\u2500 src/
\u2502           \u2514\u2500\u2500 App.tsx         # Usage examples
\u251C\u2500\u2500 llms.txt                    # LLM context file
\u2514\u2500\u2500 README.md
`,paraId:11,tocIndex:11}]},52696:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"ReactSelection extends ",paraId:0,tocIndex:1},{value:"Omit<ReactListProps<T>, 'slots'>",paraId:0,tocIndex:1},{value:" with the following selection-specific props:",paraId:0,tocIndex:1},{value:"Property",paraId:1,tocIndex:2},{value:"Description",paraId:1,tocIndex:2},{value:"Type",paraId:1,tocIndex:2},{value:"Default",paraId:1,tocIndex:2},{value:"allowDeselect",paraId:1,tocIndex:2},{value:"Allow deselecting in single selection mode",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"max",paraId:1,tocIndex:2},{value:"Maximum selections allowed (multiple mode)",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"1000",paraId:1,tocIndex:2},{value:"multiple",paraId:1,tocIndex:2},{value:"Enable multiple selection",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"Current selected value",paraId:1,tocIndex:2},{value:"any",paraId:1,tocIndex:2},{value:"null",paraId:1,tocIndex:2},{value:" (or ",paraId:1,tocIndex:2},{value:"[]",paraId:1,tocIndex:2},{value:" when multiple)",paraId:1,tocIndex:2},{value:"onChange",paraId:1,tocIndex:2},{value:"Callback when selection changes",paraId:1,tocIndex:2},{value:"(value: any) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onError",paraId:1,tocIndex:2},{value:"Callback when an error occurs (e.g., max exceeded)",paraId:1,tocIndex:2},{value:"(error: { code: ErrorCode }) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"slots",paraId:1,tocIndex:2},{value:"Slot configuration for rendering",paraId:1,tocIndex:2},{value:"SelectionSlots<T>",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"Property",paraId:2,tocIndex:3},{value:"Description",paraId:2,tocIndex:3},{value:"Type",paraId:2,tocIndex:3},{value:"Default",paraId:2,tocIndex:3},{value:"data",paraId:2,tocIndex:3},{value:"Array of data items (must have ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:" field)",paraId:2,tocIndex:3},{value:"T[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"keyExtractor",paraId:2,tocIndex:3},{value:"Custom key for list items",paraId:2,tocIndex:3},{value:"keyof T | ((item: T, index: number) => string | number)",paraId:2,tocIndex:3},{value:"item.value",paraId:2,tocIndex:3},{value:"The ",paraId:3,tocIndex:4},{value:"slots",paraId:3,tocIndex:4},{value:" prop controls how items are rendered. It accepts the following slot entries:",paraId:3,tocIndex:4},{value:"slots.item",paraId:4},{value:"The main slot for rendering each selection item. Receives ",paraId:5,tocIndex:5},{value:"SelectionItemSlotProps",paraId:5,tocIndex:5},{value:":",paraId:5,tocIndex:5},{value:"Property",paraId:6,tocIndex:5},{value:"Description",paraId:6,tocIndex:5},{value:"Type",paraId:6,tocIndex:5},{value:"item",paraId:6,tocIndex:5},{value:"The current data item",paraId:6,tocIndex:5},{value:"T",paraId:6,tocIndex:5},{value:"index",paraId:6,tocIndex:5},{value:"Index in the data array",paraId:6,tocIndex:5},{value:"number",paraId:6,tocIndex:5},{value:"data",paraId:6,tocIndex:5},{value:"The full data array",paraId:6,tocIndex:5},{value:"T[]",paraId:6,tocIndex:5},{value:"active",paraId:6,tocIndex:5},{value:"Whether this item is currently selected",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"disabled",paraId:6,tocIndex:5},{value:"Whether this item is disabled (max reached)",paraId:6,tocIndex:5},{value:"boolean",paraId:6,tocIndex:5},{value:"onClick",paraId:6,tocIndex:5},{value:"Handler to select/deselect this item",paraId:6,tocIndex:5},{value:"() => void",paraId:6,tocIndex:5},{value:"slots.empty",paraId:4},{value:"Rendered when the data array is empty. Receives ",paraId:7,tocIndex:6},{value:"{ data: T[] }",paraId:7,tocIndex:6},{value:".",paraId:7,tocIndex:6},{value:"A slot can be provided in three forms:",paraId:8,tocIndex:7},{value:"Pass a React component directly:",paraId:9,tocIndex:8},{value:`const ItemSlot = ({ item, active, onClick }: SelectionItemSlotProps<Fruit>) => (
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
`,paraId:10,tocIndex:8},{value:"Use an inline render function:",paraId:11,tocIndex:9},{value:`<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: ({ item, active, onClick }) => (
      <button onClick={onClick}>{item.label}</button>
    ),
  }}
/>
`,paraId:12,tocIndex:9},{value:"Pass a component with additional props merged in:",paraId:13,tocIndex:10},{value:`<ReactSelection
  data={items}
  value={selected}
  onChange={setSelected}
  slots={{
    item: { component: ItemSlot, props: { className: 'btn-sm' } },
  }}
/>
`,paraId:14,tocIndex:10},{value:"The ",paraId:15,tocIndex:11},{value:"onError",paraId:15,tocIndex:11},{value:" callback receives an object with a ",paraId:15,tocIndex:11},{value:"code",paraId:15,tocIndex:11},{value:" property:",paraId:15,tocIndex:11},{value:`enum ErrorCode {
  MAX_LIMIT_EXCEED = 'MAX_LIMIT_EXCEED',
}
`,paraId:16,tocIndex:11},{value:`<ReactSelection
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
`,paraId:17,tocIndex:12},{value:"By default, keys are derived from ",paraId:18,tocIndex:13},{value:"item.value",paraId:18,tocIndex:13},{value:". You can customize this with ",paraId:18,tocIndex:13},{value:"keyExtractor",paraId:18,tocIndex:13},{value:":",paraId:18,tocIndex:13},{value:`const items = [
  { id: 1, value: 'apple', label: 'Apple' },
  { id: 2, value: 'banana', label: 'Banana' },
];

<ReactSelection
  data={items}
  keyExtractor="id"
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>;
`,paraId:19,tocIndex:14},{value:`<ReactSelection
  data={items}
  keyExtractor={(item, index) => \`fruit-\${item.value}\`}
  value={selected}
  onChange={setSelected}
  slots={{ item: ItemSlot }}
/>
`,paraId:20,tocIndex:15}]},33154:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"React >= 16.8 (hooks support)",paraId:0,tocIndex:1},{value:"fast-deep-equal",paraId:0,tocIndex:1},{value:" (peer dependency)",paraId:0,tocIndex:1},{value:`# npm
npm install @jswork/react-selection

# yarn
yarn add @jswork/react-selection

# pnpm
pnpm add @jswork/react-selection
`,paraId:1,tocIndex:2},{value:"All data items must have a ",paraId:2,tocIndex:3},{value:"value",paraId:2,tocIndex:3},{value:" property. This is required for the selection logic to work:",paraId:2,tocIndex:3},{value:`interface Fruit {
  value: string; // Required \u2014 used for selection identification
  label: string; // Any additional fields you need
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
`,paraId:11,tocIndex:6},{value:"Configuration",paraId:12,tocIndex:7},{value:" \u2014 Explore all available props and slot types",paraId:13,tocIndex:7},{value:"Playground",paraId:14,tocIndex:7},{value:" \u2014 Interactive examples",paraId:13,tocIndex:7},{value:"Architecture",paraId:15,tocIndex:7},{value:" \u2014 Learn how it works internally",paraId:13,tocIndex:7}]},95523:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Welcome to the ReactSelection guide. This section covers everything you need to know about using the headless selection component.",paraId:0,tocIndex:0},{value:"Getting Started",paraId:1,tocIndex:1},{value:" - Installation, prerequisites, and your first selection",paraId:2,tocIndex:1},{value:"Configuration",paraId:3,tocIndex:1},{value:" - All props, types, and slot configuration",paraId:2,tocIndex:1},{value:"Architecture",paraId:4,tocIndex:1},{value:" - Design decisions, internals, and how it works",paraId:2,tocIndex:1},{value:"ReactSelection is a ",paraId:5,tocIndex:3},{value:"headless",paraId:5,tocIndex:3},{value:" component \u2014 it renders no DOM wrapper, no CSS, and no className. You provide all styling through the slot system, giving you complete control over presentation.",paraId:5,tocIndex:3},{value:"The slot system allows you to customize how each item is rendered. A slot can be:",paraId:6,tocIndex:4},{value:"Component",paraId:7,tocIndex:4},{value:" \u2014 ",paraId:7,tocIndex:4},{value:"<ReactSelection slots={{ item: MyComponent }} />",paraId:7,tocIndex:4},{value:"Render function",paraId:7,tocIndex:4},{value:" \u2014 ",paraId:7,tocIndex:4},{value:"slots={{ item: ({ item }) => <div>{item.label}</div> }}",paraId:7,tocIndex:4},{value:"Component with props",paraId:7,tocIndex:4},{value:" \u2014 ",paraId:7,tocIndex:4},{value:"slots={{ item: { component: MyComp, props: { className: 'item' } } }}",paraId:7,tocIndex:4},{value:"ReactSelection uses TypeScript generics ",paraId:8,tocIndex:5},{value:"<T extends { value: any }>",paraId:8,tocIndex:5},{value:" to ensure your data items always have a ",paraId:8,tocIndex:5},{value:"value",paraId:8,tocIndex:5},{value:" property, and all slot props are fully typed.",paraId:8,tocIndex:5},{value:"GitHub Repository",paraId:9,tocIndex:6},{value:"npm Package",paraId:9,tocIndex:6}]},39972:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:`# npm
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
`,paraId:1,tocIndex:1},{value:"Getting Started",paraId:2,tocIndex:2},{value:" - Installation and basic usage",paraId:3,tocIndex:2},{value:"API Reference",paraId:4,tocIndex:2},{value:" - Full component API documentation",paraId:3,tocIndex:2},{value:"Playground",paraId:5,tocIndex:2},{value:" - Interactive examples and demos",paraId:3,tocIndex:2},{value:"Architecture",paraId:6,tocIndex:2},{value:" - Design decisions and internals",paraId:3,tocIndex:2}]},15895:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"Interactive examples demonstrating all ReactSelection features. Each demo is fully runnable and editable.",paraId:0,tocIndex:0}]},3341:function(i){i.exports=function t(e,a){if(e===a)return!0;if(e&&a&&typeof e=="object"&&typeof a=="object"){if(e.constructor!==a.constructor)return!1;var c,d,E;if(Array.isArray(e)){if(c=e.length,c!=a.length)return!1;for(d=c;d--!==0;)if(!t(e[d],a[d]))return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if(E=Object.keys(e),c=E.length,c!==Object.keys(a).length)return!1;for(d=c;d--!==0;)if(!Object.prototype.hasOwnProperty.call(a,E[d]))return!1;for(d=c;d--!==0;){var g=E[d];if(!t(e[g],a[g]))return!1}return!0}return e!==e&&a!==a}},93809:function(i,t){t.Z=`import React, { useState } from 'react';
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
`},96520:function(i,t){t.Z=`import React, { useState } from 'react';
import { ReactSelection } from '@jswork/react-selection';

const items = [
  { id: 1, value: 'tokyo', label: 'Tokyo' },
  { id: 2, value: 'paris', label: 'Paris' },
  { id: 3, value: 'london', label: 'London' },
  { id: 4, value: 'nyc', label: 'New York' },
];

export default () => {
  const [selected, setSelected] = useState('tokyo');

  return (
    <div>
      <h3 style={{ marginBottom: '12px' }}>Custom Key Extractor</h3>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Using <code>keyExtractor="id"</code> instead of default <code>item.value</code>
      </p>
      <p style={{ marginBottom: '8px', color: '#666' }}>
        Selected: <strong>{selected}</strong>
      </p>
      <ReactSelection
        data={items}
        keyExtractor="id"
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
              {item.label}
            </button>
          ),
        }}
      />
    </div>
  );
};
`},88229:function(i,t){t.Z=`import React, { useState } from 'react';
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
`},40350:function(i,t){t.Z=`import React, { useState } from 'react';
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
`},38398:function(i,t){t.Z=`import React, { useState } from 'react';
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
`},60462:function(i,t){t.Z=`import React, { useState } from 'react';
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
`},70655:function(i,t){t.Z=`import React, { useState } from 'react';
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
`}}]);
