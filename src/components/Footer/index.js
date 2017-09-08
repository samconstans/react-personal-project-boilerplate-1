import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    static PropTypes = {
        googlePlus: PropTypes.string.isRequired,
        facebook:   PropTypes.string.isRequired,
        linkedin:   PropTypes.string.isRequired,
        twitter:    PropTypes.string.isRequired
    }


    render () {
        const { googlePlus, facebook, linkedin, twitter } = this.props;

        return (
            <section className = { Styles.footer }>
                <div className = { Styles.sotialLinks }>
                    <a href = { linkedin } target = '_blank'>
                        <svg height = '24' viewBox = '0 0 24 24' width = '24' xmlns = 'http://www.w3.org/2000/svg' >
                            <path d = 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' />
                        </svg>
                    </a>
                    <a href = { facebook } target = '_blank'>
                        <svg viewBox = '0 0 43.8 43.8' xmlns = 'http://www.w3.org/2000/svg'>
                            <path className = 'st0' d = 'M41.4 0h-39C1.1 0 0 1.1 0 2.4v38.9c0 1.3 1.1 2.4 2.4 2.4h21V26.8h-5.7v-6.6h5.7v-4.8c0-5.7 3.5-8.7 8.5-8.7 1.7 0 3.4.1 5.1.3v5.9h-3.5c-2.7 0-3.3 1.3-3.3 3.2v4.2h6.5l-.9 6.6h-5.7v16.9h11.2c1.3 0 2.4-1.1 2.4-2.4v-39c.1-1.3-1-2.4-2.3-2.4z' id = 'facebook-logo' />
                        </svg>
                    </a>
                    <a href = { twitter } target = '_blank'>
                        <svg height = '24' viewBox = '0 0 24 24' width = '24' xmlns = 'http://www.w3.org/2000/svg'>
                            <path d = 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z' />
                        </svg>
                    </a>
                    <a href = { googlePlus } target = '_blank'>
                        <svg height = '24' viewBox = '0 0 24 24' width = '24' xmlns = 'http://www.w3.org/2000/svg' >
                            <path d = 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z' />
                        </svg>
                    </a>
                </div>
                <span> &copy; 2017. Made with {'\u2661' }  &#10084; by VOVK. All rights reserved. </span>
            </section>
        );
    }
}
