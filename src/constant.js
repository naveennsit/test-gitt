import axios from 'axios'
export const MENU_OPTION = {
    'DTH' :{
        'Business Head':[
            {link:'/app-list',key:'My_Apps',title:'My Apps'},
            {link:'/dth/user-list',key:'Users',title:'Users'},
            {link:'/dth/agency-list',key:'Agencies',title:'Agencies'}
        ]
    }
};

export function getAuthToken() {
    return typeof localStorage !== "undefined"
        ? localStorage.getItem("token")
        : undefined;
}
export const sendPostRequest = (url, data, config = {}) => {
    let updatedConfig = {
        headers: { Authorization: getAuthToken() || "" },
        ...config
    };
    return axios.post(url, data, updatedConfig);
}
