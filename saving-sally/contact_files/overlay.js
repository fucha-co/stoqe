google.maps.__gjsload__('overlay', function(_){var fv=_.na("j"),gv=_.n(),hv=function(a){a.Uf=a.Uf||new gv;return a.Uf},iv=function(a){this.U=new _.hg(function(){var b=a.Uf;if(a.getPanes()){if(a.getProjection()){if(!b.j&&a.onAdd)a.onAdd();b.j=!0;a.draw()}}else{if(b.j)if(a.onRemove)a.onRemove();else a.remove();b.j=!1}},0)},jv=function(a,b){function c(){return _.ig(e.U)}var d=hv(a),e=d.Be;e||(e=d.Be=new iv(a));_.C(d.W||[],_.S.removeListener);var f=d.da=d.da||new _.Hl,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",g,"projectionCenterQ");
f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Qh=d.Qh||new fv(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.W=[_.S.addListener(a,"panes_changed",c),_.S.addListener(g,"zoom_changed",c),_.S.addListener(g,"offset_changed",c),_.S.addListener(b,"projection_changed",c),_.S.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.re&&(_.Ym(b,"Ox"),_.$m("Ox","-p",a))},
mv=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;c.ag()}if(b&&b instanceof _.re){var d=b.__gm;d.overlayLayer?a.__gmop=new kv(b,a,d.overlayLayer):d.j.then(function(e){e=e.ra;var f=new lv(b,e);e.sa(f);d.overlayLayer=f;mv(a)})}}},kv=function(a,b,c){this.map=a;this.oa=b;this.Il=c;this.me=!1;_.Ym(this.map,"Ox");_.$m("Ox","-p",this.oa);c.l.push(this);c.j&&nv(this,c.j);c.m.Lf()},nv=function(a,b){a.oa.get("projection")!=b&&(a.oa.bindTo("panes",a.map.__gm),a.oa.set("projection",
b))},lv=function(a,b){this.A=a;this.m=b;this.j=null;this.l=[]};_.A(fv,_.T);fv.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.M(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))};_.A(iv,_.T);kv.prototype.draw=function(){this.me||(this.me=!0,this.oa.onAdd&&this.oa.onAdd());this.oa.draw&&this.oa.draw()};kv.prototype.ag=function(){_.an("Ox","-p",this.oa);this.oa.unbindAll();this.oa.set("panes",null);this.oa.set("projection",null);_.hb(this.Il.l,this);this.me&&(this.me=!1,this.oa.onRemove?this.oa.onRemove():this.oa.remove())};lv.prototype.dispose=_.n();
lv.prototype.Ab=function(a,b,c,d,e,f){var g=this.j=this.j||new _.Nm(this.A,this.m,_.n());g.Ab(a,b,c,d,e,f);a=_.ua(this.l);for(b=a.next();!b.done;b=a.next())b=b.value,nv(b,g),b.draw()};_.Je("overlay",{Gg:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.re||a.__gmop)mv(a);else{b=a.getMap();var c=hv(a),d=c.Yk;c.Yk=b;d&&(c=hv(a),(d=c.da)&&d.unbindAll(),(d=c.Qh)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.C(c.W,_.S.removeListener),c.W=null,c.Be&&(c.Be.U.Ma(),c.Be=null),_.an("Ox","-p",a));b&&jv(a,b)}}},preventMapHitsFrom:function(a){_.Qn(a,{onClick:function(b){return _.hn(b.event)},Ha:function(b){return _.en(b)},$b:function(b){return _.fn(b)},Ua:function(b){return _.fn(b)},
La:function(b){return _.gn(b)}}).xc(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Jd);a.addEventListener("contextmenu",_.Jd);a.addEventListener("dblclick",_.Jd);a.addEventListener("mousedown",_.Jd);a.addEventListener("mousemove",_.Jd);a.addEventListener("MSPointerDown",_.Jd);a.addEventListener("pointerdown",_.Jd);a.addEventListener("touchstart",_.Jd);a.addEventListener("wheel",_.Jd)}});});

/*
     FILE ARCHIVED ON 02:11:01 Jun 12, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:43:38 Jun 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 47.687 (3)
  esindex: 0.016
  captures_list: 72.904
  CDXLines.iter: 13.464 (3)
  PetaboxLoader3.datanode: 64.636 (5)
  exclusion.robots: 0.192
  exclusion.robots.policy: 0.181
  RedisCDXSource: 1.807
  PetaboxLoader3.resolve: 90.765
  load_resource: 145.135
*/