export const state = () => ({
    products: [
        {value: 'cremozinn', text: 'Cremozinn'},
        {value: 'solargo', text: 'SolarGO'},
        {value: 'geotech', text: 'Geotech'},
    ],
    device: {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    }
});
export const mutations = {
    setDevice(state, value){
        state.device = value
    }
};
