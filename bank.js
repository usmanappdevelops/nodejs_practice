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


//Sir yha sa aj ka kam start hua sync and finding items

const searchAccount = (searchName) => {
    let found = bankaccounts.find((acc) => acc.name === searchName);
    
    if (found) {
        const { name, balance, branch } = found;
        console.log(`[.find & Destructuring] Found -> Name: ${name}, Balance: $${balance}, Branch: ${branch}`);
    } else {
        console.log("Account not found.");
    }
};

const showVIPAccounts = () => {
    let vipList = bankaccounts.filter((acc) => acc.balance > 1200);
    console.log("\n[.filter] VIP Accounts (Balance > $1200):", vipList);
};


const getAccountHolderNames = () => {
    let namesList = bankaccounts.map((acc) => acc.name);
    console.log("\n[.map] All Account Holders:", namesList);
};


const fetchStatementFromServer = (userName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let acc = bankaccounts.find((a) => a.name === userName);
            resolve(`✅ Server Response: ${acc.name} ka final verified balance $${acc.balance} hai.`);
        }, 2000);
    });
};

const checkServerStatement = async (userName) => {
    console.log(`\n[async/await] ${userName} ka data server se mangwaya ja raha hai (2 sec wait)...`);
    let response = await fetchStatementFromServer(userName);
    console.log(response);
};


searchAccount("Ali");
showVIPAccounts();
getAccountHolderNames();
checkServerStatement("Lala");