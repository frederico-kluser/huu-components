import Balance from '../../components/balance/Balance';
import Total_texto from '../../components/total_texto/Total_texto';

import { Container } from './Home.styles';

const Home = () => (
	<Container>
		<Balance>
			<Total_texto>Total Asset</Total_texto>
		</Balance>
	</Container>
);

export default Home;
