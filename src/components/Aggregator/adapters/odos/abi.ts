export const ABI = {
	odosRouter: [
		{
			anonymous: false,
			inputs: [
				{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
				{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
			],
			name: 'OwnershipTransferred',
			type: 'event'
		},
		{
			anonymous: false,
			inputs: [
				{ indexed: false, internalType: 'address', name: 'sender', type: 'address' },
				{ indexed: false, internalType: 'uint256[]', name: 'amountsIn', type: 'uint256[]' },
				{ indexed: false, internalType: 'address[]', name: 'tokensIn', type: 'address[]' },
				{ indexed: false, internalType: 'uint256[]', name: 'amountsOut', type: 'uint256[]' },
				{
					components: [
						{ internalType: 'address', name: 'tokenAddress', type: 'address' },
						{ internalType: 'uint256', name: 'relativeValue', type: 'uint256' },
						{ internalType: 'address', name: 'receiver', type: 'address' }
					],
					indexed: false,
					internalType: 'struct OdosRouter.outputToken[]',
					name: 'outputs',
					type: 'tuple[]'
				},
				{ indexed: false, internalType: 'uint256', name: 'valueOutQuote', type: 'uint256' }
			],
			name: 'Swapped',
			type: 'event'
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function'
		},
		{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
		{
			inputs: [
				{
					components: [
						{ internalType: 'address', name: 'tokenAddress', type: 'address' },
						{ internalType: 'uint256', name: 'amountIn', type: 'uint256' },
						{ internalType: 'address', name: 'receiver', type: 'address' },
						{ internalType: 'bytes', name: 'permit', type: 'bytes' }
					],
					internalType: 'struct OdosRouter.inputToken[]',
					name: 'inputs',
					type: 'tuple[]'
				},
				{
					components: [
						{ internalType: 'address', name: 'tokenAddress', type: 'address' },
						{ internalType: 'uint256', name: 'relativeValue', type: 'uint256' },
						{ internalType: 'address', name: 'receiver', type: 'address' }
					],
					internalType: 'struct OdosRouter.outputToken[]',
					name: 'outputs',
					type: 'tuple[]'
				},
				{ internalType: 'uint256', name: 'valueOutQuote', type: 'uint256' },
				{ internalType: 'uint256', name: 'valueOutMin', type: 'uint256' },
				{ internalType: 'address', name: 'executor', type: 'address' },
				{ internalType: 'bytes', name: 'pathDefinition', type: 'bytes' }
			],
			name: 'swap',
			outputs: [
				{ internalType: 'uint256[]', name: 'amountsOut', type: 'uint256[]' },
				{ internalType: 'uint256', name: 'gasLeft', type: 'uint256' }
			],
			stateMutability: 'payable',
			type: 'function'
		},
		{
			inputs: [
				{ internalType: 'address[]', name: 'tokens', type: 'address[]' },
				{ internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
				{ internalType: 'address', name: 'dest', type: 'address' }
			],
			name: 'transferFunds',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{
			inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function'
		},
		{ stateMutability: 'payable', type: 'receive' }
	]
};
