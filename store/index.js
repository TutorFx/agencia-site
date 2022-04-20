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
    },
    social: [
        {name: "facebook", url: "https://www.facebook.com/", icon: "mdi mdi-facebook"},
        {name: "twitter", url: "https://twitter.com/", icon: "mdi mdi-twitter"},
        {name: "instagram", url: "https://www.instagram.com/", icon: "mdi mdi-instagram"},
        {name: "youtube", url: "https://www.youtube.com/", icon: "mdi mdi-youtube"},
        {name: "linkedin", url: "https://www.linkedin.com/", icon: "mdi mdi-linkedin"},
    ]
});
export const mutations = {
    setDevice(state, value){
        state.device = value
    }
};
