/*! For license information please see 1057.2e3d039d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpepecoin_web=self.webpackChunkpepecoin_web||[]).push([[1057],{64337:(t,e)=>{function r(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("Wrong positive integer: ".concat(t))}function s(t){if("boolean"!==typeof t)throw new Error("Expected boolean, not ".concat(t))}function i(t){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");for(var e=arguments.length,r=new Array(e>1?e-1:0),s=1;s<e;s++)r[s-1]=arguments[s];if(r.length>0&&!r.includes(t.length))throw new Error("Expected Uint8Array of length ".concat(r,", not of length=").concat(t.length))}function n(t){if("function"!==typeof t||"function"!==typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");r(t.outputLen),r(t.blockLen)}function o(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function h(t,e){i(t);const r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least ".concat(r))}Object.defineProperty(e,"__esModule",{value:!0}),e.output=e.exists=e.hash=e.bytes=e.bool=e.number=void 0,e.number=r,e.bool=s,e.bytes=i,e.hash=n,e.exists=o,e.output=h;const a={number:r,bool:s,bytes:i,hash:n,exists:o,output:h};e.default=a},34995:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const r=BigInt(2**32-1),s=BigInt(32);function i(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?{h:Number(t&r),l:Number(t>>s&r)}:{h:0|Number(t>>s&r),l:0|Number(t&r)}}function n(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Uint32Array(t.length),s=new Uint32Array(t.length);for(let n=0;n<t.length;n++){const{h:o,l:h}=i(t[n],e);[r[n],s[n]]=[o,h]}return[r,s]}e.fromBig=i,e.split=n;e.toBig=(t,e)=>BigInt(t>>>0)<<s|BigInt(e>>>0);function o(t,e,r,s){const i=(e>>>0)+(s>>>0);return{h:t+r+(i/2**32|0)|0,l:0|i}}e.add=o;const h={fromBig:i,split:n,toBig:e.toBig,shrSH:(t,e,r)=>t>>>r,shrSL:(t,e,r)=>t<<32-r|e>>>r,rotrSH:(t,e,r)=>t>>>r|e<<32-r,rotrSL:(t,e,r)=>t<<32-r|e>>>r,rotrBH:(t,e,r)=>t<<64-r|e>>>r-32,rotrBL:(t,e,r)=>t>>>r-32|e<<64-r,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:(t,e,r)=>t<<r|e>>>32-r,rotlSL:(t,e,r)=>e<<r|t>>>32-r,rotlBH:(t,e,r)=>e<<r-32|t>>>64-r,rotlBL:(t,e,r)=>t<<r-32|e>>>64-r,add:o,add3L:(t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0),add3H:(t,e,r,s)=>e+r+s+(t/2**32|0)|0,add4L:(t,e,r,s)=>(t>>>0)+(e>>>0)+(r>>>0)+(s>>>0),add4H:(t,e,r,s,i)=>e+r+s+i+(t/2**32|0)|0,add5H:(t,e,r,s,i,n)=>e+r+s+i+n+(t/2**32|0)|0,add5L:(t,e,r,s,i)=>(t>>>0)+(e>>>0)+(r>>>0)+(s>>>0)+(i>>>0)};e.default=h},26164:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=void 0,e.crypto="object"===typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0},17883:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.shake256=e.shake128=e.keccak_512=e.keccak_384=e.keccak_256=e.keccak_224=e.sha3_512=e.sha3_384=e.sha3_256=e.sha3_224=e.Keccak=e.keccakP=void 0;const s=r(64337),i=r(34995),n=r(74361),[o,h,a]=[[],[],[]],f=BigInt(0),u=BigInt(1),l=BigInt(2),c=BigInt(7),d=BigInt(256),g=BigInt(113);for(let x=0,L=u,T=1,O=0;x<24;x++){[T,O]=[O,(2*T+3*O)%5],o.push(2*(5*O+T)),h.push((x+1)*(x+2)/2%64);let t=f;for(let e=0;e<7;e++)L=(L<<u^(L>>c)*g)%d,L&l&&(t^=u<<(u<<BigInt(e))-u);a.push(t)}const[p,y]=i.default.split(a,!0),b=(t,e,r)=>r>32?i.default.rotlBH(t,e,r):i.default.rotlSH(t,e,r),w=(t,e,r)=>r>32?i.default.rotlBL(t,e,r):i.default.rotlSL(t,e,r);function m(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;const r=new Uint32Array(10);for(let s=24-e;s<24;s++){for(let s=0;s<10;s++)r[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const e=(s+8)%10,i=(s+2)%10,n=r[i],o=r[i+1],h=b(n,o,1)^r[e],a=w(n,o,1)^r[e+1];for(let r=0;r<50;r+=10)t[s+r]^=h,t[s+r+1]^=a}let e=t[2],i=t[3];for(let r=0;r<24;r++){const s=h[r],n=b(e,i,s),a=w(e,i,s),f=o[r];e=t[f],i=t[f+1],t[f]=n,t[f+1]=a}for(let s=0;s<50;s+=10){for(let e=0;e<10;e++)r[e]=t[s+e];for(let e=0;e<10;e++)t[s+e]^=~r[(e+2)%10]&r[(e+4)%10]}t[0]^=p[s],t[1]^=y[s]}r.fill(0)}e.keccakP=m;class v extends n.Hash{constructor(t,e,r){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:24;if(super(),this.blockLen=t,this.suffix=e,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,s.default.number(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,n.u32)(this.state)}keccak(){m(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){s.default.exists(this);const{blockLen:e,state:r}=this,i=(t=(0,n.toBytes)(t)).length;for(let s=0;s<i;){const n=Math.min(e-this.pos,i-s);for(let e=0;e<n;e++)r[this.pos++]^=t[s++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:e,pos:r,blockLen:s}=this;t[r]^=e,0!==(128&e)&&r===s-1&&this.keccak(),t[s-1]^=128,this.keccak()}writeInto(t){s.default.exists(this,!1),s.default.bytes(t),this.finish();const e=this.state,{blockLen:r}=this;for(let s=0,i=t.length;s<i;){this.posOut>=r&&this.keccak();const n=Math.min(r-this.posOut,i-s);t.set(e.subarray(this.posOut,this.posOut+n),s),this.posOut+=n,s+=n}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return s.default.number(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(s.default.output(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:e,suffix:r,outputLen:s,rounds:i,enableXOF:n}=this;return t||(t=new v(e,r,s,n,i)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=i,t.suffix=r,t.outputLen=s,t.enableXOF=n,t.destroyed=this.destroyed,t}}e.Keccak=v;const k=(t,e,r)=>(0,n.wrapConstructor)((()=>new v(e,t,r)));e.sha3_224=k(6,144,28),e.sha3_256=k(6,136,32),e.sha3_384=k(6,104,48),e.sha3_512=k(6,72,64),e.keccak_224=k(1,144,28),e.keccak_256=k(1,136,32),e.keccak_384=k(1,104,48),e.keccak_512=k(1,72,64);const B=(t,e,r)=>(0,n.wrapXOFConstructorWithOpts)((function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new v(e,t,void 0===s.dkLen?r:s.dkLen,!0)}));e.shake128=B(31,168,16),e.shake256=B(31,136,32)},74361:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapXOFConstructorWithOpts=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const s=r(26164),i=t=>t instanceof Uint8Array;e.u8=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength);e.u32=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4));e.createView=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);if(e.rotr=(t,e)=>t<<32-e|t>>>e,e.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.isLE)throw new Error("Non little-endian hardware is not supported");const n=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));e.bytesToHex=function(t){if(!i(t))throw new Error("Uint8Array expected");let e="";for(let r=0;r<t.length;r++)e+=n[t[r]];return e},e.hexToBytes=function(t){if("string"!==typeof t)throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(e/2);for(let s=0;s<r.length;s++){const e=2*s,i=t.slice(e,e+2),n=Number.parseInt(i,16);if(Number.isNaN(n)||n<0)throw new Error("Invalid byte sequence");r[s]=n}return r};function o(t){if("string"!==typeof t)throw new Error("utf8ToBytes expected string, got ".concat(typeof t));return new Uint8Array((new TextEncoder).encode(t))}function h(t){if("string"===typeof t&&(t=o(t)),!i(t))throw new Error("expected Uint8Array, got ".concat(typeof t));return t}e.nextTick=async()=>{},e.asyncLoop=async function(t,r,s){let i=Date.now();for(let n=0;n<t;n++){s(n);const t=Date.now()-i;t>=0&&t<r||(await(0,e.nextTick)(),i+=t)}},e.utf8ToBytes=o,e.toBytes=h,e.concatBytes=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];const s=new Uint8Array(e.reduce(((t,e)=>t+e.length),0));let n=0;return e.forEach((t=>{if(!i(t))throw new Error("Uint8Array expected");s.set(t,n),n+=t.length})),s};e.Hash=class{clone(){return this._cloneInto()}};e.checkOpts=function(t,e){if(void 0!==e&&("object"!==typeof e||(r=e,"[object Object]"!==Object.prototype.toString.call(r)||r.constructor!==Object)))throw new Error("Options should be object or undefined");var r;return Object.assign(t,e)},e.wrapConstructor=function(t){const e=e=>t().update(h(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e},e.wrapConstructorWithOpts=function(t){const e=(e,r)=>t(r).update(h(e)).digest(),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e},e.wrapXOFConstructorWithOpts=function(t){const e=(e,r)=>t(r).update(h(e)).digest(),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e},e.randomBytes=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32;if(s.crypto&&"function"===typeof s.crypto.getRandomValues)return s.crypto.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}},7285:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.keccak512=e.keccak384=e.keccak256=e.keccak224=void 0;const s=r(17883),i=r(43720);e.keccak224=(0,i.wrapHash)(s.keccak_224),e.keccak256=(()=>{const t=(0,i.wrapHash)(s.keccak_256);return t.create=s.keccak_256.create,t})(),e.keccak384=(0,i.wrapHash)(s.keccak_384),e.keccak512=(0,i.wrapHash)(s.keccak_512)},43720:function(t,e,r){t=r.nmd(t);var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=e.wrapHash=e.equalsBytes=e.hexToBytes=e.bytesToUtf8=e.utf8ToBytes=e.createView=e.concatBytes=e.toHex=e.bytesToHex=e.assertBytes=e.assertBool=void 0;const i=s(r(64337)),n=r(74361),o=i.default.bool;e.assertBool=o;const h=i.default.bytes;e.assertBytes=h;var a=r(74361);Object.defineProperty(e,"bytesToHex",{enumerable:!0,get:function(){return a.bytesToHex}}),Object.defineProperty(e,"toHex",{enumerable:!0,get:function(){return a.bytesToHex}}),Object.defineProperty(e,"concatBytes",{enumerable:!0,get:function(){return a.concatBytes}}),Object.defineProperty(e,"createView",{enumerable:!0,get:function(){return a.createView}}),Object.defineProperty(e,"utf8ToBytes",{enumerable:!0,get:function(){return a.utf8ToBytes}}),e.bytesToUtf8=function(t){if(!(t instanceof Uint8Array))throw new TypeError("bytesToUtf8 expected Uint8Array, got ".concat(typeof t));return(new TextDecoder).decode(t)},e.hexToBytes=function(t){const e=t.startsWith("0x")?t.substring(2):t;return(0,n.hexToBytes)(e)},e.equalsBytes=function(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0},e.wrapHash=function(t){return e=>(i.default.bytes(e),t(e))},e.crypto=(()=>{const e="object"===typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,r="function"===typeof t.require&&t.require.bind(t);return{node:r&&!e?r("crypto"):void 0,web:e}})()},29731:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Base=void 0;const i=r(19778),n=s(r(89704));class o{print(){o.print(this)}bufferIndexOf(t,e){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return this.binarySearch(t,e,i.Buffer.compare);return this.linearSearch(t,e,((t,e)=>t.equals(e)))}static binarySearch(t,e,r){let s=0,i=t.length-1;for(;s<=i;){const n=Math.floor((s+i)/2),o=r(t[n],e);if(0===o){for(let s=n-1;s>=0;s--)if(0!==r(t[s],e))return s+1;return 0}o<0?s=n+1:i=n-1}return-1}binarySearch(t,e,r){return o.binarySearch(t,e,r)}static linearSearch(t,e,r){for(let s=0;s<t.length;s++)if(r(t[s],e))return s;return-1}linearSearch(t,e,r){return o.linearSearch(t,e,r)}static bufferify(t){if(!i.Buffer.isBuffer(t)){if("object"===typeof t&&t.words)return i.Buffer.from(t.toString(n.default.enc.Hex),"hex");if(o.isHexString(t))return i.Buffer.from(t.replace(/^0x/,""),"hex");if("string"===typeof t)return i.Buffer.from(t);if("bigint"===typeof t)return i.Buffer.from(t.toString(16),"hex");if(t instanceof Uint8Array)return i.Buffer.from(t.buffer);if("number"===typeof t){let e=t.toString();return e.length%2&&(e="0".concat(e)),i.Buffer.from(e,"hex")}if(ArrayBuffer.isView(t))return i.Buffer.from(t.buffer,t.byteOffset,t.byteLength)}return t}bigNumberify(t){return o.bigNumberify(t)}static bigNumberify(t){if("bigint"===typeof t)return t;if("string"===typeof t)return t.startsWith("0x")&&o.isHexString(t)?BigInt("0x"+t.replace("0x","").toString()):BigInt(t);if(i.Buffer.isBuffer(t))return BigInt("0x"+t.toString("hex"));if(t instanceof Uint8Array)return BigInt(t);if("number"===typeof t)return BigInt(t);throw new Error("cannot bigNumberify")}static isHexString(t){return"string"===typeof t&&/^(0x)?[0-9A-Fa-f]*$/.test(t)}static print(t){console.log(t.toString())}bufferToHex(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return o.bufferToHex(t,e)}static bufferToHex(t){return"".concat(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?"0x":"").concat((t||i.Buffer.alloc(0)).toString("hex"))}bufferify(t){return o.bufferify(t)}bufferifyFn(t){return e=>{const r=t(e);return i.Buffer.isBuffer(r)?r:this.isHexString(r)?i.Buffer.from(r.replace("0x",""),"hex"):"string"===typeof r?i.Buffer.from(r):"bigint"===typeof r?i.Buffer.from(e.toString(16),"hex"):ArrayBuffer.isView(r)?i.Buffer.from(r.buffer,r.byteOffset,r.byteLength):i.Buffer.from(t(n.default.enc.Hex.parse(e.toString("hex"))).toString(n.default.enc.Hex),"hex")}}isHexString(t){return o.isHexString(t)}log2(t){return 1===t?0:1+this.log2(t/2|0)}zip(t,e){return t.map(((t,r)=>[t,e[r]]))}static hexZeroPad(t,e){return"0x"+t.replace("0x","").padStart(e,"0")}}e.Base=o,e.default=o},98628:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.IncrementalMerkleTree=void 0;const i=s(r(29731)),n=s(r(98842));class o extends i.default{constructor(t,e){if(super(),this.hashFn=t,e.depth&&(this.depth=e.depth),e.arity&&(this.arity=e.arity),this.depth<1)throw new Error("depth must be greater than 0");if(this.arity<1)throw new Error("arity must be greater than 0");const r=[];let s=e.zeroValue;if(this.zeroValue=s,this.zeroes=[],this.depth)for(let i=0;i<this.depth;i++)this.zeroes.push(s),r[i]=[],s=this.hashFn(Array(this.arity).fill(s));this.nodes=r,this.root=s}getRoot(){return this.root}getHexRoot(){return this.bufferToHex(this.bufferify(this.getRoot()))}insert(t){if(this.depth&&this.arity&&this.nodes[0].length>=this.getMaxLeaves())throw new Error("tree is full");let e=t,r=this.nodes[0].length;for(let s=0;s<this.depth;s+=1){const t=r-r%this.arity,i=t+this.arity,n=[];this.nodes[s][r]=e;for(let e=t;e<i;e+=1)e<this.nodes[s].length?n.push(this.nodes[s][e]):n.push(this.zeroes[s]);e=this.hashFn(n),r=Math.floor(r/this.arity)}this.root=e}delete(t){this.update(t,this.zeroValue)}update(t,e){if(t<0||t>=this.nodes[0].length)throw new Error("out of bounds");let r=e;for(let s=0;s<this.depth;s+=1){const e=t-t%this.arity,i=e+this.arity,n=[];this.nodes[s][t]=r;for(let t=e;t<i;t+=1)t<this.nodes[s].length?n.push(this.nodes[s][t]):n.push(this.zeroes[s]);r=this.hashFn(n),t=Math.floor(t/this.arity)}this.root=r}getDepth(){return this.depth}getArity(){return this.arity}getMaxLeaves(){return Math.pow(this.depth,this.arity)}indexOf(t){return this.nodes[0].indexOf(t)}getLeaves(){const t=this.copyList(this.nodes[0]);for(let e=this.nodes[0].length;e<this.getMaxLeaves();e++)t[e]=this.zeroValue;return t}copyList(t){return t.map((t=>BigInt(t)))}getLayers(){const t=[];for(const e of this.nodes)t.push(this.copyList(e));if(t[0].length<this.getMaxLeaves()){let e=t[0].length;for(let r=e;r<this.getMaxLeaves();r++)t[0][r]=this.zeroValue;for(let r=0;r<this.depth;r++){const s=e-e%this.arity,i=s+this.arity;for(let e=s;e<i;e++)e>=t[r].length&&(t[r][e]=this.zeroes[r]);e=Math.floor(e/this.arity)}}return t.push([this.root]),t}getHexLayers(){return this.getLayers().reduce(((t,e)=>(Array.isArray(e)?t.push(e.map((t=>this.bufferToHex(this.bufferify(t))))):t.push(e),t)),[])}getLayersAsObject(){const t=this.getLayers().map((t=>t.map((t=>this.bufferToHex(this.bufferify(t),!1))))),e=[];for(let r=0;r<t.length;r++){const s=[];for(let i=0;i<t[r].length;i++){const n={[t[r][i]]:null};if(e.length){n[t[r][i]]={};const s=e.shift(),o=Object.keys(s)[0];if(n[t[r][i]][o]=s[o],e.length){const s=e.shift(),o=Object.keys(s)[0];n[t[r][i]][o]=s[o]}}s.push(n)}e.push(...s)}return e[0]}computeRoot(){let t,e=this.nodes[0].length;for(let r=0;r<this.depth;r+=1){const s=e-e%this.arity,i=s+this.arity,n=[];for(let t=s;t<i;t+=1)t<this.nodes[r].length?n.push(this.nodes[r][t]):n.push(this.zeroes[r]);t=this.hashFn(n),e=Math.floor(e/this.arity)}return t}getProof(t){if(t<0||t>=this.nodes[0].length)throw new Error("The leaf does not exist in this tree");const e=[],r=[],s=t;for(let i=0;i<this.depth;i+=1){const s=t%this.arity,n=t-s,o=n+this.arity;r[i]=s,e[i]=[];for(let r=n;r<o;r+=1)r!==t&&(r<this.nodes[i].length?e[i].push(this.nodes[i][r]):e[i].push(this.zeroes[i]));t=Math.floor(t/this.arity)}return{root:this.root,leaf:this.nodes[0][s],pathIndices:r,siblings:e}}verify(t){let e=t.leaf;for(let r=0;r<t.siblings.length;r+=1){const s=t.siblings[r].slice();s.splice(t.pathIndices[r],0,e),e=this.hashFn(s)}return t.root===e}toString(){return this.toTreeString()}toTreeString(){const t=this.getLayersAsObject();return n.default.asTree(t,!0)}}e.IncrementalMerkleTree=o,"undefined"!==typeof window&&(window.IncrementalMerkleTree=o),e.default=o},36365:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MerkleMountainRange=void 0;const i=r(19778),n=s(r(29517)),o=s(r(29731));class h extends o.default{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.default,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;super(),this.root=i.Buffer.alloc(0),this.size=0,this.width=0,this.hashes={},this.data={},e=e.map(this.bufferify),this.hashFn=this.bufferifyFn(t),this.hashLeafFn=r,this.peakBaggingFn=s,this.hashBranchFn=o;for(const i of e)this.append(i)}append(t){t=this.bufferify(t);const e=this.hashFn(t),r=this.bufferToHex(e);this.data[r]&&this.bufferToHex(this.hashFn(this.data[r]))===r||(this.data[r]=t);const s=this.hashLeaf(this.size+1,e);this.hashes[this.size+1]=s,this.width+=1;const i=this.getPeakIndexes(this.width);this.size=this.getSize(this.width);const n=[];for(let o=0;o<i.length;o++)n[o]=this._getOrCreateNode(i[o]);this.root=this.peakBagging(this.width,n)}hashLeaf(t,e){return e=this.bufferify(e),this.hashLeafFn?this.bufferify(this.hashLeafFn(t,e)):this.hashFn(i.Buffer.concat([this.bufferify(t),e]))}hashBranch(t,e,r){return this.hashBranchFn?this.bufferify(this.hashBranchFn(t,e,r)):this.hashFn(i.Buffer.concat([this.bufferify(t),this.bufferify(e),this.bufferify(r)]))}getPeaks(){const t=this.getPeakIndexes(this.width),e=[];for(let r=0;r<t.length;r++)e[r]=this.hashes[t[r]];return e}getLeafIndex(t){return t%2===1?this.getSize(t):this.getSize(t-1)+1}getPeakIndexes(t){const e=this.numOfPeaks(t),r=[];let s=0,i=0;for(let n=255;n>0&&!(0!==(t&1<<n-1)&&(i=i+(1<<n)-1,r[s++]=i,r.length>=e));n--);if(s!==r.length)throw new Error("invalid bit calculation");return r}numOfPeaks(t){let e=t,r=0;for(;e>0;)e%2===1&&r++,e>>=1;return r}peakBagging(t,e){const r=this.getSize(t);if(this.numOfPeaks(t)!==e.length)throw new Error("received invalid number of peaks");return 0!==t||e.length?this.peakBaggingFn?this.bufferify(this.peakBaggingFn(r,e)):this.hashFn(i.Buffer.concat([this.bufferify(r),...e.map(this.bufferify)])):i.Buffer.alloc(0)}getSize(t){return(t<<1)-this.numOfPeaks(t)}getRoot(){return this.root}getHexRoot(){return this.bufferToHex(this.getRoot())}getNode(t){return this.hashes[t]}mountainHeight(t){let e=1;for(;1<<e<=t+e;)e++;return e-1}heightAt(t){let e=t,r=0,s=0;for(;e>r;)e-=(1<<s)-1,s=this.mountainHeight(e),r=(1<<s)-1;return s-(r-e)}isLeaf(t){return 1===this.heightAt(t)}getChildren(t){const e=t-(1<<this.heightAt(t)-1),r=t-1;if(e===r)throw new Error("not a parent");return[e,r]}getMerkleProof(t){if(t>this.size)throw new Error("out of range");if(!this.isLeaf(t))throw new Error("not a leaf");const e=this.root,r=this.width,s=this.getPeakIndexes(this.width),i=[];let n=0;for(let u=0;u<s.length;u++)i[u]=this.hashes[s[u]],s[u]>=t&&0===n&&(n=s[u]);let o=0,h=0,a=this.heightAt(n);const f=[];for(;n!==t;)a--,[o,h]=this.getChildren(n),n=t<=o?o:h,f[a-1]=this.hashes[t<=o?h:o];return{root:e,width:r,peakBagging:i,siblings:f}}verify(t,e,r,s,i,n){s=this.bufferify(s);if(this.getSize(e)<r)throw new Error("index is out of range");if(!t.equals(this.peakBagging(e,i)))throw new Error("invalid root hash from the peaks");let o,h=0;const a=this.getPeakIndexes(e);for(let g=0;g<a.length;g++)if(a[g]>=r){o=i[g],h=a[g];break}if(!o)throw new Error("target not found");let f=n.length+1;const u=new Array(f);let l,c=0,d=0;for(;f>0&&(u[--f]=h,h!==r);)[c,d]=this.getChildren(h),h=r>c?d:c;for(;f<u.length;)h=u[f],l=0===f?this.hashLeaf(h,this.hashFn(s)):h-1===u[f-1]?this.hashBranch(h,n[f-1],l):this.hashBranch(h,l,n[f-1]),f++;if(!l.equals(o))throw new Error("hashed peak is invalid");return!0}peaksToPeakMap(t,e){const r={};let s=0,i=0,n=e.length;for(let o=1;o<=32;o++)s=32-o,i=1<<o-1,r[s]=0!==(t&i)?e[--n]:0;if(0!==n)throw new Error("invalid number of peaks");return r}peakMapToPeaks(t,e){const r=this.numOfPeaks(t),s=new Array(r);let i=0;for(let n=0;n<32;n++)0!==e[n]&&(s[i++]=e[n]);if(i!==r)throw new Error("invalid number of peaks");return s}peakUpdate(t,e,r){const s={},i=t+1;let n=this.getLeafIndex(i),o=this.hashLeaf(n,r),h=0,a=0,f=!1,u=!1,l=!1;for(let c=1;c<=32;c++)h=32-c,l?s[h]=e[h]:(a=1<<c-1,f=0!==(t&a),u=0!==(i&a),n++,f&&(o=this.hashBranch(n,e[h],o)),u?(s[h]=f?e[h]:o,l=!0):s[h]=0);return s}rollUp(t,e,r,s){if(!t.equals(this.peakBagging(e,r)))throw new Error("invalid root hash from the peaks");let i=e,n=this.peaksToPeakMap(e,r);for(let o=0;o<s.length;o++)n=this.peakUpdate(i,n,s[o]),i++;return this.peakBagging(i,this.peakMapToPeaks(i,n))}_getOrCreateNode(t){if(t>this.size)throw new Error("out of range");if(!this.hashes[t]){const[e,r]=this.getChildren(t),s=this._getOrCreateNode(e),i=this._getOrCreateNode(r);this.hashes[t]=this.hashBranch(t,s,i)}return this.hashes[t]}}e.MerkleMountainRange=h,"undefined"!==typeof window&&(window.MerkleMountainRange=h),e.default=h},54079:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MerkleSumTree=e.ProofStep=e.Leaf=e.Bucket=void 0;const s=r(29731);class i{constructor(t,e){this.size=BigInt(t),this.hashed=e,this.parent=null,this.left=null,this.right=null}}e.Bucket=i;e.Leaf=class{constructor(t,e,r){this.hashFn=t,this.rng=e.map((t=>BigInt(t))),this.data=r}getBucket(){let t;return t=this.data?this.hashFn(this.data):Buffer.alloc(32),new i(BigInt(this.rng[1])-BigInt(this.rng[0]),t)}};class n{constructor(t,e){this.bucket=t,this.right=e}}e.ProofStep=n;class o extends s.Base{constructor(t,e){super(),this.leaves=t,this.hashFn=e,o.checkConsecutive(t),this.buckets=[];for(const s of t)this.buckets.push(s.getBucket());let r=[];for(const s of this.buckets)r.push(s);for(;1!==r.length;){const t=[];for(;r.length;)if(r.length>=2){const e=r.shift(),s=r.shift(),n=e.size+s.size,o=this.hashFn(Buffer.concat([this.sizeToBuffer(e.size),this.bufferify(e.hashed),this.sizeToBuffer(s.size),this.bufferify(s.hashed)])),h=new i(n,o);s.parent=h,e.parent=s.parent,e.right=s,s.left=e,t.push(h)}else t.push(r.shift());r=t}this.root=r[0]}sizeToBuffer(t){const e=Buffer.alloc(8);return new DataView(e.buffer).setBigInt64(0,BigInt(t),!1),e}static checkConsecutive(t){let e=BigInt(0);for(const r of t){if(r.rng[0]!==e)throw new Error("leaf ranges are invalid");e=BigInt(r.rng[1])}}getProof(t){let e=this.buckets[Number(t)];const r=[];for(;e&&e.parent;){const t=!!e.right,s=e.right?e.right:e.left;e=e.parent,r.push(new n(s,t))}return r}sum(t){let e=BigInt(0);for(const r of t)e+=BigInt(r);return e}verifyProof(t,e,r){const s=[this.sum(r.filter((t=>!t.right)).map((t=>t.bucket.size))),BigInt(t.size)-this.sum(r.filter((t=>t.right)).map((t=>t.bucket.size)))];if(s[0]!==e.rng[0]||s[1]!==e.rng[1])return!1;let n,o=e.getBucket();for(const h of r)n=h.right?this.hashFn(Buffer.concat([this.sizeToBuffer(o.size),this.bufferify(o.hashed),this.sizeToBuffer(h.bucket.size),this.bufferify(h.bucket.hashed)])):this.hashFn(Buffer.concat([this.sizeToBuffer(h.bucket.size),this.bufferify(h.bucket.hashed),this.sizeToBuffer(o.size),this.bufferify(o.hashed)])),o=new i(BigInt(o.size)+BigInt(h.bucket.size),n);return o.size===t.size&&o.hashed.toString("hex")===t.hashed.toString("hex")}}e.MerkleSumTree=o,"undefined"!==typeof window&&(window.MerkleSumTree=o),e.default=o},17547:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MerkleTree=void 0;const i=r(19778),n=s(r(51089)),o=s(r(29517)),h=s(r(98842)),a=s(r(29731));class f extends a.default{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.default,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(super(),this.duplicateOdd=!1,this.concatenator=i.Buffer.concat,this.hashLeaves=!1,this.isBitcoinTree=!1,this.leaves=[],this.layers=[],this.sortLeaves=!1,this.sortPairs=!1,this.sort=!1,this.fillDefaultHash=null,this.complete=!1,r.complete){if(r.isBitcoinTree)throw new Error('option "complete" is incompatible with "isBitcoinTree"');if(r.duplicateOdd)throw new Error('option "complete" is incompatible with "duplicateOdd"')}if(this.isBitcoinTree=!!r.isBitcoinTree,this.hashLeaves=!!r.hashLeaves,this.sortLeaves=!!r.sortLeaves,this.sortPairs=!!r.sortPairs,this.complete=!!r.complete,r.fillDefaultHash)if("function"===typeof r.fillDefaultHash)this.fillDefaultHash=r.fillDefaultHash;else{if(!i.Buffer.isBuffer(r.fillDefaultHash)&&"string"!==typeof r.fillDefaultHash)throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');this.fillDefaultHash=(t,e)=>r.fillDefaultHash}this.sort=!!r.sort,this.sort&&(this.sortLeaves=!0,this.sortPairs=!0),this.duplicateOdd=!!r.duplicateOdd,r.concatenator&&(this.concatenator=r.concatenator),this.hashFn=this.bufferifyFn(e),this.processLeaves(t)}getOptions(){var t,e;return{complete:this.complete,isBitcoinTree:this.isBitcoinTree,hashLeaves:this.hashLeaves,sortLeaves:this.sortLeaves,sortPairs:this.sortPairs,sort:this.sort,fillDefaultHash:null!==(e=null===(t=this.fillDefaultHash)||void 0===t?void 0:t.toString())&&void 0!==e?e:null,duplicateOdd:this.duplicateOdd}}processLeaves(t){if(this.hashLeaves&&(t=t.map(this.hashFn)),this.leaves=t.map(this.bufferify),this.sortLeaves&&(this.leaves=this.leaves.sort(i.Buffer.compare)),this.fillDefaultHash)for(let e=this.leaves.length;e<Math.pow(2,Math.ceil(Math.log2(this.leaves.length)));e++)this.leaves.push(this.bufferify(this.fillDefaultHash(e,this.hashFn)));this.createHashes(this.leaves)}createHashes(t){for(this.layers=[t];t.length>1;){const e=this.layers.length;this.layers.push([]);const r=this.complete&&1===e&&!Number.isInteger(Math.log2(t.length))?2*t.length-Math.pow(2,Math.ceil(Math.log2(t.length))):t.length;for(let s=0;s<t.length;s+=2){if(s>=r){this.layers[e].push(...t.slice(r));break}if(s+1===t.length&&t.length%2===1){const r=t[t.length-1];let i=r;if(this.isBitcoinTree){i=this.hashFn(this.concatenator([n.default(r),n.default(r)])),i=n.default(this.hashFn(i)),this.layers[e].push(i);continue}if(!this.duplicateOdd){this.layers[e].push(t[s]);continue}}const o=t[s],h=s+1===t.length?o:t[s+1];let a=null;a=this.isBitcoinTree?[n.default(o),n.default(h)]:[o,h],this.sortPairs&&a.sort(i.Buffer.compare);let f=this.hashFn(this.concatenator(a));this.isBitcoinTree&&(f=n.default(this.hashFn(f))),this.layers[e].push(f)}t=this.layers[e]}}addLeaf(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(t=this.hashFn(t)),this.processLeaves(this.leaves.concat(t))}addLeaves(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(t=t.map(this.hashFn)),this.processLeaves(this.leaves.concat(t))}getLeaves(t){return Array.isArray(t)?(this.hashLeaves&&(t=t.map(this.hashFn),this.sortLeaves&&(t=t.sort(i.Buffer.compare))),this.leaves.filter((e=>-1!==this.bufferIndexOf(t,e,this.sortLeaves)))):this.leaves}getLeaf(t){return t<0||t>this.leaves.length-1?i.Buffer.from([]):this.leaves[t]}getLeafIndex(t){t=this.bufferify(t);const e=this.getLeaves();for(let r=0;r<e.length;r++){if(e[r].equals(t))return r}return-1}getLeafCount(){return this.leaves.length}getHexLeaves(){return this.leaves.map((t=>this.bufferToHex(t)))}static marshalLeaves(t){return JSON.stringify(t.map((t=>f.bufferToHex(t))),null,2)}static unmarshalLeaves(t){let e=null;if("string"===typeof t)e=JSON.parse(t);else{if(!(t instanceof Object))throw new Error("Expected type of string or object");e=t}if(!e)return[];if(!Array.isArray(e))throw new Error("Expected JSON string to be array");return e.map(f.bufferify)}getLayers(){return this.layers}getHexLayers(){return this.layers.reduce(((t,e)=>(Array.isArray(e)?t.push(e.map((t=>this.bufferToHex(t)))):t.push(e),t)),[])}getLayersFlat(){const t=this.layers.reduce(((t,e)=>(Array.isArray(e)?t.unshift(...e):t.unshift(e),t)),[]);return t.unshift(i.Buffer.from([0])),t}getHexLayersFlat(){return this.getLayersFlat().map((t=>this.bufferToHex(t)))}getLayerCount(){return this.getLayers().length}getRoot(){return 0===this.layers.length?i.Buffer.from([]):this.layers[this.layers.length-1][0]||i.Buffer.from([])}getHexRoot(){return this.bufferToHex(this.getRoot())}getProof(t,e){if("undefined"===typeof t)throw new Error("leaf is required");t=this.bufferify(t);const r=[];if(!Number.isInteger(e)){e=-1;for(let r=0;r<this.leaves.length;r++)0===i.Buffer.compare(t,this.leaves[r])&&(e=r)}if(e<=-1)return[];for(let s=0;s<this.layers.length;s++){const t=this.layers[s],i=e%2,n=i?e-1:this.isBitcoinTree&&e===t.length-1&&s<this.layers.length-1?e:e+1;n<t.length&&r.push({position:i?"left":"right",data:t[n]}),e=e/2|0}return r}getHexProof(t,e){return this.getProof(t,e).map((t=>this.bufferToHex(t.data)))}getProofs(){const t=[];return this.getProofsDFS(this.layers.length-1,0,[],t),t}getProofsDFS(t,e,r,s){const i=e%2;if(-1===t)return void(i||s.push([...r].reverse()));if(e>=this.layers[t].length)return;const n=this.layers[t],o=i?e-1:e+1;let h=!1;o<n.length&&(h=!0,r.push({position:i?"left":"right",data:n[o]}));const a=2*e,f=2*e+1;this.getProofsDFS(t-1,a,r,s),this.getProofsDFS(t-1,f,r,s),h&&r.splice(r.length-1,1)}getHexProofs(){return this.getProofs().map((t=>this.bufferToHex(t.data)))}getPositionalHexProof(t,e){return this.getProof(t,e).map((t=>["left"===t.position?0:1,this.bufferToHex(t.data)]))}static marshalProof(t){const e=t.map((t=>"string"===typeof t?t:i.Buffer.isBuffer(t)?f.bufferToHex(t):{position:t.position,data:f.bufferToHex(t.data)}));return JSON.stringify(e,null,2)}static unmarshalProof(t){let e=null;if("string"===typeof t)e=JSON.parse(t);else{if(!(t instanceof Object))throw new Error("Expected type of string or object");e=t}if(!e)return[];if(!Array.isArray(e))throw new Error("Expected JSON string to be array");return e.map((t=>{if("string"===typeof t)return f.bufferify(t);if(t instanceof Object)return{position:t.position,data:f.bufferify(t.data)};throw new Error("Expected item to be of type string or object")}))}static marshalTree(t){const e=t.getHexRoot(),r=t.leaves.map((t=>f.bufferToHex(t))),s=t.getHexLayers(),i=t.getOptions();return JSON.stringify({options:i,root:e,layers:s,leaves:r},null,2)}static unmarshalTree(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.default,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=null;if("string"===typeof t)s=JSON.parse(t);else{if(!(t instanceof Object))throw new Error("Expected type of string or object");s=t}if(!s)throw new Error("could not parse json");return r=Object.assign({},s.options||{},r),new f(s.leaves,e,r)}getProofIndices(t,e){const r=Math.pow(2,e);let s=new Set;for(const a of t){let t=r+a;for(;t>1;)s.add(1^t),t=t/2|0}const i=t.map((t=>r+t)),n=Array.from(s).sort(((t,e)=>t-e)).reverse();s=i.concat(n);const o=new Set,h=[];for(let a of s)if(!o.has(a))for(h.push(a);a>1&&(o.add(a),o.has(1^a));)a=a/2|0;return h.filter((e=>!t.includes(e-r)))}getProofIndicesForUnevenTree(t,e){const r=Math.ceil(Math.log2(e)),s=[];for(let o=0;o<r;o++){e%2!==0&&s.push({index:o,leavesCount:e}),e=Math.ceil(e/2)}const i=[];let n=t;for(let o=0;o<r;o++){let t=n.map((t=>t%2===0?t+1:t-1)).filter((t=>!n.includes(t)));const e=s.find((t=>{let{index:e}=t;return e===o}));e&&n.includes(e.leavesCount-1)&&(t=t.slice(0,-1)),i.push(t),n=[...new Set(n.map((t=>t%2===0?t/2:t%2===0?(t+1)/2:(t-1)/2)))]}return i}getMultiProof(t,e){this.complete||console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true"),e||(e=t,t=this.getLayersFlat());if(this.isUnevenTree()&&e.every(Number.isInteger))return this.getMultiProofForUnevenTree(e);if(!e.every(Number.isInteger)){let t=e;this.sortPairs&&(t=t.sort(i.Buffer.compare));let r=t.map((t=>this.bufferIndexOf(this.leaves,t,this.sortLeaves))).sort(((t,e)=>t===e?0:t>e?1:-1));if(!r.every((t=>-1!==t)))throw new Error("Element does not exist in Merkle tree");const s=[],n=[];let o=[];for(let e=0;e<this.layers.length;e++){const t=this.layers[e];for(let e=0;e<r.length;e++){const i=r[e],h=this.getPairNode(t,i);s.push(t[i]),h&&n.push(h),o.push(i/2|0)}r=o.filter(((t,e,r)=>r.indexOf(t)===e)),o=[]}return n.filter((t=>!s.includes(t)))}return this.getProofIndices(e,Math.log2(t.length/2|0)).map((e=>t[e]))}getMultiProofForUnevenTree(t,e){e||(e=t,t=this.getLayers());let r=[],s=e;for(const i of t){const t=[];for(const r of s){if(r%2===0){const e=r+1;if(!s.includes(e)&&i[e]){t.push(i[e]);continue}}const e=r-1;s.includes(e)||!i[e]||t.push(i[e])}r=r.concat(t);const e=new Set;for(const r of s)r%2!==0?r%2!==0?e.add((r-1)/2):e.add((r+1)/2):e.add(r/2);s=Array.from(e)}return r}getHexMultiProof(t,e){return this.getMultiProof(t,e).map((t=>this.bufferToHex(t)))}getProofFlags(t,e){if(!Array.isArray(t)||t.length<=0)throw new Error("Invalid Inputs!");let r;if(r=t.every(Number.isInteger)?[...t].sort(((t,e)=>t===e?0:t>e?1:-1)):t.map((t=>this.bufferIndexOf(this.leaves,t,this.sortLeaves))).sort(((t,e)=>t===e?0:t>e?1:-1)),!r.every((t=>-1!==t)))throw new Error("Element does not exist in Merkle tree");const s=e.map((t=>this.bufferify(t))),i=[],n=[];for(let o=0;o<this.layers.length;o++){const t=this.layers[o];r=r.reduce(((e,r)=>{if(!i.includes(t[r])){const e=this.getPairNode(t,r),o=s.includes(t[r])||s.includes(e);e&&n.push(!o),i.push(t[r]),i.push(e)}return e.push(r/2|0),e}),[])}return n}verify(t,e,r){let s=this.bufferify(e);if(r=this.bufferify(r),!Array.isArray(t)||!e||!r)return!1;for(let o=0;o<t.length;o++){const e=t[o];let r=null,h=null;if("string"===typeof e)r=this.bufferify(e),h=!0;else if(Array.isArray(e))h=0===e[0],r=this.bufferify(e[1]);else if(i.Buffer.isBuffer(e))r=e,h=!0;else{if(!(e instanceof Object))throw new Error("Expected node to be of type string or object");r=this.bufferify(e.data),h="left"===e.position}const a=[];this.isBitcoinTree?(a.push(n.default(s)),a[h?"unshift":"push"](n.default(r)),s=this.hashFn(this.concatenator(a)),s=n.default(this.hashFn(s))):this.sortPairs?-1===i.Buffer.compare(s,r)?(a.push(s,r),s=this.hashFn(this.concatenator(a))):(a.push(r,s),s=this.hashFn(this.concatenator(a))):(a.push(s),a[h?"unshift":"push"](r),s=this.hashFn(this.concatenator(a)))}return 0===i.Buffer.compare(s,r)}verifyMultiProof(t,e,r,s,n){if(this.isUnevenTree())return this.verifyMultiProofForUnevenTree(t,e,r,s,n);const o=Math.ceil(Math.log2(s));t=this.bufferify(t),r=r.map((t=>this.bufferify(t))),n=n.map((t=>this.bufferify(t)));const h={};for(const[i,u]of this.zip(e,r))h[Math.pow(2,o)+i]=u;for(const[i,u]of this.zip(this.getProofIndices(e,o),n))h[i]=u;let a=Object.keys(h).map((t=>+t)).sort(((t,e)=>t-e));a=a.slice(0,a.length-1);let f=0;for(;f<a.length;){const t=a[f];if(t>=2&&{}.hasOwnProperty.call(h,1^t)){let e=[h[t-t%2],h[t-t%2+1]];this.sortPairs&&(e=e.sort(i.Buffer.compare));const r=e[1]?this.hashFn(this.concatenator(e)):e[0];h[t/2|0]=r,a.push(t/2|0)}f+=1}return!e.length||{}.hasOwnProperty.call(h,1)&&h[1].equals(t)}verifyMultiProofWithFlags(t,e,r,s){t=this.bufferify(t),e=e.map(this.bufferify),r=r.map(this.bufferify);const n=e.length,o=s.length,h=[];let a=0,f=0,u=0;for(let l=0;l<o;l++){const t=[s[l]?a<n?e[a++]:h[f++]:r[u++],a<n?e[a++]:h[f++]].sort(i.Buffer.compare);h[l]=this.hashFn(this.concatenator(t))}return 0===i.Buffer.compare(h[o-1],t)}verifyMultiProofForUnevenTree(t,e,r,s,i){t=this.bufferify(t),r=r.map((t=>this.bufferify(t))),i=i.map((t=>this.bufferify(t)));const n=this.calculateRootForUnevenTree(e,r,s,i);return t.equals(n)}getDepth(){return this.getLayers().length-1}getLayersAsObject(){const t=this.getLayers().map((t=>t.map((t=>this.bufferToHex(t,!1))))),e=[];for(let r=0;r<t.length;r++){const s=[];for(let i=0;i<t[r].length;i++){const n={[t[r][i]]:null};if(e.length){n[t[r][i]]={};const s=e.shift(),o=Object.keys(s)[0];if(n[t[r][i]][o]=s[o],e.length){const s=e.shift(),o=Object.keys(s)[0];n[t[r][i]][o]=s[o]}}s.push(n)}e.push(...s)}return e[0]}static verify(t,e,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.default;return new f([],s,arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}).verify(t,e,r)}static getMultiProof(t,e){return new f([]).getMultiProof(t,e)}resetTree(){this.leaves=[],this.layers=[]}getPairNode(t,e){const r=e%2===0?e+1:e-1;return r<t.length?t[r]:null}toTreeString(){const t=this.getLayersAsObject();return h.default.asTree(t,!0)}toString(){return this.toTreeString()}isUnevenTree(t){const e=(null===t||void 0===t?void 0:t.length)||this.getDepth();return!this.isPowOf2(e)}isPowOf2(t){return t&&!(t&t-1)}calculateRootForUnevenTree(t,e,r,s){const i=this.zip(t,e).sort(((t,e)=>{let[r]=t,[s]=e;return r-s})),n=i.map((t=>{let[e]=t;return e})),o=this.getProofIndicesForUnevenTree(n,r);let h=0;const a=[];for(let u=0;u<o.length;u++){const t=o[u],e=h;h+=t.length,a[u]=this.zip(t,s.slice(e,h))}const f=[i];for(let u=0;u<a.length;u++){const t=a[u].concat(f[u]).sort(((t,e)=>{let[r]=t,[s]=e;return r-s})).map((t=>{let[,e]=t;return e})),e=f[u].map((t=>{let[e]=t;return e})),r=[...new Set(e.map((t=>t%2===0?t/2:t%2===0?(t+1)/2:(t-1)/2)))],s=[];for(let i=0;i<r.length;i++){const e=r[i],n=t[2*i],o=t[2*i+1],h=o?this.hashFn(this.concatenator([n,o])):n;s.push([e,h])}f.push(s)}return f[f.length-1][0][1]}}e.MerkleTree=f,"undefined"!==typeof window&&(window.MerkleTree=f),e.default=f},20737:function(t,e,r){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MerkleTree=void 0;const i=s(r(17547));e.MerkleTree=i.default;var n=r(36365);Object.defineProperty(e,"MerkleMountainRange",{enumerable:!0,get:function(){return n.MerkleMountainRange}});var o=r(98628);Object.defineProperty(e,"IncrementalMerkleTree",{enumerable:!0,get:function(){return o.IncrementalMerkleTree}});var h=r(54079);Object.defineProperty(e,"MerkleSumTree",{enumerable:!0,get:function(){return h.MerkleSumTree}}),e.default=i.default}}]);
//# sourceMappingURL=1057.2e3d039d.chunk.js.map