let bankaccounts =[
    { name:"Lala", balance:1000, branch:"Karachi" },
    { name:"Ali", balance:1500, branch:"Lahore" },
    { name:"Bilal", balance:2000, branch:"Islamabad" }
]

const deposit = (name, amount) => {
    for (let i = 0; i < bankaccounts.length; i++) {
        if (bankaccounts[i].name === name) {
            bankaccounts[i].balance += amount;
            console.log(name + "'s account has been credited with $" + amount);
            return;
        }
    }
    console.log("Account not found.");
};

const withdraw = (name, amount) => {
    for (let i = 0; i < bankaccounts.length; i++) {
        if (bankaccounts[i].name === name) {
            if (bankaccounts[i].balance >= amount) {
                bankaccounts[i].balance -= amount;
                console.log(name + "'s account has been debited with $" + amount);
            } else {
                console.log("Insufficient funds.");
            }
            return;
        }
    }
    console.log("Account not found.");
};

const showallaccounts = () => {
    console.log("\n======================================");
    console.log("       BANK ACCOUNTS SUMMARY       ");
    console.log("=========================================");
    for (let i = 0; i < bankaccounts.length; i++) {
        console.log("Name: " + bankaccounts[i].name + ", Balance: $" + bankaccounts[i].balance + ", Branch: " + bankaccounts[i].branch);
    }
};
deposit("Lala", 500);
deposit("Bilal", 300);
withdraw("Ali", 400);
withdraw("Lala", 100)
showallaccounts();
