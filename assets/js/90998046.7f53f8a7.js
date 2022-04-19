"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[566],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6500:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),r=["components"],i={sidebar_position:0,title:"Usage from PowerShell"},s=void 0,u={unversionedId:"usage/powershell",id:"usage/powershell",title:"Usage from PowerShell",description:"Usage",source:"@site/docs/usage/powershell.md",sourceDirName:"usage",slug:"/usage/powershell",permalink:"/gsudo/docs/usage/powershell",editUrl:"https://github.com/gerardog/gsudo/blob/docs/docs/docs/usage/powershell.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Usage from PowerShell"},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/gsudo/docs/usage/"},next:{title:"Usage from WSL",permalink:"/gsudo/docs/usage/wsl"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Invoke-gsudo cmdlet",id:"invoke-gsudo-cmdlet",level:3},{value:"Shell Config",id:"shell-config",level:2},{value:"Profile loading",id:"profile-loading",level:2},{value:"Known Issues:",id:"known-issues",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gsudo")," detects if it's invoked from PowerShell and elevates PS commands (unless ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," is used to elevate CMD commands). "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepend ",(0,a.kt)("inlineCode",{parentName:"li"},"gsudo")," for commands without special operators ",(0,a.kt)("inlineCode",{parentName:"li"},"()|&<>")," or single quotes ",(0,a.kt)("inlineCode",{parentName:"li"},"'"),". Otherwise you can ",(0,a.kt)("strong",{parentName:"li"},"pass a string literal")," with the command to be elevate:    ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"  PS C:\\> gsudo 'powershell string command'\n")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"gsudo")," command returns a string that can be captured, not powershell objects. It will ran elevated, in a different process and lexical scope, so it can't access your existing ",(0,a.kt)("inlineCode",{parentName:"p"},"$variables"),", so use variable substitution."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# Elevate PowerShell itself\nPS C:\\> gsudo\n\n# Elevate Commands without ()|&<>' by prepending gsudo\ngsudo Remove-Item ProtectedFile.txt\n# Or pass a string literal:\ngsudo 'Remove-Item ProtectedFile.txt'\n$hash = gsudo '(Get-FileHash \"C:\\My Secret.txt\").Hash'\n\n# Variable substitutions example:\n$file='C:\\My Secret.txt'; $algorithm='md5';\n$hash = gsudo \"(Get-FileHash '$file' -Algorithm $algorithm).Hash\"\n# or \n$hash = gsudo \"(Get-FileHash \"\"$file\"\" -Algorithm $algorithm).Hash\"\n\n# Skip PowerShell wrapper (with -d): run an .EXE or a CMD command directly (optional, faster)\ngsudo -d notepad \n\n# Test gsudo success (optional):\nif ($LastExitCode -eq 999 ) {\n    'gsudo failed to elevate!'\n} elseif ($LastExitCode) {\n    'Command failed!'\n} else { 'Success!' }\n")),(0,a.kt)("h3",{id:"invoke-gsudo-cmdlet"},"Invoke-gsudo cmdlet"),(0,a.kt)("p",null,"Use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Invoke-gsudo")," CmdLet")," to elevate a ScriptBlock (allowing better PowerShell syntax validation and auto-complete), with auto serialization of inputs, outputs and pipeline objects."),(0,a.kt)("p",null,"   The ScriptBlock will ran elevated in a different process and lexical scope, so it can't access your existing ",(0,a.kt)("inlineCode",{parentName:"p"},"$variables"),". You if you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"$using:variableName")," syntax, it\xb4s serialized value will be applied. The result object is serialized and returned (as a PSObject or PSObject[])."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# Accepts pipeline input.\nGet-process SpoolSv | Invoke-gsudo { Stop-Process -Force }\n\n# Variable usage\n$folder = "C:\\ProtectedFolder"\nInvoke-gsudo { Remove-Item $using:folder }\n\n# The result is serialized (PSObject) with properties.\n(Invoke-gsudo { Get-ChildItem $using:folder }).LastWriteTime\n')),(0,a.kt)("h2",{id:"shell-config"},"Shell Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Windows PowerShell (5.x) and PowerShell Core (>6.x) have different ",(0,a.kt)("inlineCode",{parentName:"p"},"$PROFILE")," configuration files, so follow this steps on the version that you use, or both.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For an enhanced experience, import module ",(0,a.kt)("inlineCode",{parentName:"p"},"gsudoModule.psd1"),". This is optional and enables ",(0,a.kt)("inlineCode",{parentName:"p"},"gsudo !!"),", and param auto-complete for ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke-Gsudo")," cmdlet. "),(0,a.kt)("p",{parentName:"li"},"Add the following line to your $PROFILE (replace with full path)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"Import-Module 'C:\\FullPathTo\\gsudoModule.psd1'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Or run:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Get-Command gsudoModule.psd1 | % { Write-Output "`nImport-Module `"$($_.Source)`"" | Add-Content $PROFILE }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can create a custom alias for gsudo or Invoke-gsudo: "),(0,a.kt)("p",{parentName:"li"},"Add one of these lines to your $PROFILE:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set-Alias 'sudo' 'gsudo'")," ",(0,a.kt)("br",null),"or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Set-Alias 'sudo' 'Invoke-gsudo'"))))),(0,a.kt)("h2",{id:"profile-loading"},"Profile loading"),(0,a.kt)("p",null,"For faster performance, elevation is called with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-NoProfile")," argument. If your command requires your profile loaded you can:"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"gsudo"),", infix ",(0,a.kt)("inlineCode",{parentName:"p"},"--loadProfile"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PS C:\\> gsudo --loadProfile echo (1+1)")),(0,a.kt)("li",{parentName:"ul"},"Set as a permanent setting with ",(0,a.kt)("inlineCode",{parentName:"li"},"gsudo config PowerShellLoadProfile true"))),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke-gsudo"),", add ",(0,a.kt)("inlineCode",{parentName:"p"},"-LoadProfile"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PS C:\\> Invoke-Gsudo { echo (1+1) } -LoadProfile")),(0,a.kt)("li",{parentName:"ul"},"Set as a permanent setting adding ",(0,a.kt)("inlineCode",{parentName:"li"},"$gsudoLoadProfile=$true")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},"$PROFILE")," after ",(0,a.kt)("inlineCode",{parentName:"li"},"Import-Module C:\\FullPathTo\\gsudoModule.psd1"))),(0,a.kt)("h2",{id:"known-issues"},"Known Issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do not install PowerShell as a .Net global tool (i.e. with ",(0,a.kt)("inlineCode",{parentName:"li"},"dotnet tool install --global PowerShell"),"), because it uses a shim tool with ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/PowerShell/PowerShell/issues/11747"},"issues"),". Install with ",(0,a.kt)("inlineCode",{parentName:"li"},"choco install pwsh"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"winget install Microsoft.PowerShell")," or any ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows"},"other method")," instead.")))}m.isMDXComponent=!0}}]);