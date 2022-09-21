"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[917],{9703:function(e,r,t){t.r(r),t.d(r,{assets:function(){return w},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return v}});var a=t(7462),i=t(3366),o=t(7294),s=t(3905),n=t(9521),l=function(){return{}},b=function(e){var r=e.columns,t=e.data,a=e.getHeaderProps,i=void 0===a?l:a,s=e.getColumnProps,b=void 0===s?l:s,u=(0,n.useTable)({columns:r,data:t},n.useSortBy),c=u.getTableProps,d=u.getTableBodyProps,m=u.headerGroups,p=u.rows,f=u.prepareRow;return o.createElement("table",c(),o.createElement("thead",null,m.map((function(e){return o.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return o.createElement("th",e.getHeaderProps([{className:e.className},i(e),b(e),e.getSortByToggleProps()]),e.render("Header"),o.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""))})))}))),o.createElement("tbody",d(),p.map((function(e,r){return f(e),o.createElement("tr",e.getRowProps(),e.cells.map((function(e){return o.createElement("td",e.getCellProps([{className:e.column.className,style:e.column.style},b(e.column)]),e.render("Cell"))})))}))))},u=[{title:"Browser Library",description:"Web testing library that uses popular Selenium tool internally.",isUI:"\u2705",isWeb:"\u2705",url:"https://github.com/MarketSquare/robotframework-browser"},{title:"SeleniumLibrary",description:"A modern web testing library powered by Playwright. Aiming for speed, reliability and visibility.",isUI:"\u2705",isWeb:"\u2705",url:"https://github.com/robotframework/SeleniumLibrary/"},{title:"RPA Framework",description:"Collection of open-source libraries and tools for Robotic Process Automation (RPA), designed to be used both with Robot Framework and Python.",isUI:"\u2705",isWeb:"\u2705",isDesktop:"\u2705",isAPI:"\u2705",isData:"\u2705",url:"https://github.com/robocorp/rpaframework"},{title:"Requests Library",description:"A Robot Framework library aimed to provide HTTP api testing functionalities by wrapping the well known Python Requests Library",isAPI:"\u2705",url:"https://github.com/MarketSquare/robotframework-requests/"},{title:"Appium Library",description:"Android and iOS testing. Uses Appium internally.",isMobile:"\u2705",isUI:"\u2705",url:"https://github.com/serhatbolsu/robotframework-appiumlibrary"},{title:"Database Library",description:"Python based library for database testing.",isData:"\u2705",url:"https://github.com/franz-see/Robotframework-Database-Library"}],c=[{Header:"Name",accessor:"title",className:"data-table left",Cell:function(e){var r=e.cell.value,t=e.row.original;return o.createElement("div",null,o.createElement("a",{href:""+t.url,target:"blank",rel:"noreferrer noopener"},r),o.createElement("div",null,""+t.description))}},{Header:"UI",accessor:"isUI",className:"data-table"},{Header:"API",accessor:"isAPI",className:"data-table"},{Header:"Desktop",accessor:"isDesktop",className:"data-table"},{Header:"Web",accessor:"isWeb",className:"data-table"},{Header:"Mobile",accessor:"isMobile",className:"data-table"},{Header:"Data",accessor:"isData",className:"data-table"}],d=["components"],m={sidebar_position:0,sidebar_label:"Overview",title:"Library Overview"},p=void 0,f={unversionedId:"different_libraries/overview",id:"different_libraries/overview",title:"Library Overview",description:"<DataTable",source:"@site/docs/different_libraries/overview.mdx",sourceDirName:"different_libraries",slug:"/different_libraries/overview",permalink:"/robotframeworkguides/different_libraries/overview",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/different_libraries/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Overview",title:"Library Overview"},sidebar:"tutorialSidebar",previous:{title:"How to find the right library",permalink:"/robotframeworkguides/different_libraries/how_to_find_library"},next:{title:"Libraries for UI Tests",permalink:"/robotframeworkguides/different_libraries/ui"}},w={},v=[],y={toc:v};function g(e){var r=e.components,t=(0,i.Z)(e,d);return(0,s.kt)("wrapper",(0,a.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)(b,{columns:c,data:u,mdxType:"DataTable"}))}g.isMDXComponent=!0}}]);