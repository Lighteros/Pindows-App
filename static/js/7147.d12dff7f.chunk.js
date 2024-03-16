"use strict";(self.webpackChunkpepecoin_web=self.webpackChunkpepecoin_web||[]).push([[7147],{7147:(t,a,r)=>{r.d(a,{e:()=>C,f:()=>T});var e=r(4942),i=r(2257),n=r(6222),c=r(1606),s=r(91195),o=r(190),p=r(53064),h=r(77263),l=r(68573),m=r(44554),d=r(74745),u=r(45241),W=r(81654);class g{constructor(t,a){(0,e.Z)(this,"featureName",s.cD.name),(0,e.Z)(this,"to",(0,h.c)((async t=>{const a=new c.C(this.contractWrapper),r=(await Promise.all(t.map((t=>Promise.all([(0,s.aM)(t.toAddress),this.erc20.normalizeAmount(t.amount)]))))).map((t=>{let[r,e]=t;return a.encode("mintTo",[r,e])}));return h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}))),this.erc20=t,this.contractWrapper=a}}class w{constructor(t,a){(0,e.Z)(this,"featureName",s.cE.name),(0,e.Z)(this,"tokens",(0,h.c)((async t=>h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await this.erc20.normalizeAmount(t)]})))),(0,e.Z)(this,"from",(0,h.c)((async(t,a)=>h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnFrom",args:await Promise.all([(0,s.aM)(t),this.erc20.normalizeAmount(a)])})))),this.erc20=t,this.contractWrapper=a}}class y{constructor(t,a,r){(0,e.Z)(this,"featureName",s.cF.name),(0,e.Z)(this,"to",(0,h.c)((async(t,a,r)=>{const e=await this.erc20.normalizeAmount(a);return await this.conditions.getClaimTransaction(t,e,r)}))),this.erc20=t,this.contractWrapper=a,this.storage=r;const i=new p.C(this.contractWrapper,s.bg,this.storage);this.conditions=new l.D(this.contractWrapper,i,this.storage)}}class f{constructor(t,a,r){this.erc20=t,this.contractWrapper=a,this.storage=r,this.claim=new y(this.erc20,this.contractWrapper,this.storage)}}class b{constructor(t,a){(0,e.Z)(this,"featureName",s.cG.name),(0,e.Z)(this,"to",(0,h.c)((async(t,a)=>await this.getMintTransaction(t,a)))),this.erc20=t,this.contractWrapper=a,this.batch=this.detectErc20BatchMintable()}async getMintTransaction(t,a){return h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:await Promise.all([(0,s.aM)(t),this.erc20.normalizeAmount(a)])})}detectErc20BatchMintable(){if((0,p.d)(this.contractWrapper,"ERC20BatchMintable"))return new g(this.erc20,this.contractWrapper)}}class C{constructor(t,a){(0,e.Z)(this,"featureName",s.cH.name),(0,e.Z)(this,"mint",(0,h.c)((async t=>{const a=t.payload,r=t.signature,[e,n]=await Promise.all([this.mapPayloadToContractStruct(a),this.contractWrapper.getCallOverrides()]);return await(0,u.s)(this.contractWrapper,i.O$.from(e.price),a.currencyAddress,n),h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,r],overrides:n})}))),(0,e.Z)(this,"mintBatch",(0,h.c)((async t=>{const a=await Promise.all(t.map((t=>this.mapPayloadToContractStruct(t.payload)))),r=t.map(((t,r)=>{const e=a[r],n=t.signature,c=t.payload.price;if(i.O$.from(c).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:e,signature:n}})),e=new c.C(this.contractWrapper),n=r.map((t=>e.encode("mintWithSignature",[t.message,t.signature])));return h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n]})}))),this.contractWrapper=t,this.roles=a}async verify(t){const a=t.payload,r=t.signature,e=await this.mapPayloadToContractStruct(a);return(await this.contractWrapper.read("verify",[e,r]))[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){var a;await(null===(a=this.roles)||void 0===a?void 0:a.verify(["minter"],await this.contractWrapper.getSignerAddress()));const[r,e,i]=await Promise.all([this.contractWrapper.getChainID(),this.contractWrapper.read("name",[]),Promise.all(t.map((t=>W.S.parseAsync(t))))]),n=this.contractWrapper.getSigner();(0,m.Z)(n,"No signer available");const c=await Promise.all(i.map((t=>W.k.parseAsync(t)))),s=await Promise.all(c.map((t=>this.mapPayloadToContractStruct(t)))),o=await Promise.all(s.map((t=>this.contractWrapper.signTypedData(n,{name:e,version:"1",chainId:r,verifyingContract:this.contractWrapper.address},{MintRequest:W.M},t))));return i.map(((t,a)=>({payload:c[a],signature:o[a].toString()})))}async mapPayloadToContractStruct(t){const[a,r]=await Promise.all([(0,d.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress),this.contractWrapper.read("decimals",[])]),e=n.parseUnits(t.quantity,r);return{to:t.to,primarySaleRecipient:t.primarySaleRecipient,quantity:e,price:a,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid}}}class T{get chainId(){return this._chainId}constructor(t,a,r){(0,e.Z)(this,"featureName",s.cI.name),(0,e.Z)(this,"transfer",(0,h.c)((async(t,a)=>h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transfer",args:await Promise.all([(0,s.aM)(t),this.normalizeAmount(a)])})))),(0,e.Z)(this,"transferFrom",(0,h.c)((async(t,a,r)=>h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom",args:await Promise.all([(0,s.aM)(t),(0,s.aM)(a),this.normalizeAmount(r)])})))),(0,e.Z)(this,"setAllowance",(0,h.c)((async(t,a)=>h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:await Promise.all([(0,s.aM)(t),this.normalizeAmount(a)])})))),(0,e.Z)(this,"transferBatch",(0,h.c)((async t=>{const a=new c.C(this.contractWrapper),r=(await Promise.all(t.map((t=>Promise.all([this.normalizeAmount(t.amount),(0,s.aM)(t.toAddress)]))))).map((t=>{let[r,e]=t;return a.encode("transfer",[e,r])}));return h.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})}))),(0,e.Z)(this,"mint",(0,h.c)((async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)))),(0,e.Z)(this,"mintTo",(0,h.c)((async(t,a)=>(0,o.a)(this.mintable,s.cG).to.prepare(t,a)))),(0,e.Z)(this,"mintBatchTo",(0,h.c)((async t=>{var a;return(0,o.a)(null===(a=this.mintable)||void 0===a?void 0:a.batch,s.cD).to.prepare(t)}))),(0,e.Z)(this,"burn",(0,h.c)((async t=>(0,o.a)(this.burnable,s.cE).tokens.prepare(t)))),(0,e.Z)(this,"burnFrom",(0,h.c)((async(t,a)=>(0,o.a)(this.burnable,s.cE).from.prepare(t,a)))),(0,e.Z)(this,"claim",(0,h.c)((async(t,a)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,a)))),(0,e.Z)(this,"claimTo",(0,h.c)((async(t,a,r)=>{var e;return(0,o.a)(null===(e=this.droppable)||void 0===e?void 0:e.claim,s.cF).to.prepare(t,a,r)}))),this.contractWrapper=t,this.storage=a,this.mintable=this.detectErc20Mintable(),this.burnable=this.detectErc20Burnable(),this.droppable=this.detectErc20Droppable(),this.signatureMintable=this.detectErc20SignatureMintable(),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return await(0,c.f)(this.contractWrapper.getProvider(),this.getAddress())}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async balanceOf(t){return this.getValue(await this.contractWrapper.read("balanceOf",[await(0,s.aM)(t)]))}async totalSupply(){return await this.getValue(await this.contractWrapper.read("totalSupply",[]))}async allowance(t){const[a,r]=await Promise.all([this.contractWrapper.getSignerAddress(),(0,s.aM)(t)]);return await this.allowanceOf(a,r)}async allowanceOf(t,a){const r=await Promise.all([(0,s.aM)(t),(0,s.aM)(a)]);return await this.getValue(await this.contractWrapper.read("allowance",r))}async getMintTransaction(t,a){return(0,o.a)(this.mintable,s.cG).getMintTransaction(t,a)}get claimConditions(){var t;return(0,o.a)(null===(t=this.droppable)||void 0===t?void 0:t.claim,s.cF).conditions}get signature(){return(0,o.a)(this.signatureMintable,s.cH)}async normalizeAmount(t){return async function(t,a){const r=await t.read("decimals",[]);return n.parseUnits(s.cw.parse(a),r)}(this.contractWrapper,t)}async getValue(t){return await(0,c.a)(this.contractWrapper.getProvider(),this.getAddress(),i.O$.from(t))}detectErc20Mintable(){if((0,p.d)(this.contractWrapper,"ERC20"))return new b(this,this.contractWrapper)}detectErc20Burnable(){if((0,p.d)(this.contractWrapper,"ERC20Burnable"))return new w(this,this.contractWrapper)}detectErc20Droppable(){if((0,p.d)(this.contractWrapper,"ERC20ClaimConditionsV1")||(0,p.d)(this.contractWrapper,"ERC20ClaimConditionsV2")||(0,p.d)(this.contractWrapper,"ERC20ClaimPhasesV1")||(0,p.d)(this.contractWrapper,"ERC20ClaimPhasesV2"))return new f(this,this.contractWrapper,this.storage)}detectErc20SignatureMintable(){if((0,p.d)(this.contractWrapper,"ERC20SignatureMintable"))return new C(this.contractWrapper)}}}}]);
//# sourceMappingURL=7147.d12dff7f.chunk.js.map