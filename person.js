class Person {

    constructor(birthYear) {
        this.dateObj = new Date(`01/01/${birthYear}`)
        this.birthYear = birthYear;
    }

    isMillennial() {
        return this.birthYear > 1982
    }

    isRetiree() {
        let age = this.calculateAge();
        return age >= 65;

    }

    calculateAge() {
        let ageDiffMs = Date.now() - this.dateObj.getTime()
        let ageDate = new Date(ageDiffMs)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

module.exports = Person;