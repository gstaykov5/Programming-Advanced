function loadRepos() {
	const userEle = document.querySelector('#username');
	const ulEle = document.querySelector('#repos');
	const url = `https://api.github.com/users/${userEle.value}/repos`;

	fetch(url)
		.then(result => result.json())
		.then(data => {
			ulEle.innerHTML = data.map(ele => `<li><a href="${ele.html_url}">${ele.name}</a></li>`).join('');
		})
		.catch(err => {
			ulEle.innerHTML = `No elements to show!`
		})
}