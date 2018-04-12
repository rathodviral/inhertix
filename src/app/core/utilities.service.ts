import {Injectable} from '@angular/core';
import * as  moment from 'moment/moment';

@Injectable()
export class UtilitiesService {

  constructor() {
  }

  static objectToParams(object):string {
    return Object.keys(object).map((key) =>
      `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
    ).join('&');
  }

  static isEmpty(item:any) {
    return UtilitiesService.isNull(item) || item.length === 0 || item === '' || item === 0;
  }

  static isEmptyWithTrim(item:any) {
    return UtilitiesService.isNull(item) || item.length === 0 || item.trim() === '';
  }

  static isNull(item:any) {
    return item === undefined || item === null;
  }

  static stringToDate(str:string, format:string = 'MM/DD/YYYY'):Date {
    if (UtilitiesService.isEmpty(str)) {
      return null;
    }
    return moment(str, format).toDate();
  }

  static stringToDateObject(str:string, format:string = 'MM/DD/YYYY'):any {
    if (UtilitiesService.isEmpty(str)) {
      return null;
    }
    let temp = moment(str, format);
    return {year: temp.year(), month: +temp.format('MM'), day: +temp.format('DD')};
  }

  static dateDifference(startDate:Date, endDate:Date):number {
    return moment(startDate).diff(moment(endDate), 'days');
  }

  static dateToDateObject(date:Date):any {
    if (UtilitiesService.isEmpty(date)) {
      return null;
    }
    let temp = moment(date);
    return {year: temp.year(), month: +temp.format('MM'), day: +temp.format('DD')};
  }


}
