"use strict";(self.webpackChunkpepecoin_web=self.webpackChunkpepecoin_web||[]).push([[1654],{190:(e,t,a)=>{a.d(t,{E:()=>l,R:()=>s,S:()=>o,a:()=>c});var n=a(2257),r=a(60874),i=a(91195);const s=(()=>r.z.union([r.z.date().transform((e=>n.O$.from(Math.floor(e.getTime()/1e3)))),r.z.number().transform((e=>n.O$.from(e)))]))(),o=(()=>s.default(new Date(0)))(),l=(()=>s.default(new Date(Date.now()+31536e7)))();function c(e,t){if(!e)throw new i.x(t);return e}},45241:(e,t,a)=>{a.d(t,{B:()=>l,C:()=>d,N:()=>m,a:()=>c,s:()=>u});var n=a(91195),r=a(60874),i=a(1606);const s=(()=>r.z.object({}).catchall(r.z.union([n.cx,r.z.unknown()])))(),o=(()=>r.z.union([r.z.array(s),s]).optional().nullable())(),l=(()=>r.z.object({name:r.z.union([r.z.string(),r.z.number()]).optional().nullable(),description:r.z.string().nullable().optional().nullable(),image:n.cy.nullable().optional(),animation_url:n.cy.optional().nullable()}))(),c=(()=>l.extend({external_url:n.cy.nullable().optional(),background_color:n.cz.optional().nullable(),properties:o,attributes:o}).catchall(r.z.union([n.cx,r.z.unknown()])))(),m=(()=>r.z.union([c,r.z.string()]))(),d=(()=>c.extend({id:r.z.string(),uri:r.z.string(),image:r.z.string().nullable().optional(),external_url:r.z.string().nullable().optional(),animation_url:r.z.string().nullable().optional()}))();async function u(e,t,r,s){if(!(0,i.i)(r)){const i=(await Promise.resolve().then(a.t.bind(a,49242,19))).default,o=e.getSigner(),l=e.getProvider(),c=new n.cr(o||l,r,i,e.options,e.storage),m=await e.getSignerAddress(),d=e.address;return(await c.read("allowance",[m,d])).lt(t)&&await c.sendTransaction("approve",[d,t]),s}s.value=t}},81654:(e,t,a)=>{a.d(t,{A:()=>T,B:()=>$,C:()=>V,D:()=>W,E:()=>g,F:()=>k,H:()=>L,I:()=>H,M:()=>ee,S:()=>J,a:()=>A,f:()=>P,k:()=>_,o:()=>F,p:()=>G,q:()=>Q,r:()=>X,s:()=>te,t:()=>ae,u:()=>ne,v:()=>j,w:()=>v,x:()=>z,y:()=>S,z:()=>R});var n=a(75422),r=a(6222),i=a(84530),s=a(68624),o=a(88062),l=a(2257),c=a(49716),m=a(83374),d=a(91195),u=a(1606),p=a(74745),y=a(7106),h=a(190),f=a(60874),w=a(45241),b=a(54261);function g(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot,pricePerToken:e.pricePerToken,currency:e.currency,quantityLimitPerTransaction:e.maxClaimablePerWallet,waitTimeInSecondsBetweenClaims:e.waitTimeInSecondsBetweenClaims||0}}function k(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot,pricePerToken:e.pricePerToken,currency:e.currency,quantityLimitPerWallet:e.maxClaimablePerWallet,metadata:e.metadata||""}}function S(e,t){return"unlimited"===e?n.Bz:r.parseUnits(e,t)}async function C(e){const t=25e3,a=Array.from({length:Math.ceil(e.length/t)},((a,n)=>e.slice(n*t,n*t+t))),n=[],r=await Promise.all(a.map((e=>d.bK.parseAsync(e))));for(const i of r)n.push(...i);return n}let T=function(e){return e[e.V1=1]="V1",e[e.V2=2]="V2",e}({});class x{constructor(e,t,a,n,r){this.storage=e,this.shardNybbles=n,this.baseUri=t,this.originalEntriesUri=a,this.tokenDecimals=r,this.shards={},this.trees={}}static async fromUri(e,t){try{const a=await t.downloadJSON(e);if(a.isShardedMerkleTree)return x.fromShardedMerkleTreeInfo(a,t)}catch(a){return}}static async fromShardedMerkleTreeInfo(e,t){return new x(t,e.baseUri,e.originalEntriesUri,e.shardNybbles,e.tokenDecimals)}static hashEntry(e,t,a,n){switch(n){case T.V1:return i.keccak256(["address","uint256"],[e.address,S(e.maxClaimable,t)]);case T.V2:return i.keccak256(["address","uint256","uint256","address"],[e.address,S(e.maxClaimable,t),S(e.price||"unlimited",a),e.currencyAddress||s.d])}}static async fetchAndCacheDecimals(e,t,a){if(!a)return 18;let n=e[a];if(void 0===n){n=(await(0,u.f)(t,a)).decimals,e[a]=n}return n}static async buildAndUpload(e,t,a,n,r){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:2;const s=await C(e),l={};for(const o of s){const e=o.address.slice(2,2+i).toLowerCase();void 0===l[e]&&(l[e]=[]),l[e].push(o)}const c={},m=await Promise.all(Object.entries(l).map((async e=>{let[n,i]=e;return[n,new y.MerkleTree(await Promise.all(i.map((async e=>{const n=await x.fetchAndCacheDecimals(c,a,e.currencyAddress);return x.hashEntry(e,t,n,r)}))),o.keccak256,{sort:!0}).getHexRoot()]}))),d=Object.fromEntries(m),u=new y.MerkleTree(Object.values(d),o.keccak256,{sort:!0}),p=[];for(const[o,y]of Object.entries(l)){const e={proofs:u.getProof(d[o]).map((e=>"0x"+e.data.toString("hex"))),entries:y};p.push({data:JSON.stringify(e),name:"".concat(o,".json")})}const h=await n.uploadBatch(p),f=h[0].slice(0,h[0].lastIndexOf("/")),w=await n.upload(s),b={merkleRoot:u.getHexRoot(),baseUri:f,originalEntriesUri:w,shardNybbles:i,tokenDecimals:t,isShardedMerkleTree:!0};return{shardedMerkleInfo:b,uri:await n.upload(b)}}async getProof(e,t,a){const n=e.slice(2,2+this.shardNybbles).toLowerCase();let r=this.shards[n];const i={};if(void 0===r)try{const e=this.baseUri.endsWith("/")?this.baseUri:"".concat(this.baseUri,"/");r=this.shards[n]=await this.storage.downloadJSON("".concat(e).concat(n,".json"));const s=await Promise.all(r.entries.map((async e=>{const n=await x.fetchAndCacheDecimals(i,t,e.currencyAddress);return x.hashEntry(e,this.tokenDecimals,n,a)})));this.trees[n]=new y.MerkleTree(s,o.keccak256,{sort:!0})}catch(u){return null}const s=r.entries.find((t=>t.address.toLowerCase()===e.toLowerCase()));if(!s)return null;const l=await x.fetchAndCacheDecimals(i,t,s.currencyAddress),c=x.hashEntry(s,this.tokenDecimals,l,a),m=this.trees[n].getProof(c).map((e=>"0x"+e.data.toString("hex")));return d.bL.parseAsync({...s,proof:m.concat(r.proofs)})}async getAllEntries(){try{return await this.storage.downloadJSON(this.originalEntriesUri)}catch(e){return console.warn("Could not fetch original snapshot entries",e),[]}}}async function P(e,t,a,n,r,i){if(!a)return null;const s=a[t];if(s){const a=await r.downloadJSON(s);if(a.isShardedMerkleTree&&a.merkleRoot===t){const t=await x.fromShardedMerkleTreeInfo(a,r);return await t.getProof(e,n,i)}const o=await d.bM.parseAsync(a);if(t===o.merkleRoot)return o.claims.find((t=>t.address.toLowerCase()===e.toLowerCase()))||null}return null}function v(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot.toString(),pricePerToken:e.pricePerToken,currency:e.currency,maxClaimablePerWallet:e.quantityLimitPerTransaction,waitTimeInSecondsBetweenClaims:e.waitTimeInSecondsBetweenClaims}}function z(e){return{startTimestamp:e.startTimestamp,maxClaimableSupply:e.maxClaimableSupply,supplyClaimed:e.supplyClaimed,merkleRoot:e.merkleRoot.toString(),pricePerToken:e.pricePerToken,currency:e.currency,maxClaimablePerWallet:e.quantityLimitPerWallet,waitTimeInSecondsBetweenClaims:0,metadata:e.metadata}}async function A(e,t,n,i,s){const o=e.getSigner(),c=e.getProvider(),m=(await Promise.resolve().then(a.t.bind(a,49242,19))).default,u=new d.cr(o||c,t,m,e.options,e.storage),p=await e.getSignerAddress(),y=e.address,h=await u.read("allowance",[p,y]),f=l.O$.from(n).mul(l.O$.from(i)).div(r.parseUnits("1",s));h.lt(f)&&await u.sendTransaction("approve",[y,h.add(f)])}async function R(e,t,a,i,o,m,d,y,h){let f=S(a.maxClaimablePerWallet,o),w=[c.hexZeroPad([0],32)],b=a.price,g=a.currencyAddress;try{if(!a.merkleRootHash.toString().startsWith(s.d)){const t=await P(e,a.merkleRootHash.toString(),await i(),m.getProvider(),d,h);if(t)w=t.proof,f="unlimited"===t.maxClaimable?n.Bz:r.parseUnits(t.maxClaimable,o),b=void 0===t.price||"unlimited"===t.price?n.Bz:await(0,p.n)(m.getProvider(),t.price,t.currencyAddress||s.d),g=t.currencyAddress||s.d;else if(h===T.V1)throw new Error("No claim found for this address")}}catch(v){if("No claim found for this address"===(null===v||void 0===v?void 0:v.message))throw v;console.warn("failed to check claim condition merkle root hash, continuing anyways",v)}const k=await m.getCallOverrides()||{},C=b.toString()!==n.Bz.toString()?b:a.price,x=g!==s.d?g:a.currencyAddress;return C.gt(0)&&((0,u.i)(x)?k.value=l.O$.from(C).mul(t).div(r.parseUnits("1",o)):y&&await A(m,x,C,t,o)),{overrides:k,proofs:w,maxClaimable:f,price:C,currencyAddress:x,priceInProof:b,currencyAddressInProof:g}}const N=(()=>f.z.object({name:f.z.string(),symbol:f.z.string(),decimals:f.z.number()}))(),I=(()=>N.extend({value:d.b5,displayValue:f.z.string()}))(),E=(()=>f.z.object({name:f.z.string().optional()}).catchall(f.z.unknown()))(),O=(()=>f.z.object({startTime:h.S,currencyAddress:f.z.string().default(d.aV),price:d.cw.default(0),maxClaimableSupply:d.cA,maxClaimablePerWallet:d.cA,waitInSeconds:d.b6.default(0),merkleRootHash:d.cB.default(c.hexZeroPad([0],32)),snapshot:f.z.optional(d.bK).nullable(),metadata:E.optional()}))(),B=(()=>f.z.array(O))(),M=(()=>O.extend({availableSupply:d.cA,currentMintSupply:d.cA,currencyMetadata:I.default({value:l.O$.from("0"),displayValue:"0",symbol:"",decimals:18,name:""}),price:d.b5,waitInSeconds:d.b5,startTime:d.b5.transform((e=>new Date(1e3*e.toNumber()))),snapshot:d.bK.optional().nullable()}))();async function U(e,t,a,n,r){const i=[],s=await Promise.all(e.map((async e=>{if(e.snapshot&&e.snapshot.length>0){const s=await async function(e,t,a,n,r){const i=await C(e),s=i.map((e=>e.address));if(new Set(s).size<s.length)throw new d.s;const o=await x.buildAndUpload(i,t,a,n,r);return{merkleRoot:o.shardedMerkleInfo.merkleRoot,snapshotUri:o.uri}}(e.snapshot,t,a,n,r);i.push(s),e.merkleRootHash=s.merkleRoot}else e.merkleRootHash=c.hexZeroPad([0],32);return e})));return{inputsWithSnapshots:s,snapshotInfos:i}}async function W(e,t,a,n,r){const{inputsWithSnapshots:i,snapshotInfos:o}=await U(e,t,a,n,r),c=await B.parseAsync(i),m=(await Promise.all(c.map((e=>async function(e,t,a,n){const r=e.currencyAddress===s.d?d.aV:e.currencyAddress,i=S(e.maxClaimableSupply,t),o=S(e.maxClaimablePerWallet,t);let l;return e.metadata&&(l="string"===typeof e.metadata?e.metadata:await n.upload(e.metadata)),{startTimestamp:e.startTime,maxClaimableSupply:i,supplyClaimed:0,maxClaimablePerWallet:o,pricePerToken:await(0,p.n)(a,e.price,r),currency:r,merkleRoot:e.merkleRootHash.toString(),waitTimeInSecondsBetweenClaims:e.waitInSeconds||0,metadata:l}}(e,t,a,n))))).sort(((e,t)=>function(e,t){const a=l.O$.from(e),n=l.O$.from(t);return a.eq(n)?0:a.gt(n)?1:-1}(e.startTimestamp,t.startTimestamp)));return{snapshotInfos:o,sortedConditions:m}}async function q(e,t,a){if(!t)return null;const n=t[e];if(n){const t=await a.downloadJSON(n);if(t.isShardedMerkleTree&&t.merkleRoot===e){const e=await x.fromUri(n,a);return(null===e||void 0===e?void 0:e.getAllEntries())||null}{const a=await d.bM.parseAsync(t);if(e===a.merkleRoot)return a.claims.map((e=>({address:e.address,maxClaimable:e.maxClaimable,price:e.price,currencyAddress:e.currencyAddress})))}}return null}function D(e,t){return e.toString()===n.Bz.toString()?"unlimited":r.formatUnits(e,t)}async function j(e,t,a,n,r,i){var s;const o=await(0,u.a)(a,e.currency,e.pricePerToken),c=D(e.maxClaimableSupply,t),m=D(e.maxClaimablePerWallet,t),d=D(l.O$.from(e.maxClaimableSupply).sub(e.supplyClaimed),t),p=D(e.supplyClaimed,t);let y;return e.metadata&&(y=await r.downloadJSON(e.metadata)),M.parseAsync({startTime:e.startTimestamp,maxClaimableSupply:c,maxClaimablePerWallet:m,currentMintSupply:p,availableSupply:d,waitInSeconds:null===(s=e.waitTimeInSecondsBetweenClaims)||void 0===s?void 0:s.toString(),price:l.O$.from(e.pricePerToken),currency:e.currency,currencyAddress:e.currency,currencyMetadata:o,merkleRootHash:e.merkleRoot,snapshot:i?await q(e.merkleRoot,n,r):void 0,metadata:y})}async function L(e,t,a){if(e>=a.length)throw Error("Index out of bounds - got index: ".concat(e," with ").concat(a.length," conditions"));const n=a[e].currencyMetadata.decimals,i=a[e].price,s=r.formatUnits(i,n),o=await O.parseAsync({...a[e],price:s,...t}),l=await M.parseAsync({...o,price:i});return a.map(((t,a)=>{let i;i=a===e?l:t;const s=r.formatUnits(i.price,n);return{...i,price:s}}))}let V=function(e){return e.NotEnoughSupply="There is not enough supply to claim.",e.AddressNotAllowed="This address is not on the allowlist.",e.WaitBeforeNextClaimTransaction="Not enough time since last claim transaction. Please wait.",e.ClaimPhaseNotStarted="Claim phase has not started yet.",e.AlreadyClaimed="You have already claimed the token.",e.WrongPriceOrCurrency="Incorrect price or currency.",e.OverMaxClaimablePerWallet="Cannot claim more than maximum allowed quantity.",e.NotEnoughTokens="There are not enough tokens in the wallet to pay for the claim.",e.NoActiveClaimPhase="There is no active claim phase at the moment. Please check back in later.",e.NoClaimConditionSet="There is no claim condition set.",e.NoWallet="No wallet connected.",e.Unknown="No claim conditions found.",e}({});function H(e){if(void 0===e){const e=Buffer.alloc(16);return(0,b.Z)({},e),c.hexlify(m.Y0(e.toString("hex")))}return c.hexlify(e)}const $=(()=>f.z.object({to:d.b9.refine((e=>e.toLowerCase()!==s.d),{message:"Cannot create payload to mint to zero address"}),price:d.cw.default(0),currencyAddress:d.b8.default(d.aV),mintStartTime:h.S,mintEndTime:h.E,uid:f.z.string().optional().transform((e=>H(e))),primarySaleRecipient:d.b9.default(s.d)}))(),J=(()=>$.extend({quantity:d.cw}))(),_=(()=>J.extend({mintStartTime:d.b5,mintEndTime:d.b5}))(),Z=(()=>$.extend({metadata:w.N,royaltyRecipient:f.z.string().default(s.d),royaltyBps:d.cC.default(0)}))(),K=(()=>Z.extend({metadata:w.N.default(""),uri:f.z.string(),royaltyBps:d.b5,mintStartTime:d.b5,mintEndTime:d.b5}))(),Y=(()=>Z.extend({metadata:w.N.default(""),quantity:d.b6}))(),F=(()=>Y.extend({tokenId:d.b6}))(),G=(()=>K.extend({tokenId:d.b5,quantity:d.b5}))(),Q=(()=>Z.extend({metadata:w.N.default(""),quantity:d.b5.default(1)}))(),X=(()=>K.extend({quantity:d.b5.default(1)}))(),ee=[{name:"to",type:"address"},{name:"primarySaleRecipient",type:"address"},{name:"quantity",type:"uint256"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],te=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"price",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ae=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"tokenId",type:"uint256"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}],ne=[{name:"to",type:"address"},{name:"royaltyRecipient",type:"address"},{name:"royaltyBps",type:"uint256"},{name:"primarySaleRecipient",type:"address"},{name:"uri",type:"string"},{name:"quantity",type:"uint256"},{name:"pricePerToken",type:"uint256"},{name:"currency",type:"address"},{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"}]}}]);
//# sourceMappingURL=1654.72168a13.chunk.js.map