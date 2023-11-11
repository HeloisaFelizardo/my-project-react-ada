import { useEffect, useState } from 'react';

const myList = [
	{ id: '1', value: 'Fruta' },
	{ id: '2', value: 'Legume' },
	{ id: '3', value: 'Carne' },
];

export default function MyList() {
	const [produtos, setProdutos] = useState(myList);
	const [pesquisa, setPesquisa] = useState('');

	console.log(pesquisa);

	useEffect(() => {
		if (pesquisa) {
			const newList = myList.filter((item) => {
				return item.value.toLowerCase().includes(pesquisa.toLowerCase());
			});
			setProdutos(newList);
		} else {
			setProdutos(myList);
		}
	}, [pesquisa]);

	return (
		<>
			<h1>Efeitos Colaterais</h1>
			<input
				value={pesquisa}
				onChange={(e) => setPesquisa(e.target.value)}
				placeholder='pesquise aqui'
			></input>
			{produtos.map((item) => {
				return (
					<div key={item.id}>
						<h4>{item.value}</h4>
					</div>
				);
			})}
		</>
	);
}
