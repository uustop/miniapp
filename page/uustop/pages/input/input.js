Page({
    data: {
        showTopTips: false,
        mobile: '',
        code: '',
    },
    showTopTips: function () {
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function () {
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },
    getCode: function (e) {
        var that = this;
        if (that.validatemobile(that.data.mobile)) {
            console.log(that.data.mobile)
        }
    },
    mobile: function (e) {
        var that = this;
        that.setData({
            mobile: e.detail.value
        })
    },
    validatemobile: function (mobile) {
        if (mobile.length == 0) {
            wx.showToast({
                title: '请输入手机号',
                icon: 'success',
                duration: 1500
            })
            return false;
        }
        if (mobile.length != 11) {
            wx.showToast({
                title: '手机号长度有误',
                icon: 'success',
                duration: 1500
            })
            return false;
        }
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
        if (!myreg.test(mobile)) {
            wx.showToast({
                title: '手机号有误',
                icon: 'success',
                duration: 1500
            })
            return false;
        }
        return true;
    }
});