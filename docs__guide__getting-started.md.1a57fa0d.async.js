"use strict";(self.webpackChunk_jswork_react_selection_docs=self.webpackChunk_jswork_react_selection_docs||[]).push([[655],{46882:function(o,a,_){_.r(a);var d=_(93629),r=_(20555),u=_(95869),s=_(26169),c=_(64353),t=_(75353),i=_(19282),v=_(32369),m=_(37647),l=_(37585),x=_(73270),p=_(75271),n=_(33154),e=_(52676);function h(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(p.Suspense,{fallback:(0,e.jsx)(x.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"getting-started",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#getting-started",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Getting Started"]}),(0,e.jsxs)("h2",{id:"prerequisites",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisites",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Prerequisites"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n.texts[0].value}),(0,e.jsxs)("li",{children:[(0,e.jsx)("code",{children:n.texts[1].value}),n.texts[2].value]})]}),(0,e.jsxs)("h2",{id:"installation",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,e.jsx)(t.Z,{lang:"bash",children:n.texts[3].value}),(0,e.jsxs)("h2",{id:"data-requirements",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#data-requirements",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Data Requirements"]}),(0,e.jsxs)("p",{children:[n.texts[4].value,(0,e.jsx)("code",{children:n.texts[5].value}),n.texts[6].value]}),(0,e.jsx)(t.Z,{lang:"typescript",children:n.texts[7].value}),(0,e.jsx)("p",{children:n.texts[8].value}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[9].value}),(0,e.jsxs)("h2",{id:"basic-single-selection",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-single-selection",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Basic Single Selection"]}),(0,e.jsx)("p",{children:n.texts[10].value}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[11].value}),(0,e.jsxs)("h2",{id:"multiple-selection",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#multiple-selection",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Multiple Selection"]}),(0,e.jsxs)("p",{children:[n.texts[12].value,(0,e.jsx)("code",{children:n.texts[13].value}),n.texts[14].value]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[15].value}),(0,e.jsxs)("h2",{id:"controlled-component",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#controlled-component",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Controlled Component"]}),(0,e.jsxs)("p",{children:[n.texts[16].value,(0,e.jsx)("strong",{children:n.texts[17].value}),n.texts[18].value,(0,e.jsx)("code",{children:n.texts[19].value}),n.texts[20].value,(0,e.jsx)("code",{children:n.texts[21].value}),n.texts[22].value]}),(0,e.jsx)(t.Z,{lang:"tsx",children:n.texts[23].value}),(0,e.jsxs)("h2",{id:"next-steps",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#next-steps",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Next Steps"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)(l.rU,{to:"/guide/configuration",children:n.texts[24].value}),n.texts[25].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)(l.rU,{to:"/playground",children:n.texts[26].value}),n.texts[27].value]}),(0,e.jsxs)("li",{children:[(0,e.jsx)(l.rU,{to:"/guide/architecture",children:n.texts[28].value}),n.texts[29].value]})]})]})})})})}a.default=h},37647:function(o,a,_){var d=_(52676);function r(s){var c=s.title,t=s.className,i=s.children;return _jsxs("article",{className:"p-6 bg-white rounded-xl shadow-md border ".concat(t||""),children:[_jsx("h3",{className:"text-lg font-bold mb-3",children:c}),i]})}var u=null},33154:function(o,a,_){_.r(a),_.d(a,{texts:function(){return d}});const d=[{value:"React >= 16.8 (hooks support)",paraId:0,tocIndex:1},{value:"fast-deep-equal",paraId:0,tocIndex:1},{value:" (peer dependency)",paraId:0,tocIndex:1},{value:`# npm
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
`,paraId:11,tocIndex:6},{value:"Configuration",paraId:12,tocIndex:7},{value:" \u2014 Explore all available props and slot types",paraId:13,tocIndex:7},{value:"Playground",paraId:14,tocIndex:7},{value:" \u2014 Interactive examples",paraId:13,tocIndex:7},{value:"Architecture",paraId:15,tocIndex:7},{value:" \u2014 Learn how it works internally",paraId:13,tocIndex:7}]}}]);
