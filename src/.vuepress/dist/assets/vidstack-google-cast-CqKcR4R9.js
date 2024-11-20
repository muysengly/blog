var Lt=Object.defineProperty;var W=d=>{throw TypeError(d)};var vt=(d,t,s)=>t in d?Lt(d,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[t]=s;var G=(d,t,s)=>vt(d,typeof t!="symbol"?t+"":t,s),O=(d,t,s)=>t.has(d)||W("Cannot "+s);var e=(d,t,s)=>(O(d,t,"read from private field"),s?s.call(d):t.get(d)),T=(d,t,s)=>t.has(d)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(d):t.set(d,s),l=(d,t,s,i)=>(O(d,t,"write to private field"),i?i.call(d,s):t.set(d,s),s),r=(d,t,s)=>(O(d,t,"access private method"),s);import{x as St,z as L,ah as Z,o as At,D as tt,j as V,l as et,k as It,ai as bt,L as Rt}from"./app-CMndC20c.js";import{R as wt}from"./vidstack-DSYpsFWk-B3UbyCBv.js";import{g as Mt,a as Dt,b as it,h as st,l as Nt,c as Pt}from"./vidstack-CWDlegKy-CgL4d97F.js";var g,_,at;class _t{constructor(t){T(this,_);T(this,g);l(this,g,new chrome.cast.media.MediaInfo(t.src,t.type))}build(){return e(this,g)}setStreamType(t){return t.includes("live")?e(this,g).streamType=chrome.cast.media.StreamType.LIVE:e(this,g).streamType=chrome.cast.media.StreamType.BUFFERED,this}setTracks(t){return e(this,g).tracks=t.map(r(this,_,at)),this}setMetadata(t,s){return e(this,g).metadata=new chrome.cast.media.GenericMediaMetadata,e(this,g).metadata.title=t,e(this,g).metadata.images=[{url:s}],this}}g=new WeakMap,_=new WeakSet,at=function(t,s){const i=new chrome.cast.media.Track(s,chrome.cast.media.TrackType.TEXT);return i.name=t.label,i.trackContentId=t.src,i.trackContentType="text/vtt",i.language=t.language,i.subtype=t.kind.toUpperCase(),i};var p,k,M,c,$,A,rt,nt,ot,H,P,U;class xt{constructor(t,s,i){T(this,c);T(this,p);T(this,k);T(this,M);l(this,p,t),l(this,k,s),l(this,M,i)}setup(){const t=this.syncRemoteActiveIds.bind(this);et(e(this,k).audioTracks,"change",t),et(e(this,k).textTracks,"mode-change",t),It(r(this,c,nt).bind(this))}getLocalTextTracks(){return e(this,k).$state.textTracks().filter(t=>t.src&&t.type==="vtt")}syncRemoteTracks(t){if(!e(this,p).isMediaLoaded)return;const s=r(this,c,$).call(this),i=this.getLocalTextTracks(),n=r(this,c,A).call(this,chrome.cast.media.TrackType.AUDIO),m=r(this,c,A).call(this,chrome.cast.media.TrackType.TEXT);for(const u of n){if(r(this,c,H).call(this,s,u))continue;const w={id:u.trackId.toString(),label:u.name,language:u.language,kind:u.subtype??"main",selected:!1};e(this,k).audioTracks[Rt.add](w,t)}for(const u of m){if(r(this,c,H).call(this,i,u))continue;const w={id:u.trackId.toString(),src:u.trackContentId,label:u.name,language:u.language,kind:u.subtype.toLowerCase()};e(this,k).textTracks.add(w,t)}}syncRemoteActiveIds(t){if(!e(this,p).isMediaLoaded)return;const s=r(this,c,rt).call(this),i=new chrome.cast.media.EditTracksInfoRequest(s);r(this,c,ot).call(this,i).catch(n=>{})}}p=new WeakMap,k=new WeakMap,M=new WeakMap,c=new WeakSet,$=function(){return e(this,k).$state.audioTracks()},A=function(t){var i;const s=((i=e(this,p).mediaInfo)==null?void 0:i.tracks)??[];return t?s.filter(n=>n.type===t):s},rt=function(){const t=[],s=r(this,c,$).call(this).find(n=>n.selected),i=this.getLocalTextTracks().filter(n=>n.mode==="showing");if(s){const n=r(this,c,A).call(this,chrome.cast.media.TrackType.AUDIO),m=r(this,c,P).call(this,n,s);m&&t.push(m.trackId)}if(i!=null&&i.length){const n=r(this,c,A).call(this,chrome.cast.media.TrackType.TEXT);if(n.length)for(const m of i){const u=r(this,c,P).call(this,n,m);u&&t.push(u.trackId)}}return t},nt=function(){const t=this.getLocalTextTracks();if(!e(this,p).isMediaLoaded)return;const s=r(this,c,A).call(this,chrome.cast.media.TrackType.TEXT);for(const i of t)if(!r(this,c,P).call(this,s,i)){bt(()=>{var m;return(m=e(this,M))==null?void 0:m.call(this)});break}},ot=function(t){const s=it();return new Promise((i,n)=>s==null?void 0:s.editTracksInfo(t,i,n))},H=function(t,s){return t.find(i=>r(this,c,U).call(this,i,s))},P=function(t,s){return t.find(i=>r(this,c,U).call(this,s,i))},U=function(t,s){return s.name===t.label&&s.language===t.language&&s.subtype.toLowerCase()===t.kind.toLowerCase()};var o,h,C,E,D,I,v,S,b,N,f,R,a,ht,ct,F,dt,q,ut,lt,mt,B,X,Y,K,Tt,ft,gt,j,kt,z,yt,J,y,pt,Ct,Q,Et;class Ht{constructor(t,s){T(this,a);G(this,"$$PROVIDER_TYPE","GOOGLE_CAST");G(this,"scope",St());T(this,o);T(this,h);T(this,C);T(this,E,null);T(this,D,"disconnected");T(this,I,0);T(this,v,0);T(this,S,new L(0,0));T(this,b,new wt(r(this,a,lt).bind(this)));T(this,N);T(this,f,null);T(this,R,!1);l(this,o,t),l(this,h,s),l(this,C,new xt(t,s,r(this,a,Et).bind(this)))}get type(){return"google-cast"}get currentSrc(){return e(this,E)}get player(){return e(this,o)}get cast(){return Mt()}get session(){return Dt()}get media(){return it()}get hasActiveSession(){return st(e(this,E))}setup(){r(this,a,ht).call(this),r(this,a,ct).call(this),e(this,C).setup(),e(this,h).notify("provider-setup",this)}async play(){var t;if(!(!e(this,o).isPaused&&!e(this,R))){if(e(this,R)){await r(this,a,Q).call(this,!1,0);return}(t=e(this,o).controller)==null||t.playOrPause()}}async pause(){var t;e(this,o).isPaused||(t=e(this,o).controller)==null||t.playOrPause()}getMediaStatus(t){return new Promise((s,i)=>{var n;(n=this.media)==null||n.getStatus(t,s,i)})}setMuted(t){var i;(t&&!e(this,o).isMuted||!t&&e(this,o).isMuted)&&((i=e(this,o).controller)==null||i.muteOrUnmute())}setCurrentTime(t){var s;e(this,o).currentTime=t,e(this,h).notify("seeking",t),(s=e(this,o).controller)==null||s.seek()}setVolume(t){var s;e(this,o).volumeLevel=t,(s=e(this,o).controller)==null||s.setVolumeLevel()}async loadSource(t){var n;if(((n=e(this,f))==null?void 0:n.src)!==t&&l(this,f,null),st(t)){r(this,a,dt).call(this),l(this,E,t);return}e(this,h).notify("load-start");const s=r(this,a,Ct).call(this,t),i=await this.session.loadMedia(s);if(i){l(this,E,null),e(this,h).notify("error",Error(Pt(i)));return}l(this,E,t)}destroy(){r(this,a,F).call(this),r(this,a,q).call(this)}}o=new WeakMap,h=new WeakMap,C=new WeakMap,E=new WeakMap,D=new WeakMap,I=new WeakMap,v=new WeakMap,S=new WeakMap,b=new WeakMap,N=new WeakMap,f=new WeakMap,R=new WeakMap,a=new WeakSet,ht=function(){Nt(cast.framework.CastContextEventType.CAST_STATE_CHANGED,r(this,a,B).bind(this))},ct=function(){const t=cast.framework.RemotePlayerEventType,s={[t.IS_CONNECTED_CHANGED]:r(this,a,B),[t.IS_MEDIA_LOADED_CHANGED]:r(this,a,X),[t.CAN_CONTROL_VOLUME_CHANGED]:r(this,a,Y),[t.CAN_SEEK_CHANGED]:r(this,a,K),[t.DURATION_CHANGED]:r(this,a,gt),[t.IS_MUTED_CHANGED]:r(this,a,j),[t.VOLUME_LEVEL_CHANGED]:r(this,a,j),[t.IS_PAUSED_CHANGED]:r(this,a,kt),[t.LIVE_SEEKABLE_RANGE_CHANGED]:r(this,a,z),[t.PLAYER_STATE_CHANGED]:r(this,a,yt)};l(this,N,s);const i=r(this,a,mt).bind(this);for(const n of Z(s))e(this,o).controller.addEventListener(n,i);At(()=>{for(const n of Z(s))e(this,o).controller.removeEventListener(n,i)})},F=function(){e(this,f)||(l(this,v,0),l(this,S,new L(0,0))),e(this,b).stop(),l(this,I,0),l(this,f,null)},dt=function(){const t=new tt("resume-session",{detail:this.session});r(this,a,X).call(this,t);const{muted:s,volume:i,savedState:n}=e(this,h).$state,m=n();this.setCurrentTime(Math.max(e(this,o).currentTime,(m==null?void 0:m.currentTime)??0)),this.setMuted(s()),this.setVolume(i()),(m==null?void 0:m.paused)===!1&&this.play()},q=function(){this.cast.endCurrentSession(!0);const{remotePlaybackLoader:t}=e(this,h).$state;t.set(null)},ut=function(){const{savedState:t}=e(this,h).$state;t.set({paused:e(this,o).isPaused,currentTime:e(this,o).currentTime}),r(this,a,q).call(this)},lt=function(){r(this,a,ft).call(this)},mt=function(t){e(this,N)[t.type].call(this,t)},B=function(t){const s=this.cast.getCastState(),i=s===cast.framework.CastState.CONNECTED?"connected":s===cast.framework.CastState.CONNECTING?"connecting":"disconnected";if(e(this,D)===i)return;const n={type:"google-cast",state:i},m=r(this,a,y).call(this,t);l(this,D,i),e(this,h).notify("remote-playback-change",n,m),i==="disconnected"&&r(this,a,ut).call(this)},X=function(t){if(!!!e(this,o).isMediaLoaded)return;const i=V(e(this,h).$state.source);Promise.resolve().then(()=>{if(i!==V(e(this,h).$state.source)||!e(this,o).isMediaLoaded)return;r(this,a,F).call(this);const n=e(this,o).duration;l(this,S,new L(0,n));const m={provider:this,duration:n,buffered:new L(0,0),seekable:r(this,a,J).call(this)},u=r(this,a,y).call(this,t);e(this,h).notify("loaded-metadata",void 0,u),e(this,h).notify("loaded-data",void 0,u),e(this,h).notify("can-play",m,u),r(this,a,Y).call(this),r(this,a,K).call(this,t);const{volume:x,muted:w}=e(this,h).$state;this.setVolume(x()),this.setMuted(w()),e(this,b).start(),e(this,C).syncRemoteTracks(u),e(this,C).syncRemoteActiveIds(u)})},Y=function(){e(this,h).$state.canSetVolume.set(e(this,o).canControlVolume)},K=function(t){const s=r(this,a,y).call(this,t);e(this,h).notify("stream-type-change",r(this,a,Tt).call(this),s)},Tt=function(){var s;return((s=e(this,o).mediaInfo)==null?void 0:s.streamType)===chrome.cast.media.StreamType.LIVE?e(this,o).canSeek?"live:dvr":"live":"on-demand"},ft=function(){if(e(this,f))return;const t=e(this,o).currentTime;t!==e(this,I)&&(e(this,h).notify("time-change",t),t>e(this,v)&&(l(this,v,t),r(this,a,z).call(this)),e(this,h).$state.seeking()&&e(this,h).notify("seeked",t),l(this,I,t))},gt=function(t){if(!e(this,o).isMediaLoaded||e(this,f))return;const s=e(this,o).duration,i=r(this,a,y).call(this,t);l(this,S,new L(0,s)),e(this,h).notify("duration-change",s,i)},j=function(t){if(!e(this,o).isMediaLoaded)return;const s={muted:e(this,o).isMuted,volume:e(this,o).volumeLevel},i=r(this,a,y).call(this,t);e(this,h).notify("volume-change",s,i)},kt=function(t){const s=r(this,a,y).call(this,t);e(this,o).isPaused?e(this,h).notify("pause",void 0,s):e(this,h).notify("play",void 0,s)},z=function(t){const s={seekable:r(this,a,J).call(this),buffered:new L(0,e(this,v))},i=t?r(this,a,y).call(this,t):void 0;e(this,h).notify("progress",s,i)},yt=function(t){const s=e(this,o).playerState,i=chrome.cast.media.PlayerState;if(l(this,R,s===i.IDLE),s===i.PAUSED)return;const n=r(this,a,y).call(this,t);switch(s){case i.PLAYING:e(this,h).notify("playing",void 0,n);break;case i.BUFFERING:e(this,h).notify("waiting",void 0,n);break;case i.IDLE:e(this,b).stop(),e(this,h).notify("pause"),e(this,h).notify("end");break}},J=function(){return e(this,o).liveSeekableRange?new L(e(this,o).liveSeekableRange.start,e(this,o).liveSeekableRange.end):e(this,S)},y=function(t){return t instanceof Event?t:new tt(t.type,{detail:t})},pt=function(t){const{streamType:s,title:i,poster:n}=e(this,h).$state;return new _t(t).setMetadata(i(),n()).setStreamType(s()).setTracks(e(this,C).getLocalTextTracks()).build()},Ct=function(t){var m,u;const s=r(this,a,pt).call(this,t),i=new chrome.cast.media.LoadRequest(s),n=e(this,h).$state.savedState();return i.autoplay=(((m=e(this,f))==null?void 0:m.paused)??(n==null?void 0:n.paused))===!1,i.currentTime=((u=e(this,f))==null?void 0:u.time)??(n==null?void 0:n.currentTime)??0,i},Q=async function(t,s){const i=V(e(this,h).$state.source);l(this,f,{src:i,paused:t,time:s}),await this.loadSource(i)},Et=function(){r(this,a,Q).call(this,e(this,o).isPaused,e(this,o).currentTime).catch(t=>{})};export{Ht as GoogleCastProvider};
