import { DtlsRole } from '../../Transport';
import { RtpParameters } from '../../RtpParameters';
import { SctpParameters } from '../../SctpParameters';
export declare class RemoteSdp {
    private _iceParameters;
    private readonly _iceCandidates;
    private readonly _dtlsParameters;
    private readonly _sctpParameters;
    private readonly _plainRtpParameters;
    private readonly _planB;
    private _mediaSections;
    private _firstMid;
    private readonly _sdpObject;
    constructor({ iceParameters, iceCandidates, dtlsParameters, sctpParameters, plainRtpParameters, planB }: {
        iceParameters?: any;
        iceCandidates?: any;
        dtlsParameters?: any;
        sctpParameters?: SctpParameters;
        plainRtpParameters?: any;
        planB?: boolean;
    });
    updateIceParameters(iceParameters: any): void;
    updateDtlsRole(role: DtlsRole): void;
    getNextMediaSectionIdx(): any;
    send({ offerMediaObject, reuseMid, offerRtpParameters, answerRtpParameters, codecOptions, extmapAllowMixed }: {
        offerMediaObject: any;
        reuseMid?: boolean;
        offerRtpParameters: RtpParameters;
        answerRtpParameters: RtpParameters;
        codecOptions: any;
        extmapAllowMixed?: boolean;
    }): void;
    receive({ mid, kind, offerRtpParameters, streamId, trackId }: {
        mid: string;
        kind: string;
        offerRtpParameters: RtpParameters;
        streamId: string;
        trackId: string;
    }): void;
    disableMediaSection(mid: string): void;
    closeMediaSection(mid: string): void;
    planBStopReceiving({ mid, offerRtpParameters }: {
        mid: string;
        offerRtpParameters: RtpParameters;
    }): void;
    sendSctpAssociation({ offerMediaObject }: {
        offerMediaObject: any;
    }): void;
    receiveSctpAssociation({ oldDataChannelSpec }?: {
        oldDataChannelSpec?: boolean;
    }): void;
    getSdp(): string;
    _addMediaSection(newMediaSection: any): void;
    _replaceMediaSection(newMediaSection: any, reuseMid?: boolean): void;
    _regenerateBundleMids(): void;
}
//# sourceMappingURL=RemoteSdp.d.ts.map