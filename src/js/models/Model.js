class Model {

    constructor( data ) {

        this._prop1 = data.prop1;
        this._prop2 = data.prop2;
    }

    get prop1() {
        
        return this._prop1;
    }

    get prop2() {

        return this._prop2;
    }
}

export default Model;