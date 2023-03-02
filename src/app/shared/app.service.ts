import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import * as appSettings from "tns-core-modules/application-settings";
const _ = require('../lodash');
import { User } from "./../modal/user";
import { LeagueDetails } from "./../modal/leagueDetails";
import { ViewPlayer } from "./../modal/Viewplayer"
import { Chat } from "./../modal/chat";
import { UserChatList } from "./../modal/userChat";

declare var $: any;

@Injectable()
export class AppService {
    api_end_point = 'https://lincolncitydaysinn.com/';
    //api_end_point = 'https://api.officepickempool.com/';
    //  api_end_point = 'http://demo.officepickempool.com/';
    public deviceInformation: DeviceInfo;
    public screenInformation: ScreenInfo;
    userDetails: User = new User();
    releaseMode = "";
    appVersion = "1.0.8";
    buildVersion = "1";
    leagueDetails = new LeagueDetails();
    viewplayers = new ViewPlayer()
    isApplyDateConstraint = false;
    isManageLeagueDashBord = true;
    //selectedchat = new Chat();
    selectedchat = new UserChatList();
    constructor() {
        this.deviceInformation = new DeviceInfo(
            device.model,
            device.model,
            device.os,
            device.osVersion,
            device.sdkVersion,
            device.language,
            device.manufacturer,
            device.uuid);
        this.screenInformation = new ScreenInfo(
            screen.mainScreen.heightDIPs,
            screen.mainScreen.heightPixels,
            screen.mainScreen.scale,
            screen.mainScreen.widthDIPs,
            screen.mainScreen.widthPixels);
    }

    isLogin(): boolean {
        return appSettings.hasKey("tokenKey");
    }


    getHeaderWithToken(): HttpHeaders {
        let token = appSettings.getString("tokenKey");
        return new HttpHeaders({
            'Authorization': 'Bearer ' + token,
            'current-device-uuid': device.uuid,
            'current-device-model': device.model,
            'current-device-platform': device.osVersion,
            'current-device-version': device.sdkVersion,
            'current-device-name': device.manufacturer
        });
    }

    getHeaderWithoutToken(): HttpHeaders {
        return new HttpHeaders({
            'current-device-uuid': device.uuid,
            'current-device-model': device.model,
            'current-device-platform': device.osVersion,
            'current-device-version': device.sdkVersion,
            'current-device-name': device.manufacturer
        });
    }

    getHeader(): HttpHeaders {
        if (appSettings.hasKey("tokenKey")) {
            return this.getHeaderWithToken();
        } else {
            return this.getHeaderWithoutToken();
        }
    }

    //generate a random hashed string
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    unique_id() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    //TODO: replace all manual mapings in the project by this function.
    map(object: any, target: any) {
        object = _.cloneDeep(object);
        target = _.cloneDeep(target);
        for (var property in object) {
            target[property] = object[property];
        }
        return target;
    }

    mapCollection(collection: Array<any>, target: any) {
        let mapedCollection: Array<any> = [];
        for (var object of collection) {
            mapedCollection.push(this.map(object, target))
        }
        return mapedCollection;
    }

    in_array(key: any, stack: Array<any>) {
        stack = _.cloneDeep(stack);
        for (let stackItem of stack) {
            if (stackItem == key)
                return true;
        }
        return false;
    }

    property_to_array(property: string, stack: Array<any>) {
        stack = _.cloneDeep(stack);
        let arr: Array<any> = [];
        for (let stackItem of stack) {
            arr.push(stackItem[property]);
        }
        return arr;
    }

    property_in_array(property: any, value: any, stack: Array<any>) {
        stack = _.cloneDeep(stack);
        for (let stackItem of stack) {
            if (stackItem[property] == value)
                return true;
        }
        return false;
    }

    find_obj_by_prop(property: any, value: any, stack: Array<any>) {
        stack = _.cloneDeep(stack);
        for (let stackItem of stack) {
            if (stackItem[property] == value)
                return stackItem;
        }
        return null;
    }

    find_objs_by_prop(property: any, value: any, stack: Array<any>) {
        let found_objs: Array<any> = [];
        stack = _.cloneDeep(stack);
        for (let stackItem of stack) {
            if (stackItem[property] == value)
                found_objs.push(stackItem);
        }
        return found_objs;
    }

    remove_obj_by_property(property: string, value: string, stack: Array<any>): any {
        stack = _.cloneDeep(stack);
        let updatedStack = [];
        for (let stackItem of stack) {
            if (stackItem[property] != value)
                updatedStack.push(stackItem);
        }
        return updatedStack;
    }

    array_unique_merge(array1, array2, unique_property) {
        let merged = array1.concat(array2);
        //return merged;
        let unique_array = [];
        for (let obj of merged) {
            unique_array = this.remove_obj_by_property(unique_property, obj[unique_property], unique_array);
            unique_array.push(obj);
        }
        return unique_array;
    }

    show_error_popup(error_message: string = 'Error with server, please try again later.') {
        $('#global_error_popup').modal('show');
        $('#global_error_popup_text').text(error_message);
    }

    show_success_popup(success_message: string = 'Done!') {
        $('#global_success_popup').modal('show');
        $('#global_success_popup_text').text(success_message);
    }
}

class DeviceInfo {
    constructor(
        public model: string,
        public deviceType: string,
        public os: string,
        public osVersion: string,
        public sdkVersion: string,
        public language: string,
        public manufacturer: string,
        public uuid: string
    ) { }
}

class ScreenInfo {
    constructor(
        public heightDIPs: number,
        public heightPixels: number,
        public scale: number,
        public widthDIPs: number,
        public widthPixels: number
    ) { }
}