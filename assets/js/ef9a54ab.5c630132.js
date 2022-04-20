"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[499],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,title:"How to Use",id:"usage"},l=void 0,u={unversionedId:"usage/usage",id:"usage/usage",title:"How to Use",description:"Executes the specified command with elevated permissions.",source:"@site/docs/usage/usage.md",sourceDirName:"usage",slug:"/usage/",permalink:"/gsudo/docs/usage/",editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/usage/usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"How to Use",id:"usage"},sidebar:"tutorialSidebar",previous:{title:"How to Install",permalink:"/gsudo/docs/install"},next:{title:"Usage from PowerShell",permalink:"/gsudo/docs/usage/powershell"}},c={},d=[{value:"Cache Mode Config",id:"cache-mode-config",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gsudo"),"  Opens an elevated shell in the current console."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gsudo [options] {command} [arguments]"),"\nExecutes the specified command with elevated permissions."),(0,a.kt)("p",null,"Most relevant ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"[options]")),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"-n | --new")),"        Starts the command in a ",(0,a.kt)("strong",{parentName:"li"},"new")," console with elevated rights (and returns immediately)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"-w | --wait")),"       Force wait for the process to end (and return the exitcode)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"-s | --system")),'     Run As Local System account ("NT AUTHORITY\\SYSTEM").'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"-i | --integrity {v}")),"   Run command with a specific integrity level: ",(0,a.kt)("inlineCode",{parentName:"li"},"Low"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Medium"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"MediumPlus"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"High")," (default), ",(0,a.kt)("inlineCode",{parentName:"li"},"System"),". For example, use ",(0,a.kt)("inlineCode",{parentName:"li"},"Low")," to launch a restricted process, or use ",(0,a.kt)("inlineCode",{parentName:"li"},"Medium")," to run without Admin rights. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"-d | --direct")),"     Execute {command} directly. Does not wrap it with your current shell (Pwsh/WSL/MinGw/Yori/etc). Assumes it is a ",(0,a.kt)("inlineCode",{parentName:"li"},"CMD")," command (eg. an ",(0,a.kt)("inlineCode",{parentName:"li"},".EXE")," file)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"--copyns")),"         Reconnect current connected network shares on the elevated session. Warning! This is verbose, affects the elevated user system-wide (other processes), and can prompt for credentials interactively."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"--debug")),"          Debug mode (verbose).")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gsudo config"),"\nShow current user-settings."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'gsudo config {key} ["value" | --reset]'),"\nRead, write, or reset a user setting to the default value."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gsudo status"),"\nShow status information about current user, security, integrity level or other gsudo relevant data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You can use anywhere ",(0,a.kt)("strong",{parentName:"p"},"the ",(0,a.kt)("inlineCode",{parentName:"strong"},"sudo")," alias")," created by the installers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# elevate the current shell in the current console window (Cmd/PowerShell/Pwsh Core/Yori/Take Command/git-bash/cygwin)\ngsudo\n\n# launch the current shell elevated in a new console window\ngsudo -n\n\n# launch in new window and wait for exit\ngsudo -n -w powershell ./Do-Something.ps1\n\n# launch windows app\ngsudo notepad %windir%\\system32\\drivers\\etc\\hosts\n\n# sudo alias built-in with choco/scoop/manual installers: \nsudo notepad %windir%\\system32\\drivers\\etc\\hosts\n\n# Cmd Commands:\ngsudo type MySecretFile.txt\ngsudo md "C:\\Program Files\\MyApp"\n\n# redirect/pipe input/output/error\ngsudo dir | findstr /c:"bytes free" > FreeSpace.txt\n\n# Elevate last command (sudo bang bang)\ngsudo !!\n')),(0,a.kt)("p",null,"Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# See current configuration\ngsudo config\n# Configure Reduced logging\ngsudo config LogLevel "Error"\n# Configure a custom Elevated Prompt\ngsudo config Prompt "$P [elevated]$G "\n# Reset to default value\ngsudo config Prompt --reset\n\n# Enable credentials cache (less UAC popups):\ngsudo config CacheMode Auto\n')),(0,a.kt)("h2",{id:"cache-mode-config"},"Cache Mode Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows PowerShell (5.x) and PowerShell Core (>6.x) have different ",(0,a.kt)("inlineCode",{parentName:"li"},"$PROFILE")," configuration files, so follow this steps on the version that you use, or both.")))}m.isMDXComponent=!0}}]);