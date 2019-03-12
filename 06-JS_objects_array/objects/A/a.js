var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

var familyBankValues = {

    familyMembers: {

        Mother: {

            "account number": 8096291,

            accountBalance: 10000000

        },

        Father: {

            "account number": 8096292,

            accountBalance: 9999999

        },

        Sister: {

            "account number": 8096293,

            accountBalance: 10000

        },

        "Step Brother": {

            "account number": 8096292,

            accountBalance: 15000

        }

    }

    }

var step_brother = [familyBankValues.familyMembers["Step Brother"]["account number"],familyBankValues.familyMembers["Step Brother"].accountBalance]

console.log("Mumbai’s population is",asia.countries.India.Mumbai.population)

console.log("Beijing’s population is",asia.countries.China.Beijing.population)

console.log("Hong Kong’s population is",asia.countries.China["Hong Kong"].population)

console.log("Mothers account number is",familyBankValues.familyMembers.Mother["account number"])

console.log("Fathers accountBalance is", familyBankValues.familyMembers.Father.accountBalance)

console.log("Step brothers account number is",step_brother[0],"Step brothers account is",step_brother[1])

