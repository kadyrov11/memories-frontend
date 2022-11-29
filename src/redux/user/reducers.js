import { register, getMe, logout, setAuthErr } from './actions';
//Auth actions have the same action-type
const auth = register;

export const reducers = {
    
};

export const extraReducers = {
    // Auth
    [auth.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [auth.fulfilled]: (state, { payload }) => {
        const { _id, name, lastName, email, token } = payload;
        localStorage.setItem('token', token);

        state.user = { _id, name, lastName, email };
        state.loading = false;
        state.error = null;
    },
    [auth.rejected]: (state) => {
        state.loading = false;
        state.error = "Failed to authorize! Check the entered data.";
    },
    // GetMe
    [getMe.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [getMe.fulfilled]: (state, { payload }) => {
        const { _id, name, lastName, email } = payload;
        state.user = { _id, name, lastName, email };
        state.loading = false;
        state.error = null;
    },
    [getMe.rejected]: (state) => {
        if(!state.user){
            localStorage.removeItem('token');
    
            state.loading = false;
            state.error = "Failed to authorize!";
        }
    },
    // Sync actions
    [setAuthErr]: (state, { payload }) => { 
        state.error = payload;
    },
    [logout]: (state) => { 
        localStorage.removeItem('token');
        
        state.user = null 
        state.loading = false;
        state.error = null;
    }
};