/* tslint:disable:ban-types interface-name */
import { Bundle } from "@dizmo/types-bundle";
import { Dizmo } from "@dizmo/types-dizmo";
import { UUID } from "@dizmo/types-uuid";

export interface Viewer {
    [key: string]: any;
}

export interface Viewer {
    openURL:
    () => void;
    loadMediaInfo:
    (url: string, callback: Function) => void;
}

export interface Viewer {
    openPDF:
    (path: string) => string;
    closePdf:
    (id: string) => void;
    addPageToPDF:
    (id: string, options?: {
        angle: number
        height: number,
        width: number,
        x: number,
        y: number,
        zoom: number,
    }) => void;
}

export interface Viewer {
    getAttribute:
    <T>(path: string) => T;
    setAttribute:
    <T>(path: string, value: T) => void;
}

export interface Viewer {
    subscribeToAttribute:
    <T>(path: string,
        callback: (path: string, value: T) => void,
        subscribedCallback?: Function,
    ) => UUID;

    subscribeToAttributeConditional:
    <T>(path: string, condition: string | boolean | number,
        callback: (path: string, value: T) => void,
        subscribedCallback?: Function,
    ) => UUID;

    unsubscribeAttribute:
    <T>(subscriptionId: UUID) => void;
}

export interface Viewer {
    setPosition:
    (x: number, y: number) => void;
    getPosition:
    () => { x: number, y: number };
}

export interface Viewer {
    getLanguage:
    () => string;
    activateLicense:
    (username: string, license: string) => boolean;
}

export interface Viewer {
    onRemoteHostAdded:
    (callback: Function, subscribedCallback?: Function) => UUID;
    onRemoteHostRemoved:
    (callback: Function, subscribedCallback?: Function) => UUID;
    unsubscribeRemoteHost:
    (subscriptionId: UUID) => void;
}

export interface Viewer {
    takeScreenshot: (
        options: Function | {
            bitmap: {
                height: number,
                width: number,
            },
            geometry: {
                angle: number,
                height: number,
                width: number,
                x: number,
                y: number,
                zoom: number,
            },
        },
        callback?: Function,
    ) => void;
}

export interface Viewer {
    transitionTo:
    (x: number, y: number, zoom: number, angle: number) => void;
    focusOnDizmo:
    (identifier: string, zoom?: number) => void;
}

export interface Viewer {
    getChildDizmos:
    <T extends Dizmo>() => T[];
    getDizmos:
    <T extends Dizmo>() => T[];
    getDizmoById:
    <T extends Dizmo>(id: string) => T;
}

export interface Viewer {
    getBundles:
    <T extends Bundle>() => T[];
    getBundleById:
    <T extends Bundle>(id: string) => T;
}

export interface Viewer {
    updatePeerList:
    () => void;
    getRemoteHosts:
    () => any[]; /* RemoteHost[] */
    getRemoteHostById:
    (id: string) => any; /* RemoteHost */
    getRemoteHostByIp:
    (ip: string) => any; /* RemoteHost */
    addRemoteHost:
    (remoteHostId: string, callback: Function) => void;
}

export interface Viewer {
    startAudioRecording:
    (callback: Function) => void;
    stopAudioRecording:
    () => void;
    getAudioSettings:
    () => { sampleSize: number, sampleRate: number, codec: number };
    setAudioSettings:
    (sampleSize: number, sampleRate: number, codec: number) => void;
    recordingIsRunning:
    () => boolean;
}

export interface Viewer {
    clearSetup:
    () => void;
    saveSetup: (
        name: string, id: string, password: string,
        callback?: Function, padId?: string) => void;
    loadSetup: (
        id: string, password: string,
        callback?: Function, options?: {
            clearSpace: boolean,
            loadAsPad: boolean,
            targetPad: string,
        }) => void;
    changeSetupSecret: (
        id: string, oldPassword: string, newPassword: string,
        callback?: Function,
    ) => void;
}

export interface Viewer {
    onDizmoAdded:
    (callback: Function, subscribedCallback?: Function) => UUID;
    onDizmoRemoved:
    (callback: Function, subscribedCallback?: Function) => UUID;
    unsubscribeDizmoChanges:
    (subscriptionId: UUID) => void;
}

export interface Viewer {
    installBundle:
    (bundleURI: string, callback: Function) => void;
    installStoreBundle:
    (bundleId: string, version: string, callback: Function) => void;
}

export interface Viewer {
    onBundleAdded:
    (callback: Function, subscribedCallback?: Function) => UUID;
    onBundleRemoved:
    (callback: Function, subscribedCallback?: Function) => UUID;
    unsubscribeBundleChanges:
    (subscriptionId: UUID) => void;
}

export interface Viewer {
    storeWorkspace:
    () => void;
    loadWorkspace:
    () => void;
}

export interface Viewer {
    notify:
    (options: {
        title: string,
        button_1?: string,
        button_2?: string,
        callback?: Function,
        closable?: boolean,
        color?: string,
        data?: object,
        icon?: string,
        opacity?: number,
        sub_title?: string,
        text?: string,
        timeout?: number,
        path?: string,
        important?: boolean,
    }) => void;
}

export default Viewer;
