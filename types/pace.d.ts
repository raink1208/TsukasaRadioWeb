declare module 'pace-js' {
    interface PaceStatic {
        start(options?: object): void;
        restart(): void;
        stop(): void;
        track(): void;
        ignore(): void;
        trigger(event: string): void;
        on(event: string, handler: () => void): void;
        off(event: string, handler: () => void): void;
    }

    interface PaceOptions {
        ajax?: boolean;
        document?: boolean;
        eventLag?: boolean;
        elements?: {
            selectors?: string[];
        };
        restartOnPushState?: boolean;
        restartOnRequestAfter?: boolean;
    }

    const Pace: PaceStatic;
    export = Pace;
}