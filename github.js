class Github{
    constructor() {
        this.cilent_id = "d06fca312849313f48d2";
        this.cilent_secret = "b36dc2b7affba1479efa195f06bf8ba3d0fa42d6";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?cilent_id=${this.cilent_id}&cilent_secret=${this.cilent_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?pre_page=${this.repos_count}&sort=${this.repos_sort}&cilent_id=${this.cilent_id}&cilent_secret=${this.cilent_secret}`
				);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
					profile,
					repos
				};

    }

}