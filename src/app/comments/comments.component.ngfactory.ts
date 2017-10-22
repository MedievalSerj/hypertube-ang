/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './comments.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from 'nl2br-pipe/src/nl2br.pipe';
import * as i5 from '@angular/platform-browser';
import * as i6 from './comments.component';
import * as i7 from '@angular/forms';
import * as i8 from '../services/comments.service';
const styles_CommentsComponent:any[] = [i0.styles];
export const RenderType_CommentsComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_CommentsComponent,data:{'animation':[{type:7,name:'expandCollapse',
        definitions:[{type:0,name:'collapsed',styles:{type:6,styles:{height:0,paddingTop:0,
            paddingBottom:0,overflow:'hidden'},offset:(null as any)},options:(undefined as any)},
            {type:1,expr:'collapsed => expanded',animation:[{type:4,styles:(null as any),
                timings:'200ms'}],options:(null as any)},{type:1,expr:'expanded => collapsed',
                animation:[{type:4,styles:(null as any),timings:'200ms'}],options:(null as any)}],
        options:{}}]}});
function View_CommentsComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'i',[['class',
      'fa fa-caret-down fa-lg']],(null as any),(null as any),(null as any),(null as any),
      (null as any)))],(null as any),(null as any));
}
function View_CommentsComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),0,'i',[['class',
      'fa fa-caret-up fa-lg']],(null as any),(null as any),(null as any),(null as any),
      (null as any)))],(null as any),(null as any));
}
function View_CommentsComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),20,'div',[['class',
      'hypertube-comment pure-g']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),6,'div',[['class','text-center pure-u-1 pure-u-sm-1-4 pure-u-md-1-6 pure-u-lg-1-12']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      3,'div',[['class','display-inline-block avatar-img comment-avatar']],[[4,'background-image',
          (null as any)]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,5).onClick()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.RouterLink,
      [i2.Router,i2.ActivatedRoute,[8,(null as any)],i1.Renderer2,i1.ElementRef],{routerLink:[0,
          'routerLink']},(null as any)),i1.ɵpad(2),(_l()(),i1.ɵted((null as any),['\n          '])),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),9,'div',[['class',
          'pa-l-5 display-inline-block comment-msg pure-u-1 pure-u-sm-3-4 pure-u-md-5-6 pure-u-lg-11-12']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n\n          '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),2,'div',[['class','ma-b-5']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n            ',
          '   ','\n          '])),i1.ɵppd(2),(_l()(),i1.ɵted((null as any),['\n\n          '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),2,'div',([] as any[]),[[8,'innerHTML',
          1]],(null as any),(null as any),(null as any),(null as any))),i1.ɵppd(1),
      (_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),i1.ɵted((null as any),
          ['\n        '])),(_l()(),i1.ɵted((null as any),['\n      ']))],(_ck,_v) => {
    const currVal_1:any = _ck(_v,6,0,'/profile',_v.context.$implicit.user_id);
    _ck(_v,5,0,currVal_1);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = (('url(' + _co.avatarUrl(_v.context.$implicit)) + ')');
    _ck(_v,4,0,currVal_0);
    const currVal_2:any = _v.context.$implicit.login;
    const currVal_3:any = i1.ɵunv(_v,13,1,_ck(_v,14,0,i1.ɵnov((<any>_v.parent),0),
        (_v.context.$implicit.date_time * 1000),'MMMM d, H:mm'));
    _ck(_v,13,0,currVal_2,currVal_3);
    const currVal_4:any = i1.ɵunv(_v,16,0,_ck(_v,17,0,i1.ɵnov((<any>_v.parent),1),
        _v.context.$implicit.msg));
    _ck(_v,16,0,currVal_4);
  });
}
export function View_CommentsComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵpid(0,i3.DatePipe,[i1.LOCALE_ID]),i1.ɵpid(0,i4.Nl2BrPipe,[i5.DomSanitizer]),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),42,'div',[['class','card-preview-container watch_width ma-auto ma-b-60']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          39,'div',[['class','card comment-box']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),12,'div',[['class','ma-t-15 ma-b-15']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n      '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),9,'span',[['class','filter-btn']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i6.CommentsComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.show_hide_comments()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),1,(null as any),(null as any),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['КОММЕНТАРИИ'])),(_l()(),i1.ɵted((null as any),
          [' '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_CommentsComponent_1)),i1.ɵdid(16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,
          i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n                                  '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_CommentsComponent_2)),i1.ɵdid(16384,(null as any),
          0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),22,'div',([] as any[]),[[24,'@expandCollapse',
          0]],(null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),16,'div',[['class',
          'hypertube-comment position-relative']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),7,'form',[['class','pure-form ma-t-10 ma-b-10'],
          ['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'submit'],[(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,26).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,26).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i7.ɵbf,([] as any[]),
          (null as any),(null as any)),i1.ɵdid(16384,(null as any),0,i7.NgForm,[[8,
          (null as any)],[8,(null as any)]],(null as any),(null as any)),i1.ɵprd(2048,
          (null as any),i7.ControlContainer,(null as any),[i7.NgForm]),i1.ɵdid(16384,
          (null as any),0,i7.NgControlStatusGroup,[i7.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,
          [['comment_input',1]],(null as any),0,'textarea',[['class',''],['name','comment_input'],
              ['placeholder','напишите ваш комментарий'],['rows','4']],(null as any),
          [[(null as any),'keyup.enter']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i6.CommentsComponent = _v.component;
            if (('keyup.enter' === en)) {
              const pd_0:any = ((<any>_co.addComment(i1.ɵnov(_v,30))) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),4,'div',[['class','text-center ma-b-5']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'button',
          [['class','pure-button pure-button-primary']],(null as any),[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i6.CommentsComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.addComment(i1.ɵnov(_v,30))) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['ОТПРАВИТЬ'])),
      (_l()(),i1.ɵted((null as any),['\n        '])),(_l()(),i1.ɵted((null as any),
          ['\n      '])),(_l()(),i1.ɵted((null as any),['\n\n\n      '])),(_l()(),
          i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_CommentsComponent_3)),
      i1.ɵdid(802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),
          ['\n    '])),(_l()(),i1.ɵted((null as any),['\n\n  '])),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i6.CommentsComponent = _v.component;
    const currVal_0:boolean = !_co.showComments;
    _ck(_v,14,0,currVal_0);
    const currVal_1:any = _co.showComments;
    _ck(_v,17,0,currVal_1);
    const currVal_10:any = _co.comments;
    _ck(_v,41,0,currVal_10);
  },(_ck,_v) => {
    var _co:i6.CommentsComponent = _v.component;
    const currVal_2:any = (_co.showComments? 'expanded': 'collapsed');
    _ck(_v,20,0,currVal_2);
    const currVal_3:any = i1.ɵnov(_v,28).ngClassUntouched;
    const currVal_4:any = i1.ɵnov(_v,28).ngClassTouched;
    const currVal_5:any = i1.ɵnov(_v,28).ngClassPristine;
    const currVal_6:any = i1.ɵnov(_v,28).ngClassDirty;
    const currVal_7:any = i1.ɵnov(_v,28).ngClassValid;
    const currVal_8:any = i1.ɵnov(_v,28).ngClassInvalid;
    const currVal_9:any = i1.ɵnov(_v,28).ngClassPending;
    _ck(_v,24,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9);
  });
}
export function View_CommentsComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-comments',
      ([] as any[]),(null as any),(null as any),(null as any),View_CommentsComponent_0,
      RenderType_CommentsComponent)),i1.ɵdid(114688,(null as any),0,i6.CommentsComponent,
      [i8.CommentsService,i2.ActivatedRoute],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const CommentsComponentNgFactory:i1.ComponentFactory<i6.CommentsComponent> = i1.ɵccf('app-comments',
    i6.CommentsComponent,View_CommentsComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3NlcmovcmVwby9oeXBlcnR1YmUtbmcvc3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL3NlcmovcmVwby9oeXBlcnR1YmUtbmcvc3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvc2Vyai9yZXBvL2h5cGVydHViZS1uZy9zcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC50cy5Db21tZW50c0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJjYXJkLXByZXZpZXctY29udGFpbmVyIHdhdGNoX3dpZHRoIG1hLWF1dG8gbWEtYi02MFwiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZCBjb21tZW50LWJveFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYS10LTE1IG1hLWItMTVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmlsdGVyLWJ0blwiIChjbGljayk9XCJzaG93X2hpZGVfY29tbWVudHMoKVwiPlxuICAgICAgICA8bmctY29udGFpbmVyIGkxOG49XCJAQGNvbW1lbnRzX3RpdGxlXCI+XG4gICAgICAgICAgQ09NTUVOVFM8L25nLWNvbnRhaW5lcj4gPGkgKm5nSWY9XCIhc2hvd0NvbW1lbnRzXCIgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duIGZhLWxnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwic2hvd0NvbW1lbnRzXCIgY2xhc3M9XCJmYSBmYS1jYXJldC11cCBmYS1sZ1wiPjwvaT48L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IFtAZXhwYW5kQ29sbGFwc2VdPVwic2hvd0NvbW1lbnRzID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnXCI+XG4gICAgICA8ZGl2ICBjbGFzcz1cImh5cGVydHViZS1jb21tZW50IHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwicHVyZS1mb3JtIG1hLXQtMTAgbWEtYi0xMFwiPlxuICAgICAgICA8dGV4dGFyZWEgI2NvbW1lbnRfaW5wdXQgKGtleXVwLmVudGVyKT1cImFkZENvbW1lbnQoY29tbWVudF9pbnB1dClcIiBuYW1lPVwiY29tbWVudF9pbnB1dFwiIHJvd3M9XCI0XCJcbiAgICAgICAgICAgICAgICAgIGkxOG4tcGxhY2Vob2xkZXI9XCJAQGNvbW1lbnRzX3RleHRhcmVhX3BsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibGl2ZSBhIGNvbW1lbnRcIiBjbGFzcz1cIlwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG1hLWItNVwiPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZENvbW1lbnQoY29tbWVudF9pbnB1dClcIiBjbGFzcz1cInB1cmUtYnV0dG9uIHB1cmUtYnV0dG9uLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgaTE4bj1cIkBAY29tbWVudHNfYWRkX2NvbW1lbnRfYnRuXCI+XG4gICAgICAgICAgICBBREQgQ09NTUVOVFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbW1lbnQgb2YgY29tbWVudHNcIiBjbGFzcz1cImh5cGVydHViZS1jb21tZW50IHB1cmUtZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcHVyZS11LTEgcHVyZS11LXNtLTEtNCBwdXJlLXUtbWQtMS02IHB1cmUtdS1sZy0xLTEyXCI+XG4gICAgICAgICAgPGRpdiBbcm91dGVyTGlua109XCJbJy9wcm9maWxlJywgY29tbWVudC51c2VyX2lkXVwiIGNsYXNzPVwiZGlzcGxheS1pbmxpbmUtYmxvY2sgYXZhdGFyLWltZyBjb21tZW50LWF2YXRhclwiXG4gICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCIndXJsKCcgKyBhdmF0YXJVcmwoY29tbWVudCkgKyAnKSdcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYS1sLTUgZGlzcGxheS1pbmxpbmUtYmxvY2sgY29tbWVudC1tc2cgcHVyZS11LTEgcHVyZS11LXNtLTMtNCBwdXJlLXUtbWQtNS02IHB1cmUtdS1sZy0xMS0xMlwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hLWItNVwiPlxuICAgICAgICAgICAge3sgY29tbWVudC5sb2dpbiB9fSZuYnNwOyZuYnNwOyZuYnNwO3t7IGNvbW1lbnQuZGF0ZV90aW1lICogMTAwMCB8IGRhdGU6J01NTU0gZCwgSDptbScgfX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgW2lubmVySFRNTF09XCJjb21tZW50Lm1zZyB8IG5sMmJyXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsIjxhcHAtY29tbWVudHM+PC9hcHAtY29tbWVudHM+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0trQztNQUFBO01BQUE7OztvQkFDQTtNQUFBO01BQUE7OztvQkFtQjVCO01BQUE7TUFBQSxnQkFBdUUsK0NBQ3JFO01BQUE7TUFBQSx3RUFBNkU7YUFBQSxrQ0FDM0U7TUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7TUFBQTtVQUFBLHFDQUFLLElBQzZEO01BQzVELCtDQUNGO1VBQUEsaUJBQ047VUFBQTtVQUFBO01BQTBHLG1EQUV4RztVQUFBO1VBQUEsOEJBQW9CO1VBQUEsbUNBRWQ7TUFFTjtVQUFBLHFFQUFLO01BQWtDLGlEQUNqQztVQUFBLGlCQUNGO0lBWkM7SUFBTCxXQUFLLFNBQUw7OztJQUNLO0lBREwsV0FDSyxTQURMO0lBTW9CO0lBQUE7UUFBQTtJQUFBO0lBSWY7UUFBQTtJQUFMLFlBQUssU0FBTDs7Ozs7TUFyQ1Y7VUFBQTtNQUFnRSx5Q0FDOUQ7VUFBQTtVQUFBLDhCQUE4QjtNQUM1QjtVQUFBO01BQTZCLDZDQUMzQjtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQXlCO2NBQUE7Y0FBQTtZQUFBO1lBQXpCO1VBQUEsZ0NBQXdEO01BQ3REO1VBQUE7TUFKUixnREFLaUM7VUFBQSxRQUFDO1VBQUEsa0NBQUE7d0JBQUEsbUNBQTREO1VBQUEsMkNBQzVEO1VBQUEsZ0VBQUE7VUFBQTtNQUFnRSwyQ0FDeEY7TUFFTjtVQUFBLDhEQUFpRTtVQUFBLGVBQy9EO1VBQUE7VUFBQSw4QkFBa0Q7TUFDaEQ7VUFBQTtVQUFBO2NBQUE7VUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO1VBQUEsdUNBQUE7VUFBQSxvQ0FBQTtVQUFBLHNFQUFBO1VBQUEsb0VBQUE7VUFBQTtVQUFBLGVBQXdDLCtDQUN4QztVQUFBO2NBQUE7VUFBQTtZQUFBO1lBQUE7WUFBeUI7Y0FBQTtjQUFBO1lBQUE7WUFBekI7VUFBQSxnQ0FFMkQ7TUFDcEQsK0NBQ1A7VUFBQTtVQUFBLDRDQUFnQztVQUFBLG1CQUM5QjtVQUFBO2NBQUE7WUFBQTtZQUFBO1lBQVE7Y0FBQTtjQUFBO1lBQUE7WUFBUjtVQUFBLGdDQWpCVjtNQW9CbUIsK0NBQ0w7VUFBQSxlQUNGLGlEQUdOO2lCQUFBO2FBQUE7NEJBQUEseUNBZU07VUFBQSxhQUNGLDJDQUVGO1VBQUEsU0FDRjs7SUF2QytCO0lBQUgsWUFBRyxTQUFIO0lBQ0c7SUFBSCxZQUFHLFNBQUg7SUFtQnZCO0lBQUwsWUFBSyxVQUFMOzs7SUFoQkc7SUFBTCxZQUFLLFNBQUw7SUFFSTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEscUVBQUE7Ozs7b0JDWFI7TUFBQTtrQ0FBQSxVQUFBO01BQUE7SUFBQTs7OzsifQ==