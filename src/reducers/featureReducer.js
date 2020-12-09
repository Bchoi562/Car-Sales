import {ADD_FEATURE, CLEAR_FEATURE} from '../actions/featureActions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const featureReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_FEATURE):
            const newFeature = state.additionalFeatures.filter(feature=>{
                if(feature.id === action.payload){
                    return feature;
                }
            })[0]
            return({
                ...state,
                car: {...state.car, features:[...state.car.features, newFeature]},
                additionalPrice: newFeature.price + state.additionalPrice
            });

        case(CLEAR_FEATURE):
            const subtractItem = state.additionalFeatures.filter(item=>{
                if(item.id===action.payload){
                    return item
                }
            })[0]
            const newFeat = state.car.features.filter(feature=>{
                if(feature.id !== action.payload){
                    return feature;
                }
            })
            return({
                ...state,
                car:{...state.car,features:newFeat},
                additionalPrice:state.additionalPrice-subtractItem.price
            })
            


        default:
            return(state);
    }
}