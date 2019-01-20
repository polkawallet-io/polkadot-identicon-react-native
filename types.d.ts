import { Prefix } from '@polkadot/keyring/address/types';
export declare type BaseProps = {
    className?: string;
    style?: {
        [index: string]: any;
    };
};
export declare type Props = BaseProps & {
    size: number;
    value: string;
};
export declare type IdentityProps = BaseProps & {
    isHighlight?: boolean;
    onCopy?: (value: string) => void;
    prefix?: Prefix;
    size?: number;
    theme?: string;
    value?: string | Uint8Array | null;
};
