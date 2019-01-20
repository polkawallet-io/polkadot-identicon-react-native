import { Prefix } from '@polkadot/keyring/address/types';
import { IdentityProps as Props } from './types';
import React from 'react';
declare type State = {
    address?: string | null;
};
export default class IdentityIcon extends React.PureComponent<Props, State> {
    state: State;
    private static prefix?;
    static setDefaultPrefix(prefix: Prefix): void;
    static getDerivedStateFromProps({ prefix, value }: Props, prevState: State): State | null;
    render(): JSX.Element;
    private getWrapped;
    private onCopy;
}
export {};
