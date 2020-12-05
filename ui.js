class UI {
	constructor() {
		this.profile = document.querySelector("#profile");
	}

	showProfile(user) {
		this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repo: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Public Followers: ${user.followers}</span>
                        <span class="badge badge-info">Public Repo: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3 text-white">Latest Repo</h3>
            <div id="repo"></div>
        `;
	}

	// show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // output the repos
        document.querySelector("#repo").innerHTML = output;
    }

	// clear profile
	clearProfile() {
		this.profile.innerHTML = "";
	}

	// showing alert when input not found a profile
	showAlert(msg, type) {
		// clear all the remaining alert
		this.clearAlert();
		// create a alert container below code for that
		const div = document.createElement("div");
		div.className = `${type} rounded`;
		// below line will add child node
		div.appendChild(document.createTextNode(msg));

		// get parent class
		const container = document.querySelector(".searchContainer");
		// before the search box we want to insert our alert
		const search = document.querySelector(".search");
		container.insertBefore(div, search);

		// clear after 3 second the alert
		setTimeout(() => {
			this.clearAlert();
		}, 2000);
	}

	// clear alert
	clearAlert() {
		const currentAlert = document.querySelector(".alert");
		if (currentAlert) {
			currentAlert.remove();
		}
	}
}