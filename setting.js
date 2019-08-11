var HMSsettings = {
	//頁面設定
	"page": {
		//登入頁面
		"login": "/p/MS-login.html",
		//註冊頁面
		"register": "/p/MS-register.html",
		//設定頁面
		"setting": "/p/MS-setting.html",
		//金幣頁面
		"coin": "/p/MS-cash.html",
		//Home頁
		"home": "/"
	},
	//按鈕選擇器
	"btn": {
		"login": "sidebar_LoginButton",
		"register": "sidebar_RegisterButton",
		"setting": "sidebar_Login_setAccount",
		"coin": "sidebar_Login_cash",
		"logout": "sidebar_LogoutButton"
	},
	"block": {
		"status": "sidebar_LoginStatus",
		"memberSystemSidebarPanel": "divGroup_btn_sidebar_ms-system"
	},
	"text": {
		"status": {
			"noName": "歡迎!請至設定中心設定您的姓名(\<a href=\"{{$page->setting}}\"\>來這裡設定吧!\<\/a\>)",
			"hasName": "歡迎!{{name|protect1}}",
			"noLogin": "尚未登入 加入會員享有Cotpear各種限定服務吧",
			"limitLogin": "請登入後重試"
		}
	},
	"errorList": {
		"auth/weak-password": "密碼太弱，請使用6位以上密碼",
		"auth/email-already-in-use": "此帳號已使用過了，請至登入頁面進行登入",
		"auth/invalid-email": "電子郵件格式錯誤",
		"auth/wrong-password": "密碼錯誤",
		"auth/user-not-found": "查無帳號資料"
	},
	"appScriptDB": "https://script.google.com/macros/s/AKfycbwZRSY01VOvtJxr6OhEhdZe661iy2xfOGRpqZ36fsCBYBqFgPbh/exec"
}