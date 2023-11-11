import MyComponent from './MyComponent';
import MyButton from './MyButton';

function Components() {
	return (
		<div>
			<h1>Componentes</h1>
			<MyComponent />
			<MyComponent />
			{/* <CardProgram image='url da imagem ' title='Title' subtitle=' Subtitle' /> */}
			<MyButton conteudo='Me Clique' />
			<MyButton conteudo='Depois aqui' />
			<MyButton conteudo='E por fim aqui' />
		</div>
	);
}

export default Components;
