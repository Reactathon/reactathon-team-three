
const mockProfile1 = {
    firstName: 'Saba',
    lastName: 'Abas',
    email: 'Saba@Abas.com'
}
const mockProfile2 = {
    firstName: 'Chris',
    lastName: 'Sirhc',
    email: 'Chris@Sirhc.com'
}
const mockProfile3 = {
    firstName: 'Ronald',
    lastName: 'Dlanor',
    email: 'Ronald@Dlanor.com'
}
const mockProfile4 = {
    firstName: 'Violet',
    lastName: 'Teloiv',
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