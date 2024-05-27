import { createSlice } from '@reduxjs/toolkit';
import { fetchSignin, fetchSignup } from '../thunk';
import { UserResponse, userSliceType } from '@/types/user';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userData: {},
    loading: false,
    value: 10,
  } as userSliceType,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    setInfo: (state) => {
      let userInfo: any = localStorage.getItem('userinfo');
      userInfo = userInfo && JSON.parse(userInfo);
      if (userInfo) {
        state.userData = {
          ...userInfo,
          avatar: userInfo?.avatar !== null ? userInfo.avatar : '/images/logo/logo-header.png'
        };
      }
    },
  },
  extraReducers: (builder) => {
    // Signup
    builder.addCase(fetchSignup.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload as UserResponse;
    });
    builder.addCase(fetchSignup.pending, (state) => {
      state.loading = true;
    });
    // Signin
    builder.addCase(fetchSignin.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload as UserResponse;
    });
    builder.addCase(fetchSignin.pending, (state) => {
      state.loading = true;
    });
    // UserInfo
    // builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
    //   // console.log(action.payload);
    // });
  },
});

export const { increment, setInfo } = userSlice.actions;

export default userSlice.reducer;
