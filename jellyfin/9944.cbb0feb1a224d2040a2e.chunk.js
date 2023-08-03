"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9944,6560],{19944:function(e,t,n){n.r(t),n(63238),n(55849),n(43512),n(27471),n(48410);var a=n(28469),i=n(47005),r=n(47518),o=n(21361),s=n(78695),l=n(53218),u=n(92642),d=n(94389),c=n(83094),g=n(27046),m=(n(21865),n(76560),n(53913)),p=(n(99785),n(1892)),f=n.n(p),y=n(95760),v=n.n(y),h=n(38311),b=n.n(h),w=n(58192),P=n.n(w),B=n(38060),k=n.n(B),I=n(54865),T=n.n(I),S=n(74365),x={};function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}x.styleTagTransform=T(),x.setAttributes=P(),x.insert=b().bind(null,"head"),x.domAPI=v(),x.insertStyleElement=k(),f()(S.Z,x),S.Z&&S.Z.locals&&S.Z.locals;var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t,n=this;n.element=((t=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(t),t),n.add=function(e){n.element.appendChild(e)},n.insert=function(e){"string"==typeof e?n.element.insertAdjacentHTML("afterbegin",e):n.element.insertBefore(e,n.element.firstChild)}}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.element=null}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=new L,E=n(67962),Z=n(28936),M={};M.styleTagTransform=T(),M.setAttributes=P(),M.insert=b().bind(null,"head"),M.domAPI=v(),M.insertStyleElement=k(),f()(Z.Z,M),Z.Z&&Z.Z.locals&&Z.Z.locals,n(61022);var O,R,N,q,U,j,_,D,F,V,z,H,Q,Y,W,G=n(86628),J=[],K=0,X={},$=0,ee=!0;function te(){this.classList.add("hide")}function ne(){l.O.playPause(O)}function ae(){if(Y)return Y;var e,t,n=A.element;return(Y=n.querySelector(".nowPlayingBar"))||(n.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton"><span class="material-icons skip_previous" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="stopButton mediaButton"><span class="material-icons stop" aria-hidden="true"></span></button>',s.Z.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>'),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton"><span class="material-icons volume_up" aria-hidden="true"></span></button>',e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton"><span class="material-icons repeat" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton"><span class="material-icons shuffle" aria-hidden="true"></span></button>',e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',s.Z.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>':e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton"><span class="material-icons more_vert" aria-hidden="true"></span></button>',e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(n),Y=n.querySelector(".nowPlayingBar"),s.Z.mobile&&(ie(Y.querySelector(".btnShuffleQueue")),ie(Y.querySelector(".nowPlayingBarCenter"))),r.Z.safari&&r.Z.slow&&Y.classList.add("noMediaProgress"),E.ZP.on(Y),R=(t=Y).querySelector(".nowPlayingBarCurrentTime"),N=t.querySelector(".nowPlayingImage"),q=t.querySelector(".nowPlayingBarText"),U=t.querySelector(".nowPlayingBarUserDataButtons"),V=t.querySelector(".nowPlayingBarPositionSlider"),j=t.querySelector(".muteButton"),F=t.querySelectorAll(".playPauseButton"),z=t.querySelector(".toggleRepeatButton"),_=t.querySelector(".nowPlayingBarVolumeSlider"),D=t.querySelector(".nowPlayingBarVolumeSliderContainer"),j.addEventListener("click",(function(){O&&l.O.toggleMute(O)})),t.querySelector(".stopButton").addEventListener("click",(function(){O&&l.O.stop(O)})),F.forEach((function(e){e.addEventListener("click",ne)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){O&&l.O.nextTrack(O)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(O)if("Audio"===X.NowPlayingItem.MediaType&&(O._currentTime>=5||!l.O.previousTrack(O))){if(e.detail>1&&l.O.previousTrack(O))return;l.O.seekPercent(0,O),V.value=0}else l.O.previousTrack(O)})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){O&&l.O.previousTrack(O)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){O&&l.O.toggleQueueShuffleMode()})),(z=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}})),H=z.querySelector(".material-icons"),D.classList.toggle("hide",d.M.supports("physicalvolumecontrol")),_.addEventListener("input",(function(e){O&&O.setVolume(e.target.value)})),V.addEventListener("change",(function(){if(O){var e=parseFloat(this.value);l.O.seekPercent(e,O)}})),V.getBubbleText=function(e){if(!X||!X.NowPlayingItem||!$)return"--:--";var t=$;return t/=100,t*=e,a.ZP.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){c.ZP.parentWithTag(e.target,["BUTTON","INPUT"])||G.appRouter.showNowPlaying()}))),Y}function ie(e){e.classList.add("hide")}function re(e){F&&F.forEach((function(t){var n=t.querySelector(".material-icons");n.classList.remove("play_arrow","pause"),n.classList.add(e?"play_arrow":"pause")}))}function oe(e){H.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":H.classList.add("repeat"),z.classList.add(t);break;case"RepeatOne":H.classList.add("repeat_one"),z.classList.add(t);break;default:H.classList.add("repeat"),z.classList.remove(t)}}function se(e,t,n){if(V&&!V.dragging)if(t){var i=e/t;i*=100,V.value=i}else V.value=0;if(V&&V.setBufferedRanges(n,t,e),R){var r=null==e?"--:--":a.ZP.getDisplayRunningTime(e);t&&(r+=" / "+a.ZP.getDisplayRunningTime(t)),R.innerHTML=r}}function le(e,t){var n=J,a=!0,i=!0;-1===n.indexOf("ToggleMute")&&(a=!1);var r=j.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),-1===n.indexOf("SetVolume")&&(i=!1),O.isLocalPlayer&&d.M.supports("physicalvolumecontrol")&&(a=!1,i=!1),a?j.classList.remove("hide"):ie(j),_&&(D.classList.toggle("hide",!i),_.dragging||(_.value=t||0))}function ue(e,t){console.debug("nowplaying event: "+e.type),fe.call(this,e,t)}function de(){Q&&oe(l.O.getRepeatMode())}function ce(){if(Q){var e=l.O.getQueueShuffleMode(),t="buttonActive",n=Y.querySelector(".btnShuffleQueue");"Shuffle"===e?n.classList.add(t):n.classList.remove(t)}}function ge(){Q=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),c.ZP.addEventListener(e,c.ZP.whichTransitionEvent(),te,{once:!0})}(e)}function me(e,t){console.debug("nowplaying event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&ge():t.NextMediaType||ge()}function pe(){Q&&re(this.paused())}function fe(e,t){if("init"!==e.type){console.debug("nowplaying event: "+e.type);t.NowPlayingItem&&!s.Z.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?ge():(Q=!0,Y||ae(),function(e,t,n){var a;ee?(a=ae(),c.ZP.removeEventListener(a,c.ZP.whichTransitionEvent(),te,{once:!0}),a.classList.remove("hide"),a.offsetWidth,a.classList.remove("nowPlayingBar-hidden")):ge(),X=t;var i=l.O.getPlayerInfo(),r=t.PlayState||{};re(r.IsPaused);var d=i.supportedCommands;if(J=d,-1===d.indexOf("SetRepeatMode")?z.classList.add("hide"):z.classList.remove("hide"),oe(l.O.getRepeatMode()),ce(),le(r.IsMuted,r.VolumeLevel),V&&!V.dragging){V.disabled=!r.CanSeek;var p=t.MediaSource&&null==t.MediaSource.RunTimeTicks;V.setIsClear(p)}var f=t.NowPlayingItem||{};se(r.PositionTicks,f.RunTimeTicks,l.O.getBufferedRanges(n)),function(e){var t=e.NowPlayingItem,n=t?u.Z.getNowPlayingNames(t):[];if(q.innerHTML="",n){var a=document.createElement("div"),i=document.createElement("div");if(i.classList.add("nowPlayingBarSecondaryText"),n.length>1&&(n[1].secondary=!0,n[1].text)){var r=document.createElement("a");r.innerHTML=n[1].text,i.appendChild(r)}if(n[0].text){var l=document.createElement("a");l.innerHTML=n[0].text,a.appendChild(l)}q.appendChild(a),q.appendChild(i)}var d=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",e.ImageTags&&e.ImageTags[t.type]?(t.tag=e.ImageTags[t.type],m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null,c=!1;if(d!==W&&(W=d,c=!0,d?(o.default.lazyImage(N,d),N.style.display=null,q.style.marginLeft=null):(N.style.backgroundImage="",N.style.display="none",q.style.marginLeft="1em")),t.Id){if(c){var p=m.Z.getApiClient(t.ServerId);p.getItem(p.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},n=null==t.Likes?"":t.Likes;if(!s.Z.mobile){var a=Y.querySelector(".btnToggleContextMenu"),i=a.cloneNode(!0);a.parentNode.replaceChild(i,a);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:a=Y.querySelector(".btnToggleContextMenu")};p.getCurrentUser().then((function(t){a.addEventListener("click",(function(){g.default.show(Object.assign({item:e,user:t},r))}))}))}U.innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+n+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}}else U.innerHTML=""}(t)}(0,t,this)):ge()}}function ye(){if(Q){var e=(new Date).getTime();if(!(e-K<700)){K=e;var t=this;$=l.O.duration(t),se(1e4*l.O.currentTime(t),$,l.O.getBufferedRanges(t))}}}function ve(){Q&&le(this.isMuted(),this.getVolume())}function he(e,t){var n=l.O.getPlayerState(e);fe.call(e,{type:t},n)}function be(e){e!==O&&(function(){var e=O;e&&(i.Events.off(e,"playbackstart",ue),i.Events.off(e,"statechange",ue),i.Events.off(e,"repeatmodechange",de),i.Events.off(e,"shufflequeuemodechange",ce),i.Events.off(e,"playbackstop",me),i.Events.off(e,"volumechange",ve),i.Events.off(e,"pause",pe),i.Events.off(e,"unpause",pe),i.Events.off(e,"timeupdate",ye),O=null,ge())}(),O=e,e&&(he(e,"init"),i.Events.on(e,"playbackstart",ue),i.Events.on(e,"statechange",ue),i.Events.on(e,"repeatmodechange",de),i.Events.on(e,"shufflequeuemodechange",ce),i.Events.on(e,"playbackstop",me),i.Events.on(e,"volumechange",ve),i.Events.on(e,"pause",pe),i.Events.on(e,"unpause",pe),i.Events.on(e,"timeupdate",ye)))}i.Events.on(l.O,"playerchange",(function(){be(l.O.getCurrentPlayer())})),be(l.O.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){e.detail.options.enableMediaControl?ee||(ee=!0,O?he(O,"refresh"):ge()):ee&&(ee=!1,ge())}))},92642:function(e,t,n){n(61013);var a=n(65009),i=n.n(a);t.Z={getNowPlayingNames:function(e,t){var n=e,a=null,r=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(n={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(r=e.IndexNumber+" - "+r),null!=e.ParentIndexNumber&&(r=e.ParentIndexNumber+"."+r));var o="";e.ArtistItems&&e.ArtistItems.length?(a={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},o=e.ArtistItems.map((function(e){return e.Name})).join(", ")):e.Artists&&e.Artists.length?o=e.Artists.join(", "):e.SeriesName||e.Album?(o=r,r=e.SeriesName||e.Album,a=n,n=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(o=e.ProductionYear);var s=[];return s.push({text:i()(r),item:n}),o&&s.push({text:i()(o),item:a}),s}}},76560:function(e,t,n){n.r(t);var a=n(1197),i=n(47005),r=n(44614),o=n(78066),s=n(53913);function l(){var e=this,t=e.getAttribute("data-id"),n=e.getAttribute("data-serverid"),a=s.Z.getApiClient(n),i=this.getAttribute("data-likes");i="true"===i||"false"!==i&&null,function(e,t,n,a,i){return t.updateFavoriteStatus(t.getCurrentUserId(),n,!i)}(0,a,t,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){d(e,t.Likes,t.IsFavorite)}))}function u(e,t,n){n.ItemId===this.getAttribute("data-id")&&d(this,n.Likes,n.IsFavorite)}function d(e,t,n,a){var i=e.querySelector(".material-icons");n?(i&&(i.classList.add("favorite"),i.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(i&&(i.classList.add("favorite"),i.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==a&&(e.setAttribute("data-isfavorite",n),e.setAttribute("data-likes",null===t?"":t)),c(e,n)}function c(e,t){e.title=t?r.ZP.translate("Favorite"):r.ZP.translate("AddToFavorites");var n=e.querySelector(".button-text");n&&(n.innerText=e.title)}function g(e){var t,n,r;e.removeEventListener("click",l),(r=(t=e)[n="UserDataChanged"])&&(i.Events.off(a.default,n,r),t[n]=null)}function m(e){var t,n,r;g(e),e.addEventListener("click",l),t=e,n="UserDataChanged",r=u.bind(t),i.Events.on(a.default,n,r),t[n]=r}var p=Object.create(o.Z);p.createdCallback=function(){o.Z.createdCallback&&o.Z.createdCallback.call(this)},p.attachedCallback=function(){o.Z.attachedCallback&&o.Z.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var n=this.getAttribute("data-likes");d(this,n="true"===n||"false"!==n&&null,"true"===this.getAttribute("data-isfavorite"),!1),m(this)}else c(this)},p.detachedCallback=function(){o.Z.detachedCallback&&o.Z.detachedCallback.call(this),g(this)},p.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};d(this,t.Likes,t.IsFavorite),m(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),g(this)},document.registerElement("emby-ratingbutton",{prototype:p,extends:"button"})},74365:function(e,t,n){var a=n(54933),i=n.n(a),r=n(93476),o=n.n(r)()(i());o.push([e.id,".appfooter{bottom:0;contain:layout style;left:0;position:fixed;right:0;transition:-webkit-transform .18s linear;transition:transform .18s linear;transition:transform .18s linear,-webkit-transform .18s linear;z-index:10}.appfooter.headroom--unpinned{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}",""]),t.Z=o},28936:function(e,t,n){var a=n(54933),i=n.n(a),r=n(93476),o=n.n(r)()(i());o.push([e.id,".nowPlayingBarInfoContainer{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:100%;overflow:hidden;width:40%}.nowPlayingBar{contain:layout style;text-align:center;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.nowPlayingBar-hidden{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.nowPlayingBarTop{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;height:4.2em;-webkit-justify-content:center;justify-content:center;position:relative}.mediaButton,.nowPlayingBarUserDataButtons .btnUserItemRating{margin:0;text-align:center;vertical-align:middle}.mediaButton{font-size:120%}.nowPlayingBar .nowPlayingImage{background-position:50%;background-repeat:no-repeat;background-size:contain;-webkit-flex-shrink:0;flex-shrink:0;height:70%;width:4.2em}.nowPlayingBarText{font-size:92%;margin-left:.5em;margin-right:1em;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.nowPlayingBarCenter,.nowPlayingBarText{-webkit-flex-grow:1;flex-grow:1;vertical-align:middle}.nowPlayingBarCenter{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;position:absolute;text-align:center;z-index:2}.nowPlayingBarPositionContainer{left:0;position:absolute!important;right:0;top:-.56em;z-index:1}.headroom--unpinned .nowPlayingBarPositionContainer,.noMediaProgress .nowPlayingBarPositionContainer{display:none}.nowPlayingBarRight{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;-webkit-justify-content:flex-end;justify-content:flex-end;margin:0 .5em 0 auto;position:relative;z-index:2}.nowPlayingBarCurrentTime{display:inline-block;padding-left:1.5em;text-align:center;vertical-align:middle}.nowPlayingBarVolumeSliderContainer{margin-right:2em}.nowPlayingBarUserDataButtons{display:inline-block}.nowPlayingBarPositionSlider::-webkit-slider-thumb{height:1.2em!important;width:1.2em!important}@media (max-width:70em){.nowPlayingBarRight .nowPlayingBarUserDataButtons{display:none}}@media (max-width:66em){.nowPlayingBar .btnShuffleQueue,.toggleRepeatButton{display:none!important}}@media (max-width:80em){.nowPlayingBarCenter .nowPlayingBarCurrentTime,.nowPlayingBarCenter .stopButton{display:none!important}.nowPlayingBarInfoContainer{width:45%}}.layout-mobile .nowPlayingBarRight button:not(.playPauseButton):not(.nextTrackButton){display:none}.layout-desktop .nowPlayingBarRight .playPauseButton,.layout-mobile .nowPlayingBarRight div,.layout-mobile .nowPlayingBarRight input,.layout-tv .nowPlayingBarRight .playPauseButton{display:none}@media (max-width:56em){.nowPlayingBarCenter{display:none!important}}@media (max-width:60em){.nowPlayingBarRight .nowPlayingBarVolumeSliderContainer{display:none!important}.nowPlayingBarInfoContainer{width:100%}}@media (max-width:24em){.nowPlayingBar .muteButton,.nowPlayingBar .unmuteButton{display:none}}",""]),t.Z=o}}]);