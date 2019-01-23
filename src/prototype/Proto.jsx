import { Component } from 'react';

class Proto extends Component {
    state = {
        name: "Aleksandar",
        lastname: "Spasov",
        age: 32
    }

    removeName = () => this.setState({ name: "Nobody" });

    passDataToKidsAndGrandkids = comp => {
        if ((typeof comp !== 'string') && (typeof comp.type !== 'string')) {
            const injectedComp = this.passProtoData(comp);
            if (injectedComp.props.children) {
                if (Array.isArray(injectedComp.props.children)) {
                    injectedComp.props.children = injectedComp.props.children.map(this.passDataToKidsAndGrandkids);
                } else if (typeof injectedComp.props.children === 'string') {
                } else {
                    this.passDataToKidsAndGrandkids(injectedComp.props.children);
                }
            }
            return injectedComp;
        }
        return comp;
    }

    passProtoData = comp => ({
       ...comp,
       props: {
           ...comp.props,
           protoData: {
               info: { ...this.state },
               actions: {
                   removeName: this.removeName
               }
           }
       } 
    });

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