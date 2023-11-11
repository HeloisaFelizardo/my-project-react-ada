import { useEffect, useState } from 'react';

export default function DataSearch() {
	const [tarefas, setTarefas] = useState([]);

	useEffect(() => {
		async function buscarDados() {
			const results = await fetch('https://jsonplaceholder.typicode.com/todos');
			const resuladoFinal = await results.json();
			return resuladoFinal;
		}

		buscarDados().then((res) => setTarefas(res));
	}, []);

	return (
		<>
			<h1>Buscando Dados</h1>
			<ol>
				{tarefas.map((tarefa) => (
					<li key={tarefa.id}>
						{tarefa.title}
						{tarefa.completed ? <b> - Tarefa Concluída</b> : null}
					</li>
				))}
			</ol>
		</>
	);
}
