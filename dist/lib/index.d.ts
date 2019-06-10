import { Bundle } from "@dizmo/types-bundle";
import { Dizmo } from "@dizmo/types-dizmo";
import { UUID } from "@dizmo/types-uuid";
export interface Viewer {
    [key: string]: any;
}
export interface Viewer {
    openURL: () => void;
    loadMediaInfo: (url: string, callback: Function) => void;
}
export interface Viewer {
    openPDF: (path: string) => string;
    closePdf: (id: string) => void;
    addPageToPDF: (id: string, options?: {
        angle?: number;
        height?: number;
        width?: number;
        x?: number;
        y?: number;
        zoom?: number;
    }) => void;
}
export interface Viewer {
    getAttribute: <T>(path: string) => T;
    setAttribute: <T>(path: string, value: T) => void;
}
export interface Viewer {
    subscribeToAttribute: <T>(path: string, callback: (path: string, value: T, old_value?: T) => void, subscribed_callback?: Function) => UUID;
    subscribeToAttributeConditional: <T>(path: string, condition: string | boolean | number, callback: (path: string, value: T, old_value?: T) => void, subscribed_callback?: Function) => UUID;
    unsubscribeAttribute: <T>(subscription_id: UUID) => void;
}
export interface Viewer {
    setPosition: (x: number, y: number) => void;
    getPosition: () => {
        x: number;
        y: number;
    };
}
export interface Viewer {
    getLanguage: () => string;
    activateLicense: (username: string, license: string) => boolean;
}
export interface Viewer {
    onRemoteHostAdded: (callback: Function, subscribed_callback?: Function) => UUID;
    onRemoteHostRemoved: (callback: Function, subscribed_callback?: Function) => UUID;
    unsubscribeRemoteHost: (subscription_id: UUID) => void;
}
export interface Viewer {
    takeScreenshot: (options: Function | {
        bitmap?: {
            height?: number;
            width?: number;
        };
        geometry?: {
            angle?: number;
            height?: number;
            width?: number;
            x?: number;
            y?: number;
            zoom?: number;
        };
    }, callback: Function) => void;
}
export interface Viewer {
    transitionTo: (x: number, y: number, zoom: number, angle: number) => void;
    focusOnDizmo: (identifier: string, zoom?: number) => void;
}
export interface Viewer {
    getChildDizmos: <T extends Dizmo>() => T[];
    getDizmos: <T extends Dizmo>() => T[];
    getDizmoById: <T extends Dizmo>(identifier: string) => T;
}
export interface Viewer {
    getBundles: <T extends Bundle>() => T[];
    getBundleById: <T extends Bundle>(identifier: string) => T;
}
export interface Viewer {
    updatePeerList: () => void;
    getRemoteHosts: () => any[];
    getRemoteHostById: (id: string) => any;
    getRemoteHostByIp: (ip_address: string) => any;
    addRemoteHost: (ip_address: string, callback?: Function) => void;
}
export interface Viewer {
    startAudioRecording: (callback?: Function) => void;
    stopAudioRecording: () => void;
    getAudioSettings: () => {
        sampleRate: number;
        sampleSize: number;
        codec: number;
    };
    setAudioSettings: (sampleRate: number, sampleSize: number, codec: number) => void;
    recordingIsRunning: () => boolean;
}
export interface Viewer {
    clearSetup: () => void;
    saveSetup: (name: string, id: string, password: string, callback?: Function, pad_id?: string) => void;
    loadSetup: (id: string, password: string, callback?: Function, options?: {
        clearSpace: boolean;
        loadAsPad: boolean;
        targetPad?: string;
    }) => void;
    changeSetupSecret: (id: string, old_password: string, new_password: string, callback?: Function) => void;
}
export interface Viewer {
    onDizmoAdded: (callback: Function, subscribed_callback?: Function) => UUID;
    onDizmoRemoved: (callback: Function, subscribed_callback?: Function) => UUID;
    unsubscribeDizmoChanges: (subscription_id: UUID) => void;
}
export interface Viewer {
    installBundle: (bundle_uri: string, callback: Function) => void;
    installStoreBundle: (bundle_id: string, version: string, callback?: Function) => void;
}
export interface Viewer {
    onBundleAdded: (callback: Function, subscribed_callback?: Function) => UUID;
    onBundleRemoved: (callback: Function, subscribed_callback?: Function) => UUID;
    unsubscribeBundleChanges: (subscription_id: UUID) => void;
}
export interface Viewer {
    storeWorkspace: () => void;
    loadWorkspace: () => void;
}
export interface Viewer {
    notify: (options: {
        button_1?: string;
        button_2?: string;
        callback?: Function;
        closable?: boolean;
        color?: string;
        data?: Object;
        icon?: string;
        ignore?: boolean;
        important?: boolean;
        notification_id?: string;
        opacity?: number;
        path?: string;
        sub_title?: string;
        text?: string;
        timeout?: number | null;
        title: string;
    }) => Promise<void>;
}
export default Viewer;
//# sourceMappingURL=index.d.ts.map