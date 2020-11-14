(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(3),i=n.n(c),r=n(21),s=n.n(r),d=(n(28),n(4)),o=n.n(d),u=n(7),l=n(11),j=n(6),h=n(5);n(34);var p=function(e){return e.error?Object(a.jsxs)("div",{children:[Object(a.jsx)(h.a,{className:"icon",color:"blueviolet",icon:j.a,size:"10x"}),Object(a.jsxs)("div",{className:"error",children:[e.error,Object(a.jsx)("div",{children:"Try again !"})]})]}):null};n(35);var b=function(e){return Object(a.jsx)("div",{className:"icon-spin",children:Object(a.jsx)(h.a,{icon:j.b,size:"10x",color:"white"})})},m=(n(36),n(22)),x="",O=function(e,t){x="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("{API-KEY}","\n  ")},f=function(){return x},v=n.n(m).a.create(),g=function(){var e=Object(c.useState)({latitude:0,longitude:0}),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)({loading:!0}),s=Object(l.a)(r,2),d=s[0],j=s[1];Object(c.useEffect)((function(){function e(e){return t.apply(this,arguments)}function t(){return(t=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i({latitude:t.coords.latitude,longitude:t.coords.longitude});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.latitude&&n.longitude&&(O(n.latitude,n.longitude),v.get(f()).then((function(e){j({address:"".concat(e.data.name,", ").concat(e.data.sys.country),country:e.data.sys.country,icon:" http://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,"@2x.png"),description:e.data.weather[0].description,windspeed:h(e.data.wind.speed),temperature:m(e.data.main.temp),humidity:e.data.main.humidity,pressure:e.data.main.pressure,lastUpdate:x(),isconnected:!0,loading:!1})})).catch((function(e){j({lastUpdate:x(),isconnected:!1,error:e.message,loading:!1})})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.geolocation.getCurrentPosition(e);case 3:return t.next=5,a();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),j({isconnected:!1,error:t.t0.message,loading:!1});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[n.latitude]);var h=function(e){return(3.72*e).toFixed(2)},m=function(e){return(e-273.15).toFixed(2)},x=function(){var e=new Date;return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")};return Object(a.jsxs)("div",{className:"weather-container",children:[d.loading?Object(a.jsx)(b,{}):d.isconnected?Object(a.jsxs)("div",{className:"weather-data",children:[Object(a.jsxs)("div",{className:"weather-location",children:[Object(a.jsx)("div",{className:"location",children:Object(a.jsx)("h2",{children:d.address})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:d.icon,alt:"Imagem do Tempo",width:150,height:150})})]}),Object(a.jsxs)("div",{className:"weather-temp-container",children:[Object(a.jsxs)("div",{className:"weather-temp",children:[d.temperature," ",Object(a.jsx)("sup",{children:"o"}),"C"]}),Object(a.jsx)("div",{className:"weather-description",children:d.description})]}),Object(a.jsxs)("div",{className:"weather-data-now",children:[Object(a.jsxs)("div",{className:"weather-data-now-item",children:[Object(a.jsx)("div",{children:"Wind Speed"}),d.windspeed," Km/h"]}),Object(a.jsxs)("div",{className:"weather-data-now-item",children:[Object(a.jsx)("div",{children:"Humidity: "}),d.humidity,"%"]}),Object(a.jsxs)("div",{className:"weather-data-now-item",children:[Object(a.jsx)("div",{children:"Pressure: "}),d.pressure," hPa"]})]})]}):Object(a.jsx)("div",{children:Object(a.jsx)(p,{error:d.error})}),Object(a.jsx)("div",{className:"button",children:Object(a.jsx)("button",{onClick:function(){i({latitude:0,longitude:0}),j({loading:!0})},children:"Update"})}),Object(a.jsxs)("div",{className:"lastUpdated",children:[Object(a.jsx)("span",{children:"Last Updated: "}),d.lastUpdate]})]})},w=(n(53),function(e){var t=e.title;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)(g,{})]})});n(54);var N=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(w,{title:"TEMPO AGORA EM"})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),y()}},[[55,1,2]]]);
//# sourceMappingURL=main.1d734bfe.chunk.js.map