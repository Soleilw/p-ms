import axios from '@/plugins/axios'
import url from './url.js'

const API = {}
API.login = function(formData) {
	return axios.post(url.Login, formData)
}

API.logout = function() {
	return axios.get(url.Logout)
}

API.permissions = function() {
	return axios.get(url.Permissions)
}

API.resetPassword = function(data) {
	return axios.post(url.Password, data)
}

API.loginLogs = function(page, limit, user_id) {
	return axios.get(url.LoginLogs, {
		page: page,
		limit: limit,
		user_id: user_id
	})
}

export default API
