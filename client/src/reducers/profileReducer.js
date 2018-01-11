
const mockProfile1 = {
    name: 'Saba',
    email: 'Saba@Abas.com'
}
const mockProfile2 = {
    name: 'Chris',
    email: 'Chris@Sirhc.com'
}
const mockProfile3 = {
    name: 'Ronald',
    email: 'Ronald@Dlanor.com'
}
const mockProfile4 = {
    name: 'Violet',
    email: 'Violet@Teloiv.com'
}

const profileReducer = (state = {}, action) => {
    var randId = Math.ceil(Math.random()*4)
    switch (randId){
        case 1:
            return mockProfile1
        case 2:
            return mockProfile2
        case 3:
            return mockProfile3
        case 4:
            return mockProfile4
        default:
            return mockProfile1
    }
}

export default profileReducer