import {Injectable} from '@angular/core';
import {UtilitiesService} from './utilities.service';

@Injectable()
export class CommonService {

  constructor() {
  }

  setLocalStorageString(key:string, value:string):void {
    window.localStorage.setItem(key, value);
  }

  getLocalStorageString(key:string):any {
    return window.localStorage.getItem(key);
  }

  setLocalStorageObject(key:string, value:Object):void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorageObject(key:string):any {
    let temp = window.localStorage.getItem(key);
    if (UtilitiesService.isNull(temp)) {
      return null;
    }
    return JSON.parse(temp);
  }

  removeItem(key:string) {
    window.localStorage.removeItem(key);

  }

  clearLocalStorage() {
    window.localStorage.clear();
  }

  addEquipmentPanelHeightFromWindows(page):number {
    let height = 0;
    if (page === 'equipment-list') {
      height = 150;
    } else if (page === 'create-edit') {
      height = 100;
    }
    return window.innerHeight - height;
  }

  checkBrowser():boolean {
    let trident = !!navigator.userAgent.match(/Trident\/7.0/);
    let net = !!navigator.userAgent.match(/.NET4.0E/);
    let edge = !!navigator.userAgent.match(/Edge\//);
    let IE11 = trident && net;

    if (IE11) {
      return true;
    } else {
      return false;
    }
  }

  checkBrowserIsEdge():boolean {
    let edge = !!navigator.userAgent.match(/Edge\//);

    if (edge) {
      return true;
    } else {
      return false;
    }
  }

  checkIsMobileDevice():boolean {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  getContentPanelHeight(extraHeight?:number):number {
    let trident = !!navigator.userAgent.match(/Trident\/7.0/);
    let net = !!navigator.userAgent.match(/.NET4.0E/);
    let IE11 = trident && net;
    let IEold = (navigator.userAgent.match(/MSIE/i) ? true : false);
    let isIE = IE11 || IEold;
    let height = 0;
    if (isIE) {
      height = document.documentElement.clientHeight;
      if (extraHeight) {
        height += extraHeight;
      }
    } else {
      let body = document.body,
        html = document.documentElement;

      height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    }
    return height;
  }

}
