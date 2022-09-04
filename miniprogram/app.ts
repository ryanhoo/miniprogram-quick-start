// app.ts
App({
  globalData: {},
  onLaunch() {
    console.log('App launch');

    // init cloud env
    wx.cloud.init({
      // env: 'use dynamic(current default) env',
      traceUser: true,
    });

    // login
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: (res) => {
        const { openid } = res.result as { openid: string };
        console.log('login: openid=', openid, res);
      },
      fail: (err) => {
        console.error('login:', err);
      },
    });
  },
});
