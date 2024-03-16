"use strict";(self.webpackChunkpepecoin_web=self.webpackChunkpepecoin_web||[]).push([[3464],{64622:(t,a,e)=>{e.d(a,{D:()=>y,F:()=>p,I:()=>i,a:()=>c,b:()=>h,c:()=>l,f:()=>d,g:()=>f,u:()=>u});var r=e(45241),n=e(49716),o=e(2257),s=e(34029);const i=(()=>n.arrayify("0x80ac58cd"))(),c=(()=>n.arrayify("0xd9b67a26"))(),p={name:"Failed to load NFT metadata"};async function d(t,a,e){if(a.startsWith("data:application/json;base64")&&"undefined"!==typeof Buffer){const e=a.split(",")[1],n=JSON.parse(Buffer.from(e,"base64").toString("utf-8"));return r.C.parse({...n,id:o.O$.from(t).toString(),uri:a})}const s=a.replace("{id}",n.hexZeroPad(o.O$.from(t).toHexString(),32).slice(2));let i;try{i=await e.downloadJSON(s)}catch(c){const r=a.replace("{id}",o.O$.from(t).toString());try{i=await e.downloadJSON(r)}catch(d){console.warn("failed to get token metadata: ".concat(JSON.stringify({tokenId:t.toString(),tokenUri:a})," -- falling back to default metadata")),i=p}}return r.C.parse({...i,id:o.O$.from(t).toString(),uri:a})}async function l(t,a,n,l){let h;const u=(await e.e(5025).then(e.t.bind(e,25025,19))).default,f=new s.Contract(t,u,a),[y,w]=await Promise.all([f.supportsInterface(i),f.supportsInterface(c)]);if(y){const r=(await Promise.resolve().then(e.t.bind(e,34161,19))).default,o=new s.Contract(t,r,a);h=await o.tokenURI(n)}else{if(!w)throw Error("Contract must implement ERC 1155 or ERC 721.");{const r=(await Promise.resolve().then(e.t.bind(e,50266,19))).default,o=new s.Contract(t,r,a);h=await o.uri(n)}}return h?d(n,h,l):r.C.parse({...p,id:o.O$.from(n).toString(),uri:""})}async function h(t,a){return"string"===typeof t?t:await a.upload(r.a.parse(t))}async function u(t,a,e,n){if(function(t){return void 0===t.find((t=>"string"!==typeof t))}(t))return t;if(function(t){return void 0===t.find((t=>"object"!==typeof t))}(t)){return await a.uploadBatch(t.map((t=>r.a.parse(t))),{rewriteFileNames:{fileStartNumber:e||0},onProgress:null===n||void 0===n?void 0:n.onProgress})}throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function f(t){const a=t[0].substring(0,t[0].lastIndexOf("/"));for(let e=0;e<t.length;e++){const r=t[e].substring(0,t[e].lastIndexOf("/"));if(a!==r)throw new Error("Can only create batches with the same base URI for every entry in the batch. Expected '".concat(a,"' but got '").concat(r,"'"))}return a.replace(/\/$/,"")+"/"}const y=100},53464:(t,a,e)=>{e.d(a,{C:()=>m,D:()=>I,a:()=>b,c:()=>W});var r=e(4942),n=e(53064),o=e(77263),s=e(91195),i=e(1606),c=e(83374),p=e(84530),d=e(65054),l=e(49716),h=e(2257),u=e(34029),f=e(45241),y=e(64622),w=e(81654),g=e(74745);class m{constructor(t,a){(0,r.Z)(this,"featureName",s.d1.name),(0,r.Z)(this,"setDefaultRoyaltyInfo",(0,o.c)((async t=>{const a=await this.metadata.get(),e=await this.metadata.parseInputMetadata({...a,...t}),r=await this.metadata._parseAndUploadMetadata(e);if((0,n.h)("setContractURI",this.contractWrapper)){const t=new i.C(this.contractWrapper),a=[t.encode("setDefaultRoyaltyInfo",[e.fee_recipient,e.seller_fee_basis_points]),t.encode("setContractURI",[r])];return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a],parse:t=>({receipt:t,data:()=>this.getDefaultRoyaltyInfo()})})}throw new Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.")}))),(0,r.Z)(this,"setTokenRoyaltyInfo",(0,o.c)((async(t,a)=>{const e=s.bD.parse(a);return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setRoyaltyInfoForToken",args:[t,e.fee_recipient,e.seller_fee_basis_points],parse:t=>({receipt:t,data:()=>this.getDefaultRoyaltyInfo()})})}))),this.contractWrapper=t,this.metadata=a}async getDefaultRoyaltyInfo(){const[t,a]=await this.contractWrapper.read("getDefaultRoyaltyInfo",[]);return s.bD.parseAsync({fee_recipient:t,seller_fee_basis_points:a})}async getTokenRoyaltyInfo(t){const[a,e]=await this.contractWrapper.read("getRoyaltyInfoForToken",[t]);return s.bD.parseAsync({fee_recipient:a,seller_fee_basis_points:e})}}class I{constructor(t,a,e,n){(0,r.Z)(this,"createDelayedRevealBatch",(0,o.c)((async(t,a,e,r)=>{if(!e)throw new Error("Password is required");const n=await this.storage.uploadBatch([f.a.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),s=(0,y.g)(n),i=await this.nextTokenIdToMintFn(),l=await this.storage.uploadBatch(a.map((t=>f.a.parse(t))),{onProgress:null===r||void 0===r?void 0:r.onProgress,rewriteFileNames:{fileStartNumber:i.toNumber()}}),h=(0,y.g)(l),u=await this.contractWrapper.read("getBaseURICount",[]),w=await this.hashDelayRevealPassword(u,e),g=await this.contractWrapper.read("encryptDecrypt",[c.Y0(h),w]);let m;if(await this.isLegacyContract())m=g;else{const t=await this.contractWrapper.getChainID(),a=p.keccak256(["bytes","bytes","uint256"],[c.Y0(h),w,t]);m=d.$.encode(["bytes","bytes32"],[g,a])}return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[l.length,s.endsWith("/")?s:"".concat(s,"/"),m],parse:t=>{const a=this.contractWrapper.parseLogs("TokensLazyMinted",null===t||void 0===t?void 0:t.logs),e=a[0].args.startTokenId,r=a[0].args.endTokenId,n=[];for(let o=e;o.lte(r);o=o.add(1))n.push({id:o,receipt:t});return n}})}))),(0,r.Z)(this,"reveal",(0,o.c)((async(t,a)=>{if(!a)throw new Error("Password is required");const e=await this.hashDelayRevealPassword(t,a);try{const a=await this.contractWrapper.callStatic().reveal(t,e);if(!a.includes("://")||!a.endsWith("/"))throw new Error("invalid password")}catch(r){throw new Error("invalid password")}return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,e]})}))),this.featureName=e,this.nextTokenIdToMintFn=n,this.contractWrapper=t,this.storage=a}async getBatchesToReveal(){const t=await this.contractWrapper.read("getBaseURICount",[]);if(t.isZero())return[];const a=Array.from(Array(t.toNumber()).keys()),e=await Promise.all(a.map((t=>{if((0,n.h)("getBatchIdAtIndex",this.contractWrapper))return this.contractWrapper.read("getBatchIdAtIndex",[t]);if((0,n.h)("baseURIIndices",this.contractWrapper))return this.contractWrapper.read("baseURIIndices",[t]);throw new Error("Contract does not have getBatchIdAtIndex or baseURIIndices.")}))),r=e.slice(0,e.length-1),o=await Promise.all(Array.from([0,...r]).map((t=>this.getNftMetadata(t.toString())))),s=await this.isLegacyContract(),i=(await Promise.all(Array.from([...e]).map((t=>s?this.getLegacyEncryptedData(t):this.contractWrapper.read("encryptedData",[t]))))).map((t=>{if(l.hexDataLength(t)>0){if(s)return t;return d.$.decode(["bytes","bytes32"],t)[0]}return t}));return o.map(((t,a)=>({batchId:h.O$.from(a),batchUri:t.uri,placeholderMetadata:t}))).filter(((t,a)=>l.hexDataLength(i[a])>0))}async hashDelayRevealPassword(t,a){const e=await this.contractWrapper.getChainID(),r=this.contractWrapper.address;return p.keccak256(["string","uint256","uint256","address"],[a,e,t,r])}async getNftMetadata(t){return(0,y.c)(this.contractWrapper.address,this.contractWrapper.getProvider(),t,this.storage)}async isLegacyContract(){if((0,n.h)("contractVersion",this.contractWrapper))try{return await this.contractWrapper.read("contractVersion",[])<=2}catch(t){return!1}return!1}async getLegacyEncryptedData(t){const a=(await e.e(8839).then(e.t.bind(e,98839,19))).default,r=new u.Contract(this.contractWrapper.address,a,this.contractWrapper.getProvider()),n=await r.functions.encryptedBaseURI(t);return n.length>0?n[0]:"0x"}}async function W(t,a,e,r,n){let o={};const i=r||s.aV,c=(await(0,g.n)(t.getProvider(),a,i)).mul(e);return c.gt(0)&&(i===s.aV?o={value:c}:i!==s.aV&&n&&await(0,w.a)(t,i,c,e,0)),o}class b{constructor(t){(0,r.Z)(this,"featureName",s.d2.name),(0,r.Z)(this,"set",(0,o.c)((async t=>{const a=await(0,s.aM)(t);return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setOwner",args:[a]})}))),this.contractWrapper=t}async get(){return this.contractWrapper.read("owner",[])}}}}]);
//# sourceMappingURL=3464.33d9b46d.chunk.js.map