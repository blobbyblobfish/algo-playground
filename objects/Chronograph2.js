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

const description = "Return an array of companies that belong to fund 2."

function solution(entities) {
	console.log(Object.values(entities.company).filter((company) => company.fund_id === 2))
	return Object.values(entities.company).filter((company) => company.fund_id === 2)
}

export { description, examples, solution }
