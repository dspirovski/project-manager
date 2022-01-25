(this["webpackJsonptime-tracking-application"]=this["webpackJsonptime-tracking-application"]||[]).push([[0],{28:function(t,e,c){},29:function(t,e,c){},30:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(1),s=c.n(n),a=c(20),i=c.n(a),o=(c(28),c(29),c(8)),j=c(2),l=c(10),d=c(7),u=c(12),h=c(13),p=c(16),b=c(15),m=(c(30),function(t){Object(p.a)(c,t);var e=Object(b.a)(c);function c(t){var r;return Object(u.a)(this,c),(r=e.call(this,t)).generateId=function(){return Math.floor(Math.random()*Math.floor(Math.random()*Date.now()))},r.inputChange=function(t){t.preventDefault(),r.setState({currentProject:Object(d.a)(Object(d.a)({},r.state.currentProject),{},Object(l.a)({},t.target.name,t.target.value))})},r.addProject=function(t){if(r.state.currentProject.name&&""!==r.state.currentProject.description){t.preventDefault();var e=JSON.parse(localStorage.getItem("projects"));e.push({id:r.generateId(),name:r.state.currentProject.name,description:r.state.currentProject.description,hours:[]}),localStorage.setItem("projects",JSON.stringify(e)),r.setState({projects:e,currentProject:{name:"",description:""}})}else alert("Please fill up the form bellow.")},r.updateProject=function(t){r.setState({isEditing:!0,currentProject:{id:t.id,name:t.name,description:t.description}})},r.saveProject=function(){var t=JSON.parse(localStorage.getItem("projects")),e=t.findIndex((function(t){return t.id===r.state.currentProject.id}));-1!==e&&(t[e]=Object(d.a)(Object(d.a)({},t[e]),{},{name:r.state.currentProject.name,description:r.state.currentProject.description}),localStorage.setItem("projects",JSON.stringify(t)),r.setState({projects:t})),r.setState({isEditing:!1})},r.deleteProject=function(t){var e=JSON.parse(localStorage.getItem("projects")),c=e.findIndex((function(e){return e.id===t}));-1!==c&&(e.splice(c,1),localStorage.setItem("projects",JSON.stringify(e)),r.setState({projects:e}))},r.state={projects:[],isEditing:!1,currentProject:{name:"",description:""}},r}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("projects"));t||localStorage.setItem("projects",JSON.stringify(this.state.projects)),this.setState({projects:t})}},{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"contain",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Simple time tracking application"})}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("form",{onSubmit:this.state.isEditing?this.saveProject:this.addProject,children:[Object(r.jsx)("span",{className:"project-title",children:"Project name:"}),Object(r.jsx)("input",{type:"text",name:"name",value:this.state.currentProject.name,onChange:this.inputChange,className:"project-item",autoComplete:"off"}),Object(r.jsx)("span",{className:"project-title",children:"Project description:"}),Object(r.jsx)("textarea",{name:"description",value:this.state.currentProject.description,onChange:this.inputChange,className:"project-description",placeholder:"Please enter project description..."}),Object(r.jsx)("input",{type:"submit",value:this.state.isEditing?"Save":"Add",className:"submit-btn"})]}),Object(r.jsx)("div",{children:this.state.projects&&this.state.projects.length>0&&Object(r.jsxs)("table",{className:"table-container",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"table-row",children:[Object(r.jsx)("th",{className:"table-head",children:"Project name"}),Object(r.jsx)("th",{className:"table-head",children:"Project description"}),Object(r.jsx)("th",{className:"table-head",children:"Actions"})]})}),Object(r.jsx)("tbody",{children:this.state.projects.map((function(e){return Object(r.jsxs)("tr",{className:"table-row",children:[Object(r.jsx)("td",{className:"table-data",children:e.name}),Object(r.jsx)("td",{className:"table-data",children:e.description}),Object(r.jsxs)("td",{className:"table-data",children:[Object(r.jsx)("button",{onClick:function(){return t.updateProject(e)},className:"btn",children:"Update"}),Object(r.jsx)("button",{className:"btn",children:Object(r.jsx)(o.b,{to:"/project/".concat(e.id),children:Object(r.jsx)("span",{className:"view-btn",children:"View"})})}),Object(r.jsx)("button",{onClick:function(){return t.deleteProject(e.id)},className:"btn",children:"Delete"})]})]},e.id)}))}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Total added projects: ",this.state.projects.length]})})]})}),Object(r.jsx)("div",{})]})]})}}]),c}(s.a.Component)),O=c(14),x=(c(39),function(t){Object(p.a)(c,t);var e=Object(b.a)(c);function c(t){var r;return Object(u.a)(this,c),(r=e.call(this,t)).generateId=function(){return Math.floor(Math.random()*Math.floor(Math.random()*Date.now()))},r.countTotalHours=function(t){var e=0;t.hours.map((function(t){return e+=parseInt(t.amount)})),r.setState({totalHours:e})},r.inputChange=function(t){t.preventDefault(),r.setState({currentProjectHours:Object(d.a)(Object(d.a)({},r.state.currentProjectHours),{},Object(l.a)({},t.target.name,t.target.value))})},r.addTime=function(t){if(r.state.currentProjectHours.amount&&r.state.currentProjectHours.description){t.preventDefault();var e=r.state.project;e.hours.push({id:r.generateId(),amount:r.state.currentProjectHours.amount,description:r.state.currentProjectHours.description}),r.updateProjectsHours(e),r.setState({project:e})}else alert("Please fill up the form bellow.")},r.updateProjectsHours=function(t){var e=JSON.parse(localStorage.getItem("projects")),c=e.findIndex((function(e){return e.id===t.id}));-1!==c&&(e[c]=Object(d.a)(Object(d.a)({},e[c]),{},{hours:t.hours}),localStorage.setItem("projects",JSON.stringify(e)),r.countTotalHours(t),r.setState({projects:e,currentProjectHours:{amount:"",description:""}}))},r.deleteTime=function(t){var e=r.state.project,c=e.hours.findIndex((function(e){return e.id===t}));-1!==c&&(e.hours.splice(c,1),r.setState({project:e}),r.updateProjectsHours(e))},r.state={project:{},totalHours:0,currentProjectHours:{amount:"",description:""}},r.generateId=r.generateId.bind(Object(O.a)(r)),r}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id,e=JSON.parse(localStorage.getItem("projects")).find((function(e){return e.id===parseInt(t)}));this.setState({project:e}),this.countTotalHours(e)}},{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h2",{children:"Add hours"})}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("form",{onSubmit:this.addTime,children:[Object(r.jsx)("span",{className:"project-title",children:"Amount:"}),Object(r.jsx)("input",{type:"number",name:"amount",min:"1",value:this.state.currentProjectHours.amount,onChange:this.inputChange,className:"project-item",autoComplete:"off"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"project-title",children:"Description:"}),Object(r.jsx)("textarea",{name:"description",value:this.state.currentProjectHours.description,onChange:this.inputChange,className:"project-description",placeholder:"Please enter product time description..."}),Object(r.jsx)("input",{type:"submit",value:"Add",className:"submit-btn"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"back-button",children:Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("span",{className:"back-button-span",children:"Back"})})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Name: "}),this.state.project.name]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Description: "}),this.state.project.description]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:"Total hours: "}),this.state.totalHours]})]}),Object(r.jsx)("div",{children:this.state.project.hours&&this.state.project.hours.length>0&&Object(r.jsxs)("table",{className:"table-container",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"table-row",children:[Object(r.jsx)("th",{className:"table-head",children:"Amount"}),Object(r.jsx)("th",{className:"table-head",children:"Description"}),Object(r.jsx)("th",{className:"table-head",children:"Actions"})]})}),Object(r.jsx)("tbody",{children:this.state.project.hours.map((function(e){return Object(r.jsxs)("tr",{className:"table-row",children:[Object(r.jsx)("td",{className:"table-data",children:e.amount}),Object(r.jsx)("td",{className:"table-data",children:e.description}),Object(r.jsx)("td",{className:"table-data",children:Object(r.jsx)("button",{onClick:function(){return t.deleteTime(e.id)},className:"btn",children:"Delete"})})]},e.id)}))})]})})]})]})}}]),c}(s.a.Component)),f=function(t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",component:m}),Object(r.jsx)(j.a,{path:"/project/:id",component:x})]})};var g=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(o.a,{children:Object(r.jsx)(j.c,{children:Object(r.jsx)(f,{})})})})},v=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(e){var c=e.getCLS,r=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),r(t),n(t),s(t),a(t)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.7867b678.chunk.js.map