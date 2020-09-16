const examples = {
	fund: {
		1: { id: 1, name: 'VCPT Ventures III' },
		2: { id: 2, name: 'Huron Oak Equity V' },
		3: { id: 3, name: 'Pacific Capital Partners I' },
	},
	company: {
		15: { id: 15, name: 'FidoFarm', fund_id: 2, exited: false },
		23: { id: 23, name: 'Accumentor', fund_id: 2, exited: true },
		52: { id: 52, name: 'Dronez', fund_id: 1, exited: true },
		63: { id: 63, name: 'CoffeeBuilders', fund_id: 3, exited: false },
	},
}

const description = "Return an array of fund names with an exited company."

function solution(entities) {

    // Extract fund_id from companies where exited === true

    const funds = new Set()

    const exitedCompaniesArr = Object.values(entities.company).filter((company) => company.exited)

    exitedCompaniesArr.forEach(company => {
        funds.add(entities.fund[company.fund_id])
    })

    console.log(exitedCompaniesArr)
    console.log(Array.from(funds))

	return Array.from(funds)
}

export { description, examples, solution }
