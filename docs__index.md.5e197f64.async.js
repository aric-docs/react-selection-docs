"use strict";(self.webpackChunk_jswork_react_selection_docs=self.webpackChunk_jswork_react_selection_docs||[]).push([[935],{70652:function(l,t,e){e.r(t);var o=e(93629),i=e(20555),u=e(95869),d=e(26169),c=e(64353),a=e(75353),r=e(19282),x=e(32369),p=e(37647),s=e(37585),m=e(73270),h=e(75271),n=e(39972),_=e(52676);function v(){return(0,_.jsx)(s.dY,{children:(0,_.jsx)(h.Suspense,{fallback:(0,_.jsx)(m.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"installation",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Installation"]}),(0,_.jsx)(a.Z,{lang:"bash",children:n.texts[0].value}),(0,_.jsxs)("h2",{id:"quick-start",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#quick-start",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Quick Start"]}),(0,_.jsx)(a.Z,{lang:"tsx",children:n.texts[1].value}),(0,_.jsxs)("h2",{id:"documentation",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#documentation",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Documentation"]}),(0,_.jsxs)("ul",{children:[(0,_.jsxs)("li",{children:[(0,_.jsx)(s.rU,{to:"/guide/getting-started",children:n.texts[2].value}),n.texts[3].value]}),(0,_.jsxs)("li",{children:[(0,_.jsx)(s.rU,{to:"/components",children:n.texts[4].value}),n.texts[5].value]}),(0,_.jsxs)("li",{children:[(0,_.jsx)(s.rU,{to:"/playground",children:n.texts[6].value}),n.texts[7].value]}),(0,_.jsxs)("li",{children:[(0,_.jsx)(s.rU,{to:"/guide/architecture",children:n.texts[8].value}),n.texts[9].value]})]})]})})})})}t.default=v},37647:function(l,t,e){var o=e(52676);function i(d){var c=d.title,a=d.className,r=d.children;return _jsxs("article",{className:"p-6 bg-white rounded-xl shadow-md border ".concat(a||""),children:[_jsx("h3",{className:"text-lg font-bold mb-3",children:c}),r]})}var u=null},39972:function(l,t,e){e.r(t),e.d(t,{texts:function(){return o}});const o=[{value:`# npm
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
`,paraId:1,tocIndex:1},{value:"Getting Started",paraId:2,tocIndex:2},{value:" - Installation and basic usage",paraId:3,tocIndex:2},{value:"API Reference",paraId:4,tocIndex:2},{value:" - Full component API documentation",paraId:3,tocIndex:2},{value:"Playground",paraId:5,tocIndex:2},{value:" - Interactive examples and demos",paraId:3,tocIndex:2},{value:"Architecture",paraId:6,tocIndex:2},{value:" - Design decisions and internals",paraId:3,tocIndex:2}]}}]);
