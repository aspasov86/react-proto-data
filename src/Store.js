import Proto from './prototype/Proto';

class Store extends Proto {
    // add state and actions here
    // avoid helper methods as they will be passed to each component
    state = {
        name: "Aleksandar",
        lastname: "Spasov",
        age: 32,
        kids: 1,
        married: true
    }

    removeName = () => this.setState({ name: 'Nobody' });
}

export default Store;