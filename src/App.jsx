import Components from './components/Components';
import Contador from './components/Contador';
import DataSearch from './components/DataSearch';
import Lists from './components/Lists';
import MeuContador from './components/MeuContador';
import MyList from './components/MyList';

export default function App() {
	return (
		<div>
			<Contador />
			<MeuContador />
			<Components />
			<Lists />
			<MyList />
			<DataSearch />
		</div>
	);
}
