import React from 'react';
import Agent from '@meldcx/agent';

import {Loader} from 'components';

export default class OptionsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {}
        };
        this.setup();
    }

    async setup() {
        this.agent = new Agent();
        await this.agent.onReadyAsync();
        this.setState({
            options: await this.agent.Device.getOptions()
        });
    }

    render() {
        let contents = <tr>
            <td colSpan="2" className="po-r">
                <Loader />
            </td>
        </tr>;

        const entries = Object.entries(this.state.options);
        if (entries.length) {
            contents = entries.map(([key, value]) =>
                <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
            );
        }

        return <table>
            <tbody>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                {contents}
            </tbody>
        </table>;
    }
}
