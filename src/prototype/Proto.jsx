import { Component } from 'react';

class Proto extends Component {
    passDataToKidsAndGrandkids = comp => {
        // if the children/component is not a text AND type of comp is not a html element (example: div)
        if ((typeof comp !== 'string') && (typeof comp.type !== 'string')) {
            // pass the data to that component
            const injectedComp = this.passProtoData(comp);
            // if component has children components
            if (injectedComp.props.children) {
                // if or children component has more than one kid
                if (Array.isArray(injectedComp.props.children)) {
                    // pass the data to all of the kids (exept those which are text or html elements)
                    injectedComp.props.children = injectedComp.props.children.map(this.passDataToKidsAndGrandkids);
                    // do nothing if the kid is a text
                } else if (typeof injectedComp.props.children === 'string') {
                    // in all other cases (1 kid - object) - pass the data to that kid (exept if kid is text or html element )
                } else {
                    this.passDataToKidsAndGrandkids(injectedComp.props.children);
                }
            }
            return injectedComp;
        }
        return comp;
    }

    passProtoData = comp => {
        // ***actions*** is a copy of the Proto component
        const actions = { ...this };

        Object.keys(actions).filter(key => {
            return (
                // get the names of properties which values are not functions
                typeof actions[key] !== 'function'
                // and Proto's helper methods (passProtoData and passDataToKidsAndGrandkids)
                || (key === 'passDataToKidsAndGrandkids' || key === 'passProtoData')
            )
        }).forEach(key => {
            // then exclude all of those properties from the ***actions*** object
            delete actions[key];
            // now ***actions*** should consist only of ACTION methods
            // (methods which affect state)
        });

        // returns a component
        return {
        ...comp,
        props: {
           // passing other props passed to the children components
            ...comp.props,
            protoData: {
               // all the state data passed as ***info*** props
               info: { ...this.state },
               // and all the methods which affect state as ***actions*** props
               actions
           }
       }
    }};

    render() {
        const { children } = this.props;
        if (Array.isArray(children)) {
            return this.props.children.map(this.passDataToKidsAndGrandkids);
        } else if (typeof children === 'string') {
            return children;
        } else {
            return this.passDataToKidsAndGrandkids(children);
        }
    };
};

export default Proto;
