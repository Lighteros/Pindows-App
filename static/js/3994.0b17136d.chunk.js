"use strict";(self.webpackChunkpepecoin_web=self.webpackChunkpepecoin_web||[]).push([[3994],{23994:(t,e,i)=>{i.d(e,{MetaMaskConnector:()=>u});var s=i(63700),n=i(46170),c=i(12738),o=i(2566),a=i(66131),h=i(97419),r=i(31946),d=(i(13631),new WeakMap);class u extends a.InjectedConnector{constructor(t){const e={...{name:"MetaMask",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:r.g},...t.options};super({chains:t.chains,options:e,connectorStorage:t.connectorStorage}),(0,n._)(this,"id",o.w.metamask),(0,s._)(this,d,{writable:!0,value:void 0}),(0,s.a)(this,d,e.UNSTABLE_shimOnConnectSelectAccount)}async connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e,i;const a=await this.getProvider();if(!a)throw new c.a;this.setupListeners(),this.emit("message",{type:"connecting"});let r=null;if((0,s.b)(this,d)&&null!==(e=this.options)&&void 0!==e&&e.shimDisconnect&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))){r=await this.getAccount().catch((()=>null));if(!!r)try{await a.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(n){if(this.isUserRejectedRequestError(n))throw new c.U(n)}}if(!r){const t=await a.request({method:"eth_requestAccounts"});r=h.getAddress(t[0])}let u=await this.getChainId(),w=this.isChainUnsupported(u);if(t.chainId&&u!==t.chainId)try{await this.switchChain(t.chainId),u=t.chainId,w=this.isChainUnsupported(t.chainId)}catch(o){console.error("Could not switch to chain id : ".concat(t.chainId),o)}null!==(i=this.options)&&void 0!==i&&i.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const l={chain:{id:u,unsupported:w},provider:a,account:r};return this.emit("connect",l),l}catch(n){if(this.isUserRejectedRequestError(n))throw new c.U(n);if(-32002===n.code)throw new c.R(n);throw n}}async switchAccount(){const t=await this.getProvider();await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}}}}]);
//# sourceMappingURL=3994.0b17136d.chunk.js.map