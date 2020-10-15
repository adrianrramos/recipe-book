import mockData from '../public/mock-data'

class MockAPI {
    constructor() {
        this.data = mockData
    }

    getUser(id) {
        let userData = this.data.users.filter(user => user.id === id)[0]
        return userData
    }

    getUserRecipes(id) {
        let userRecipes = this.data.recipes.filter(recipe => recipe.user_id === id)
        return userRecipes
    }
}


export default new MockAPI()