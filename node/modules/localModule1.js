function fullNameLogger (name, lName, c){
    let fullName = name + " " + lName
    c(fullName)
}

module.exports = fullNameLogger