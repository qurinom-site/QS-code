module.exports.checkMobileNumber = function (mobile) {
    let phoneNumber = String(mobile)
    if (!(phoneNumber.length == 10 && (phoneNumber[0] == 6 || phoneNumber[0] == 7 || phoneNumber[0] == 8 || phoneNumber[0] == 9))) {
        return true
    }
    return false
}