import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import '../../App.css';

const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
