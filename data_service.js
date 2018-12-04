class Request {
	static get(url) {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.responseType = 'json';
			xhr.onload = function() {
				if (xhr.status === 200) {
					resolve(xhr.response);
				} else {
					reject(Error(xhr.statusText));
				}
			};
			
			xhr.onerror = function() {
				reject(Error(xhr.status));
			}

			xhr.send();
		})
	}

	static post(url, data) {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.responseType = 'json';
			xhr.setRequestHeader("Content-Type", 'application/json');
			xhr.onload = function() {
				if (xhr.status === 200) {
					resolve(xhr.response);
				} else {
					reject(Error(xhr.statusText));
				}
			};
			xhr.onerror = function () {
				reject(Error(xhr.status));
			};
			xhr.send(data);

		})
	}
}

export default Request;