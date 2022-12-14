const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAV_MENU":
            state = { ...state, navMenu: !state.navMenu }
            return state;
        case "SHOP_FILTERS_TOGGLE":
            state = { ...state, shopFiltersToggle: !state.shopFiltersToggle }
            return state
        case "CHANGE_USER_PROFILE":
            state = { ...state, userProfile: !state.userProfile }
            return state;
        default:
            return state;
    }
}

export default reducer