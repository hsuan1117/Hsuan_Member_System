(function(global, auth, setting) {
	function HMS() {
		this.init = function() {
			$("#" + setting.btn.login).click(function() {
				this.go("login")
			})
			$("#" + setting.btn.register).click(function() {
				this.go("register")
			})
			$("#" + setting.btn.setting).click(function() {
				this.go("setting")
			})
			$("#" + setting.btn.coin).click(function() {
				this.go("coin")
			})
			$("#" + setting.btn.logout).click(function() {
				auth.signOut()
			})
			auth.onAuthStateChanged(function(user) {
				if (user) {
					window.HMS.prototype.sessionUser = user;
					sessionUser = user;
					if (window.HMS.prototype.writeInfoToDom) {
						//只會在帳號資料頁面執行
						window.HMS.prototype.writeInfoToDom()
					}
					this.writeToDB(sessionUser.uid)
					if (!sessionUser.displayName) {
						//已登入但無名字
						$("#" + setting.block.status).html(
							this.renderTemplateText(
								setting.text.status.noName
							)
						)
					} else {
						//已登入且有名字
						$("#" + setting.block.status).html(
							this.renderTemplateText(
								setting.text.status.hasName
							).replace(
								/{{name|protect1}}/g,
								sessionUser.displayName.replace(/</g, "").replace(/>/g, "")
							).replace(
								/{{name|protect2}}/g,
								//addslashes
								sessionUser.displayName.replace(/</g, "").replace(/>/g, "").replace(/[\\"']/g, '\\$&').replace(/\u0000/g,
									'\\0')
							).replace(
								/{{name|protect3}}/g,
								sessionUser.displayName
								.replace(/</g, "").replace(/>/g, "")
								.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
								.replace(/script/g, '').replace(/alert/g, '')
								.replace(/shit/g, '').replace(/fuck/g, '')
								.replace(/"/g, '').replace(/document.write/g, '')
								.replace(/\(/g, '').replace(/\)/g, '')
							).replace(
								/{{name|no\-protect}}/g,
								sessionUser.displayName
							).replace(
								/{{name}}/g,
								sessionUser.displayName.replace(/</g, "").replace(/>/g, "")
							)
						)
					}
				} else {
					$("#" + setting.block.status).html(
						this.renderTemplateText(
							setting.text.status.noLogin
						)
					)
					$("#" + setting.btn.coin).hide()
					$("#" + setting.btn.setting).hide()
					$("#" + setting.btn.logout).hide()
					$("#" + setting.btn.register).show()
					$("#" + setting.btn.login).show()
					if (window.HMS.prototype.limitLogin) {
						this.warn("limitLogin")
					}
				}
				$("#" + setting.block.memberSystemSidebarPanel).show()
			})
		}
		this.go = function(page) {
			switch (page) {
				case "login":
					window.location.href = setting.page.login
					break;
				case "register":
					window.location.href = setting.page.register
					break;
				case "coin":
					window.location.href = setting.page.coin
					break;
				case "setting":
					window.location.href = setting.page.setting
					break;
				default:
					break;
			}
		}
		this.renderTemplateText = function(text) {
			let $page = setting.page
			text = text.replace(/\$page\-\>setting/, $page.setting)
			text = text.replace(/\$page\-\>coin/, $page.coin)
			text = text.replace(/\$page\-\>register/, $page.register)
			text = text.replace(/\$page\-\>login/, $page.login)
			return text;
		}
		this.warn = function(type, text) {
			switch (warn) {
				case "limitLogin":
					alert(setting.text.limitLogin)
					window.location.href = setting.page.home
					break;
				default:
					if (text) {
						alert(type + "\n" + text)
					} else {
						console.warn("HMS Warn Type" + type + " :not found!")
					}
					break;
			}
		}
		this.writeToDB = function(uid) {
			$.ajax({
				dataType: "json",
				url: setting.appScriptDB + '?op=write_in&uid=' + uid,
				success: function() {
					$.ajax({
						dataType: "json",
						url: setting.appScriptDB + '?op=get_info&uid=' + uid,
						success: function(data) {
							if (window.HMS.prototype.writeCoinToPage) {
								window.HMS.prototype.writeCoinToPage(result.coin, LoginedUser)
							}
							console.log("HMS user (" + uid + ")\ncoin:" + result.coin)
						}
					})
				}
			});
		}
		this.login = function(account, password) {
			auth.signInWithEmailAndPassword(email, password)
				.then(function(user) {
					//alert('登入成功')
					if (window.HMS.prototype.doAfterLogin()) {
						window.HMS.prototype.doAfterLogin(user)
					}
				})
				.catch(function(error) {
					//處理錯誤
					var errorCode = error.code;
					var errorMessage = error.message;
					//alert(errorCode)
					document.getElementById("errorAlerts").innerHTML = errorList[errorCode];
					//alert("錯誤:"+errorList[errorCode])
				});
		}
	}
	global.HMS = HMS;
	global.setting = setting
})(window, firebase.auth(), HMSsettings)
$(function() {
	new HMS().init();
	switch (location.pathname) {
		case HMSsettings.page.coin:

			break;
		case HMSsettings.page.login:

			break;
		case HMSsettings.page.register:

			break;
		case HMSsettings.page.setting:

			break;
		default:

	}
})
